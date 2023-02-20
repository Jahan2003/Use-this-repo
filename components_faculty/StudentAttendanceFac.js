import React,{Component} from "react";
import { View,Text,Button,TextInput,StyleSheet } from "react-native";
import { Pressable } from "react-native";
import Attlist from "./attlist";

function StudentAttendanceFac(){
   return(
     <View style={styles.class}>
      <View>
      <Attlist name="Harish"/>
      </View>
     </View>
   );
}
export default StudentAttendanceFac;

const styles = StyleSheet.create({
   class:{
    flex:1,
     backgroundColor:"white"
   }, 
});