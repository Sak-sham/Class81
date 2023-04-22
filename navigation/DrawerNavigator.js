import React from 'react'
import {createDrawerNavigator} from 'react-navigation/drawer'
import TabNavigator from './TabNavigator'
import Profile from '../screens/Profile'
const Drawer=createDrawerNavigator()
const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator screenOptions={{headerShown:false}}>
        <Drawer.screen name="Home" component={TabNavigator}></Drawer.screen>
        <Drawer.screen name="Profile" component={Profile}></Drawer.screen>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator