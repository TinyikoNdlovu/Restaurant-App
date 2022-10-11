import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";

import OnBoardScreen from './src/screens/OnBoard';
import Login from './src/screens/authScreens/Login';
import Signup from './src/screens/authScreens/Signup';
import Home from './src/screens/Home';
import Food from './src/screens/Food';
import Drinks from './src/screens/Drinks';
import Header from './src/components/Header';
import {colors} from './src/global/Styles'

const Stack = createStackNavigator();

export default function App() {

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OnboardScreen'>
         <Stack.Screen name="OnboardScreen" 
        component={OnBoardScreen}
        options={{title:'Welcome To Royale Food Restaurants',
        headerTitleStyle: {color: '#111', fontWeight: 'bold',},
        headerStyle: {backgroundColor: colors.buttons, height: 50} }}/>
        <Stack.Screen name="Login"
        component={Login}
        options={{title:'My Account',
        headerTitleStyle: {color: '#111', fontWeight: 'bold',},
        headerStyle: {backgroundColor: colors.buttons, height: 50}}}/>
        <Stack.Screen name="Signup"
        component={Signup}
        options={{title:'Signup',
        headerTitleStyle: {color: '#111', fontWeight: 'bold',},
        headerStyle: {backgroundColor: colors.buttons, height: 50}}} />
        <Stack.Screen name="Home"
        component={Home}
        options={{title:'Home',
        headerTitleStyle: {color: '#111', fontWeight: 'bold',},
        headerStyle: {backgroundColor: colors.buttons, height: 50}}}/>
        <Stack.Screen name="Food"
        component={Food}
        options={{headerShown: false}} />
        <Stack.Screen name="Drinks"
        component={Drinks}
        options={{headerShown: false}} />
          </Stack.Navigator>
          <StatusBar barStyle="light-content"
          backgroundColor = {colors.statusbar} />
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})


