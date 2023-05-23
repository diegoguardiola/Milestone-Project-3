import { useSecretsContext } from '../hooks/useSecretsContext'
import React from 'react'
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthContext } from '../hooks/useAuthContext'

const SecretDetails = ({ secret }) => {
  const { dispatch } = useSecretsContext()
  const { user } = useAuthContext()

  const handleClick = async () => {
    if (!user) {
      return
    }
    const response = await fetch('http://localhost:5000/m3/secrets/' + secret._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_SECRET', payload: json})
    }
  }

  return (
    <div>
      <h4>{secret.url}</h4>
      <h4>{secret.password}</h4>
      <p>{formatDistanceToNow(new Date(secret.createdAt), { addSuffix: true })}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  )
}

export default SecretDetails