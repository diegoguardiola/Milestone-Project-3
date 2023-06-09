const Secret = require('../models/secretModel')
const mongoose = require('mongoose')

//get all secrets
const getAllSecrets = async (req, res) => {
    const user_id = req.user._id

    const secrets = await Secret.find({user_id}).sort({createdAt: -1})

    res.status(200).json(secrets)
}

//create a secret
const createSecret = async (req, res) => {
    const { url, username, password } = req.body

    let emptyFields = []

    if (!url) {
        emptyFields.push('url')
    }
    if (!username) {
      emptyFields.push('username')
    }
    if (!password) {
        emptyFields.push('password')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({
            message: 'Please fill in all fields',
            emptyFields
        })
    }

    try {
        const user_id = req.user._id
        const secret = await Secret.create({
            url, username, password, user_id
        })
        res.status(200).json(secret)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a secret
const deleteSecret = async (req, res) => {
    try {
      const _id = req.params.id; // extract _id from request parameters
      const secret = await Secret.findByIdAndDelete(_id); // now _id is defined
      if (!secret) {
        return res.status(404).send();
      }
      res.send(secret);
    } catch (e) {
      res.status(500).send();
    }
  };

// update a secret
const updateSecret = async (req, res) => {
    const { id } = req.params
    console.log(id)
    console.log('!!!')
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such workout'})
    }
  
    const secret = await Secret.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!secret) {
      return res.status(400).json({error: 'No such secret'})
    }
  
    res.status(200).json(secret)
  }

  module.exports = {
    getAllSecrets,
    createSecret,
    deleteSecret,
    updateSecret
  }