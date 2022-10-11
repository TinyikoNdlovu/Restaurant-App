import React from "react";
import { Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OnBoardScreen = () => {

    const navigation = useNavigation()

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{height: 400}}>
                <Image style={{width: '100%', resizeMode: 'contain', top: -200}} source={require("../../assets/onboardImage.png")} />
            </View>
            <View style={styles.textContainer}>
            <View>
                <Text style={styles.txtWords}>Healthy and Delicious Food</Text>
                <Text style={styles.slogan}>We help you find best Healty and delicious food</Text>
            </View>
            <View style={styles.indicatorContainer}>
                <View style={styles.currentIndicator}></View>
                <View style={styles.indicator}></View>
                <View style={styles.indicator}></View>
            </View>
            <View style={{ height: 50, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={styles.button}>
                <Text style={{fontWeight: 'bold', fontSize: 22}}>Get Started</Text>
            </TouchableOpacity>
            </View>
            </View>
            
        </SafeAreaView>
    )
}

export default OnBoardScreen

const styles = StyleSheet.create ({
    textContainer: {
        flex: 1,
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        paddingBottom: 40,
    },
    txtWords: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    slogan: {
        marginTop: 20,
        fontSize: 18, 
        textAlign: 'center',
        color: 'grey',
    },
    indicatorContainer: {
        height: 50,
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    currentIndicator: {
        height: 12,
        width: 30,
        borderRadius: 10,
        backgroundColor: '#e36888',
        marginHorizontal: 5,
    },
    indicator: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: 'grey',
        marginHorizontal: 5,
    }, 
    button: {
        marginTop: 50,
        height: 40,
        width: 200,
        backgroundColor: '#e36888',
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    }, 
});