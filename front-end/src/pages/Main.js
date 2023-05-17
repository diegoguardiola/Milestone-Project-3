import React, {useState} from 'react'
import '../css/styles.css'

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