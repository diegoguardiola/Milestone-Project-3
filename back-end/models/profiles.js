

const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  masterPassword: {
    type: String,
    required: true,
    unique: true,
  },
  
});
// virtuals 
ProfileSchema.virtual('secrets', {
  ref: 'Secrets',
  localField: '_id',
  foreignField: 'profile'
})

module.exports = mongoose.model('Profile', ProfileSchema);
