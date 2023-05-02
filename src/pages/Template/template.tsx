import {StyleSheet, View, SafeAreaView} from 'react-native';
import React from 'react';
import Template_con from '../../Components/NewTask_con';

type Props = {};

const template = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Template_con />
    </SafeAreaView>
  );
};

export default template;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
