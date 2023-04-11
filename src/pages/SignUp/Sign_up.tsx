import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Signup_component from '../../Components/Signup_component';
import {SafeAreaView} from 'react-native-safe-area-context';
const Sign_up = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Signup_component />
    </SafeAreaView>
  );
};

export default Sign_up;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
