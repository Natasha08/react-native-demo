import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import styles from '../styles/style';
import {Actions} from 'react-native-router-flux';

class Main extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>
            You are logged in!
          </Text>
        </View>
      </View>
    );
  }
};

export default Main;
