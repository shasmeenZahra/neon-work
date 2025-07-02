import express from 'express';
const router = express.Router();
const NeedTutorForm = require('../models/NeedTutorForm');

router.post('/need-tutor', async (req, res) => {
  try {
    const newForm = new NeedTutorForm(req.body);
    await newForm.save();
    console.log("Need Tutor Form Submitted:", req.body);
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting form', error });
  }
});

module.exports = router;
