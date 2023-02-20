import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Pressable } from 'react-native';

const Attlist=(props)=>{
    return(
      <View style={styles.con}>
        <View style={styles.account}></View>
        <View style={styles.det}>
        <View style={styles.namec}>
        <Text style={styles.name}>{props.name}</Text>
        </View>
        <View style={styles.mark}>
        <Pressable style={styles.button}><Text style={styles.text}>Present</Text></Pressable>
        </View>
          
        </View>
      </View>
    );
}
export default Attlist;

const styles = StyleSheet.create({
    con:{
     flexDirection:'row',
     borderBottomWidth:1,
     borderBottomColor:'white',
     marginTop:-20,
     paddingBottom:5
    },
    account:{
      height:45,
      width:45,
      marginTop:40,
      borderRadius:10,
      backgroundColor:'#c4c4c4',
      marginLeft:20,
      
    },
    
   name:{
   fontFamily:'sans-serif-medium',
   fontSize:18,
   color:'black',
   marginLeft:15,
   marginTop:43,
   flexWrap:'wrap',
   

    },
    namec:{
      width:"67%"
    },
    det:{
     flexDirection:'row',
     maxWidth:'30%',
     minWidth:'80%'
    },
   
    button:{
    //  backgroundColor:"#ffd11a",
     backgroundColor:"#009900",
     paddingTop:5,
     paddingBottom:6,
     paddingLeft:15,
     paddingRight:15,
     borderRadius:20,
     alignSelf:"flex-end",
     marginLeft:20,
     marginTop:-1
     
    },
    text:{
      color:"white",
      fontSize:15,
      fontWeight:"500",
    },
    mark:{
      marginTop:"14%",
      flexDirection:"column",
      justifyContent:"center"
    },
    
})