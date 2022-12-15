import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import { StyleSheet, TextInput, Button } from 'react-native';
import Home from './components/Home';


const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Connexion"
          component={Connexion}
        />
        <Stack.Screen name="Inscription" component={Inscription}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;