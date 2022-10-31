import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions, Button, } from "react-native";
import React, { useState, useEffect } from 'react';

export default function BusinessConsole() {

    return(
        <View style={styles.container}>
            <Text>Welcome to Business console</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },
})