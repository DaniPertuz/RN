import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles, colors } from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TouchableIcon from '../components/TouchableIcon';

const Tab1Screen = () => {

    const { top } = useSafeAreaInsets();

    useEffect(() => {
        // console.log('Tab1Screen llamado');
    }, []);

    return (
        <View
            style={{
                ...styles.globalMargin,
                marginTop: top + 10
            }}
        >
            <Text style={styles.title}>Tab1Screen</Text>

            <Text>
                <TouchableIcon iconName="airplane-outline" />
                <TouchableIcon iconName="attach-outline" />
                <TouchableIcon iconName="battery-charging-outline" />
                <TouchableIcon iconName="bulb-outline" />
                <TouchableIcon iconName="football-outline" />
                <TouchableIcon iconName="moon-outline" />
                <TouchableIcon iconName="person-circle-outline" />
            </Text>
        </View>
    );
}

export default Tab1Screen;