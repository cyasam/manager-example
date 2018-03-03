import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import firebase from 'firebase';
import config from './config';
import rootReducer from './reducers';
import Header from './components/Header';
import LoginForm from './components/LoginForm';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

class App extends Component {
  componentDidMount() {
    firebase.initializeApp(config.firebase);
  }

  render() {
    return (
      <Provider store={store}>
        <View>
          <StatusBar
            backgroundColor={config.headerBgColor}
            barStyle="light-content"
            translucent
          />
          <Header text="Login" />
          <View style={{ padding: 20 }}>
            <LoginForm />
          </View>
        </View>
      </Provider>
    );
  }
}

export default App;
