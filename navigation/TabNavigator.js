import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feed from "../Feed";
import CreateStory from "../CreateStory";

const Tab=createBottomTabNavigator();

const BottomTabNavigator=()=>{
        return(
                <Tab.Navigator screensOptions={({route})=>({
                        tabBarIcon:({focused,color,size})=>[
                                
                        ]
                })}
        )
}