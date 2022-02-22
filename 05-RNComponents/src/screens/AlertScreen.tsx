import React from 'react';
import { Button, View, Alert } from 'react-native';
import prompt from 'react-native-prompt-android';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

const AlertScreen = () => {
    const showAlert = () => {
        Alert.alert(
            "Título",
            "Este es el cuerpo de la alerta",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "destructive"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    }

    const showPrompt = () => {
        // Alert.prompt(
        //     '¿Está seguro?',
        //     'Esta acción no se puede revertir',
        //     (value: string) => console.log({value}),
        //     'plain-text',
        //     'Hola mundo',
        //     'email-address',
        // );
        prompt('Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            });
    }

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle
                title='Alerts'
            />
            <Button
                title='Mostrar alerta'
                onPress={showAlert}
            />
            <View style={{ height: 10 }} />
            <Button
                title='Mostrar prompt'
                onPress={showPrompt}
            />
        </View>
    );
};

export default AlertScreen;