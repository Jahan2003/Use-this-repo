import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Calevent from './calEvents';
import { ScrollView } from 'react-native';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>
        <View style={styles.calcon}>
        <View style={styles.cal}>
        <CalendarPicker 
          onDateChange={this.onDateChange}
          />
        </View>
        </View>
       
       

        <View>
         <Text style={styles.event}>Events</Text>
        </View>
        <ScrollView style={styles.card}>
        <Calevent text={'MLH Global HackWeek'} loc={'Jan 27-Jan 28'}/>
        <Calevent/>
        <Calevent/>
        </ScrollView>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop:0,
   
  },
  calcon:{
    alignItems:"center",
  },
  cal:{
    width:"97%",
    borderRadius:20,
    marginTop:30,
    backgroundColor:"white",
    padding:5,
    marginBottom:10,
  },
  event:{
    fontFamily:'sans-serif-medium',
    fontSize:20,
    marginLeft:20,
    marginBottom:10
  },
  
});