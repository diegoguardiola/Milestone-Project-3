
const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  webURL: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Login', LoginSchema);
