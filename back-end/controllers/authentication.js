// const bcrypt = require('bcrypt');


// const router = require('express').Router()
// // Whatever models we use right now it's profile
// const db = require("../models")

// const { User } = db


// router.post('/', async(req, res)=>{
//     let {password, ...rest} = req.body;
//     const user = await User.create({
//         ...rest,
//         // Salt rounds are 15 right here
//         passwordDigest: await bcrypt.hash(password, 15)
//     })
// })

const router = require('express').Router()
const db = require("../models/profiles")
const bcrypt = require('bcrypt')

const { User } = db
  
router.post('/', async (req, res) => {

    let user = await User.findOne({
        where: { email: req.body.email }
    })

    console.log(user)
})
  

module.exports = router
