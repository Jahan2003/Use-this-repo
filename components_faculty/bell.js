import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Pressable } from 'react-native';
import Notele from './notele';

function Notifications(){
    return(
        <View style={styles.con}>
            <View style={styles.sec}>
                <Notele subtopic="DBMS" head="Module 1.1" task="Complete the record works"/>
                <Notele subtopic="DBMS" head="Module 1.1" task="Complete the record works"/>
                <Notele subtopic="DBMS" head="Module 1.1" task="Complete the record works"/>
            </View>
        </View>
       );
}

export default Notifications;

const styles=StyleSheet.create({
    con:{
        backgroundColor:"white",
        flex:1,
    },
    sec:{
        alignItems:"center",
        flex:1
    }
   

})