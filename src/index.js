import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';

import './config/ReactotronConfig';

import store from './store/index';

// import {View} from 'react-native';

import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="#999" />
        <Routes />
      </Provider>
    </NavigationContainer>
  );
}
