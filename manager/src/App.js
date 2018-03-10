import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
