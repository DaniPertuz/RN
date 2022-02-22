import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, TextInput, View, Keyboard, Text } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import CustomSwitch from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const TextInputScreen = () => {

    const { form, onChange, isSubscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    });

    const { theme } = useContext(ThemeContext);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>
                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}
                >
                    <View style={styles.globalMargin}>
                        <HeaderTitle title='TextInputs' />
                        <TextInput
                            style={{
                                ...inputStyles.inputStyle,
                                borderColor: theme.colors.text,
                                color: theme.colors.text
                            }}
                            placeholder='Ingrese su nombre'
                            autoCorrect={false}
                            autoCapitalize='words'
                            onChangeText={(value) => onChange(value, 'name')}
                            placeholderTextColor={theme.dividerColor}
                        />
                        <TextInput
                            style={{
                                ...inputStyles.inputStyle,
                                borderColor: theme.colors.text,
                                color: theme.colors.text
                            }}
                            placeholder='Ingrese su email'
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType='email-address'
                            keyboardAppearance='dark'
                            placeholderTextColor={theme.dividerColor}
                        />

                        <Text>Sucribirme</Text>

                        <View style={inputStyles.switchRow}>
                            <Text style={inputStyles.switchText}>isHungry</Text>
                            <CustomSwitch
                                isOn={isSubscribed}
                                onChange={(value) => onChange(value, 'isSubscribed')}
                            />
                        </View>

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />

                        <TextInput
                            style={{
                                ...inputStyles.inputStyle,
                                borderColor: theme.colors.text,
                                color: theme.colors.text
                            }}
                            placeholder='Ingrese su teléfono'
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType='phone-pad'
                            placeholderTextColor={theme.dividerColor}
                        />
                    </View>
                    <View style={{ height: 100 }} />
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const inputStyles = StyleSheet.create({
    inputStyle: {
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    switchText: {
        fontSize: 25
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    }
});

export default TextInputScreen;