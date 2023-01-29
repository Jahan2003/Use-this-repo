
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Abname=(props)=>{
    return(
      <View style={styles.con}>
        <View style={styles.account}></View>
        <View style={styles.det}>
          <View style={styles.info}>
          <Text style={styles.name}>{props.name}</Text>
          </View>
        </View>
      </View>
    );
}
export default Abname;

const styles = StyleSheet.create({
    con:{
     flexDirection:'row',
     borderBottomWidth:1,
     borderBottomColor:'white',
     marginTop:-20,
     paddingBottom:5
    },
    account:{
      height:40,
      width:40,
      marginTop:40,
      borderRadius:10,
      backgroundColor:'#c4c4c4',
      marginLeft:20,
      
    },
    
   name:{
   fontFamily:'sans-serif-medium',
   fontSize:20,
   color:'black',
   marginLeft:20,
   marginTop:"36%",
   flexWrap:'wrap',
   

    },
    cls:{
      fontFamily:'sans-serif-medium',
      fontSize:15,
      color:'white',
      marginLeft:20,
    },
    status:{
      height:40,
      width:40,
      marginTop:40,
      borderRadius:50,
      backgroundColor:'#dcdcdd',
      marginRight:15,
      alignItems:'center',
      justifyContent:'center'
      
    },
    det:{
     flexDirection:'row',
     justifyContent:'space-between'
    },
    info:{
   
    },

})