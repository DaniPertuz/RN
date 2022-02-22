import React, { useContext, useEffect } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import Background from '../components/Background';
import WhiteLogo from '../components/WhiteLogo';
import { loginStyles } from '../theme/loginTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { useForm } from '../hooks/useForm';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<any, any> { }

const LoginScreen = ({ navigation }: Props) => {

  const { signIn, errorMessage, removeError } = useContext(AuthContext);

  const { email, password, onChange } = useForm({
    email: '',
    password: ''
  });

  useEffect(() => {
    if (errorMessage.length === 0) return;

    Alert.alert('Login incorrecto', errorMessage, [{ text: 'OK', onPress: removeError }]);
  }, [errorMessage]);


  const onLogin = () => {
    Keyboard.dismiss();
    signIn({ correo: email, password });
  }

  return (
    <>
      {/* Background */}
      <Background />
      <KeyboardAvoidingView
        style={{
          flex: 1
        }}
        behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
      >
        <View style={loginStyles.formContainer}>

          {/* Keyboard avoid view */}
          <WhiteLogo />
          <Text style={loginStyles.title}>
            Login
          </Text>
          <Text style={loginStyles.label}>
            Email:
          </Text>
          <TextInput
            placeholder='Ingrese su email'
            placeholderTextColor='rgba(255,255,255,0.4)'
            keyboardType='email-address'
            underlineColorAndroid='#FFFFFF'
            style={[
              loginStyles.inputField,
              (Platform.OS === 'ios') && loginStyles.inputFieldIOS
            ]}
            selectionColor='#FFFFFF'
            autoCapitalize='none'
            autoCorrect={false}
            onSubmitEditing={onLogin}
            onChangeText={(value) => onChange(value, 'email')}
            value={email}
          />

          <Text style={loginStyles.label}>
            Password:
          </Text>
          <TextInput
            placeholder='******'
            placeholderTextColor='rgba(255,255,255,0.4)'
            underlineColorAndroid='#FFFFFF'
            secureTextEntry
            style={[
              loginStyles.inputField,
              (Platform.OS === 'ios') && loginStyles.inputFieldIOS
            ]}
            selectionColor='#FFFFFF'
            autoCapitalize='none'
            autoCorrect={false}
            onSubmitEditing={onLogin}
            onChangeText={(value) => onChange(value, 'password')}
            value={password}
          />

          {/* Botón login */}
          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.button}
              onPress={onLogin}
            >
              <Text style={loginStyles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>

          {/* Crear una nueva cuenta */}
          <View style={loginStyles.newUserContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.replace('RegisterScreen')}
            >
              <Text style={loginStyles.buttonText}>Nueva cuenta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default LoginScreen;