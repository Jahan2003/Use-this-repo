import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import DropdownScreen from './Dropdown';
import Assigncomp from './Assigncomp';
import Due from './Due';
import Materials from './Materials';
import { Pressable } from 'react-native';
import Title from './title';
import { ScrollView } from 'react-native-gesture-handler';
function Assignment(props){
    return(
        <View style={styles.con}>
            <View style={styles.head}>
                <Text style={styles.headtex}>Assign the work to the students</Text>
            </View>
            <View style={styles.drop}>
            <DropdownScreen></DropdownScreen>
            </View>
            <ScrollView>
              <View style={styles.sec}>
                <Title topic="Title"></Title>
                <Assigncomp topic="Description" des="Give the description of the work"></Assigncomp>
                <Due topic="Due Date" des="Set the deadline"></Due>
                <Materials topic="Materials" des="Upload the materials"></Materials>
                <Pressable style={styles.click}>
          <Text style={styles.tex}>Submit</Text>
        </Pressable>
            </View>
            </ScrollView>

        </View>
    );
}
export default Assignment;


const styles = StyleSheet.create({
con:{
    backgroundColor:"white",
    flex:1
},
head:{
marginTop:20,
marginLeft:18,
marginBottom:8
},
headtex:{
 color:"#a8a8a8",
 fontSize:15
},
sec:{
    alignItems:"center",
    flex:1
},
click:
{
  paddingTop:15,
  paddingBottom:15,
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
});