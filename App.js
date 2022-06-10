import 'react-native-gesture-handler';
import  React from "react";
import Menu from "./src/Screens/Menu";
import BottomNavigation from "./src/Screens/Navigation/BottomNavigation";
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './src/Screens/Navigation/DrawerNavigator';
console.reportErrorsAsExceptions = false;
export default function App() {
  return(
    <DrawerNavigator/>
    
  )
    }