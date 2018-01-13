import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyCQaTBQA7ZW3pmpWnDvdPj3TmFs9Uxer2k',
      authDomain: 'manager-react-native-8519a.firebaseapp.com',
      databaseURL: 'https://manager-react-native-8519a.firebaseio.com',
      projectId: 'manager-react-native-8519a',
      storageBucket: '',
      messagingSenderId: '1050607683452'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
