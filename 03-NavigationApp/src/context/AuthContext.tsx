import React, { createContext, useReducer } from 'react';
import { AuthReducer } from './AuthReducer';

// Definir cómo luce, qué información habrá aquí
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

// Se usará para decirle a React cómo luce y qué expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUsername: (username: string) => void;
    logout: () => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(AuthReducer, authInitialState);

    const signIn = () => {
        dispatch({ type: 'signIn' });
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName });
    }

    const changeUsername = (username: string) => {
        dispatch({ type: 'changeUsername', payload: username });
    }

    const logout = () => {
        dispatch({ type: 'logout' });
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            changeUsername,
            logout
        }}>
            { children }
        </AuthContext.Provider>
    );
}