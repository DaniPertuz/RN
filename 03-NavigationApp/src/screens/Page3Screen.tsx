import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{}

const Page3Screen = ({ navigation }: Props) => {
    return (
        <View>
            <Text style={styles.title}>Page3Screen</Text>

            <Button
                title='Regresar'
                onPress={() => navigation.pop()}
            />
            <Button
                title='Ir a página 1'
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}

export default Page3Screen;