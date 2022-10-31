import React from 'react';
import { View } from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";

import { colors } from '../global/Styles';
import Home from '../screens/Home';
import Search from '../screens/Search';
import MyOrders from '../screens/MyOrders';
import MyAccount from '../screens/MyAccount';
//import RestaurantsMap from '../screens/RestaurantsMap';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';
import Badge from '@mui/material/Badge';


const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {

    const navigation = useNavigation()

    return(
        <ClientTabs.Navigator tabBarOptions = {{activeTintColor: colors.buttons}}>
            <ClientTabs.Screen name="Home"
            component ={Home}
            options = {
                {
                    headerShown: false,
                    // tabBarLabel: "Home",
                    tabBarIcon: ({color,size})=>(
                        <HomeIcon style={{color: colors.buttons}} size ={size} />
                                        )
                }
            } />
            
            <ClientTabs.Screen name="Search"
            component ={Search}
            options = {
                {
                    headerShown: false,
                    // tabBarLabel: "Search",
                    tabBarIcon: ({color,size})=>(
                        <SearchIcon style={{color: 'gray'}} size ={size} />
                                        )
                }
            } />
            
            <ClientTabs.Screen name="MyOrders"
            component ={MyOrders}
            options = {
                {
                    headerShown: false,
                    // tabBarLabel: "view-list",
                    tabBarIcon: ({color,size})=>(
                        <Badge badgeContent={0} color="success">
                            <ListIcon style={{color: 'gray'}} size ={size} />
                            </Badge>
                                        )
                }
            } />
            
            <ClientTabs.Screen name="MyAccount"
            component ={MyAccount}
            options = {
                {
                    headerShown: false,
                    // tabBarLabel: "My Account",
                    tabBarIcon: ({color,size})=>(
                        <PersonIcon style={{color: 'gray'}} size ={size} />
                                        )
                }
            } />
        </ClientTabs.Navigator>
    );
}