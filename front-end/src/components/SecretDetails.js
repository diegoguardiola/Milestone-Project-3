import { useSecretsContext } from '../hooks/useSecretsContext'
import React, { useState } from 'react'
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthContext } from '../hooks/useAuthContext'
import SecretUpdate from './SecretUpdate'


import "../css/secrets.css"

const SecretDetails = ({ secret }) => {
  const { dispatch } = useSecretsContext()
  const { user } = useAuthContext()
  const [isUpdating, setIsUpdating] = useState(false)

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

  const handleEdit = () => {
    setIsUpdating(true)
  }

  const handleUpdate = async (updatedSecret) => {
    if (!user) {
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/m3/secrets/' + secret._id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify(updatedSecret),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const updatedSecretData = await response.json();
      dispatch({ type: 'UPDATE_SECRET', payload: updatedSecretData });
    } catch (error) {
      console.log("There was an error!", error);
    }
    setIsUpdating(false);
  };

    return (
      <div className='secrets'>
        {isUpdating ? (
          <SecretUpdate secret={secret} onUpdate={handleUpdate} onCancel={() => setIsUpdating(false)} />
        ) : (
          <>
             <h4>URL: {secret.url}</h4>
             <h4>Password: {secret.password}</h4>
             <h4>Username: {secret.username}</h4>
             <p>{formatDistanceToNow(new Date(secret.createdAt), { addSuffix: true })}</p>
      <button className='deleteButton' onClick={handleClick}>Delete</button>
          </>
        )}
      </div>
    );
    

}

export default SecretDetails