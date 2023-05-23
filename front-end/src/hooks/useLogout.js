import { useAuthContext } from './useAuthContext'
import { useSecretsContext } from './useSecretsContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: secretsDispatch } = useSecretsContext()

    const logout = async () => {
        // remove the user from local storage
        localStorage.removeItem('user')
        //dispatch logout action
        dispatch({type: 'LOGOUT'})
        secretsDispatch({type: 'SET_SECRETS', payload: null})
    }
    return { logout }
}