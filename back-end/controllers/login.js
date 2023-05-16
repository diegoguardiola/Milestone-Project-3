const Login = require('../models/login');

const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const loginInfo = new Login({
      websiteURL: req.body.websiteURL,
      login: req.body.login,
      password: req.body.password,
    });

  try {
    const savedLoginInfo = await loginInfo.save();
    
    if (!savedLoginInfo)
      return res.status(400).send('The loginInfo page could not be created.');
      res.send(savedLoginInfo);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while saving the loginInfo.');
  }
});

module.exports = router;