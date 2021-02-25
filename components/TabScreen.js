import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome5} from '@expo/vector-icons'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Account from './Account'
import Finance from './Finance'
import History from './History'
import Home from './Home'
const Tab=createBottomTabNavigator()

const TabScreen=(props)=> {
    return(
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({focused,color,size }) => {
              let iconName;
              if (route.name == 'Home') {
                iconName = 'garage'
                size= focused ? 35 : 30
            } 
            else if (route.name == 'Finance') {
                iconName = 'finance'
                size= focused ? 35 : 30
            }
            else if (route.name=='History'){
                iconName = 'clock-outline'
                size= focused ? 35 : 30
            }
            else if (route.name=='Account'){
                iconName = 'account'
                size= focused ? 35 : 30
            }
            else if (route.name=='Add'){
                iconName='plus-circle'
                size=70
            }
            if(route.name=='Add'){
                return (
                <View style={{
                    position:'absolute', 
                    bottom:4, 
                    shadowColor: "red",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: 5,
                    // elevation: 55,
                }}>
                    <MaterialCommunityIcons name={iconName} size={size} color={"#ec1817"} style={{opacity:0.9}} />
                </View>
                )
            }
            else{
                return <MaterialCommunityIcons name={iconName} size={size} color={color} />
            }
            },
            tabBarLabel: route.name=='Add' ? ()=>null : route.name
          })}
          tabBarOptions={{
            activeTintColor: '#ec1817',
            inactiveTintColor: 'gray',
            style:{
                height:'9%'
            }
            // showLabel:false
          }}
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Finance" component={Finance}/>
            <Tab.Screen name="Add" component={Home}/>
            <Tab.Screen name="History" component={History}/>
            <Tab.Screen name="Account" component={Account}/>
        </Tab.Navigator>
    )
}
export default TabScreen
