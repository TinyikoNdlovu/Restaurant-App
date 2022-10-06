import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";

import OnBoardScreen from './screens/Onboard';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import Food from './screens/Food';
import Drinks from './screens/Drinks';

const Stack = createStackNavigator();

const App = () => {

  const [user, setUser] = useState();

  if (!user) {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="OnboardScreen" 
        component={OnBoardScreen}/>
        <Stack.Screen name="Login"
        component={Login} />
        <Stack.Screen name="Signup"
        component={Signup} />
        <Stack.Screen name="Home"
        component={Home} />
        <Stack.Screen name="Food"
        component={Food} />
        <Stack.Screen name="Drinks"
        component={Drinks} />
          </Stack.Navigator>
    );
  }

}
export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}

