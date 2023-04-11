import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import React from 'react';
import {Center, Image, Text} from 'native-base';
const Signup_component = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Center>
            <Text fontSize={'3xl'}>Title</Text>
          </Center>
        </View>
        <View style={styles.input_con}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter username "
            placeholderTextColor={' rgba(251, 241, 241, 1)'}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter email"
            placeholderTextColor={' rgba(251, 241, 241, 1)'}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor={' rgba(251, 241, 241, 1)'}
          />
        </View>
        <View style={styles.btn_con}>
          <TouchableOpacity style={[styles.btn]}>
            <Text fontSize={'xl'} style={styles.titleText}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.altLogin_con}>
          <View style={styles.divider}>
            <View style={styles.line}></View>
            <Text>or</Text>
            <View style={styles.line}></View>
          </View>

          <View style={styles.icons}>
            <TouchableOpacity>
              <Image source={require('../icons/google.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../icons/apple.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../icons/facebook.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer_con}>
          <Text>Already have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.signin}>Sign in.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup_component;

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor:
      ' linear-gradient(180deg, rgba(129, 136, 206, 0.71875) 99.96%, rgba(110, 109, 153, 0.35185) 99.97%, rgba(172, 163, 192, 0) 99.98%, rgba(97, 104, 147, 0.840316) 99.99%, #A3ADC0 100%)',
  },
  title: {
    flex: 2,
    marginTop: 50,
    alignContent: 'center',
    justifyContent: 'center',
  },
  input_con: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_con: {
    flex: 1,
    alignItems: 'center',
  },
  altLogin_con: {
    flex: 2,
  },
  footer_con: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  divider: {
    flex: 1,
    flexDirection: 'row',
  },
  textInput: {
    height: 50,
    borderColor: 'rgba(0,0,0,0.7) ',
    borderWidth: 1,
    width: '85%',
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: '8%',
    opacity: 0.2,
  },
  btn: {
    width: '85%',
    height: 50,
    borderRadius: 15,
    backgroundColor: '#C14B99',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    flex: 2,
    width: 20,
    height: 1,
    backgroundColor: 'linear-gradient(90deg, #B0B0B0 -0.34%, #D3D3D3 100.34%)',
  },
  icons: {
    flex: 8,
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: '5%',
  },
  signin: {
    color: ' rgba(30, 48, 183, 1)',
  },
});
