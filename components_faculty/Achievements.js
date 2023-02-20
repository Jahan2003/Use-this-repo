import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Pressable } from 'react-native';
import Achievecard from './Achievecards';
import { ScrollView } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import Favourites from './Favourites';

function Achievement(){
    const navigation = useNavigation();
    return(
        <View style={styles.con}>
            <ScrollView>
                <View style={styles.sec}>
                <Achievecard subtopic="STUDENT" head="SIH - HACKATHON" task="won 1st Place in Software"/>
                <Achievecard subtopic="STUDENT" head="SIH - HACKATHON" task="won 1st Place in Software"/>
                <Achievecard subtopic="STUDENT" head="SIH - HACKATHON" task="won 1st Place in Software"/>
                <Achievecard subtopic="STUDENT" head="SIH - HACKATHON" task="won 1st Place in Software"/>
               </View>
            </ScrollView>
            <View style={styles.button}>
            <View style={styles.add}>
                <TouchableOpacity>
            <Pressable onPress={()=>navigation.navigate("Favourites")}>
                 <Text style={styles.plus}><MaterialCommunityIcons name="cards-heart-outline" size={24}/></Text>
            </Pressable>
                </TouchableOpacity>
            </View>
            <View style={styles.add}>
                    <TouchableOpacity>
            <Pressable onPress={()=>navigation.navigate("Favourites")}>
                     <Text style={styles.plus}>+</Text>
                </Pressable>
                    </TouchableOpacity>
            </View>
            
           
                
            </View>
        </View>
       );
}

export default Achievement;

const styles=StyleSheet.create({
    con:{
        backgroundColor:"white",
        flex:1,
    },
    sec:{
        alignItems:"center",
        
    },
    add:{
        backgroundColor:"black",
        height:55,
        width:55,
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:15,
       
    },
    plus:{
      color:"white",
      fontSize:28,
      fontFamily:'sans-serif-medium'
    },
    button:{
        marginBottom:"10%",
        marginLeft:"81%",
        position: 'absolute', 
        left: 0, 
        right: 0, 
        bottom: 0
    }
   

})