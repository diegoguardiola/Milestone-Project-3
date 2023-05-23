import React, { createContext, useReducer } from 'react'

export const SecretsContext = createContext()

export const secretsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SECRETS': 
      return {
        secrets: action.payload
      }
    case 'CREATE_SECRET':
      return {
        secrets: [action.payload, ...(state.secrets || [])]

      }
    case 'DELETE_SECRET':
      return {
        secrets: state.secrets.filter((w) => w._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const SecretsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(secretsReducer, {
    secrets: null
  })

  return (
    <SecretsContext.Provider value={{...state, dispatch}}>
      { children }
    </SecretsContext.Provider>
  )
}