import { Theme } from '@react-navigation/native';
import { ThemeContext } from './ThemeContext';

type ThemeAction =
    | { type: 'set_light_theme' }
    | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark';
    dividerColor: string;
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(0,0,0,0.6)',
    colors: {
        primary: '#084F6A',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'teal',
    }
}

export const darkTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(255,255,255,0.6)',
    colors: {
        primary: '#75CEDB',
        background: 'black',
        card: 'green',
        text: 'white',
        border: 'black',
        notification: 'teal',
    }
}

export const themeReducer = (state: ThemeState, { type }: ThemeAction): ThemeState => {
    switch (type) {
        case 'set_light_theme':
            return {
                ...lightTheme
            };
        case 'set_dark_theme':
            return {
                ...darkTheme
            };

        default:
            return state;
    }
};
