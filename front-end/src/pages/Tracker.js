import React, { useContext, useState } from 'react'
import '../css/styles.css'

export default function setChildData() {
  const [signUpData, setChildDataa] = useState({
    SiteName: '',
    email: '',
    password: '',
  }) 

export default function Tracker() {
  const { setCurrentUser } = useContext(CurrentUser)
  const [credentials, setCredentials] = useState({
    SiteName: '',
    email: '',
    password: '',
})
  return (
        <CurrentUserProvider>
<div className='main'>
        Hello
        <div id='formbox'>
        <label>
        Site Name
        <input type = "text" required value = {signUpData.SiteName} onChange={(e) => setChildData({ ...signUpData, SiteName: e.target.value })}/>
      </label>
      <br/>
      <label>
        Email:
        <input type = "email" required value = {signUpData.email} onChange={(e) => setChildData({ ...signUpData, email: e.target.value })}/>
      </label>
      <br/>
      <label>
        Password:
        <input type = "password" required value = {signUpData.masterPassword} onChange={(e) => setChildData({ ...signUpData, masterPassword: e.target.value })}/>
      </label>

        </div>
</div>
        </CurrentUserProvider>
      );
      };
