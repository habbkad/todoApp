import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home_components from '../../Components/Home_components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Fab, Icon} from 'native-base';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home_components />
      <Fab
        renderInPortal={false}
        shadow={2}
        size="lg"
        icon={<Icon color="white" name="plus" size="sm" />}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
