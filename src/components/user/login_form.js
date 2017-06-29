import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { InputField } from 'react-native-uikit'
import { LoginForm } from 'react-native-uikit'
import styles from '../../styles/style';
import AuthRepository from '../../repositories/auth';
import { LoginFb } from 'react-native-uikit'

class Login extends Component {
  onSubmit(email, password) {
    const loginParams = { username: email, password };
    AuthRepository.login(loginParams)
  };

  render() {
    return (
      <View style={styles.login}>
        <LoginForm
          onSubmit={this.onSubmit}
          error={false}
          btnStyle={styles.loginBtn}
          errorMsg={'username or password incorrect'}
        />
        <LoginFb
          onPress={() => console.log('login with fb')}
        />
      </View>
    );
  }
}
export default Login;
