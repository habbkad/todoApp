import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Login_component from '../../Components/Login_component';
import {SafeAreaView} from 'react-native-safe-area-context';
export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <Login_component />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
