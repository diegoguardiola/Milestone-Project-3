const {Login} = require('../models/login');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const {websiteURL, login, password } = req.body;
  
    try {
      const newLogin = new Login({
        websiteURL,
        login,
        password,
      });
  
      const savedLogin = await newLogin.save();
      res.json(savedLogin);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

module.exports = router;