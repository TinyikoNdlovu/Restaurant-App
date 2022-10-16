import { View, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import {colors} from '../../global/Styles';

import GoogleButton from 'react-google-button'
import { signInWithPopup } from "firebase/auth";
import { authentication, provider } from "../../components/firebase-Config";
import FacebookIcon from '@mui/icons-material/Facebook';

const Login = () => {
    
    const navigation = useNavigation()
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState([]);

const SignInUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
    .then((userCredential) => {
        setIsSignedIn(true);
        const user = userCredential.user;

        alert('Successfully signed in!');
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    });    
    }

    function googleSignUp () {
        signInWithPopup(authentication, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
    
        // name = user.displayName
        //email = user.email
        //photo = user.photoURL
        alert(user.email);
        navigation.navigate('Home')
    
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
        // ...
      });
      }

   function signOut () {
    signOut(authentication).then(() => {
        // Sign-out successful.
        alert('Sign-out successful.');
      }).catch((error) => {
        // An error happened.
        alert(error);
      });
  }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.container}>
            <Text style={{fontWeight: 'bold', fontSize: 26, color: '#f29bb3', marginBottom: 10}}>Login</Text>
            <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 13, color: colors.grey3}}>Please enter the email and password</Text>
            <Text style={{fontWeight: 'bold', fontSize: 13, color: colors.grey3}}>registered with your account!!</Text>
            </View>
            <View style={{marginTop: 40}}>
                <TextInput style={styles.TextInput}
                placeholder= "Email"
                value={email}
                onChangeText={(Text) => setEmail(Text)}
                autoCapitalize= "none"
                autoCorrect={false} />
                <TextInput style={styles.TextInput}
                placeholder= "Password"
                value={password}
                onChangeText={(Text) => setPassword(Text)}
                autoCapitalize= "none"
                autoCorrect={false}
                secureTextEntry={true} />
            </View>
            <TouchableOpacity
                onPress={() => {SignInUser(email, password), navigation.navigate('Home')}}
                style={styles.button}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPassword')}
                style={{marginTop: 20}}>
                <Text style={{fontWeight: 'bold', fontSize: 16, color: colors.grey3,textDecorationLine: 'underline', marginBottom: 10}}>
                    Forgot Password ?
                </Text>
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>OR</Text>
            <GoogleButton type="dark" onClick={googleSignUp} style={styles.googleButton} />
            <TouchableOpacity style={styles.facebookButton} >
            <FacebookIcon color="#fff" />
            <Text style={{fontWeight: 'bold', fontSize: 16, marginLeft: 10}}>Sign in with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Signup')}
                style={{marginTop: 20}}>
                <Text style={{fontWeight: 'bold', fontSize: 16, color: colors.grey3}}>
                    Don't have an account? Signup Now
                </Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}

export default Login

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
    googleButton: {
        marginTop: 20,
        color: '#000',
    },
    facebookButton: {
        flexDirection: 'row',
        marginTop: 25,
        height: 40,
        width: 250,
        backgroundColor: '#e36888',
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
})