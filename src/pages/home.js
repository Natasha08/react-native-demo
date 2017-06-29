import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import styles from '../styles/style';
import {Actions} from 'react-native-router-flux';

class Home extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>
          Home Page for the Demo
        </Text>
        <View>
          <Button title="Go to Login page" onPress={()=>Actions.login({data:"Custom data", title:'Login' })}></Button>
        </View>
      </View>
    );
  }
}

export default Home;
