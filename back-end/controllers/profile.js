const User = require('../models/userModel');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
  const profileInfo = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName, 
    email: req.body.email, 
    password: req.body.password,
  });
  
  // try {
    // const savedProfileInfo = await profileInfo.save();
    
    // if (!savedProfileInfo)
    //   return res.status(400).send('The ProfileInfo page could not be created.');
    //   res.send(savedProfileInfo);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while saving the profile Info.');
  }
});

module.exports = router;