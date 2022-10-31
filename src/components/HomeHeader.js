import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { colors, parameters } from '../global/Styles';

import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

export default function HomeHeader() {

    const navigation = useNavigation()

    return(
        <View style={styles.header}>
            <View style={{alignItems: "center", justifyContent: "center", marginLeft: 15}} >
                <Button onPress={() => {navigation.toggleDrawer()}}>
                <MenuIcon style={{color: colors.cardbackground}} size={32} />
                </Button>
                
            </View>

            <View style={{alignItems: "center", justifyContent: "center"}}>
                <Text style={{color: colors.cardbackground, fontSize: 25, fontWeight: 'bold'}}>RoyaleFood</Text>
            </View>

            <View style={{alignItems: "center", justifyContent: "center", marginRight: 15}}>
            
            <Badge badgeContent={0} color="secondary">
                <ShoppingCartIcon style={{color: colors.cardbackground}} size={32} />
            </Badge>
            
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: colors.buttons,
        height:parameters.headerHeight,
        justifyContent: 'space-between',
    }
});


