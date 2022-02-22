import { AuthState } from './AuthContext';

type AuthAction = 
    | { type: 'signIn' }
    | { type: 'logout'}
    | { type: 'changeFavIcon', payload: string }
    | { type: 'changeUsername', payload: string }

export const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username'
            }
        
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }
        
        case 'changeUsername':
            return {
                ...state,
                username: action.payload
            }
        
        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                favoriteIcon: undefined,
                username: undefined
            }
        default:
            return state;
    }
}