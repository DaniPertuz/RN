import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';

const Loading = () => {
    return (
        <View style={searchStyles.activityContainer}>
            <ActivityIndicator
                size={50}
                color='grey'
            />
            <Text>Cargando...</Text>
        </View>
    );
};

const searchStyles = StyleSheet.create({
    activityContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Loading;
