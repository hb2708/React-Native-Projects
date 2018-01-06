import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
