import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
export default class Regform extends React.Component {
    render(){
  return (
    
    <View style={styles.Regform}>
      <Text style={styles.header}>On-Duty Application Form</Text>

      <Text style={styles.header1}>Name :</Text>
      <TextInput style={styles.textinput} placeholder=" Enter Your name"
      underlineColorAndroid={'transparent'} />

        <Text style={styles.header1}>Registration Number :</Text>
      <TextInput style={styles.textinput} placeholder=" Enter Your Registration Number "
      underlineColorAndroid={'transparent'} />

      <Text style={styles.header1}>E-mail ID :</Text>
      <TextInput style={styles.textinput} placeholder=" Enter Your Email_id "
      underlineColorAndroid={'transparent'} />

      <Text style={styles.header1}>Class :</Text>
      <TextInput style={styles.textinput} placeholder=" Enter Your class"
      underlineColorAndroid={'transparent'} />


      <Text style={styles.header1}>Reason for On-Duty:</Text>
       <TextInput style={styles.textinput} placeholder=" Enter the Reason for On-Duty"
      underlineColorAndroid={'transparent'} />
      
<Text style={styles.header1}>Date :</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.btntext}> Apply </Text>
      </TouchableOpacity>


    </View>
  );
}
}

const styles = StyleSheet.create({
  Regform: {
    alignSelf: 'stretch',
    
  },
  header:
  {
    fontSize: 20,
    color :"#fff",
    fontWeight:'bold',
    paddingBottom: 1,
    marginBottom:40,
    fontFamily:'sans-serif-medium'
  },
  header1:
  {
    fontSize: 15,
    color :"#B0B0B0",
    paddingBottom: 10,
    fontWeight:'bold',
    fontFamily:'sans-serif-medium'
  },
  textinput:{
    alignSelf:'stretch',
    height: 40,
    marginBottom: 30,
    color: '#FFFFFF',
    borderBottomColor:'#FFFFFF',
    borderBottomWidth: 1,
    fontFamily:'sans-serif-medium'
  },
  button: {
    alignSelf:'stretch',
    alignItems: 'center',
    padding: 15,
    marginTop:30,
    marginLeft:95,
    backgroundColor:"#bababa",
    width: 100,
    borderRadius: 100,
    alignContent:'center',
    


  },
  btntext:
  {
    color: 'black',
    fontWeight: 'bold',
    fontFamily:'sans-serif-medium',
    fontSize: 15,
  }


});