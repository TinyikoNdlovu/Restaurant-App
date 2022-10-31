import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {View, Text, StyleSheet} from 'react-native';
import RootClientTabs from './ClientTabs';

import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';

import { colors } from '../global/Styles'
import BusinessConsole from '../screens/BusinessConsole';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator()

export default function DrawerNavigator(){

    return(
        <Drawer.Navigator>
            <Drawer.Screen name="RootClientTabs" component={RootClientTabs}
            options={{title: 'Client',
            drawerIcon: ({focused,size}) =>(
                <HomeIcon color= {focused ? '#7cc' :colors.grey2}
                size={size} />
            )}} />
            
            <Drawer.Screen name="BusinessConsole" component={BusinessConsole}
            options={{title:'Business console',
            drawerIcon: ({focused,size}) =>(
                <BusinessIcon color= {focused ? '#7cc' :colors.grey2}
                size={size} />
            )}} />
        </Drawer.Navigator>
    );
}

