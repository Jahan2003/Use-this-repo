import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View ,Pressable} from 'react-native';
import { ScrollView } from 'react-native';
import CacardFac from './CacardFac';
import Stuatt from '../components/StuAtt';
import RemcardFac from './RemcardFac';
import StudentAttendanceFac from './StudentAttendanceFac';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Achievement from './Achievements';

export default class FaculDboard extends Component {
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
  onnot()
  {
    this.props.navigation.navigate('Notifications');
  }
  render(){

    return (
      <ScrollView style={styles.scroll}>
      <View style={styles.container}>
      <Pressable style={styles.account}></Pressable>
      <View style={styles.container2}>
      <View style={styles.prof}><Text style={styles.name}>John Doe</Text>
      <Pressable onPress={()=>this.props.navigation.navigate('Notifications')}><Text style={styles.bell}><MaterialCommunityIcons name="bell" style={{fontSize:30}}></MaterialCommunityIcons></Text></Pressable></View>
      <View style={styles.welcome}><Text style={styles.wel}>Welcome John</Text></View>
      <View style={styles.search}><TextInput style={styles.input} placeholder='Search Events, onduty..'></TextInput></View>
      <View style={styles.headb}><Text style={styles.head} >Monitoring</Text>
      <Text style={styles.see}>See All</Text></View>
      <View style={styles.cards}>
        {/* <Cacard text={'Events'} Name={'Calendar'}/> */}
        <CacardFac text={'On-Duty'} Name={'On-duty Req'} />
        <CacardFac text={'Attendance'} Name={'StuAttFac'} />
         {/* <Cacard text={'Assignments'} Name={''}/> */}
      </View>
      <View style={styles.headb}><Text style={styles.head} >Activities</Text>
      <Text style={styles.see}>See All</Text></View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.cards}>
        <CacardFac text={'Events'} Name={'Calendar'}/>
        <CacardFac text={'Achievements'} Name={'Achievements'} />
        <CacardFac text={'To-do List'} Name={''} />
        <CacardFac text={'Assignments'} Name={'Assignment'}/>
      </ScrollView>
      <View style={styles.headb}><Text style={styles.head}>Remainders</Text>
      <Text style={styles.see}>See All</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.remcard}>
        <RemcardFac text={'Registration for SIH Hackathon'} loc={'Deadline:'}/>
        <RemcardFac text={'Registration for SIH Hackathon'} loc={'Deadline:'}/>
        <RemcardFac text={'Registration for SIH Hackathon'} loc={'Deadline:'}/>
      </ScrollView>
</View>
</View>
</ScrollView>
  );
}
}

const styles = StyleSheet.create({
  scroll:{
    flex:1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'row',
    marginTop:-40
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
    marginTop:30,
    marginLeft:-50
  },
  bellicon:{
    borderRadius:50,
  },
  wel:{
    fontSize:28,
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
    marginLeft:-45,
    
    // justifyContent:'space-evenly'
    
  },
  remcard:{
      // flexDirection:'row',
      marginTop:30,
      marginLeft:-45,
      flex:1
  }
});