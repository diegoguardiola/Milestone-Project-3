const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

// static signup method
userSchema.statics.signup = async function(email, password) {
  console.log(typeof(password))
  console.log(email)
  //validation
  if (!email || !password) {
    throw Error('Email and password are required')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email is invalid')
  }
  if (!validator.isStrongPassword(password,
    { 
      minLength: 8, minLowercase: 0, minUppercase: 1, minNumbers: 1, minSymbols: 0, returnScore: true, pointsPerUnique: 10, pointsPerRepeat: 10, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10
    
    }

    )) {
    throw Error('Password is not strong enough')
  }

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hash })

  return user
}

//static login method
userSchema.statics.login = async function(email, password) {
  //validation
  if (!email || !password) {
    throw Error('All fields are required')
  }

  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)
  if(!match) {
    throw Error('Incorrect password')
  } 

  return user
}

module.exports = mongoose.model('User', userSchema)
