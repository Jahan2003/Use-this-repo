
import React,{Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
const Attendance=(props)=>{
    const navigation=useNavigation();
    return(
      <View style={styles.con}>
        
               <View style={styles.remcards}>
                
            <Text style={styles.event}>Department of Computer Science and Engineering</Text>
            <View style={styles.abs}>
            <Text style={styles.Absentees}>Total No. of Absentees</Text>
            <Text style={styles.Absenteescount}>0</Text>
            </View>
            <View style={styles.od}>
            <Text style={styles.onduty}>Total No. of On-Duty</Text>
            <Text style={styles.ondutycount}>0</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Student Attendance")}>
            <View style={styles.view}>
                <Text style={styles.det}> View detailed Attendance</Text>
                <Text style={styles.arrow}><AntDesign name='arrowright' style={{fontSize:14}}></AntDesign></Text>
            </View>
            </TouchableOpacity>
            
            
        </View>
      </View>
    );
}
export default Attendance;

const styles=StyleSheet.create({
   con:{
    flex:1,
    backgroundColor:"white",
    alignItems:"center"
   },
   remcards:{
    marginTop:50,
    width:"95%",
    height:"45%",
    backgroundColor:'#dcdcdd',
    borderRadius:10,
    flexWrap:'wrap',
    flexDirection:'column',

   },
   event:{
    fontSize:20,
    fontFamily:'sans-serif-medium',
    fontWeight:'bold',
    paddingLeft:10,
    paddingTop:'5%',
    maxWidth:'90%',

   },
    Absentees:{
    fontFamily:'sans-serif-medium',
    fontSize:17,
    fontWeight:'bold',
    paddingLeft:"25%",
    paddingTop:25,
},
Absenteescount:{
    fontFamily:'sans-serif-medium',
    fontSize:18,
    fontWeight:'bold',
    paddingLeft:"50%",
    paddingTop:15,
},
onduty:{
    fontFamily:'sans-serif-medium',
    fontSize:17,
    fontWeight:'bold',
    paddingLeft:"25%",
    paddingTop:25,
},
ondutycount:{
    fontFamily:'sans-serif-medium',
    fontSize:18,
    fontWeight:'bold',
    paddingLeft:"50%",
    paddingTop:15,
},
det:{
    fontFamily:'sans-serif-medium',
    fontSize:14,
    fontWeight:'0',
    paddingLeft:"20%",
},
od:{
    marginBottom:40,
},
view:{
    flexDirection:"row"
},
arrow:{
    marginLeft:5,
    marginTop:3
}
})