import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Pressable } from 'react-native';
import { TextInput } from 'react-native';
const Due=(props)=>{
    return(
        <View style={styles.remcards}>
        <View><Text  style={styles.topic}>{props.topic}</Text></View>
        <View><Text style={styles.des}>{props.des}</Text></View>
    </View>
    )
}
export default Due;

const styles=StyleSheet.create({
    remcards:{
        width:"92%",
        height:150,
        // marginRight:10,
        backgroundColor:'#fff',
        borderWidth:0.8,
        borderColor:"black",
        borderRadius:10,
        flexWrap:'wrap',
        flexDirection:'column',
        marginBottom:20,
       },
       topic:{
        fontSize:17,
        fontFamily:'sans-serif-medium',
        fontWeight:'bold',
        paddingLeft:"10%",
        paddingTop:'3%',
        maxWidth:'90%',
    
       },
       des:{
        fontSize:15,
        fontFamily:'sans-serif-medium',
        fontWeight:'100',
        paddingLeft:11,
        paddingTop:3,
        color:"#a8a8a8",
       }
})