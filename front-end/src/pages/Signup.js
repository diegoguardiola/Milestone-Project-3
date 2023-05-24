import React, { useState } from "react"
import { useSignup } from "../hooks/useSignUp"
import "../css/styles.css"
import "../css/form.css"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <>
     <h1>To register for an account, please fill out the information down below</h1>
    <form className="signup" onSubmit={handleSubmit}>      
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
      <button className='submitButton' disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
    </>
  )
}

export default Signup