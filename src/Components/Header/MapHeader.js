import React from "react";
import {StyleSheet, Text, View,Image,  Pressable} from 'react-native'

import { useNavigation } from "@react-navigation/native";

const MapHeader =({onPress})=>{
    const navigation = useNavigation();
    return(

        <View style={styles.header}>
            <Pressable onPress={onPress}
            title="Image">
             <Image 
            style={{height:15,width:18,}}source={require("../../Screens/assests/group26.png")}/>
             </Pressable>
             <View style={{flexDirection:"row"}}>
             <Text style={styles.text1}>Geolocation Data</Text>
             
             <Image style={{height:20,width:20,marginHorizontal:10}}source={require("../../Screens/assests/location.png")}/>

             </View>
             <View></View>
        </View>
    )
}

const styles= StyleSheet.create({
    header:{
      color:'#fff',
        zIndex:15,
        flexDirection:"row",
       // marginTop:1,
        alignItems:"center",
        marginHorizontal:"5%", 
        justifyContent:"space-between",
        marginTop:15,
        position:'absolute' ,
        width:  '100%'     

    },
    text1:{
        color:"#fff", 
         alignItems:"center",
         fontWeight:"400"
    }
})




export default MapHeader