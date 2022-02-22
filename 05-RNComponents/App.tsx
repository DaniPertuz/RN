import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, Theme, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { Navigator } from './src/navigation/Navigator';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//     // primary: ,
//     // background: '#000000',
//     // card: ,
//     // text: ,
//     // border: ,
//     // notification: ,
//   }
// }

const App = () => {
  return (
    <AppState>
        <Navigator />
    </AppState>
  )
};

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}

export default App;
