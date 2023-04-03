import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../pages/Home/home';
import Welcome from '../pages/WelcomeScreen/Welcome';
const Stack = createNativeStackNavigator();
const router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default router;

const styles = StyleSheet.create({});
