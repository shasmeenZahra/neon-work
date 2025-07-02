import mongoose from 'mongoose';

const BecomeTutorFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: false,
    trim: true
  },
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const BecomeTutorForm = mongoose.model('BecomeTutorForm', BecomeTutorFormSchema);
export default BecomeTutorForm;
