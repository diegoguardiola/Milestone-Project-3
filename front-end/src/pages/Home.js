import React ,{useContext, useState}from 'react'
import '../css/styles.css'

import { useNavigate } from 'react-router-dom'


export default function SignUpForm() {
  const [user, setUser] = useState('')
  const [password, setPasswordForUser] = useState('')

  async function handleSubmit(e){
    e.preventDefault()

  }


  return(
    <div>
    <h1>Welcome to the Password Journal Application! </h1>
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
   <button type='button' className='registerButton'>Register</button>
   </a>
    </form>
    </div>
  )
}
