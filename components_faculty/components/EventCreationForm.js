import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
// import fs from './databaseconnect';
// import { setDoc,doc } from 'firebase/firestore';

export default class Eventform extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title:"",
            category:"",
            venue:""
        }
    }
    onSubmit=async()=>{
       await setDoc(doc(fs,"Events",this.state.title),{
              Title:this.state.title,
              Category:this.state.category,
              Venue:this.state.venue
            });
        }

    render(){
  return (
    
    <View style={styles.Regform}>
      <Text style={styles.header} >Event-Creation</Text>

      <Text style={styles.header1}>Event Title :</Text>
      <TextInput style={styles.textinput} placeholder=" Enter the title"
        underlineColorAndroid={'transparent'}
        value={this.state.title}
        onChangeText={(title) => this.setState({ title })} />

        <Text style={styles.header1}>Event Category :</Text>
      <TextInput style={styles.textinput} placeholder=" Enter the event category "
      underlineColorAndroid={'transparent'} 
      value={this.state.category}
          onChangeText={(category) => this.setState({ category })}/>

      

      <Text style={styles.header1}>Venue :</Text>
      <TextInput style={styles.textinput} placeholder=" Enter the venue"
      underlineColorAndroid={'transparent'} 
        value={this.state.venue}
          onChangeText={(venue) => this.setState({ venue })}/>

      
<Text style={styles.header1}>Date and Time :</Text>
<TextInput style={styles.textinput} placeholder=" Enter the date and time"
      underlineColorAndroid={'transparent'} />

      <TouchableOpacity style={styles.button} onPress={this.onSubmit}>
        <Text style={styles.btntext}> Apply </Text>
      </TouchableOpacity>


    </View>
  );
}
}

const styles = StyleSheet.create({
  Regform: {
    alignSelf: 'stretch',
    flex:1,
    backgroundColor:"white"
  },
  header:
  {
    fontSize: 20,
    color :"black",
    fontWeight:'bold',
    paddingBottom: 1,
    marginBottom:40,
    fontFamily:'sans-serif-medium'
  },
  header1:
  {
    fontSize: 15,
    color :"black",
    paddingBottom: 10,
    fontWeight:'bold',
    fontFamily:'sans-serif-medium'
  },
  textinput:{
    alignSelf:'stretch',
    height: 40,
    marginBottom: 30,
    color: 'black',
    borderBottomColor:'black',
    borderBottomWidth:1,
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