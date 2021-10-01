import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
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
const Country = ({navigation}) => {
  const home=()=>{
    navigation.navigate("HomePage")
  }
  const  Symptoms=()=>{
    navigation.navigate("Symptoms")
  }
  const global=()=>{
    navigation.navigate("Display")
  }
  const [cases,setCases]=useState("")
  const [deaths, setDeaths]=useState('');
  const [Recovered, setRecovered]=useState('');
  const [active,setActive]=useState('')
  const [Tests,setTests]=useState('')
  useEffect(()=>{
    axios.get("https://coronavirus-19-api.herokuapp.com/countries/south%20africa").then(res=>{
      
       Datadisplay(res.data)
        
    })
    
  },[])
  const Datadisplay=(load)=>{
    let {cases}= load
    let {deaths}= load
    let{recovered}=load
    let {active}=load
    let{totalTests}=load
    setCases(cases)
    setDeaths(deaths)
    setRecovered(recovered)
    setActive(active)
    setTests(totalTests)
  }
//let color = res.data !== ""? "yellow" :'red'
//{"country":"South Africa","cases":2796405,"todayCases":0,"deaths":82914,"todayDeaths":0,"recovered":2568465,"active":145026,"critical":546,"casesPerOneMillion":46466,"deathsPerOneMillion":1378,"totalTests":16593467,"testsPerOneMillion":275720}
  return (
    <View>
      <Card style={{ backgroundColor: '#2c247c',borderBottomLeftRadius:20,borderBottomRightRadius:20 }}>
      <Ionicons name="notifications-outline" size={24} color="white" style={{paddingLeft:250}} />
        <View style={{ flexDirection: 'row',marginBottom:20 }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold',paddingLeft: 12 }}>
           Statistics
          </Text>
        </View>
        <View style={{flexDirection:"row",backgroundColor:"#703cff",height:40,width:300,borderRadius:30,marginLeft:13,marginBottom:10}}>
        <TouchableOpacity style={styles.count}><Text style={{textAlign:"center",padding:10,fontWeight:"bold"}}>My Country</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>global()}><Text style={{padding:10,marginLeft:20,fontWeight:"bold"}}> Globaly</Text></TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row',paddingLeft:70,marginBottom:20 }}>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 600,paddingLeft: 12 }}>Total</Text>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 600,paddingLeft: 12 }}>Today</Text>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 600,paddingLeft: 12 }}>Yesterday</Text>
        </View>
        <View style={{ flexDirection: 'row',paddingLeft:10 }}>
        <Card style={{width:150,borderWidth:1,backgroundColor:"orange",height:80,paddingLeft: 12}}>
        <Text style={styles.cv}>Affected(Cases)</Text>
        <Text  style={{color:"white",marginTop:25}}>{cases}</Text>
         </Card>
         <Card style={{width:150,marginLeft:10,borderWidth:1,backgroundColor:"red",height:80,paddingLeft: 12}}>
            <Text style={styles.cv}>Deaths</Text>
            <Text style={{color:"white",marginTop:25}}>{deaths}</Text>
         </Card>
      </View>
      <View style={{ flexDirection: 'row',padding:10 }}>
        <Card style={{width:95,borderWidth:1,backgroundColor:"#42c85b",height:80,paddingLeft: 10}}>
        <Text style={styles.cv}>Recovered</Text>
        <Text  style={{color:"white",marginTop:25}}>{Recovered}</Text>
         </Card>
         <Card style={{width:95,marginLeft:10,borderWidth:1,paddingLeft: 12,backgroundColor:"#3DB2FF",height:80}}>
            <Text style={styles.cv}>Active</Text>
            <Text style={{color:"white",marginTop:25}}>{active}</Text>
         </Card>
         <Card style={{width:95,marginLeft:10,borderWidth:1,paddingLeft: 12,backgroundColor:"#703cff",height:80}}>
            <Text style={styles.cv}>Total Tests</Text>
            <Text style={{color:"white",marginTop:25}}>{Tests}</Text>
         </Card>
      </View>
      </Card>
       
      <View style={{flexDirection:"row" ,marginBottom:50}}>
         
            <Text style={{paddingLeft:12,fontSize:20,fontWeight:600,marginBottom:70}} >Daily Statistics</Text>
         
      </View>
      <View style={{flexDirection:"row",backgroundColor:'#2c247c',borderRadius:20,height:100}}>
      <View style={{backgroundColor:'#2c247c',opacity:0.7,padding:20,borderRadius:20}}><Image source={i} /></View>
         <View style={{backgroundColor:'#2c247c',paddingLeft:40,borderRadius:20}}>
         <Text style={{fontSize:21,fontWeight:"bold",color:"white"}}>Do your own test!</Text>
         <Text>Follow the instructions to <br/>do your own testing</Text>
         </View>
      </View>
      <View style={{flexDirection:"row",padding:20}}>
     <TouchableOpacity onPress={()=>home()}> <Ionicons name="home" size={24} color="black" /></TouchableOpacity>
      <TouchableOpacity onPress={()=>Symptoms()}><AntDesign name="play" size={24} color="black" style={{paddingLeft:90,paddingRight:90}} /></TouchableOpacity>
      <TouchableOpacity><AntDesign name="forward" size={24} color="black" /></TouchableOpacity>
      </View>
    </View>
  );
};
export default Country;
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
  count:{
    backgroundColor:"#ffff",
    marginLeft:1,
    borderRadius:30,
    width:150

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
