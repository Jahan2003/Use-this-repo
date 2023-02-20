import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Remcard=(props)=>{
    return(
        <View style={styles.remcards}>
            <Text style={styles.event}>{props.text}</Text>
            <Text style={styles.time}>{props.loc}</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    remcards:{
        width:250,
        height:160,
        marginRight:10,
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
export default Remcard;