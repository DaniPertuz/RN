import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const Tab3Screen = () => {

    useEffect(() => {
        console.log('Tab3Screen llamado');
    }, []);

    return (
        <View>
            <Text>Tab3Screen</Text>
        </View>
    )
}

export default Tab3Screen;