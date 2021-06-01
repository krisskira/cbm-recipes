import React, { useState } from 'react';
import {
  Platform, Text,
  TextInput,
  SafeAreaView,
  StatusBar,
  TouchableNativeFeedback, View
} from 'react-native';
import { Routes } from '../../const/routes';
import { styles } from './styles';
import {Colors} from '../../const/colors';

const LoginPage = ({navigation}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const _handleOnClickLogin = () => {
    navigation.navigate(Routes.recipes);
  };

  return (
    <>
      <SafeAreaView>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={Colors.primary}
        />
      </SafeAreaView>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Bienvenid@</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Usuario"
            onChangeText={username => setUsername(username)}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Contraseña"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
          <TouchableNativeFeedback
            onPress={_handleOnClickLogin}
            background={
              Platform.OS === 'android'
                ? TouchableNativeFeedback.SelectableBackground()
                : ''
            }>
            <View style={styles.button}>
              <Text style={styles.buttonTitle}>Iniciar Sesión</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </>
  );
};

export default LoginPage;
