import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreatePost from "../screens/CreatePost";
import Feed from "../screens/Feed";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () =>{
        return{
                <Tab.BottomTabNavigator
                screensOptions ={({route}) => ({
                        tabBarIcons: ({focused, color, size})=>{
                                let iconName;
                                if {route.name === 'Feed'} {
                                        
                                }
                        }
                })}
        }
}