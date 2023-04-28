import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {Text} from 'native-base';

const Task = () => {
  return (
    <View style={styles.task_con}>
      <View style={styles.taskCon}>
        <TouchableOpacity style={styles.doneBtn}>
          <View>
            <Image source={require('../icons/accent.png')} />
          </View>
        </TouchableOpacity>
        <View style={styles.task}>
          <Text>Check emails</Text>
        </View>
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  task_con: {
    flex: 1,
    height: 60,
    backgroundColor: ' rgba(46, 52, 112, 1)',
    width: '100%',
    borderRadius: 20,
    marginBottom: 10,
  },
  taskCon: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    marginLeft: 10,
  },
  doneBtn: {
    flex: 1,
    borderColor: '#993276',
    borderWidth: 4,
    height: 40,
    borderRadius: 20,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  task: {
    flex: 9,
    marginLeft: 20,
  },
});
