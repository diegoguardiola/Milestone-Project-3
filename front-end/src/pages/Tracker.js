import React, { useContext, useState } from 'react'
import '../css/styles.css'


export default function Tracker() {
  const { setCurrentUser } = useContext(CurrentUser)
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
})
  return (
        <CurrentUserProvider>
    <div className='main'>
        Hello
        <div id='formbox'>


        </div>

        </CurrentUserProvider>
      );
    }
    
