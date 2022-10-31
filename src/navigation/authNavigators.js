import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import {colors} from '../../src/global/Styles'

import OnBoardWelcome from "../screens/authScreens/OnBoardWelcome";
import Login from "../screens/authScreens/Login";
import Signup from "../screens/authScreens/Signup";
import RestaurantsMap from "../screens/RestaurantsMap";
import DrawerNavigator from "./DrawerNavigator";
import { useNavigation } from "@react-navigation/native";
import ClientTabs from "../navigation/ClientTabs";
import Home from "../screens/Home";
import Drinks from "../screens/Drinks";
import RootClientTabs from "../navigation/ClientTabs";

const Authstack = createStackNavigator();

export default function AuthNavigate() {

    const navigation = useNavigation()

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
                <Authstack.Screen name="DrawerNavigator"
                 component={DrawerNavigator}
                 options={{title: 'DrawerNavigator',
                 headerTitleStyle: {color: '#fff', fontWeight: 'bold',},
                 headerStyle: {backgroundColor: colors.buttons, height: 50},
                 ...TransitionPresets.RevealFromBottomAndroid }}/>
                  <Authstack.Screen name="RestaurantsMap"
                 component={RestaurantsMap}
                 options={{headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid }} />
                <Authstack.Screen name="Drinks"
                 component={Drinks}
                 options={{headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid }} />
            </Authstack.Navigator>
    )
}