import React, {useState} from 'react'
import '../css/form.css'
import axios from 'axios'

export default function SignUpForm() {
  const [signUpData, setSignUpData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    masterPassword: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('Submitted:', signUpData)

    const newFormDocument = {
      firstName: signUpData.firstName,
      lastName: signUpData.lastName, 
      email: signUpData.email, 
      masterPassword: signUpData.masterPassword,
    }

    try {
      await axios.post('http://localhost:5000/m3/profile/', newFormDocument)
      alert('Success')
    } catch (err){
      console.log(err)
      // console.error()
    }

    //navigate('/')
  }

  
  return(
    <>
    <h1>To register for an account, please fill out the information down below</h1>
    <form onSubmit = {handleSubmit}>
      <label>
        First Name:
        <input type = "text" value = {signUpData.firstName} onChange={(e) => setSignUpData({ ...signUpData, firstName: e.target.value })}/>
      </label>
      <br/>
      <label>
        Last Name:
        <input type = "text" value = {signUpData.lastName} onChange={(e) => setSignUpData({ ...signUpData, lastName: e.target.value })}/>
      </label>
      <br/>
      <label>
        Email:
        <input type = "email" value = {signUpData.email} onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}/>
      </label>
      <br/>
      <label>
        Password:
        <input type = "password" value = {signUpData.masterPassword} onChange={(e) => setSignUpData({ ...signUpData, masterPassword: e.target.value })}/>
      </label>
      <br/>
  <button className='submitButton' type = "submit">Submit</button>
    </form>
    </>
  )
}
