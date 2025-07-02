const mongoose = require('mongoose');

const needTutorSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('NeedTutorForm', needTutorSchema);
