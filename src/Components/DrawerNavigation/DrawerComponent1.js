import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const DrawerComponenet1= ({onpress ,text ,imgSource}) => {
    return (
        <View>

       
        <View style={styles.view2}>
        <TouchableOpacity onPress={onpress}>
        <View style={{flexDirection:'row'}}>
          <Image style={{height:25,width:25}}
          source={imgSource}/>
          <Text style={styles.text2}>{text}</Text>
        </View>
        </TouchableOpacity>
      </View>

     
    
</View>



    )

}

const styles= StyleSheet.create({


    view2:{
       
         justifyContent:'flex-start',
         marginHorizontal:'10%',
         marginTop:29,
         width:'90%',
         height:'5%',
      

       },
    
       text2:{
        marginHorizontal:'12%',
        marginTop:3,
        fontSize:15,
        fontWeight:'800',
        color:'#000000',
        width:'110%',
      
       },

    
    

})



export default DrawerComponenet1