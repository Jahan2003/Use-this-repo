import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Pressable } from 'react-native';
import { TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Materials=(props)=>{
    return(
        <View style={styles.remcards}>
        <View><Text  style={styles.topic}>{props.topic}</Text></View>
        <View><Text style={styles.des}>{props.des}</Text></View>
        <View style={styles.bcon}>
        <Pressable style={styles.click}>
          <Text style={styles.tex}>Upload    <AntDesign name="upload" style={{fontSize:18}} color="white"></AntDesign></Text>
          
        </Pressable>
        </View>
        
    </View>
    )
}
export default Materials;

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
       bcon:{
        marginLeft:10
       },
       des:{
        fontSize:15,
        fontFamily:'sans-serif-medium',
        fontWeight:'100',
        paddingLeft:15,
        paddingTop:3,
        color:"#a8a8a8",
       },
        click:{
        paddingTop:8,
        paddingBottom:8,
        marginLeft:0,
        borderRadius:30,
        backgroundColor:'black',
        alignItems:"center",
        marginTop:20,
        marginBottom:18
        },
        tex:{
        color:"white",
        paddingRight:"10%",
        paddingLeft:"10%",
        fontFamily:'sans-serif-medium',
        fontSize:15,


        },
})