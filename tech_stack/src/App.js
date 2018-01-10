import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
<<<<<<< HEAD
import { Header } from './components/common';
import LibraryList from './components/LibraryList';
=======
>>>>>>> 5072e6c7d4245b552b7cce5b387df3c18f72e7a2

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
<<<<<<< HEAD
      <View style={{ flex: 1 }}>
        <Header headerText='Tech Stack with redux' />
        <LibraryList />
      </View>
=======
      <View />
>>>>>>> 5072e6c7d4245b552b7cce5b387df3c18f72e7a2
    </Provider>
  );
};

export default App;
