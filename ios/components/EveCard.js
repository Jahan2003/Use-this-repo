import React,{Component} from "react";
import { StyleSheet, Text, View } from 'react-native';

const EveCard=(props)=>{
    return(
        <View style={styles.container}>
        <View style={styles.remcards}>
            <Text style={styles.event}>{props.text}</Text>
            <Text style={styles.time}>{props.loc}</Text>
        </View>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
     flex:1,
     alignItems:"center",
    },
    remcards:{
        width:360,
        height:260,
        marginTop:50,
        backgroundColor:'#dcdcdd',
        borderRadius:10,
        flexWrap:'wrap',
        flexDirection:'column',

       },
       event:{
        fontSize:19,
        fontFamily:'sans-serif-medium',
        fontWeight:'bold',
        paddingLeft:10,
        paddingTop:'14%',
        maxWidth:'90%',

       },
       time:{
        fontFamily:'sans-serif-medium',
        fontWeight:'200',
        paddingLeft:10,
        paddingTop:5

       }
});
export default EveCard;