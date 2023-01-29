import { StatusBar } from 'expo-status-bar';
import AntDesign from 'react-native-vector-icons/AntDesign'
import React,{Component} from 'react';
import { StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import Name from './name';
import { SafeAreaView } from 'react-native';




class ODList extends Component{
  render(){

    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.invite}></View>
      <View style={styles.det}>
      <View style={styles.btn}><TouchableOpacity><Text style={styles.req}>Requests</Text></TouchableOpacity></View>
      <View style={styles.btn1}><TouchableOpacity><Text style={styles.od}>On duty Students</Text></TouchableOpacity></View>
      </View>
      <ScrollView vertical={true} style={styles.list}>
      <Name/>
      <Name/>
      <Name/>
      <Name/>
    </ScrollView>
    </SafeAreaView>
  );
}
}
export default ODList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202120',
    marginLeft:0
  },
  invite:{
   marginTop:20,
   marginLeft:10,
   marginBottom:25,
   flexDirection:'row'
  },
invitation:{
   fontFamily:'sans-serif-medium',
   fontSize:22,
   color:'white',
   fontWeight:'bold',
   
},
det:{
 flexDirection:'row',
 marginBottom:10
},
btn:{
 marginRight:10,
 marginLeft:15,
 borderWidth:2,
 borderColor:'white',
 borderRadius:50,
 paddingTop:5,
 paddingBottom:5,
 paddingLeft:15,
 paddingRight:15
},
btn1:{
  MarginRight:0,
  MarginLeft:15,
  borderWidth:2,
  borderColor:'white',
  borderRadius:50,
  paddingTop:5,
  paddingBottom:5,
  paddingLeft:15,
  paddingRight:15
},
req:{
  fontFamily:'sans-serif-medium',
  fontSize:15,
  color:'white',
  
  
},
od:{
  fontFamily:'sans-serif-medium',
  fontSize:16,
  color:'white'
},
back:{
 marginLeft:5
},


});