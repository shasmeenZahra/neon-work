import express from 'express';
import BecomeTutorForm from '../models/BecomeTutorForm.js';

const router = express.Router();

router.post('/become-tutor', async (req, res) => {
  try {
    // Optional: Validate required fields
    const { name, email, subject } = req.body;
    if (!name || !email || !subject) {
      return res.status(400).json({ message: 'Please fill all required fields' });
    }

    const newForm = new BecomeTutorForm(req.body);
    await newForm.save();

    console.log("📥 Become Tutor Form Submitted:", {
      name,
      email,
      subject
    });

    console.log("Become Tutor Form Submitted:", req.body);


    res.status(201).json({ message: 'Form submitted successfully', form: newForm });
  } catch (error) {
    console.error("❌ Error in /become-tutor:", error);
    res.status(500).json({ message: 'Error submitting form', error: error.message });
  }
});

export default router;
