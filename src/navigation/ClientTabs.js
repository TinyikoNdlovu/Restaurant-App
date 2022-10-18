import React from 'react';
import { View } from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";

import { colors } from '../global/Styles';
import Home from '../screens/Home';
import Search from '../screens/Search';
import MyOrders from '../screens/MyOrders';
import MyAccount from '../screens/MyAccount';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';

const navigation = useNavigation()
const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {

    return(
        <ClientTabs.Navigator tabBarOptions = {{activeTintColor: colors.buttons}}>
            <ClientTabs.Screen name="Home"
            component ={Home}
            options = {
                {
                    tabBarLabel: "Home",
                    tabBarIcon: ({color,size})=>(
                        <HomeIcon color = {color} size ={size} />
                                        )
                }
            } />
            
            <ClientTabs.Screen name="Search"
            component ={Search}
            options = {
                {
                    tabBarLabel: "Search",
                    tabBarIcon: ({color,size})=>(
                        <SearchIcon color = {color} size ={size} />
                                        )
                }
            } />
            
            <ClientTabs.Screen name="MyOrders"
            component ={MyOrders}
            options = {
                {
                    tabBarLabel: "view-list",
                    tabBarIcon: ({color,size})=>(
                        <ListIcon color = {color} size ={size} />
                                        )
                }
            } />
            
            <ClientTabs.Screen name="MyAccount"
            component ={MyAccount}
            options = {
                {
                    tabBarLabel: "My Account",
                    tabBarIcon: ({color,size})=>(
                        <PersonIcon color = {color} size ={size} />
                                        )
                }
            } />
        </ClientTabs.Navigator>
    );
}