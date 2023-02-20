import { useNavigation } from '@react-navigation/native';
import React,{Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


function CacardFac(props){
    const navigation = useNavigation();
    return(
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate(props.Name)}>
             <View>
               <View style={styles.cards}></View>
               <View style={styles.text}><Text style={styles.cname}>{props.text}</Text></View>
             </View>
            </TouchableOpacity>
        
        </View>
     
    );
}
export default CacardFac;

const styles=StyleSheet.create({
    cards:{
     width:115,
     height:115,
     marginRight:15,
     backgroundColor:'#dcdcdd',
     borderTopStartRadius:10,
     borderTopEndRadius:10
    },
    text:{
     alignItems:'center',
     marginRight:10,
     width:115,
     height:35,
     backgroundColor:'#333533',
     borderBottomEndRadius:10,
     borderBottomStartRadius:10,
     padding:5
 
    },
    cname:{
     color:'white'
    }
 });