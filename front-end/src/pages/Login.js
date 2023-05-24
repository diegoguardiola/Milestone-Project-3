import React, { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import "../css/styles.css"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <>
    <h1>Welcome to the Password Journal Application! </h1>
    <h2>Please enter your credentials don below: </h2>
    <form onSubmit={handleSubmit}>
      
      <label>Email address:
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      </label>
      <br/>
      <label>Password:
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
      </label>
      <br/>
      <button className='submitButton' disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>
    </>
  )
}

export default Login