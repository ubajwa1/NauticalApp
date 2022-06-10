
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigation from './BottomNavigation';
import Menu from '../Menu';
import { NavigationContainer } from '@react-navigation/native';
import Sheet from '../../Components/Bottomsheet/Sheet';
const Drawer = createDrawerNavigator();


const DrawerNavigator= () => {
return(
    <NavigationContainer>
        
    <Drawer.Navigator
     drawerContent={props=><Menu {...props}/>}
     screenOptions={{headerShown:false}}
    initialRouteName='BottomNavigation'
    >
    <Drawer.Screen
     options={{
         drawerLabel:'HomeScreen'
     }} name="BottomNavigation" component={BottomNavigation} />




<Drawer.Screen
     options={{
         drawerLabel:'Sheet'
     }} name="Sheet" component={Sheet} />
    
  </Drawer.Navigator>
  </NavigationContainer>
)
}




export default DrawerNavigator