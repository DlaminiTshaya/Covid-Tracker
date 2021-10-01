import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import HomePage from './components/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Display from './components/Display'
import Symptoms from './components/Symptoms'
import Country from './components/Country'
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
const Stack = createStackNavigator();
const App=() =>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomePage"
          component={HomePage}
          options = {{headerShown: false}}
        />
       <Stack.Screen options = {{headerShown: false}} name="Display" component={Display} />
        <Stack.Screen options = {{headerShown: false}} name="Symptoms" component={Symptoms} />
        <Stack.Screen options = {{headerShown: false}} name="Country" component={Country} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App
