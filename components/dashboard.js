import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View ,Pressable} from 'react-native';
import { ScrollView } from 'react-native';
import Cacard from './cacard';
import Remcard from './remcard';
export default class Dboard extends Component {
  constructor(props){
    super(props);
        this.state = {
            sidebarOpen: false
        };
  }

  ondash()
  {
    this.props.navigation.navigate('Calendar');
  }
  render(){

    return (
      <View style={styles.container}>
      <Pressable style={styles.account}></Pressable>
      <View style={styles.container2}>
      <View style={styles.prof}><Text style={styles.name}>John Doe</Text>
      <Text style={styles.bell}><MaterialCommunityIcons name="bell" style={{fontSize:30}}></MaterialCommunityIcons></Text></View>
      <View style={styles.welcome}><Text style={styles.wel}>Welcome John</Text></View>
      <View style={styles.search}><TextInput style={styles.input} placeholder='Search Events, onduty..'></TextInput></View>
      <View style={styles.headb}><Text style={styles.head} >Categories</Text>
      <Text style={styles.see}>See All</Text></View>
      <View style={styles.cards}>
        <Cacard text={'Events'} Name={'Calendar'}/>
        <Cacard text={'On-Duty'} Name={'On-duty Request'} />
        <Cacard text={'Assignments'} Name={''}/>
      </View>
      <View style={styles.headb}><Text style={styles.head}>Remainders</Text>
      <Text style={styles.see}>See All</Text>
      </View>
      <ScrollView horizontal={true} style={styles.remcard}>
        <Remcard text={'Registration for SIH Hackathon'} loc={'Deadline:'}/>
        <Remcard text={'Registration for SIH Hackathon'} loc={'Deadline:'}/>
        <Remcard text={'Registration for SIH Hackathon'} loc={'Deadline:'}/>
      </ScrollView>
</View>
</View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'row',
    marginTop:-30
  },
  account:{
    height:50,
    width:50,
    marginTop:60,
    borderRadius:50,
    backgroundColor:'#dcdcdd',
    marginLeft:10,
    
  },
  container2:{
   flex:0.97,
  },
  prof:{
   flexDirection:'row',
   justifyContent:'space-between',
  },
  bell:{
    marginTop:70,
    marginRight:20
  },
  name:{
    fontSize:20,
    fontFamily:'sans-serif-medium',
    marginTop:70,
    marginLeft:10,
    fontWeight:'bold'
    
  },
  welcome:{
    marginTop:40,
    marginLeft:-50
  },
  wel:{
    fontSize:30,
    fontFamily:'sans-serif-medium',
    fontWeight:'bold',
    paddingLeft:10
  },
  search:{
    marginTop:20,
    backgroundColor:'#dcdcdd',
    borderRadius:10,
    marginLeft:-40,
    width:"110%"  },
  input:{
    padding:10,
  },
  headb:{
    marginTop:35,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  head:{
    fontSize:20,
    fontFamily:'sans-serif-medium',
    fontWeight:'bold',
    marginLeft:-40,
  },
  see:{
    fontSize:15,
    fontFamily:'sans-serif-medium',
    fontWeight:'bold',
  },
  cards:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:-40,
    justifyContent:'space-evenly'
    
  },
  remcard:{
      // flexDirection:'row',
      marginTop:30,
      marginLeft:-40,
      flex:1
  }
});