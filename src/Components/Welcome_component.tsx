import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Center, Image, Text} from 'native-base';

const Welcome_component = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Center>
          <Image source={require('../icons/logo.png')} alt="Alternate Text" />
        </Center>
      </View>
      <View style={styles.text_container}>
        <Center>
          <View>
            <Text fontSize="3xl" style={styles.titleText}>
              Welcome to TaskMate
            </Text>
          </View>
          <View>
            <Text fontSize="sm" style={styles.descText}>
              Create an account to save all schedules and
            </Text>
          </View>
          <Text fontSize={'sm'} style={styles.descText}>
            access them from anywhere
          </Text>
        </Center>
      </View>
      <View style={styles.btns_container}>
        <TouchableOpacity style={[styles.btn, styles.login]}>
          <Text fontSize={'xl'} style={styles.titleText}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn]}>
          <Text fontSize={'xl'} style={styles.titleText}>
            Register Now
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome_component;

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#2E3470',
  },
  logo_container: {
    flex: 3,
    marginTop: '20%',
  },
  text_container: {
    flex: 2,
    justifyContent: 'center',
  },
  titleText: {color: '#FFFFFF'},
  descText: {color: '#FFFFFF', opacity: 0.5},

  btns_container: {
    flex: 5,
    justifyItems: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: '85%',
    height: 60,
    borderRadius: 15,
    backgroundColor: '#C14B99',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    marginBottom: '8%',
  },
  signin: {
    color: ' rgba(30, 48, 183, 1)',
  },
});
