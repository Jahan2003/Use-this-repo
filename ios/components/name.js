import AntDesign from 'react-native-vector-icons/AntDesign'
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Name(){
  const navigation=useNavigation();
    return(
      <View style={styles.con}>
        <View style={styles.account}></View>
        <View style={styles.det}>
          <View style={styles.info}>
          <TouchableOpacity onPress={()=>navigation.navigate("Unknown")}>
          <Text style={styles.name} >Unknown xy</Text>
          <Text style={styles.cls}>Year: 2  Sec: A </Text>
          </TouchableOpacity>
          </View>
          <View style={styles.stat}>
          
          <View style={styles.status}><TouchableOpacity><AntDesign name='close' style={{fontSize:30}}></AntDesign></TouchableOpacity></View>
          

          
          <View style={styles.status1}><TouchableOpacity><AntDesign name='check' style={{fontSize:30}}></AntDesign></TouchableOpacity></View>
          
          </View>
         

        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    con:{
     flexDirection:'row',
     borderBottomWidth:1,
     borderBottomColor:'white',
     marginTop:-20,
     paddingBottom:20
    },
    account:{
      height:50,
      width:50,
      marginTop:40,
      borderRadius:50,
      backgroundColor:'#dcdcdd',
      marginLeft:15,
      
    },
    
   name:{
   fontFamily:'sans-serif-medium',
   fontSize:20,
   color:'white',
   marginLeft:20,
   marginTop:35,
   flexWrap:'wrap'

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
    status1:{
      height:40,
      width:40,
      marginTop:40,
      borderRadius:50,
      backgroundColor:'#dcdcdd',
      alignItems:'center',
      justifyContent:'center'
      
    },
    det:{
     flexDirection:'row',
     justifyContent:'space-between'
    },
    info:{
     maxWidth:'60%',
     minWidth:'50%'
    },
    stat:{
      flexDirection:'row',
      marginLeft:20,
      maxWidth:'50%',
      alignItems:'center',
      justifyContent:'flex-end'
    }
})