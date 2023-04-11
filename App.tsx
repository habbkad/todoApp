import {StyleSheet, Text, View} from 'react-native';
import Router from './src/router/router';
import React from 'react';
import 'react-native-gesture-handler';
import {NativeBaseProvider} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
