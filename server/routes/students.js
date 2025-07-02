const express = require("express");
const Student = require("../models/Student");
const Tutor = require("../models/Tutor");
const { authenticateToken, requireRole } = require("../middleware/auth");
const { validateStudentRequest } = require("../middleware/validation");

const router = express.Router();

// Submit student request
router.post(
  "/request",
  authenticateToken,
  validateStudentRequest,
  async (req, res) => {
    try {
      const userId = req.user._id;

      // Create new student request
      const studentData = {
        ...req.body,
        userId,
      };

      const student = new Student(studentData);
      await student.save();

      // Populate user information
      await student.populate("userId", "firstName lastName email");

      // Find potential tutor matches
      const matchingTutors = await findMatchingTutors(student);

      res.status(201).json({
        message: "Student request submitted successfully",
        request: student,
        matchingTutors: matchingTutors.slice(0, 5), // Return top 5 matches
      });
    } catch (error) {
      console.error("Student request error:", error);
      res.status(500).json({
        error: "Failed to submit student request",
        message: error.message,
      });
    }
  },
);

// Get current user's student requests
router.get("/my/requests", authenticateToken, async (req, res) => {
  try {
    const requests = await Student.find({ userId: req.user._id })
      .populate(
        "matchedTutors.tutorId",
        "name subjects hourlyRate averageRating",
      )
      .sort({ createdAt: -1 });

    res.json({ requests });
  } catch (error) {
    console.error("Get student requests error:", error);
    res.status(500).json({
      error: "Failed to fetch student requests",
    });
  }
});

// Get student request by ID
router.get("/my/requests/:id", authenticateToken, async (req, res) => {
  try {
    const request = await Student.findOne({
      _id: req.params.id,
      userId: req.user._id,
    }).populate(
      "matchedTutors.tutorId",
      "name subjects hourlyRate averageRating",
    );

    if (!request) {
      return res.status(404).json({
        error: "Student request not found",
      });
    }

    res.json({ request });
  } catch (error) {
    console.error("Get student request error:", error);
    res.status(500).json({
      error: "Failed to fetch student request",
    });
  }
});

// Update student request (only if pending)
router.patch("/my/requests/:id", authenticateToken, async (req, res) => {
  try {
    const request = await Student.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!request) {
      return res.status(404).json({
        error: "Student request not found",
      });
    }

    if (request.status !== "pending") {
      return res.status(400).json({
        error: "Can only update pending requests",
      });
    }

    // Update allowed fields
    const allowedUpdates = [
      "studentName",
      "parentName",
      "phone",
      "subjects",
      "learningGoals",
      "schedule",
      "preferredMode",
      "budget",
      "urgency",
      "location",
      "additionalInfo",
    ];

    allowedUpdates.forEach((field) => {
      if (req.body[field] !== undefined) {
        request[field] = req.body[field];
      }
    });

    await request.save();
    await request.populate("userId", "firstName lastName email");

    res.json({
      message: "Request updated successfully",
      request,
    });
  } catch (error) {
    console.error("Update student request error:", error);
    res.status(500).json({
      error: "Failed to update request",
      message: error.message,
    });
  }
});

// Get tutor matches for a student request
router.get("/my/requests/:id/matches", authenticateToken, async (req, res) => {
  try {
    const request = await Student.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!request) {
      return res.status(404).json({
        error: "Student request not found",
      });
    }

    const matches = await findMatchingTutors(request);

    res.json({ matches });
  } catch (error) {
    console.error("Get matches error:", error);
    res.status(500).json({
      error: "Failed to fetch matches",
    });
  }
});

// Admin routes for managing student requests
router.get(
  "/admin/requests",
  authenticateToken,
  requireRole(["admin"]),
  async (req, res) => {
    try {
      const { status, page = 1, limit = 20 } = req.query;

      const query = status && status !== "all" ? { status } : {};

      const requests = await Student.find(query)
        .populate("userId", "firstName lastName email")
        .sort({ createdAt: -1 })
        .limit(limit * 1)
        .skip((page - 1) * limit);

      const total = await Student.countDocuments(query);

      res.json({
        requests,
        pagination: {
          page: Number(page),
          limit: Number(limit),
          total,
          pages: Math.ceil(total / limit),
        },
      });
    } catch (error) {
      console.error("Get student requests error:", error);
      res.status(500).json({
        error: "Failed to fetch student requests",
      });
    }
  },
);

// Helper function to find matching tutors
async function findMatchingTutors(studentRequest) {
  try {
    // Build query for matching tutors
    const query = { status: "approved" };

    // Match subjects
    if (studentRequest.subjects && studentRequest.subjects.length > 0) {
      query.subjects = { $in: studentRequest.subjects };
    }

    // Match teaching mode
    if (studentRequest.preferredMode !== "both") {
      query.$or = [
        { preferredMode: studentRequest.preferredMode },
        { preferredMode: "both" },
      ];
    }

    // Budget filtering
    if (studentRequest.budget && studentRequest.budget !== "discuss") {
      const budgetRanges = {
        "15-25": { min: 0, max: 25 },
        "25-40": { min: 20, max: 40 },
        "40-60": { min: 35, max: 60 },
        "60+": { min: 55, max: 1000 },
      };

      const range = budgetRanges[studentRequest.budget];
      if (range) {
        query.hourlyRate = { $gte: range.min, $lte: range.max };
      }
    }

    // Find matching tutors
    const tutors = await Tutor.find(query)
      .populate("userId", "firstName lastName")
      .sort({ averageRating: -1, totalReviews: -1 })
      .limit(20);

    return tutors;
  } catch (error) {
    console.error("Find matching tutors error:", error);
    return [];
  }
}

module.exports = router;
