import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigation/StackNavigator';
// import { BasicSideMenu } from './src/navigation/BasicSideMenu';
import { SidebarMenu } from './src/navigation/SidebarMenu';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/* <BasicSideMenu /> */}
        <SidebarMenu />
      </AppState>
    </NavigationContainer>
  );
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}

export default App;