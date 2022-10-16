import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import {colors} from '../../src/global/Styles'

import OnBoardWelcome from "../screens/authScreens/OnBoardWelcome";
import Login from "../screens/authScreens/Login";
import Signup from "../screens/authScreens/Signup";
import Home from "../screens/Home";
import Food from "../screens/Food";
import Drinks from "../screens/Drinks";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { Icon } from '@mui/icons-material';

const Authstack = createStackNavigator();

export default function AuthNavigate() {

    return(
            <Authstack.Navigator initialRouteName='OnboardWelcome'>
                <Authstack.Screen name="OnboardWelcome" 
                 component={OnBoardWelcome}
                 options={{headerShown: false,
                 headerTitleStyle: {color: '#fff', fontWeight: 'bold',},
                 headerStyle: {backgroundColor: colors.buttons, height: 50},
                 ...TransitionPresets.RevealFromBottomAndroid }} />
                <Authstack.Screen  name="Login"
                 component={Login}
                 options={{title:'My Account',
                 headerTitleStyle: {color: '#fff', fontWeight: 'bold',},
                 headerStyle: {backgroundColor: colors.buttons, height: 50,},
                 ...TransitionPresets.RevealFromBottomAndroid }} />
                <Authstack.Screen name="Signup"
                 component={Signup}
                 options={{title:'Signup',
                 headerTitleStyle: {color: '#fff', fontWeight: 'bold',},
                 headerStyle: {backgroundColor: colors.buttons, height: 50},
                 ...TransitionPresets.RevealFromBottomAndroid }} />
                <Authstack.Screen name="Home"
                 component={Home}
                 options={{title:'RoyaleFood',
                 headerTitleStyle: {color: '#fff', fontWeight: 'bold',},
                 headerStyle: {backgroundColor: colors.buttons, height: 50},
                 ...TransitionPresets.RevealFromBottomAndroid,
                 headerLeft: () => (
                    <MenuIcon style={{color: '#fff'}} />
                    ),
                 headerRight: () => (
                 <ShoppingCartIcon style={{color: '#fff'}} />  
                  ), }}/>
                <Authstack.Screen name="Food"
                 component={Food}
                 options={{headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid }} />
                <Authstack.Screen name="Drinks"
                 component={Drinks}
                 options={{headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid }} />
            </Authstack.Navigator>
    )
}