import authActions from '../actions/auth';
import {Actions} from 'react-native-router-flux';
import env from '../../environment';

export default {
  login: function({ username, password }) {
    return new Promise(function(resolve, reject) {
      fetch(env.loginUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        const token = responseJson.token;
        Actions.main({type: 'replace'});
      })
      .catch(function(err) {
        console.log("+++++++++++++++++++++++++ERROR", err);
      })
    })
  }
 };
