import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'native-base';
import MenuIcon from '@mui/icons-material/Menu';
const Hmenu_con = () => {
  return (
    <View style={styles.menu_con}>
      <View style={styles.menuBtn}>
        <TouchableOpacity>
          <Image source={require('../icons/menu.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBtn}>
        <TouchableOpacity>
          <Image source={require('../icons/search.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.alertBtn}>
        <TouchableOpacity>
          <Image source={require('../icons/alert.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Hmenu_con;

const styles = StyleSheet.create({
  menu_con: {
    flex: 1,
    marginTop: 30,
    marginLeft: '5%',
    flexDirection: 'row',
  },
  searchBtn: {
    marginLeft: '62%',
  },
  alertBtn: {
    marginLeft: '8%',
  },
});
