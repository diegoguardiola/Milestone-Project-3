const {Profile} = require('../models/profiles');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const { firstName, lastName, email, masterPassword } = req.body;
  
    try {
      const newProfile = new Profile({
        firstName, 
        lastName, 
        email, 
        masterPassword
      });
  
      const profile = await newProfile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

module.exports = router;