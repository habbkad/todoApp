import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Hmenu_con from './Hmenu_con';
import {Text} from 'native-base';
import HTitles from './HTitles';
import Categories from './CategoriesCon';
import Category from './Category';
import Tasks from './Tasks';

const Home_components = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.menuCon}>
        <Hmenu_con />
      </View>
      <View style={styles.title_con}>
        <HTitles />
      </View>
      <View style={styles.category}>
        <Categories />
      </View>
      <View style={styles.tasks}>
        <Tasks />
      </View>
    </ScrollView>
  );
};

export default Home_components;

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: 'rgba(163, 173, 192, 1)',
  },
  menuCon: {flex: 1},
  title_con: {flex: 1},
  category: {flex: 2, width: '100%'},
  tasks: {flex: 6},
});
