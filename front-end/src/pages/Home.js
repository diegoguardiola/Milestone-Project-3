import React, { useEffect }from 'react'
import { useSecretsContext } from "../hooks/useSecretsContext"
import { useAuthContext } from "../hooks/useAuthContext"
import "../css/styles.css"

// components
import SecretDetails from '../components/SecretDetails'
import SecretForm from '../components/SecretForm'

const Home = () => {
  const {secrets, dispatch} = useSecretsContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchSecrets = async () => {
      const response = await fetch('http://localhost:5000/m3/secrets/', {
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_SECRETS', payload: json})
      }
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    }

    if (user) {
      fetchSecrets()
    }
  }, [dispatch, user])

  return (
    <div className='secretsbox'>
      <div className='secrets'>
        {secrets && secrets.map((secret) => (
          <SecretDetails key={secret._id} secret={secret} />
        ))}
      </div>
      <SecretForm />
    </div>
  )
}

export default Home