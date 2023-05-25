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
    try {
      const response = await fetch('http://localhost:5000/m3/secrets/' + secret._id, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      dispatch({type: 'DELETE_SECRET', payload: json});
    } catch(error) {
      console.log("There was an error!", error);
    }
  }    

  return (
    <div className='secrets'>
      <h4>URL: {secret.url}</h4>
      <h4>Password: {secret.password}</h4>
      <p>{formatDistanceToNow(new Date(secret.createdAt), { addSuffix: true })}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  )
}

export default SecretDetails