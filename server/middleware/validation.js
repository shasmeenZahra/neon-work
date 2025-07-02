const { body, validationResult } = require("express-validator");

// Handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: "Validation failed",
      details: errors.array(),
    });
  }
  next();
};

// User registration validation
const validateUserRegistration = [
  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Please provide a valid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage(
      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    ),
  body("firstName")
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("First name must be between 2 and 50 characters"),
  body("lastName")
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("Last name must be between 2 and 50 characters"),
  handleValidationErrors,
];

// User login validation
const validateUserLogin = [
  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Please provide a valid email address"),
  body("password").notEmpty().withMessage("Password is required"),
  handleValidationErrors,
];

// Tutor application validation
const validateTutorApplication = [
  body("name")
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters"),
  body("email").isEmail().normalizeEmail().withMessage("Valid email required"),
  body("phone")
    .isMobilePhone()
    .withMessage("Please provide a valid phone number"),
  body("subjects")
    .isArray({ min: 1 })
    .withMessage("At least one subject must be selected"),
  body("qualification")
    .isIn(["high-school", "bachelor", "master", "phd", "other"])
    .withMessage("Valid qualification required"),
  body("experience")
    .isIn(["0-1", "1-3", "3-5", "5-10", "10+"])
    .withMessage("Valid experience level required"),
  body("hourlyRate")
    .isNumeric()
    .isFloat({ min: 10, max: 200 })
    .withMessage("Hourly rate must be between $10 and $200"),
  body("preferredMode")
    .isIn(["online", "in-person", "both"])
    .withMessage("Valid teaching mode required"),
  body("availability")
    .trim()
    .isLength({ min: 10, max: 500 })
    .withMessage(
      "Availability description must be between 10 and 500 characters",
    ),
  body("bio")
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage("Bio must not exceed 1000 characters"),
  handleValidationErrors,
];

// Student request validation
const validateStudentRequest = [
  body("studentName")
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Student name must be between 2 and 100 characters"),
  body("parentName")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage("Parent name must not exceed 100 characters"),
  body("email").isEmail().normalizeEmail().withMessage("Valid email required"),
  body("phone")
    .isMobilePhone()
    .withMessage("Please provide a valid phone number"),
  body("grade")
    .isIn(["elementary", "middle", "high", "college", "adult"])
    .withMessage("Valid grade level required"),
  body("subjects")
    .isArray({ min: 1 })
    .withMessage("At least one subject must be selected"),
  body("learningGoals")
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage("Learning goals must be between 10 and 1000 characters"),
  body("schedule")
    .trim()
    .isLength({ min: 10, max: 500 })
    .withMessage("Schedule must be between 10 and 500 characters"),
  body("preferredMode")
    .isIn(["online", "in-person", "both"])
    .withMessage("Valid learning mode required"),
  body("budget")
    .optional()
    .isIn(["15-25", "25-40", "40-60", "60+", "discuss"])
    .withMessage("Valid budget range required"),
  body("urgency")
    .isIn(["asap", "soon", "flexible", "planning"])
    .withMessage("Valid urgency level required"),
  body("location")
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage("Location must not exceed 200 characters"),
  body("additionalInfo")
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage("Additional info must not exceed 1000 characters"),
  handleValidationErrors,
];

module.exports = {
  validateUserRegistration,
  validateUserLogin,
  validateTutorApplication,
  validateStudentRequest,
  handleValidationErrors,
};
