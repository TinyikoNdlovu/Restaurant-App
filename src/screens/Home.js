import 'react-native-gesture-handler';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Button, } from "react-native";
import  React, {useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { authentication } from "../components/firebase-Config";
import { Icon } from "react-native-vector-icons/MaterialIcons";

// import firestore from '@react-native-firebase/firestore';

const Home = ({signOut}) => {

    const navigation = useNavigation()
    const [name, setName] = useState('')

   return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.container}>
        <View>
          <Text>Hello,</Text>
          <Text>Tinyiko</Text>
          <Image />
        </View>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>
          Categories
        </Text>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
                onPress={() => navigation.navigate('Food')}
                style={styles.button}>
                  
                <Text style={{fontWeight: 'bold', fontSize: 22}}>Food</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Drinks')}
                style={styles.button}>
                  
                <Text style={{fontWeight: 'bold', fontSize: 22}}>Drinks</Text>
            </TouchableOpacity>
        </View>
        </View>
      </SafeAreaView>
  );
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
  },
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
  