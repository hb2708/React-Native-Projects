import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
  // Initialize Firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyCunPWKxsy0pA_UB5QUHimSIHuyl5fwt_c',
      authDomain: 'authentication-a8405.firebaseapp.com',
      databaseURL: 'https://authentication-a8405.firebaseio.com',
      projectId: 'authentication-a8405',
      storageBucket: 'authentication-a8405.appspot.com',
      messagingSenderId: '988990875229'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App</Text>
      </View>
    );
  }
}

export default App;
