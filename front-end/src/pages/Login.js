import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useHistory } from "react-router"

import {AuthContext} from "../contexts/AuthContext"

import axios from 'axios';


function LoginForm() {

    const history = useNavigate()
    const { setCurrentUser } = useContext(AuthContext)
    const [credentials, setCredentials] = useState({
        email: '',
        masterPassword: ''
    })

    const [errorMessage, setErrorMessage] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/m3/profile/login', {
            email: credentials.email,
            masterPassword: credentials.masterPassword
          });
          
          // Check the response status and handle accordingly
          if (response.status === 200) {
            // Successful authentication
            setCurrentUser(response.data); // Assuming response.data contains the user information
          } else {
            // Handle other response statuses if needed
            throw new Error('An error occurred during login.');
          }
        } catch (error) {
          if (error.response && error.response.data) {
            setErrorMessage(error.response.data.message);
          } else {
            setErrorMessage('An error occurred during login.');
          }
        }
      }

    return (
        <main>
            <h1>Login</h1>
            {errorMessage !== null
                ? (
                    <div>
                        {errorMessage}
                    </div>
                )
                : null
            }
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            required
                            value={credentials.email}
                            onChange={e => setCredentials({ ...credentials, email: e.target.value })}
                            name="email"
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            required
                            value={credentials.password}
                            onChange={e => setCredentials({ ...credentials,  masterPassword: e.target.value })}
                            name="password"
                        />
                    </div>
                </div>
                <input type="submit" value="Login" />
            </form>
        </main>
    )
}

export default LoginForm