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


  
// router.post('/', async (req, res) => {
    
//     let user = await User.findOne({
//         where: { email: req.body.email }
//     })

//     if (!user || !await bcrypt.compare(req.body.password, user.passwordDigest)) {
//         res.status(404).json({ 
//             message: `Could not find a user with the provided username and password` 
//         })
//     } else {
//         res.json({ user })
//     }
// })

const router = require('express').Router()
const db = require("../models/profiles")
const bcrypt = require('bcrypt')

const { User } = db
  
router.post('/', async (req, res) => {

    let user = await db.profiles.find(
        {}
      )
    console.log(user)
})
  

module.exports = router
