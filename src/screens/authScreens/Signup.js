import { View, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

import { authentication } from "../../components/firebase-Config";
import {colors} from '../../global/Styles';

const Signup = () => {
    
    const navigation = useNavigation()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

const RegisterUser = async () => {

        await createUserWithEmailAndPassword(authentication, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            alert('Successfully sign up!');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        })     
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.container}>
            
            <Text style={{fontWeight: 'bold', fontSize: 23,color: '#f29bb3'}}>
                Signup Here!!</Text>
                <View style={{marginTop: 40}}>
                    <TextInput style={styles.TextInput}
                    placeholder= "First Name"
                    value={firstName}
                    onChangeText={(Text) => setFirstName(Text)}
                    autoCorrect={false} />
                    <TextInput style={styles.TextInput}
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={(Text) => setLastName(Text)}
                    autoCorrect={false} />
                    <TextInput style={styles.TextInput}
                    placeholder= "Email"
                    value={email}
                    onChangeText={(Text) => setEmail(Text)}
                    autoCapitalize= "none"
                    autoCorrect={false}
                    keyboardType="email-address" />
                    <TextInput style={styles.TextInput}
                    placeholder= "Password"
                    value={password}
                    onChangeText={(Text) => setPassword(Text)}
                    autoCapitalize= "none"
                    autoCorrect={false}
                    secureTextEntry= {true} />
                </View>
                <TouchableOpacity
                onPress={() => {RegisterUser(firstName, lastName, email, password), navigation.navigate('Login')}}
                style={styles.button} >
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>Signup</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={{marginTop: 20}}>
                <Text style={{fontWeight: 'bold', fontSize: 16, color:colors.grey3}}>
                    Already have an account? Login Now
                </Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
        
    );
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
    },
    TextInput: {
        width: 300,
        height: 35,
        fontSize: 12,
        borderWidth: 1,
        borderColor: '#000',
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 10,
        paddingLeft: 15,
        textAlign: 'center',
    },
    button: {
        marginTop: 25,
        height: 40,
        width: 160,
        backgroundColor: '#e36888',
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
});