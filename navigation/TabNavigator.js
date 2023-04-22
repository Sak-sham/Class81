import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feed from './screens/Feed'
import CreateStory from '../screens/CreateStory'

const Tab=createBottomTabNavigator()
const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Feed") {
                iconName = focused?"book":'book-outline';
              } else if (route.name === "CreateStory") {
                iconName = focused?"create":'create-outline';
              }

              // You can return any component that you like here!
              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            }
          })}

          tabBarOptions={{
            activeTintColor:'tomato',
            inactiveTintColor:'grey',
          }}
        >
            <Tab.screen
            name="Feed" component={Feed} options={{headerShown:false}}>
            </Tab.screen>

            <Tab.screen
            name="CreateStory" component={CreateStory} options={{headerShown:false}}>
            </Tab.screen>

        </Tab.Navigator>
    )
}
export default BottomTabNavigator
