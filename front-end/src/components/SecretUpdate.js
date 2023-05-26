import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const SecretUpdate = ({secret, onUpdate, onCancel}) => {
    const [updateSecret, setUpdateSecret] = useState(secret)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target
        setUpdateSecret((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onUpdate(updateSecret)
        navigate(-1)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    URL:
                    <input type = 'text' name = 'url' value = {updateSecret.url} onChange={handleChange}/>
                </label>

                <label>
                    Password:
                    <input type = 'text' name = 'password' value = {updateSecret.password} onChange={handleChange} /> 
                </label>

                <button type = 'submit'>Save</button>
                <button type = 'button' onClick={onCancel}>Cancel</button>
            </form>
        </div>
    )
}


export default SecretUpdate