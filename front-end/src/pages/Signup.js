import React, {useState} from 'react'
import '../css/form.css'
import NavigationBar from '../components/NavigationBar'

export default function SignUpForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Submitted:', firstName, lastName, email, password)
  }

  return(
    <>
    <NavigationBar />
    <h1>To register for an account, please fill out the information down below</h1>
    <form onSubmit = {handleSubmit}>
      <label>
        First Name:
        <input type = "text" value = {firstName} onChange={(e) => setFirstName(e.target.value)}/>
      </label>
      <br/>
      <label>
        Last Name:
        <input type = "text" value = {lastName} onChange={(e) => setLastName(e.target.value)}/>
      </label>
      <br/>
      <label>
        Email:
        <input type = "email" value = {email} onChange={(e) => setEmail(e.target.value)}/>
      </label>
      <br/>
      <label>
        Password:
        <input type = "password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
      </label>
      <br/>
  <button className='submitButton' type = "submit">Submit</button>
    </form>
    </>
  )
}
