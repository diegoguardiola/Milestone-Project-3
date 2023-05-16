import React from 'react'
import '../css/styles.css'

export default function Home() {
  return (
    <div className='main'>
    <div className='login'>
    <form>
      <div>
        <label htmlFor='user'>Username</label>
      </div>
      <div>
        <input type='text' id='user' name='username' placeholder='Username..'></input>
      </div>
      <div>
        <label htmlFor='password'>Password</label>
      </div>
      <div>
        <input type='text' id='password' name='password' placeholder='Password..'></input>
      </div>
      <button type='submit' className='login'>Login</button>
    </form>
    <a href='/Signup'>
        <button className='signup' type='button'>Sign up</button>
    </a>
    </div>
    </div>
  )
}
