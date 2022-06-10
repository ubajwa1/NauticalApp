import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
//import { TouchableOpacity } from 'react-native-gesture-handler'
import DrawerComponenet1 from '../Components/DrawerNavigation/DrawerComponent1'


const Menu = ({navigation}) => {
  return (
    <View style={{backgroundColor:'#fff' ,flex: 1, width:'69%',}}>

      <View>

      <View style={styles.view1}>
         <Image style={styles.logo} resizeMode={'contain'}
         source={require('../Screens/assests/Ellipse18.png')} />
           <Text style={styles.text1}>Username</Text> 
      </View>

         </View>

        <DrawerComponenet1 onpress={()=>console.log('p')} text={'My Booking'} imgSource={require('../Screens/assests/Ellipse10.png')}/>
        
        <DrawerComponenet1 onpress={()=>console.log('p')} text={'Knots'} imgSource={require('../Screens/assests/Ellipse10.png')}/>

        <DrawerComponenet1 onpress={()=>console.log('p')} text={'Profile'} imgSource={require('../Screens/assests/profile11.png')}/>

        <DrawerComponenet1 onpress={()=>console.log('p')} text={'About Us'} imgSource={require('../Screens/assests/aboutus.png')}/>

        <DrawerComponenet1 onpress={()=>console.log('p')} text={'Legal Terms & Conditions'} imgSource={require('../Screens/assests/terms.png')}/>

        <DrawerComponenet1 onpress={()=>console.log('p')} text={'Customer Support'} imgSource={require('../Screens/assests/headphone.png')}/>

        <DrawerComponenet1 onpress={()=>console.log('p')} text={'Ports & User'} imgSource={require('../Screens/assests/Ellipse10.png')}/>

        <DrawerComponenet1 onpress={()=>console.log('p')} text={'Logout'} imgSource={require('../Screens/assests/logout.png')}/>

    </View>
  )
}

const styles= StyleSheet.create({


   logo:{
       height:80,
       width:80,
       marginLeft:36,
       marginTop:22,
       
   },

   view1:{
    backgroundColor:'#376FCC',
    height:170,
    width:280
   },

   text1:{
    height:50,
    width:129,
    fontWeight:"700",
    marginTop:16,
    marginHorizontal:'12%',
    fontSize:28,
    color:'#fff'
   },



   view3:{
    alignItems: 'flex-start',
     justifyContent:'flex-start',
     marginHorizontal:'9%',
     marginTop:32,
   },


   view4:{
    alignItems: 'flex-start',
     justifyContent:'flex-start',
     marginHorizontal:'9%',
     marginTop:35,
   },



   view5:{
    alignItems: 'flex-start',
     justifyContent:'flex-start',
     marginHorizontal:'9%',
     marginTop:36,
   },



   view6:{
    alignItems: 'flex-start',
     justifyContent:'flex-start',
     marginHorizontal:'9%',
     marginTop:36,
   },




   view7:{
    alignItems: 'flex-start',
     justifyContent:'flex-start',
     marginHorizontal:'9%',
     marginTop:36,
   },



   view8:{
    alignItems: 'flex-start',
     justifyContent:'flex-start',
     marginHorizontal:'9%',
     marginTop:36,
   },



   



})

export default Menu