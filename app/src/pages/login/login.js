import React, {useEffect, useState} from 'react';

import {
  Platform,
  Text,
  TextInput,
  SafeAreaView,
  StatusBar,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {gql, useLazyQuery} from '@apollo/client';

import {Routes} from '../../const/routes';
import {styles} from './styles';
import {Colors} from '../../const/colors';

const LoginPage = ({navigation}) => {
  const LOGIN_QUERY = gql`
    query Login($username: String!, $password: String!) {
      login(username: $username, password: $password)
    }
  `;
  const [doLogin, {loading, data, error}] = useLazyQuery(LOGIN_QUERY);

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState();

  const _handleOnClickLogin = () => {
    if(!!!username || !!!password){
      setToken();
      return
    }
    doLogin({
      variables: {
        username,
        password,
      },
    });
  };

  useEffect(() => {
    if (!!data) {
      setToken(data.login);
      setUsername();
      setPassword();
      navigation.navigate(Routes.recipes);
    }
  }, [data]);

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
          {loading && <Text>Cargando...</Text>}
          {error && (
            <Text style={{color: Colors.borderDefault}}>
              El usuario no fue encontrado
            </Text>
          )}
          {!loading && (
            <>
              <TextInput
                style={styles.inputText}
                placeholder="Usuario"
                onChangeText={usernameText => setUsername(usernameText)}
              />
              <TextInput
                style={styles.inputText}
                placeholder="Contraseña"
                secureTextEntry={true}
                onChangeText={passwordText => setPassword(passwordText)}
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
            </>
          )}
        </View>
      </View>
    </>
  );
};

export default LoginPage;
