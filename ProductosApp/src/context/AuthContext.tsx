import React, { createContext, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cafeAPI from '../api/cafeAPI';
import { User, LoginInterface, LoginData, RegisterData } from '../interfaces/app-interfaces';
import { AuthReducer, AuthState } from './AuthReducer';

type AuthContextProps = {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    token: string | null;
    user: User | null;
    errorMessage: string;
    signUp: (registerData: RegisterData) => void;
    signIn: (loginData: LoginData) => void;
    logOut: () => void;
    removeError: () => void;
}

const initialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    useEffect(() => {
        validateToken();
    }, []);

    const validateToken = async () => {
        const token = await AsyncStorage.getItem('token');

        if (!token) return dispatch({ type: 'notAuthenticated' });

        const { data } = await cafeAPI.get('/auth');

        await AsyncStorage.setItem('token', data.token);

        dispatch({
            type: 'signUp',
            payload: {
                token: data.token,
                user: data.usuario
            }
        });
    }

    const signUp = async ({ nombre, correo, password }: RegisterData) => {
        try {
            const { data } = await cafeAPI.post<LoginInterface>('/usuarios', { nombre, correo, password });

            dispatch({
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.usuario
                }
            });

            await AsyncStorage.setItem('token', data.token);
        } catch (error) {
            console.log(error.response.data.errors[0].msg);
            dispatch({
                type: 'addError',
                payload: error.response.data.errors[0].msg || 'Revise la información'
            });
        }
    };

    const signIn = async ({ correo, password }: LoginData) => {
        try {
            const { data } = await cafeAPI.post<LoginInterface>('/auth/login', { correo, password });
            dispatch({
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.usuario
                }
            });

            await AsyncStorage.setItem('token', data.token);
        } catch (error) {
            console.log(error.response.data.msg);
            dispatch({
                type: 'addError',
                payload: error.response.data.msg || 'Información incorrecta'
            });
        }
    };

    const logOut = async () => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'logout' });
    };

    const removeError = () => {
        dispatch({ type: 'removeError' });
    };


    return (
        <AuthContext.Provider
            value={{
                ...state,
                signUp,
                signIn,
                logOut,
                removeError
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};