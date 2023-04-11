import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home_components from '../../Components/Home_components';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home_components />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
