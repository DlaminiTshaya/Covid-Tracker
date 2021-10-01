import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Platform, Image,Picker,Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import axios from 'axios'
const img =require('../distance.png')
const i =require('./downloa.png')
const mask= require('../mask.png')
const hands= require('../hand-wash.png')
const sa= require('../south-africa.png')
const usa= require('./united.png')
const API_key='https://coronavirus-19-api.herokuapp.com/all'
const HomePage = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState("");
   const Display=()=>{
    navigation.navigate("Display")
  }
  const  Symptoms=()=>{
    navigation.navigate("Symptoms")
  }
 const makeCall = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${1234567890}';
    } else {
      phoneNumber = 'telprompt:${1234567890}';
    }

    Linking.openURL(phoneNumber);
  };
  
  return (
    <View>
      <Card style={{ backgroundColor: '#2c247c',borderBottomLeftRadius:20,borderBottomRightRadius:20 }}>
      <Ionicons name="notifications-outline" size={24} color="white" style={{paddingLeft:250}} />
        <View style={{ flexDirection: 'row',marginBottom:50 }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold',paddingLeft: 12 }}>
            Covid-19
          </Text>
          <View style={{ paddingLeft: 120, marginTop: 10  }}>
             <Picker
        selectedValue={selectedValue}
        style={{ height: 25, width: 100,borderRadius:20 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="USA" value="USA" />
        <Picker.Item label="RSA" value="RSA" />
      </Picker>
    
          </View>
        </View>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 600,paddingLeft: 12 }}>
          Are you feeling sick?
        </Text>
        <Text style={{ color: 'white', fontSize: 13,marginBottom:30,paddingLeft: 12 }}>
          If you feel sick with any of coviod-19 symptoms please call or SMS us
          immediately for help
        </Text>
        <View style={{ flexDirection: 'row' ,marginBottom: 20}}>
          <TouchableOpacity style={styles.btn1} onPress={()=>makeCall()}>
            <Ionicons name="md-call-outline" size={24} color="white" />
            <Text style={{ color: 'white', paddingLeft: 10 }}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2}>
            <FontAwesome5 name="sms" size={24} color="white" />
            <Text style={{ color: 'white', paddingLeft: 10 }}>SMS</Text>
          </TouchableOpacity>
        </View>
      
      </Card>
      <Text style={{  fontSize: 20, fontWeight: 600,marginTop:30,marginBottom:30}}>Prevention(Safety Precautions)</Text>
      <View style={{flexDirection:"row" ,marginBottom:50}}>
         <Card style={{width:90,borderWidth:1}}>
         <Image  source={img} style={{width:50,height:50,borderRadius:20}}/>
            <Text style={styles.cv}>Avoid close<br/> contact</Text>
         </Card>
         <Card style={{width:90,marginLeft:10,borderWidth:1}}>
        <Image  source={hands} style={{width:50,height:50}}/>
            <Text style={styles.cv}>Clean your <br/>hands often</Text>
         </Card>
         <Card style={{width:120,marginLeft:10,borderWidth:1}}>
         <Image source={mask} style={{width:50,height:50,borderRadius:20}}/>
            <Text style={styles.cv}>Wear facemask</Text>
         </Card>
      </View>
      <View style={{flexDirection:"row",backgroundColor:'#2c247c',borderRadius:20,height:100,marginBottom:10}}>
      <View style={{backgroundColor:'#2c247c',opacity:0.7,padding:20,borderRadius:20}}><Image source={i} /></View>
         <View style={{backgroundColor:'#2c247c',paddingLeft:40,borderRadius:20}}>
         <Text style={{fontSize:21,fontWeight:"bold",color:"white"}}>Do your own test!</Text>
         <Text>Follow the instructions to <br/>do your own testing</Text>
         </View>
      </View>
      <View style={{flexDirection:"row",padding:20}}>
      <Ionicons name="home" size={24} color="black" />
     <TouchableOpacity onPress={()=>Symptoms()}> <AntDesign name="play" size={24} color="black" style={{paddingLeft:90,paddingRight:100}} /></TouchableOpacity>
      <TouchableOpacity onPress={()=>Display()}><AntDesign name="forward" size={24} color="black"  /></TouchableOpacity>
      </View>
    </View>
  );
};
export default HomePage;
const styles = StyleSheet.create({
  btn1: {
    marginLeft: 10,
    backgroundColor: 'red',
    width: 100,
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    paddingLeft: 10,
    
  },
  cv:{
    fontSize:15,
    fontWeight:600
  },
  btn2: {
    marginLeft: 90,
    backgroundColor: 'blue',
    width: 100,
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    paddingLeft: 15,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
