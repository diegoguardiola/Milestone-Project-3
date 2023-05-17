
import React from 'react'
import { useState } from 'react'
import '../css/styles.css'

export default function SignUpForm() {
  const [user, setUser] = useState('')
  const [password, setPasswordForUser] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Submitted:', user, password)
  }

  return(
    <>
    <h1>Welcome to the Password Journal Application!</h1>
    <h2>Please enter your credentials down below:</h2>
    <form onSubmit = {handleSubmit}>
      <label>
        Username:
        <input type = "text" value = {user} onChange={(e) => setUser(e.target.value)}/>
      </label>
      <br/>
      <label>
        Password:
        <input type = "password" value = {password} onChange={(e) => setPasswordForUser(e.target.value)}/>
      </label>
      <br/>
  <button type='submit' className='submitButton'>Login</button>
   <a href='/Signup'>
   <button  type='button'>Register</button>
   </a>
    </form>
    </>
  )
}
