import {StyleSheet, Text, View} from 'react-native';
import Router from './src/router/router';
import React from 'react';
import 'react-native-gesture-handler';
import {NativeBaseProvider} from 'native-base';
const App = () => {
  return (
    <NativeBaseProvider>
      <Router />
    </NativeBaseProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
