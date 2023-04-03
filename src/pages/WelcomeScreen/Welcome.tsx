import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Welcome_component from '../../Components/Welcome_component';

export default function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Welcome_component />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
