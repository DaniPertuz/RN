import React from 'react';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { colors, styles } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const SidebarMenu = () => {

    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            drawerType={width >= 768 ? 'permanent' : 'front'}
            drawerContent={(props) => <InternalMenu {...props} />}
        >
            <Drawer.Screen name="Tabs" component={Tabs} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

const InternalMenu = ({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {
    return (
        <DrawerContentScrollView>
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
                    }}
                    style={styles.avatar}
                />
            </View>

            {/* Opciones de menú */}
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={{
                        ...styles.menuButton,
                        flexDirection: 'row'
                    }}
                    onPress={ () => navigation.navigate('Tabs')}
                >
                    <Icon name='compass-outline' size={25} color={colors.primary} />
                    <Text style={styles.menuOptionText}>Navegación</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...styles.menuButton,
                        flexDirection: 'row'
                    }}
                    onPress={ () => navigation.navigate('SettingsScreen')}
                >
                    <Icon name='cog-outline' size={25} color={colors.primary} />
                    <Text style={styles.menuOptionText}>Ajustes</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
}