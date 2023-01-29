import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Calevent=(props)=>{
    return(
        <View style={styles.cards}>
            <View style={styles.eventcon}>
            <Text style={styles.event}>{props.text}</Text>
            </View>
            <View style={styles.timecon}>
            <Text style={styles.time}><AntDesign name='clockcircleo' style={{fontSize:15,textAlign:"center"}}></AntDesign>  {props.loc}</Text>
            </View>
            
        </View>
    );
}

const styles=StyleSheet.create({
    cards:{
        width:"90%",
        height:90,
        marginLeft:18,
        backgroundColor:'#e2e2e2',
        borderWidth:4,
        borderColor:"#e2e2e2",
        borderRadius:10,
        borderBottomColor:"#fcba03",
        flexWrap:'wrap',
        flexDirection:'column',
        marginBottom:10,
        
        
       },
       eventcon:{
        height:"60%",
        width:"100%"
       },
       event:{
        fontSize:15,
        fontFamily:'sans-serif-medium',
        fontWeight:'bold',
        paddingLeft:10,
        paddingTop:'2%',
        maxWidth:'90%',
        

       },
       timecon:{
        alig:"center",
       },
       time:{
        fontFamily:'sans-serif-medium',
        fontWeight:'200',
        paddingLeft:10,
        paddingTop:5,
        

       }
});
export default Calevent;