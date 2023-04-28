import {StyleSheet, View} from 'react-native';
import React from 'react';
import Task from './Task';
import {FlatList} from 'native-base';
import {Text} from 'native-base';

type Props = {};
type task = {id: number};

const Tasks = (props: Props) => {
  const DATA: task[] = [
    {id: 994902340},
    {id: 994902340},
    {id: 994902340},
    {id: 994902340},
    {id: 994902340},
    {id: 994902340},
    {id: 994902340},
    {id: 994902340},
  ];

  return (
    <View style={styles.container}>
      <Text fontSize={'lg'} color={' rgba(142, 146, 164, 1)'} marginBottom={5}>
        TODAY’S TASK
      </Text>

      <FlatList data={DATA} renderItem={({}) => <Task />} />
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {flex: 1, margin: '5%'},
});
