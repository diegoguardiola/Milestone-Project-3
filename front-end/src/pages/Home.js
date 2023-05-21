import React from 'react'
import { useState } from 'react'
import '../css/styles.css'
import { Navigate, useNavigate } from 'react-router-dom'


export default function SignUpForm() {
  const [user, setUser] = useState('')
  const [password, setPasswordForUser] = useState('')

  
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
})

  async function handleSubmit(e){
    e.preventDefault()
    const response = await fetch(`http://localhost:5000/m3/authentication/`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
  })

  const data = await response.json()

  if (response.status === 200) {
      Navigate(`/`)
  } else {
    console.error()
      // setErrorMessage(data.message)
  }
}
  return(
    <div>
    <h1>Welcome to the Password Journal Application! </h1>
    <h2>Please enter your credentials down below:</h2>
    <form onSubmit = {handleSubmit}>
      <label>
        Username:
        <input type = "text" value = {user.email} onChange={(e) => setCredentials({...credentials, email: e.target.value})}/>
      </label>
      <br/>
      <label>
        Password:
        <input type = "password" value = {user.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
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
