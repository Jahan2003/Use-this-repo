import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Pressable } from 'react-native';
import Achievecard from './Achievecards';
import { ScrollView } from 'react-native';

const Favourites=()=>{
    return(
        <View style={styles.con}>
            <ScrollView>
                <View style={styles.sec}>
                <Achievecard fav="true" subtopic="STUDENT" head="SIH - HACKATHON" task="won 1st Place in Software"/>
                <Achievecard fav="true" subtopic="STUDENT" head="SIH - HACKATHON" task="won 1st Place in Software"/>
               </View>
            </ScrollView>
        </View>
    )
}
export default Favourites

const styles=StyleSheet.create({
    con:{
        backgroundColor:"white",
        flex:1,
    },
    sec:{
        alignItems:"center",
        flex:1,
    },

})