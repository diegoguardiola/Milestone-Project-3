import React from 'react'
import '../scss/styles.scss'

export default function Home() {
  return (
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
    <button className='signup'>Sign up</button>
    </div>
  )
}
