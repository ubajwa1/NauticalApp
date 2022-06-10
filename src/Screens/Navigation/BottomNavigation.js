import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'
import HomeScreen from '../HomeScreen'
import Profile from './Profile'
import Notification from './Notification'
import Settings from './Settings'


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from '../Menu'

const Tab = createBottomTabNavigator();


const BottomNavigation = () => {
  return (
    
    <Tab.Navigator initialRouteName='HomeScreen'>
      <Tab.Screen
      options={{tabBarIcon:({focused}) =>(
            <View style={{
              alignItems:'center'
            }}>
             <Image style={{...styles.icon1,tintColor:focused ? '#376FCC' : null}}
              resizeMode={'contain'}
                source={require('../../Screens/assests/Subtract2.png')}/>
                {focused ? <Text style={{color:"#376FCC",fontWeight:'400',fontSize:11}}>Home</Text> : null}
            </View>
          ),headerShown:false,tabBarShowLabel:false,}}
           name="HomeScreen" component={HomeScreen} />



      <Tab.Screen
      options={{tabBarIcon:({focused}) =>(
            <View style={{
              alignItems:'center'
            }}>
              <Image style={{...styles.icon2,tintColor:focused ? '#376FCC' : null}}
              resizeMode={'contain'}
                source={require('../../Screens/assests/notifications.png')}/>
             {focused ?   <Text style={{color:"#376FCC",fontWeight:'400',fontSize:11}}>Notifications</Text> : null}
            </View>
          ),headerShown:false,tabBarShowLabel:false,}} name="Notification" component={Notification} />



      <Tab.Screen
      options={{tabBarIcon:({focused}) =>(
            <View style={{
              alignItems:'center'
            }}>
              <Image style={{...styles.icon3,tintColor:focused ? '#376FCC' : null}}
              resizeMode={'contain'}
                source={require('../../Screens/assests/ci_settings.png')}/>
               {focused ? <Text style={{color:"#376FCC",fontWeight:'400',fontSize:11}}>settings</Text> : null}
            </View>
          ),headerShown:false,tabBarShowLabel:false,}}
       name="Settings" component={Settings} />



      <Tab.Screen
       options={{tabBarIcon:({focused}) =>(
            <View style={{
              alignItems:'center'
            }}>
              <Image style={{...styles.icon4, tintColor: focused ? '#376FCC' : null}}
              resizeMode={'contain'}
                source={require('../../Screens/assests/Group134.png')}/>
           {focused ?     <Text style={{color:"#376FCC",fontWeight:'400',fontSize:11}}>profile</Text> : null}
            </View>
          ),headerShown:false,tabBarShowLabel:false,}} name="Profile" component={Profile} />



    </Tab.Navigator>
    
  )
}

export default BottomNavigation

const styles = StyleSheet.create({
  icon1:{
 height:15,
 width:15,
 marginTop:'12%'

  },
  icon2:{
    height:18,
    width:19,
    marginTop:'12%'
   
     },
     icon3:{
      height:18,
      width:19,
      marginTop:'12%'
     
       },
       icon4:{
        height:18,
        width:19,
        marginTop:'12%'
       
         }
  })
