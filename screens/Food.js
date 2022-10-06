import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Button, } from "react-native";
import  React, {useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { authentication } from "../components/firebase-Config";

// import firestore from '@react-native-firebase/firestore';

const Food = () => {

    const navigation = useNavigation()
    const [name, setName] = useState('')

   return (
    <View>
      <SafeAreaView style={{alignItems: 'left', justifyContent: 'left', marginTop: 50, marginLeft: 60}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>
          Choose healthy food here
        </Text>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Drinks')}
                style={styles.button}>
                  <Image style={{width: '50%', resizeMode: 'contain'}} source={require("../assets/drinks.jpg")} />
                <Text style={{fontWeight: 'bold', fontSize: 22}}>Drinks</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
    
  );
}

export default Food

const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    height: 100,
    width: 200,
    backgroundColor: '#fff',
    color: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
},  
});
  