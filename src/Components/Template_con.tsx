import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

type Props = {};

const Template_con = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.closeBtnCon}>
        <TouchableOpacity style={styles.closeBtn}>
          <Image source={require('../icons/close.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Template_con;

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#EDF0F7',
  },
  closeBtnCon: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: 30,
    marginRight: 20,
  },
  closeBtn: {
    boaderWidth: 4,
    borderColor: '#E3E1E1',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
