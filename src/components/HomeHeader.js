import React from 'react';
import { View, Text, StyleSheet } from 'react-native-animatable';
import { colors, parameters } from '../global/Styles';

import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

export default function HomeHeader() {

    const BadgeIcon = Badge(0)(ShoppingCartIcon)

    return(
        <View style={styles.header}>
            <View style={{alignItems: "center", justifyContent: "center", marginLeft: 15}}>
                <MenuIcon onPress={() => {navigation.toggleDrawer()}} style={{color: colors.cardbackground}} size={32} />
            </View>

            <View style={{alignItems: "center", justifyContent: "center"}}>
                <Text style={{color: colors.cardbackground, fontSize: 25, fontWeight: 'bold'}}>RoyaleFood</Text>
            </View>

            <View>
            <ShoppingCartIcon style={{color: colors.cardbackground}} size={32} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: colors.buttons,
        height:parameters.headerHeight,
    }
});


