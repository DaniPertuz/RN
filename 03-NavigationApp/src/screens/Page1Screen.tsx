import React, { useEffect } from 'react';
// import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { styles, colors } from '../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<any, any> { };
interface Props extends DrawerScreenProps<any, any> { };

const Page1Screen = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    style={{
                        marginLeft: 10
                    }}
                    onPress={() => navigation.toggleDrawer()}
                >
                    <Icon name="menu-outline" size={35} color={colors.primary} />
                </TouchableOpacity>
            )
        });
    }, []);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Page1Screen</Text>
            <Button
                title='Ir a página 2'
                onPress={() => navigation.navigate('Page2Screen')}
            />

            <Text
                style={{
                    marginVertical: 20,
                    fontSize: 20,
                    marginLeft: 5
                }}
            >
                Navegar con argumentos
            </Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        ...styles.bigButton,
                        backgroundColor: '#5856D6'
                    }}
                    onPress={() => navigation.navigate('PersonScreen', {
                        id: 1,
                        nombre: 'Pedro'
                    })}
                >
                    <Icon name="man-outline" size={35} color='white' />
                    <Text style={styles.bigButtonText}>Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.bigButton,
                        backgroundColor: '#FF9427'
                    }}
                    onPress={() => navigation.navigate('PersonScreen', {
                        id: 2,
                        nombre: 'María'
                    })}
                >
                    <Icon name="woman-outline" size={35} color='white' />
                    <Text style={styles.bigButtonText}>María</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Page1Screen;