import { SecretsContext } from "../contexts/SecretContext"
import React, { useContext } from 'react'

export const useSecretsContext = () => {
  const context = useContext(SecretsContext)

  if (!context) {
    throw Error('useSecretsContext must be used inside an SecretsContextProvider')
  }

  return context
}