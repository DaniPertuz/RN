import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { styles } from '../theme/appTheme';

const Page2Screen = () => {

    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            title: 'Hola mundo',
            headerBackTitle: 'Atrás'
        });
    }, []);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Page2Screen</Text>

            <Button
                title='Ir a página 3'
                onPress={() => navigator.navigate('Page3Screen')}
            />
        </View>
    )
}

export default Page2Screen;