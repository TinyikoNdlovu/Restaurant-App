import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";

import Header from './src/components/Header';
import {colors} from './src/global/Styles'
import RootNavigator from './src/navigation/RootNavigator';

const Stack = createStackNavigator();

export default function App() {

  return(
    <View style={styles.container}>
      <RootNavigator/>

      <StatusBar barStyle="light-content"
          backgroundColor = {colors.statusbar} />
    </View>       
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})


