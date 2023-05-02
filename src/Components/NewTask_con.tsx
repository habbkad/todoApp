import {StyleSheet, View, Image} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Input, KeyboardAvoidingView, Popover, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {Text, Select, CheckIcon, IconButton} from 'native-base';
import {Entypo} from '@expo/vector-icons';
type Props = {};

const Template_con = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = React.useState('');
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.closeBtnCon}>
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={require('../icons/close.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.notesInpu_con}>
        <Input
          variant="unstyled"
          placeholder="Unstyled"
          size={'2xl'}
          w={'80%'}
        />
      </View>

      <View style={styles.newTaskBtnCon}>
        <Popover // @ts-ignore
          trigger={triggerProps => {
            return (
              <TouchableOpacity
                style={styles.newTaskBtn}
                {...triggerProps}
                onPress={() => setIsOpen(true)}>
                <Text fontSize={'lg'}>New Task</Text>
              </TouchableOpacity>
            );
          }}
          isOpen={isOpen}
          onClose={() => setIsOpen(!isOpen)}>
          <Popover.Content>
            <Popover.CloseButton onPress={() => setIsOpen(false)} />
            <Popover.Header>Personal Or Business </Popover.Header>
            <Popover.Body>
              <Select
                selectedValue={service}
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Choose Service"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={itemValue => setService(itemValue)}>
                <Select.Item label="Personal" value="ux" />
                <Select.Item label="Business" value="web" />
              </Select>
            </Popover.Body>
            <Popover.Footer justifyContent="flex-end">
              <Button.Group>
                <Button colorScheme="danger" onPress={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button colorScheme="danger" onPress={() => setIsOpen(false)}>
                  Done
                </Button>
              </Button.Group>
            </Popover.Footer>
          </Popover.Content>
        </Popover>
      </View>
    </KeyboardAvoidingView>
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
  notesInpu_con: {
    flex: 6,
    width: '100%',
    alignItems: 'center',

    justifyContent: 'center',
  },
  newTaskBtnCon: {
    flex: 3,
    ustifyContent: 'center',
    alignItems: 'center',
  },
  newTaskBtn: {
    height: 50,
    width: 150,
    backgroundColor: 'rgba(193, 75, 153, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
});
