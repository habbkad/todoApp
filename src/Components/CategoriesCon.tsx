import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Category from './Category';
import {FlatList} from 'native-base';

type categories = {
  id: number;
};

const Category_container = () => {
  const DATA: categories[] = [{id: 12324345}, {id: 12324345}];
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({}) => <Category />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Category_container;

const styles = StyleSheet.create({
  container: {flex: 1, margin: '5%'},
});
