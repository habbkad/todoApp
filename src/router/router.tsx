import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Template from '../pages/Template/template';
import Home from '../pages/Schedules/Home';
import Welcome from '../pages/WelcomeScreen/Welcome';
const Stack = createNativeStackNavigator();
const router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddTask" component={Template} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default router;

const styles = StyleSheet.create({});
