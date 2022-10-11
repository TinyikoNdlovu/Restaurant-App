import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import {colors, parameters} from "../global/Styles"

export default function Header() {
    
    return(
        <View style={styles.header}></View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
    },
})

// const Header = (props) => {
//     return (
//         <View style={{marginLeft: 15}}>
//             <Text style={{fontWeight: 'bold', fontSize: 28}}>
//                 {props.name}
//             </Text>
//         </View>
//     )
// }

// export default Header