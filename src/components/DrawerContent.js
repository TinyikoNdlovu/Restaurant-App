import React, {useState, useContext, useEffect} from "react";
import { View, Text, Linking, Pressable, Alert, Switch, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Button } from "@mui/material";
import { colors } from "../global/Styles";

import PaymentIcon from '@mui/icons-material/Payment';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';
import LogoutIcon from '@mui/icons-material/Logout';

export default function DrawerContent(props) {

    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
            
            <View style={{backgroundColor: colors.buttons}}>
            <View style={{flexDirection: 'row', alignItems: "center", 
                          paddingLeft: 20, paddingVertical: 10}}>
                <Avatar rounded
                avatarStyle = {styles.avatar}
                size ={75}
                source = {{uri:"https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"}} />

                <View style={{marginLeft: 10}}>
                    <Text style={{fontWeight: 'bold', color: colors.cardbackground, fontSize: 18}}>John Mark</Text>
                    <Text style={{color: colors.cardbackground, fontSize: 14}}>john@royalefood.com</Text>
                </View>      
            </View>

            <View style={{flexDirection:'row', justifyContent: 'space-evenly',paddingBottom: 5}}>
            <View style={{flexDirection: 'row', marginTop: 10}}>
                    <View style={{marginLeft: 10,alignItems: "center", justifyContent: 'center'}}>
                        <Text style={{fontWeight: 'bold', color: colors.cardbackground, fontSize: 18}}>1</Text>
                        <Text style={{color: colors.cardbackground, fontSize: 14}}>My Favorites</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row', marginTop: 10}}>
                    <View style={{marginLeft: 10,alignItems: "center", justifyContent: 'center'}}>
                        <Text style={{fontWeight: 'bold', color: colors.cardbackground, fontSize: 18}}>0</Text>
                        <Text style={{color: colors.cardbackground, fontSize: 14}}>My Cart</Text>
                    </View>
                </View>
            </View>
            </View>

            <DrawerItemList {...props} />

            <DrawerItem label= "Payment"
                        icon= {({size})=>(
                        <PaymentIcon style={{color: colors.grey2}}
                         size={size} />
                        )} />

            <DrawerItem label= "Promotions"
                        icon= {({size})=>(
                        <LoyaltyIcon style={{color: colors.grey2}}
                         size={size} />
                        )} />

            <DrawerItem label= "Settings"
                        icon= {({size})=>(
                        <SettingsIcon style={{color: colors.grey2}}
                         size={size} />
                        )} />

            <DrawerItem label= "Help"
                        icon= {({size})=>(
                        <SupportIcon style={{color: colors.grey2}}
                         size={size} />
                        )} />

            </DrawerContentScrollView>

            <DrawerItem label= "Sign Out"
                        icon= {({size})=>(
                        <LogoutIcon style={{color: colors.buttons}} size ={size} />
                        )} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatar: {
        borderWidth: 4,
        borderColor: colors.cardbackground,
    }, 
})