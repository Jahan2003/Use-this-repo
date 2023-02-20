import React, { Component } from 'react';
import { Button, TextInput, Text , View, StyleSheet } from 'react-native';
import { Pressable } from 'react-native';
import FaculDboard from '../components_faculty/FacultyDBoard';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin=()=> {
    this.props.navigation.navigate('FaculDboard');
  }
  oncl=()=> {
    this.props.navigation.navigate('ForgetPassword');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.login}>Login</Text>
        <View style={styles.con}>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          style={styles.input}
          placeholder='Enter UserName'
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
         placeholder='Enter Password'
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Pressable style={styles.click} onPress={this.onLogin.bind(this)}>
          <Text style={styles.tex}>Login</Text>
        </Pressable>

        <Pressable style={styles.fpas}
          onPress={this.oncl.bind(this)}
        ><Text style={styles.forgot}>Forgot Password</Text></Pressable>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:0,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#fff',
  },
  login:{
    marginTop:50,
    fontFamily:'sans-serif-medium',
    fontSize:25,
    fontWeight:"bold",
    marginBottom:30,
    marginLeft:30,
  },
  input: {
    width:"90%",
    height:40,
    padding:5,
    fontSize:16,
    borderRadius:0,
    borderWidth: 1.5,
    fontFamily:'sans-serif-medium',
    borderColor:'white',
    borderBottomColor:"#a8a8a8",
    marginBottom: 30,
    
  },

  click:
  {
    paddingTop:8,
    paddingBottom:8,
    paddingRight:"40%",
    paddingLeft:"40%",
    borderRadius:30,
    backgroundColor:'black',
    alignItems:"center",
    marginTop:20,
    marginBottom:18
  },
  tex:{
    color:"white",
    fontFamily:'sans-serif-medium',
    fontSize:18,


  },
  fpas:{
    
  },
  forgot:{
    fontFamily:'sans-serif-medium',
    fontSize:15,
    fontWeight:"bold",
    color:"#a8a8a8"
  },
  fp:
  {
      backgroundColor:'white',
  },
  con:{
    alignItems:'center'
  },
  label:{}
  
}
);