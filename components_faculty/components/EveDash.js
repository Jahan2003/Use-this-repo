import React,{Component} from "react";
import { View,StyleSheet,Text } from "react-native";
import EveCard from "./EveCard";
import { ScrollView } from 'react-native';
import { Pressable } from "react-native";
// import { getDocs,collection } from "firebase/firestore";
import DropdownScreen from "./Dropdown";
// import fs from "./databaseconnect";


export default class EveDash extends Component{
    constructor()
    {
        super();
        this.state={events:[]};
        this.EventGetter();
    }
    EventGetter=async()=>{
        const user=collection(fs,"Events");
        const re=await getDocs(user);
        var li=[];
        re.forEach(doc=>{
            li.push(doc.data());
        })
        var events=li.map((d)=><EveCard text={d.Title} where={d.Venue}/>);
        this.setState({events});
    }
    seeAll=()=>{
        this.props.navigation.navigate('All Events');
    }
    render(){
        return(
            <View style={styles.outfit}>
                <ScrollView vertical={true}>
                    <DropdownScreen/>
                    <EveCard/>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <View style={styles.container}>
                    <Pressable style={styles.fpas}
                    onPress={this.seeAll.bind(this)}
                    ><Text style={styles.seee}>See All</Text></Pressable>
                        {this.state.events}
                    </View>
                </ScrollView>
            </View>
                
            
        );
    }
} 

const styles=StyleSheet.create({
    container:{
        padding:0,
    },
    seee:{
        textAlign:"right",
        fontSize:15,
        fontFamily:'sans-serif-medium',
        fontWeight:'bold',
      },
      outfit:{
            padding:0,
            marginBottom:50,
      },
})