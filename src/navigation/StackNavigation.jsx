import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import HomeScreen from '../screens/Home/HomeScreen';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
   <Stack.Navigator
   screenOptions={{headerShown: false}}>
    <Stack.Screen name='LoginScreen' component={LoginScreen}/>
    <Stack.Screen name='HomeScreen' component={HomeScreen}/>
   </Stack.Navigator>
  )
}

export default StackNavigation

