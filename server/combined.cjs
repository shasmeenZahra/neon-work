const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const path = require("path");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const tutorRoutes = require("./routes/tutors");
const studentRoutes = require("./routes/students");

const app = express();
const PORT = process.env.PORT || 8080;

// Security middleware
app.use(
  helmet({
    contentSecurityPolicy: false, // Disable CSP for development
  }),
);
app.use(
  cors({
    origin: true, // Allow all origins in development
    credentials: true,
  }),
);

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // Increased limit for development
});
app.use(limiter);

// Body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB (optional for development)
mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/ayesha-academy",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.warn("⚠️  MongoDB not available:", err.message);
    console.log("⚠️  Continuing without database (some features may not work)");
  });

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/tutors", tutorRoutes);
app.use("/api/students", studentRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "AYESHA ACADEMY API is running",
    timestamp: new Date().toISOString(),
    mongodb:
      mongoose.connection.readyState === 1 ? "connected" : "disconnected",
  });
});

// Serve static files from Vite build (if exists)
const distPath = path.join(__dirname, "../dist");
app.use(express.static(distPath));

// Catch-all handler for frontend routes (SPA)
app.get("*", (req, res, next) => {
  // If it's an API route that doesn't exist, return 404
  if (req.path.startsWith("/api/")) {
    return res.status(404).json({ error: "API route not found" });
  }

  // Otherwise, serve the frontend
  res.sendFile(path.join(distPath, "index.html"), (err) => {
    if (err) {
      res.status(500).send("Frontend not built. Run 'npm run build' first.");
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Something went wrong!",
    message:
      process.env.NODE_ENV === "development"
        ? err.message
        : "Internal server error",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 AYESHA ACADEMY Server running on http://localhost:${PORT}`);
  console.log(`📱 Frontend: http://localhost:${PORT}`);
  console.log(`🔧 API: http://localhost:${PORT}/api`);
  console.log(`❤️  Health: http://localhost:${PORT}/api/health`);
});
