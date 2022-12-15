import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Connexion from './src/components/Connexion';
import Inscription from './src/components/Inscription';
import { StyleSheet, TextInput, Button } from 'react-native';
import Home from './src/components/Home';
import Prestation from './src/components/Prestation';


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
        <Stack.Screen name="Prestation" component={Prestation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;