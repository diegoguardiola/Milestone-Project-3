const Profile = require('../models/profiles');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const profileInfo = new Profile({
    firstName: req.body.firstName,
    lastName: req.body.lastName, 
    email: req.body.email, 
    masterPassword: req.body.masterPassword,
  });
  
  try {
    const savedProfileInfo = await profileInfo.save();
    
    if (!savedProfileInfo)
      return res.status(400).send('The ProfileInfo page could not be created.');
      res.send(savedProfileInfo);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while saving the profile Info.');
  }
});

router.post('/login', async (req, res) => {
  const { email, masterPassword } = req.body;
  console.log(email, masterPassword)
  try {
    // Retrieve the existing profile with the given email
    const existingProfile = await Profile.findOne({ email });
    if (!existingProfile) {
      return res.status(404).send('Profile not found.');
    }
    // Compare the master password with the existing profile's masterPassword
    if (masterPassword !== existingProfile.masterPassword) {
      return res.status(401).send('Invalid master password.');
    }

    // Both email and master password are valid
    return res.status(200).send('Successfully authenticated.', existingProfile);
    
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while authenticating the profile.');
  }
});

module.exports = router;