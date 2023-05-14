

const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  websiteURL: {
    type: String,
    required: true,
  },
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  }
});

module.exports = mongoose.model('Login', LoginSchema);
