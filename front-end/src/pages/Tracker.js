import React, {useState} from 'react'
import '../css/form.css'
import axios from 'axios'


export default function SignUpForm() {
  const [journalData, setJournalData] = useState({
    webURL: '',
    username: '',
    password: ''
  })

  
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('Submitted:', journalData)

    const newFormDocument = {
      webURL: journalData.webURL,
      username: journalData.username, 
      password: journalData.password
    }

    try {
      await axios.post('http://localhost:5000/m3/logins/', newFormDocument)
      alert('Success')
    } catch (err){
      console.log(err)
    }
  }

  
  return(
    <>
    <h1>Please enter the following credentials down below:</h1>
    <form onSubmit = {handleSubmit}>

      <label>
        Website URL:
        <input type = "text" value = {journalData.webURL} onChange={(e) => setJournalData({ ...journalData, webURL: e.target.value })}/>
      </label>
      <br/>

      <label>
        Username:
        <input type = "text" value = {journalData.username} onChange={(e) => setJournalData({ ...journalData, username: e.target.value })}/>
       </label>
      <br/>
      <label>
        Password:
        <input type = "text" value = {journalData.password} onChange={(e) => setJournalData({ ...journalData, password: e.target.value })}/>
      </label>
      
      <br/>
  <button className='submitButton' type = "submit">Submit</button>
    </form>
    </>
  )
}


