const mongoose = require("mongoose");

const tutorSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // Personal Information
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },

  // Teaching Information
  subjects: [
    {
      type: String,
      required: true,
    },
  ],
  qualification: {
    type: String,
    required: true,
    enum: ["high-school", "bachelor", "master", "phd", "other"],
  },
  experience: {
    type: String,
    required: true,
    enum: ["0-1", "1-3", "3-5", "5-10", "10+"],
  },
  hourlyRate: {
    type: Number,
    required: true,
    min: 10,
    max: 200,
  },
  preferredMode: {
    type: String,
    required: true,
    enum: ["online", "in-person", "both"],
  },
  availability: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    trim: true,
  },

  // Application Status
  status: {
    type: String,
    enum: ["pending", "approved", "rejected", "suspended"],
    default: "pending",
  },
  approvedAt: {
    type: Date,
  },
  reviewedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  // Rating and Reviews
  averageRating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  totalReviews: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update timestamp on save
tutorSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Index for search functionality
tutorSchema.index({ subjects: 1, status: 1 });
tutorSchema.index({ averageRating: -1 });
tutorSchema.index({ hourlyRate: 1 });

module.exports = mongoose.model("Tutor", tutorSchema);
