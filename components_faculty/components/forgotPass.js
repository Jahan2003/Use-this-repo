import React,{Component} from "react";
import { View,Text,Button,TextInput,StyleSheet } from "react-native";
import { Pressable } from "react-native";
export default class Fpass extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        password: '',
      };
    }
    
    onLogin=()=> {
      this.props.navigation.navigate('Welcome');
    }
    
    render() {
      return (
        <View style={styles.container}>
         
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Enter your email'}
            secureTextEntry={true}
            style={styles.input}
          />
          
          <Pressable
            style={styles.click}
            onPress={this.onLogin.bind(this)}
          ><Text style={styles.text}>Generate OTP</Text>
          </Pressable>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      // justifyContent: 'center',
      backgroundColor: 'white',
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
      marginTop:"55%"
      
    },
    click:
    {
      paddingTop:8,
      paddingBottom:8,
      paddingRight:"32%",
      paddingLeft:"32%",
      borderRadius:30,
      backgroundColor:'black',
      alignItems:"center",
      marginTop:20,
      marginBottom:18
    },
    fp:
    {
        backgroundColor:'white',
    },
    text:{
      color:"white",
      fontFamily:'sans-serif-medium',
      fontSize:18,
  
  
    },
    
  }
  );