import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text, Slider} from 'native-base';

const Category = () => {
  return (
    <View style={styles.container}>
      <View style={styles.catCon}>
        <Text fontSize={'lg'} style={styles.tasks}>
          50 Tasks
        </Text>
        <Text fontSize={'2xl'} style={styles.personal}>
          Personal
        </Text>
        <Slider defaultValue={70} colorScheme="indigo" marginTop={3}>
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {flex: 1, width: 200, margin: 5},
  catCon: {
    height: 130,
    width: '100%',

    backgroundColor: ' rgba(46, 52, 112, 1)',
    borderRadius: 40,
    padding: 25,
  },
  tasks: {
    color: 'rgba(255, 255, 255, 1)',
    opacity: 0.5,
  },
  personal: {color: 'rgba(255, 255, 255, 1)'},
});
