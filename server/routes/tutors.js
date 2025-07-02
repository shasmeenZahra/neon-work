const express = require("express");
const Tutor = require("../models/Tutor");
const { authenticateToken, requireRole } = require("../middleware/auth");
const { validateTutorApplication } = require("../middleware/validation");

const router = express.Router();

// Submit tutor application
router.post(
  "/apply",
  authenticateToken,
  validateTutorApplication,
  async (req, res) => {
    try {
      const userId = req.user._id;

      // Check if user already has a tutor application
      const existingApplication = await Tutor.findOne({ userId });
      if (existingApplication) {
        return res.status(400).json({
          error: "You have already submitted a tutor application",
          applicationId: existingApplication._id,
          status: existingApplication.status,
        });
      }

      // Create new tutor application
      const tutorData = {
        ...req.body,
        userId,
      };

      const tutor = new Tutor(tutorData);
      await tutor.save();

      // Populate user information
      await tutor.populate("userId", "firstName lastName email");

      res.status(201).json({
        message: "Tutor application submitted successfully",
        application: tutor,
      });
    } catch (error) {
      console.error("Tutor application error:", error);
      res.status(500).json({
        error: "Failed to submit tutor application",
        message: error.message,
      });
    }
  },
);

// Get all tutors (public, for matching)
router.get("/", async (req, res) => {
  try {
    const {
      subjects,
      minRate,
      maxRate,
      mode,
      qualification,
      experience,
      page = 1,
      limit = 12,
    } = req.query;

    // Build query
    const query = { status: "approved" };

    if (subjects) {
      query.subjects = { $in: subjects.split(",") };
    }

    if (minRate || maxRate) {
      query.hourlyRate = {};
      if (minRate) query.hourlyRate.$gte = Number(minRate);
      if (maxRate) query.hourlyRate.$lte = Number(maxRate);
    }

    if (mode && mode !== "both") {
      query.$or = [{ preferredMode: mode }, { preferredMode: "both" }];
    }

    if (qualification) {
      query.qualification = qualification;
    }

    if (experience) {
      query.experience = experience;
    }

    // Execute query with pagination
    const tutors = await Tutor.find(query)
      .populate("userId", "firstName lastName")
      .sort({ averageRating: -1, createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Tutor.countDocuments(query);

    res.json({
      tutors,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Get tutors error:", error);
    res.status(500).json({
      error: "Failed to fetch tutors",
    });
  }
});

// Get tutor by ID (public)
router.get("/:id", async (req, res) => {
  try {
    const tutor = await Tutor.findById(req.params.id).populate(
      "userId",
      "firstName lastName",
    );

    if (!tutor || tutor.status !== "approved") {
      return res.status(404).json({
        error: "Tutor not found",
      });
    }

    res.json({ tutor });
  } catch (error) {
    console.error("Get tutor error:", error);
    res.status(500).json({
      error: "Failed to fetch tutor",
    });
  }
});

// Get current user's tutor application
router.get("/my/application", authenticateToken, async (req, res) => {
  try {
    const tutor = await Tutor.findOne({ userId: req.user._id }).populate(
      "userId",
      "firstName lastName email",
    );

    if (!tutor) {
      return res.status(404).json({
        error: "No tutor application found",
      });
    }

    res.json({ application: tutor });
  } catch (error) {
    console.error("Get tutor application error:", error);
    res.status(500).json({
      error: "Failed to fetch tutor application",
    });
  }
});

// Update tutor application (only if pending)
router.patch("/my/application", authenticateToken, async (req, res) => {
  try {
    const tutor = await Tutor.findOne({ userId: req.user._id });

    if (!tutor) {
      return res.status(404).json({
        error: "No tutor application found",
      });
    }

    if (tutor.status !== "pending") {
      return res.status(400).json({
        error: "Can only update pending applications",
      });
    }

    // Update allowed fields
    const allowedUpdates = [
      "name",
      "phone",
      "subjects",
      "hourlyRate",
      "availability",
      "bio",
      "preferredMode",
    ];

    allowedUpdates.forEach((field) => {
      if (req.body[field] !== undefined) {
        tutor[field] = req.body[field];
      }
    });

    await tutor.save();
    await tutor.populate("userId", "firstName lastName email");

    res.json({
      message: "Application updated successfully",
      application: tutor,
    });
  } catch (error) {
    console.error("Update tutor application error:", error);
    res.status(500).json({
      error: "Failed to update application",
      message: error.message,
    });
  }
});

// Admin routes for managing tutor applications
router.get(
  "/admin/applications",
  authenticateToken,
  requireRole(["admin"]),
  async (req, res) => {
    try {
      const { status = "pending", page = 1, limit = 20 } = req.query;

      const query = status === "all" ? {} : { status };

      const applications = await Tutor.find(query)
        .populate("userId", "firstName lastName email")
        .sort({ createdAt: -1 })
        .limit(limit * 1)
        .skip((page - 1) * limit);

      const total = await Tutor.countDocuments(query);

      res.json({
        applications,
        pagination: {
          page: Number(page),
          limit: Number(limit),
          total,
          pages: Math.ceil(total / limit),
        },
      });
    } catch (error) {
      console.error("Get applications error:", error);
      res.status(500).json({
        error: "Failed to fetch applications",
      });
    }
  },
);

// Approve/reject tutor application
router.patch(
  "/admin/applications/:id",
  authenticateToken,
  requireRole(["admin"]),
  async (req, res) => {
    try {
      const { status } = req.body;

      if (!["approved", "rejected"].includes(status)) {
        return res.status(400).json({
          error: "Status must be 'approved' or 'rejected'",
        });
      }

      const tutor = await Tutor.findByIdAndUpdate(
        req.params.id,
        {
          status,
          reviewedBy: req.user._id,
          approvedAt: status === "approved" ? new Date() : undefined,
        },
        { new: true },
      ).populate("userId", "firstName lastName email");

      if (!tutor) {
        return res.status(404).json({
          error: "Tutor application not found",
        });
      }

      res.json({
        message: `Application ${status} successfully`,
        application: tutor,
      });
    } catch (error) {
      console.error("Update application status error:", error);
      res.status(500).json({
        error: "Failed to update application status",
      });
    }
  },
);

module.exports = router;
