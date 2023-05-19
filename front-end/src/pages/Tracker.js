import React, { useContext, useState } from 'react'
import '../css/styles.css'

export default function setChildData() {
  const { setCurrentUser } = useContext(CurrentUser)
  const [childData, setChildData] = useState({
    SiteName: '',
    email: '',
    password: '',
  }) 

  return (
        <CurrentUserProvider>
<div className='main'>
        Hello
        <div>
            <h1>Saved Login Journals</h1>
        <table>
          
          
          </table>  
        </div>

        <div id='formbox' >
          <div>
            <h1>Adding new login information</h1>
          </div>
        <label>
        Site Name
        <input type = "text" required value = {setChildData.SiteName} onChange={(e) => setChildData({ ...setChildData, SiteName: e.target.value })}/>
      </label>
      <br/>
      <label>
        Email:
        <input type = "email" required value = {setChildData.email} onChange={(e) => setChildData({ ...setChildData, email: e.target.value })}/>
      </label>
      <br/>
      <label>
        Password:
        <input type = "password" required value = {setChildData.Password} onChange={(e) => setChildData({ ...setChildData, Password: e.target.value })}/>
      </label>

        </div>
</div>

<div className='population'>


</div>

        </CurrentUserProvider>
      );
      };
