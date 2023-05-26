const mongoose = require('mongoose')

const Schema = mongoose.Schema

const secretSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  user_id: { 
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Secret', secretSchema)
