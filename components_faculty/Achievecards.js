import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Pressable } from 'react-native';
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const Achievecard=(props)=>{
    const [liked, setLiked] = useState(props.fav);
    return(
         <View style={styles.remcards}>
          <View style={styles.card}>
            <View style={styles.cardcont}>
        <Pressable style={styles.heart} onPress={() => setLiked((isLiked) => !isLiked)}>
        <MaterialCommunityIcons
            name={liked ? "heart" : "heart-outline"}
            size={27}
            color={liked ? "red" : "black"}
        />
        </Pressable>
        <View><Text  style={styles.subtopic}>{props.subtopic}</Text></View>
        <View><Text style={styles.head}>{props.head}</Text></View>
        <View><Text style={styles.task}>{props.task}</Text></View>
      </View>
        {/* <TouchableOpacity>
        <View style={styles.button}>
           <Pressable>
                <Text style={styles.text}>View</Text>
           </Pressable>
        </View>
        </TouchableOpacity> */}
         <View style={styles.bcon}>
        <Pressable style={styles.click}>
          <View style={styles.bcontain}>
          <TouchableOpacity>
          <Text style={styles.tex}>View</Text>
          </TouchableOpacity>
          </View>
         
          
        </Pressable>
        </View>
        </View>
    </View>
    )
}
export default Achievecard;

const styles=StyleSheet.create({
    con:{
        backgroundColor:"white",
        flex:1,
    },
    remcards:{
       
        width:"90%",
        height:180,
        // marginRight:10,
        backgroundColor:'#f4f4f4',
        // borderWidth:0.8,
        borderColor:"black",
        borderRadius:20,
        flexWrap:'wrap',
        flexDirection:'column',
        marginTop:25,
        marginBottom:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        // shadowOpacity: 0.23,
        // shadowRadius: 2.62,

        // elevation: 4,
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,

        // elevation: 5,


       },
       subtopic:{
        fontSize:12,
        fontFamily:'sans-serif-medium',
        fontWeight:'bold',
        paddingLeft:"4%",
        paddingTop:'3%',
        paddingBottom:1,
        maxWidth:'90%',
        marginLeft:5,
        marginTop:5
    
       },
       card:{
         flexDirection:"row"
       },
       head:{
        fontSize:18,
        fontFamily:'sans-serif-medium',
        fontWeight:'bold',
        paddingLeft:15,
        paddingTop:3,
        color:"black",
       },
       button:{
        backgroundColor:"#c4c4c4",
        alignItems:"center",
        justifyContent:"center",
        padding:8,
        borderRadius:10,
        // height:40,
        // width:6,
        
        
    },
    text:{
            fontFamily:'sans-serif-medium',
            fontWeight:"bold"

       },

       bcon:{
         paddingTop:"30%"
       },
       des:{
        fontSize:15,
        fontFamily:'sans-serif-medium',
        fontWeight:'100',
        paddingLeft:15,
        paddingTop:3,
        color:"#a8a8a8",
       },
       task:{
        fontSize:14,
        fontFamily:'sans-serif-medium',
        fontWeight:'normal',
        paddingLeft:15,
        paddingTop:3,
        color:"black",
       },
        click:{
        paddingTop:8,
        paddingBottom:8,
        marginLeft:0,
        borderRadius:10,
        backgroundColor:'#c4c4c4',
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        
        },
        bcontain:{
          paddingRight:15,
          paddingLeft:15,
        },
        tex:{
        fontFamily:'sans-serif-medium',
        fontSize:15,
        color:"black",
        fontWeight:"normal"
      },
      cardcont:{
        width:"75%",
      },
      heart:{
        paddingLeft:15,
        paddingTop:'5%',
      }
       
})