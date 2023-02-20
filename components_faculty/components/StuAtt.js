
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View ,Pressable} from 'react-native';
import DropdownScreen from './Dropdown';
import Abname from './abname';
import { ScrollView } from 'react-native-gesture-handler';

function Stuatt(){
    return(
     <View style={styles.con}>
        <DropdownScreen></DropdownScreen>
        <View style={styles.countName}>
            <View style={styles.st}>
            <Text style={styles.name}>Total Strength</Text>
            <Text style={styles.tcount}>0</Text>
            </View>
            <View style={styles.ab}>
            <Text style={styles.name}>Absentees</Text>
            <Text style={styles.acount}>0</Text>
            </View>
            
            <View style={styles.od}>
            <Text style={styles.name}>On-Duty</Text>
            <Text style={styles.odcount}>0</Text>
            </View>
            
        </View>
        <ScrollView>
        <View style={styles.Abs}>
            <Text style={styles.absent}>Absentees List</Text>
        </View>
        <View style={styles.ablist}>
            <Abname name="Unknown A"/>
            <Abname name="Unknown B"/>
            <Abname name="Unknown C"/>
            <Abname name="Unknown D"/>
        </View>
        <View style={styles.Abs}>
            <Text style={styles.absent}>On-Duty List</Text>
        </View>
        <View style={styles.odlist}>
        <Abname name="Unknown E"/>
            <Abname name="Unknown F"/>
            <Abname name="Unknown G"/>
            <Abname name="Unknown H"/>
        </View>
       </ScrollView>
        </View>
    );
}
export default Stuatt;

const styles = StyleSheet.create({
    con:{
   backgroundColor:"white",
    flex:1,
    },
  countName:{
    marginLeft:0,
    marginTop:10,
    flexDirection:"row",
  },
  name:{
    fontFamily:'sans-serif-medium',
    fontSize:17,
    fontWeight:"bold",
    marginLeft:20,
    marginRight:10,
  },
  tcount:{
    marginLeft:60,
    marginTop:10,
    fontFamily:'sans-serif-medium',
    fontSize:18,
  },
  acount:{
    marginLeft:50,
    marginTop:10,
    fontFamily:'sans-serif-medium',
    fontSize:18,
  },
  odcount:{
    marginLeft:40,
    marginTop:10,
    fontFamily:'sans-serif-medium',
    fontSize:18,
  },
  Abs:{
    marginTop:25
  },
  absent:{
    fontFamily:'sans-serif-medium',
    fontSize:20,
    fontWeight:"bold",
    marginLeft:20,
    marginRight:10,
  },
  ablist:{
    marginBottom:0,
  }
  
  
})