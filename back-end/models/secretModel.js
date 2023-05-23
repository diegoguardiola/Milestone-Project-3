// dependencies
const mongoose = require('mongoose')
const user = require('./userModel')
const { Schema } = mongoose

// schema
const secretSchema = new Schema({
    siteName: {
        type: String,
        required: true,
        }, 
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectID,
        ref: 'User'
      }
})


// model and export
const SecretModel = mongoose.model('Secret', secretSchema)
module.exports = SecretModel