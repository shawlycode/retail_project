import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import Home from '../Screens/Home';

import { Ionicons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "tomato",
            }}>
            <Tab.Screen name="homeScreen" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        name="home"
                        size={38}
                        color={focused ? "#8f00ff" : "#1b3a4b"}
                    />
                ),
            }} />

        </Tab.Navigator>
    )
}

export default Tabs