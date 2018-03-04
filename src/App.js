import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import firebase from 'firebase';
import config from './config';
import rootReducer from './reducers';
import Router from './Router';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

class App extends Component {
  componentDidMount() {
    firebase.initializeApp(config.firebase);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar
            backgroundColor={config.headerBgColor}
            barStyle="light-content"
          />
          <Router />
        </View>
      </Provider>
    );
  }
}

export default App;
