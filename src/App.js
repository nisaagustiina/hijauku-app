import React from 'react';
import {LogBox} from 'react-native';
import Router from './router'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  LogBox.ignoreLogs(['Setting a timer']);

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
