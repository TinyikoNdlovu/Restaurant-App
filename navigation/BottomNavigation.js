import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Button, } from "react-native";
import  React, {useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import HouseIcon from '@mui/icons-material/House';


import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" 
            component={Home}
            options={{tabBarIcon:()=><Icon name="home-filled" />}}/>
        </Tab.Navigator>
    );
};

export default BottomNavigator