import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Pressable } from 'react-native';
import { TextInput } from 'react-native';
const Title=(props)=>{
    return(
        <View style={styles.remcards}>
        <View><Text  style={styles.topic}>{props.topic}</Text></View>
        <TextInput
        placeholder="Enter the title here"
        multiline={true}
        numberOfLines={5}
        style={styles.des}
      />
    </View>
    )
}
export default Title;

const styles=StyleSheet.create({
    remcards:{
        width:"92%",
        height:90,
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
        paddingLeft:"5%",
        paddingTop:'3%',
        maxWidth:'90%',
    
       },
       des:{
        alignItems: 'center',
        height:20,
        width: '80%',
        backgroundColor: 'white',
        textAlignVertical:'top',
        fontSize:15,
        fontFamily:'sans-serif-medium',
        fontWeight:'100',
        paddingLeft:14,
        paddingTop:3,
       }
})