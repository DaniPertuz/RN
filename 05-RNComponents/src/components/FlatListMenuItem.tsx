import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/appInterfaces';
import { useNavigation } from '@react-navigation/core'
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    menuItem: MenuItem
}

const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigation = useNavigation();
    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(menuItem.component)}
        >
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    color={colors.primary}
                    size={23}
                />
                <Text style={{
                    ...styles.itemText,
                    color: colors.text
                }}>
                    {menuItem.name}
                </Text>
                <View style={{ flex: 1 }} />
                <Icon
                    name="chevron-forward-outline"
                    color={colors.primary}
                    size={23}
                />
            </View>
        </TouchableOpacity>
    );
};

export default FlatListMenuItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19
    }
});