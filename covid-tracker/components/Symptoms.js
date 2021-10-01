import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { Card } from 'react-native-paper';
const img =require('../distance.png')
const i =require('./downloa.png')
const mask= require('../mask.png')
const hands= require('../hand-wash.png')
const sa= require('../south-africa.png')
const usa= require('./united.png')
const Symptoms = ({navigation}) => {
  const home=()=>{
    navigation.navigate("HomePage")
  }
  const  Display=()=>{
    navigation.navigate("Display")
  }
  Symptoms
  return (
    <View>
    <View style={{flexDirection:"row",marginBottom:60,marginTop:20}}>
    <View>
    <Text>Covid-19</Text>
    <Text style={{fontSize: 20, fontWeight: 'bold',marginLeft:10}}>Symptoms</Text>
     <View style={{flexDirection:"row",marginLeft:10}}>
    <View style={{height:2,width:60,backgroundColor:"black"}}></View>
    <View style={{height:2,width:90,backgroundColor:"#ffc76b"}}></View>
    </View>
    <Text style={{fontSize: 12, fontWeight: 'bold',marginLeft:1}}>These Symptoms may appear 2-14days after exposure</Text>
   
    
    </View>
     <FontAwesome5 name="search" size={24} color="black" />
      </View>  
      
        <View style={{ flexDirection: 'row',paddingLeft:10,marginBottom:20 }}>
        <Card style={{width:140,height:150, backgroundColor:"#ffc76b"}}>
        <Text style={{fontSize: 20, fontWeight: 'bold',color:"white",paddingLeft:12}}>Cold</Text>
        <Text style={{color:"white",paddingLeft:12}}>The severity of COVID-19 Symptoms can range from very mild to serve</Text>
         </Card>
         <Card style={{width:150,marginLeft:10,height:150}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Dry Cough</Text>
            <Text>It appears to spread from person to person among those in close contact</Text>
         </Card>
      </View>
      <View style={{ flexDirection: 'row',padding:10 }}>
        <Card style={{width:135,height:180}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Fever</Text>
        <Text>People who are older or have existing chronic medical conditions such as heart and lung disease</Text>
         </Card>
         <Card style={{width:150,marginLeft:10,height:180}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Breathlessness</Text>
            <Text>Excited or tense often to the point of holding the breath</Text>
         </Card>
         
      </View>
 
      
         
       
         
      
   
      <View style={{flexDirection:"row",padding:20}}>
      <TouchableOpacity onPress={()=>home()}><Ionicons name="home" size={24} color="black" /></TouchableOpacity>
      <AntDesign name="play" size={24} color="black" style={{paddingLeft:90,paddingRight:100}} />
      <TouchableOpacity onPress={()=>Display()}><AntDesign name="forward" size={24} color="black"  /></TouchableOpacity>
      </View>
    </View>
  );
};
export default Symptoms;
const styles = StyleSheet.create({
  btn1: {
    marginLeft: 10,
    backgroundColor: 'green',
    width: 90,
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    paddingLeft: 10,
    
  },
  cv:{
    fontSize:15,
    fontWeight:600,
    color:"white"
  },
  btn2: {
    marginLeft: 90,
    backgroundColor: 'green',
    width: 90,
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
