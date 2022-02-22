import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform, Text } from 'react-native';

import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import Tab3Screen from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {

  return Platform.OS === 'ios'
    ? <TabsIOS />
    : <TabsAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colors.primary
      }}
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ color, focused }) => {
            let iconName: string = '';
            switch (route.name) {
              case 'Tab1Screen':
                iconName = 'shield-outline';
                break;
              case 'Tab2Screen':
                iconName = 'bookmark-outline';
                break;
              case 'StackNavigator':
                iconName = 'calendar-outline';
                break;
            }
            return <Icon name={iconName} size={20} color='white' />;
          }
        })
      }
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      tabBarOptions={{
        activeTintColor: colors.primary,
        style: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0
        },
        labelStyle: {
          fontSize: 15
        }
      }}
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ color, focused, size }) => {
            let iconName: string = '';
            switch (route.name) {
              case 'Tab1Screen':
                iconName = 'shield-outline';
                break;
              case 'Tab2Screen':
                iconName = 'bookmark-outline';
                break;
              case 'StackNavigator':
                iconName = 'calendar-outline';
                break;
            }
            return <Icon name={iconName} size={25} color={colors.primary} />;
          }
        })
      }
    >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text> }} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}