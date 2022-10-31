import React from "react";
import { Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {colors} from '../../global/Styles';

import Swiper from 'react-native-swiper'

export default function OnBoardWelcome() {

    const navigation = useNavigation()

    return(
        <SafeAreaView style={{backgroundColor: 'white'}}>
            <View style={{flex:3, paddingTop: 20, alignItems:'center',justifyContent: 'flex-start'}}>
            <Text style={styles.discover}>Discover restaurant's</Text>
            <Text style={styles.discover}>in your area@</Text>
            </View>

            <View style={{flex: 6,justifyContent: 'center'}}>
            <Swiper autoplay ={true}>
                <View style={styles.slide1}>
                <Image source={require("../../../assets/slide1.jpg")} style={{height: '100%',width: '100%', resizeMode: 'stretch'}} />
                </View>
                <View style={styles.slide2}>
                <Image source={require("../../../assets/slide2.jpg")} style={{height: '100%',width: '100%', resizeMode: 'stretch'}} />
                </View>
                <View style={styles.slide3}>
                <Image source={require("../../../assets/slide3.jpg")} style={{height: '100%',width: '100%', resizeMode: 'stretch'}} />
                </View>
                <View style={styles.slide3}>
                <Image source={require("../../../assets/slide4.jpg")} style={{height: '100%',width: '100%', resizeMode: 'stretch'}} />
                </View>
                
            </Swiper>
            </View>

            <View style={{flex: 4}}></View>

            <View style={styles.textContainer}>
            <View>
                <Text style={styles.txtWords}>Welcome To Royale Food Restaurants</Text>
                <Text style={styles.txtWords}>Healthy and Delicious Food</Text>
                <Text style={styles.slogan}>We help you find best Healthy and delicious food!!!</Text>
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
                <Text style={{fontWeight: 'bold', fontSize: 16}}>Get Started</Text>
            </TouchableOpacity>
            </View>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    slide1: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#9DD6EB', 
    },
    slide2: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#97CAE5',       
    },
    slide3: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#92BBD9',            
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        paddingBottom: 40,
    },
    discover: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.buttons,
    },
    txtWords: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.grey1,
    },
    slogan: {
        marginTop: 16,
        fontSize: 16, 
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.grey3,
        marginBottom: 30,
    },
    indicatorContainer: {
        height: 50,
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50,
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
        marginBottom: 30,
        height: 40,
        width: 160,
        backgroundColor: '#e36888',
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    }, 
});