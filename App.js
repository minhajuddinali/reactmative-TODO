// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './screens/Main';
import Login from './screens/Login';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;