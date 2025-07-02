const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // Student Information
  studentName: {
    type: String,
    required: true,
    trim: true,
  },
  parentName: {
    type: String,
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
  grade: {
    type: String,
    required: true,
    enum: ["elementary", "middle", "high", "college", "adult"],
  },

  // Learning Requirements
  subjects: [
    {
      type: String,
      required: true,
    },
  ],
  learningGoals: {
    type: String,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
  preferredMode: {
    type: String,
    required: true,
    enum: ["online", "in-person", "both"],
  },
  budget: {
    type: String,
    enum: ["15-25", "25-40", "40-60", "60+", "discuss"],
  },
  urgency: {
    type: String,
    required: true,
    enum: ["asap", "soon", "flexible", "planning"],
  },
  location: {
    type: String,
    trim: true,
  },
  additionalInfo: {
    type: String,
    trim: true,
  },

  // Matching Status
  status: {
    type: String,
    enum: ["pending", "matched", "in-progress", "completed", "cancelled"],
    default: "pending",
  },
  matchedTutors: [
    {
      tutorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tutor",
      },
      matchedAt: {
        type: Date,
        default: Date.now,
      },
      status: {
        type: String,
        enum: ["suggested", "contacted", "accepted", "rejected"],
        default: "suggested",
      },
    },
  ],

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
studentSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Index for search and matching
studentSchema.index({ subjects: 1, status: 1 });
studentSchema.index({ grade: 1 });
studentSchema.index({ preferredMode: 1 });

module.exports = mongoose.model("Student", studentSchema);
