import 'react-native-gesture-handler';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView,FlatList, Pressable, Image, Button, } from "react-native";
import  React, {useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { authentication } from "../components/firebase-Config";

import { colors, parameters } from '../../src/global/Styles';
import {filterData} from '../global/Data'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';
import TuneIcon from '@mui/icons-material/Tune';

// import firestore from '@react-native-firebase/firestore';

export default function Home({signOut}) {

  const[delivery, setDelivery] = useState(true)
  const [indexCheck, setIndexCheck] = useState('0')

    const navigation = useNavigation()
    const [name, setName] = useState('')

   return (
  
        <View style={styles.container}>
          
          <ScrollView stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={true} >

        <View>

        <View style={{marginTop:10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
        <TouchableOpacity
                onPress={() => setDelivery(false) }
                style={styles.buttonDelivery}>
                  <View style={{...styles.buttonDelivery, backgroundColor: delivery?colors.buttons : colors.grey5}}>
                  <Text style={{fontWeight: 'bold', fontSize: 16}}>Delivery</Text>
                  </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setDelivery(true) }
                style={styles.buttonPickup}>
                  <View style={{...styles.buttonPickup, backgroundColor: delivery?colors.grey5 : colors.buttons}}>
                  <Text style={{fontWeight: 'bold', fontSize: 16}}>Pick Up</Text>
                  </View>
            </TouchableOpacity>
        </View>
        </View>

        <View style={styles.filterView}>
        <View style={styles.addressView}>
          <View style={{flexDirection:'row', alignItems: 'center', paddingLeft: 10}}>
            <LocationOnIcon style={{color: '#111'}} />
            <Text style={{marginLeft: 5}}>4772 Basambilo Circle</Text>  
          </View>

          <View style={styles.clockView}>
            <ScheduleIcon style={{color: '#111'}} />
            <Text style={{marginLeft: 5}}>Now</Text>  
          </View>

        </View>

        <View>
        <TuneIcon style={{color: '#111'}} /> 
        </View>
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Categories</Text>
        </View>

        <View>
          <FlatList horizontal={true}
          showsHorizontalScrollIndicator={false} 
          data={filterData}
          keyExtractor= {(item)=> item.id}
          extraData = {indexCheck}
          renderItem = {({item, index}) => (
            <Pressable onPress={() => (setIndexCheck(item.id))}>
              <View style={indexCheck === item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
                <Image style={{height: 40, width: 40, borderRadius: 20}}
                source={item.image} />

                <View>
                  <Text style={indexCheck === item.id ?{...styles.smallCardTextSelected}: {...styles.smallCardText}}>{item.name}</Text>
                </View>
              </View>
            </Pressable>
          )} />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Free Delivery now</Text>
        </View>

        </ScrollView>

        </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  buttonDelivery: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    height: 35,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
},  
buttonPickup: {
  height: 35,
  width: 130,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 15,
},
addressView: {
  flexDirection: 'row',
  backgroundColor: colors.grey5, 
  borderRadius: 15, 
  paddingVertical: 3,
  justifyContent: 'space-between',
  paddingHorizontal: 20,
},
filterView: {
  flexDirection: 'row', 
  alignItems: 'center', 
  justifyContent: 'space-evenly', 
  marginHorizontal: 10, 
  marginVertical: 10,
},
clockView: {
  flexDirection:'row', 
  alignItems: 'center', 
  marginLeft: 20, 
  backgroundColor: colors.cardbackground,
  borderRadius: 15,
  paddingHorizontal: 5,
  marginRight: 20,
},
headerText:{
  color: colors.grey2,
  fontSize: 24,
  fontWeight: 'bold',
  paddingLeft: 10,
},
headerTextView: {
  backgroundColor: colors.grey5,
  paddingVertical: 3,
},
smallCard: {
  borderRadius: 30,
  backgroundColor: colors.grey5,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 5,
  width: 80,
  margin: 10,
  height: 100,
},
smallCardSelected: {
  borderRadius: 30,
  backgroundColor: colors.buttons,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 5,
  width: 80,
  margin: 10,
  height: 100,
},
smallCardTextSelected: {
  fontWeight: 'bold',
  color: colors.cardbackground,
},
smallCardText: {
  fontWeight: 'bold',
  color: colors.grey2,
},
});
  