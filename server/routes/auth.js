const express = require("express");
const User = require("../models/User");
const { generateToken, authenticateToken } = require("../middleware/auth");
const {
  validateUserRegistration,
  validateUserLogin,
} = require("../middleware/validation");

const router = express.Router();

// Register new user
router.post("/register", validateUserRegistration, async (req, res) => {
  try {
    const { email, password, firstName, lastName, role = "student" } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        error: "User with this email already exists",
      });
    }

    // Create new user
    const user = new User({
      email,
      password,
      firstName,
      lastName,
      role,
    });

    await user.save();

    // Generate token
    const token = generateToken(user._id);

    res.status(201).json({
      message: "User registered successfully",
      user: user.toJSON(),
      token,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      error: "Failed to register user",
      message: error.message,
    });
  }
});

// Login user
router.post("/login", validateUserLogin, async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        error: "Invalid email or password",
      });
    }

    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({
        error: "Invalid email or password",
      });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Generate token
    const token = generateToken(user._id);

    res.json({
      message: "Login successful",
      user: user.toJSON(),
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      error: "Failed to login",
      message: error.message,
    });
  }
});

// Get current user profile
router.get("/profile", authenticateToken, async (req, res) => {
  try {
    res.json({
      user: req.user.toJSON(),
    });
  } catch (error) {
    console.error("Profile error:", error);
    res.status(500).json({
      error: "Failed to fetch profile",
    });
  }
});

// Update user profile
router.patch("/profile", authenticateToken, async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const allowedUpdates = { firstName, lastName };

    // Remove undefined values
    Object.keys(allowedUpdates).forEach(
      (key) => allowedUpdates[key] === undefined && delete allowedUpdates[key],
    );

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      allowedUpdates,
      { new: true, runValidators: true },
    );

    res.json({
      message: "Profile updated successfully",
      user: updatedUser.toJSON(),
    });
  } catch (error) {
    console.error("Profile update error:", error);
    res.status(500).json({
      error: "Failed to update profile",
      message: error.message,
    });
  }
});

// Verify token (for frontend auth checking)
router.get("/verify", authenticateToken, (req, res) => {
  res.json({
    valid: true,
    user: req.user.toJSON(),
  });
});

// Logout (client-side token removal)
router.post("/logout", (req, res) => {
  res.json({
    message: "Logout successful",
  });
});

module.exports = router;
