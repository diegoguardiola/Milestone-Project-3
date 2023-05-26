import React, { useState } from "react"
import { useSecretsContext } from "../hooks/useSecretsContext"
import { useAuthContext } from "../hooks/useAuthContext"

import "../css/secrets.css"

const SecretForm = () => {
  const { dispatch } = useSecretsContext()
  const { user } = useAuthContext()

  const [url, setUrl] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in to add a secret')
      return
    }

    const secret = {url, username,  password}

    const response = await fetch('http://localhost:5000/m3/secrets/', {
      method: 'POST',
      body: JSON.stringify(secret),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setUrl('')
      setUsername('')
      setPassword('')
      setError(null)
      setEmptyFields([])
      console.log('new secret added', json)
      dispatch({type: 'CREATE_SECRET', payload: json})
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Secret</h3>

      <label>URL:</label>
      <input 
        type="text"
        onChange={(e) => setUrl(e.target.value)}
        value={url}
      />

      <label>Username:</label>
      <input 
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />

      <label>Password:</label>
      <input 
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button className="addSecret">Add Secret</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default SecretForm