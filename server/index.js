// index.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// 🔌 Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/tutorForms");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("✅ MongoDB connected"));

// 🧾 Schema + Model
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  category: String,
  message: String,
});
const Form = mongoose.model("Form", formSchema);

// 📨 POST: Save a new form
app.post("/api/forms/become-tutor", async (req, res) => {
  try {
    const newForm = new Form(req.body);
    await newForm.save();
    console.log("📥 Form saved:", newForm);
    res.status(201).json({ message: "Form saved successfully!" });
  } catch (err) {
    console.error("❌ Error saving form:", err);
    res.status(500).json({ error: "Failed to save form" });
  }
});

// 📤 GET: Fetch all saved forms
app.get("/", async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (err) {
    console.error("❌ Error fetching forms:", err);
    res.status(500).json({ error: "Failed to fetch forms" });
  }
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
