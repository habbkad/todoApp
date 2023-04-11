import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from 'native-base';

const HTitles = () => {
  return (
    <View style={styles.title_con}>
      <Text fontSize={'3xl'} style={styles.title}>
        What’s up Sarah
      </Text>
      <Text fontSize={'xl'} style={styles.cat}>
        Categories
      </Text>
    </View>
  );
};

export default HTitles;

const styles = StyleSheet.create({
  title_con: {
    flex: 1,
    marginTop: '10%',
    marginLeft: '6%',
  },
  cat: {
    marginTop: '5%',
    color: ' rgba(253, 247, 247, 1)',
    opacity: 0.5,
  },
  title: {
    color: 'rgba(255, 252, 252, 1)',
  },
});
