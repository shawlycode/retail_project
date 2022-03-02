import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import Home from '../components/Home';
import Setting from '../components/Setting'
import { Ionicons, Feather } from '@expo/vector-icons';
import Transactions from '../components/Transactions';


const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "tomato",
            }}>
            <Tab.Screen name="home" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        name="home"
                        size={38}
                        color={focused ? "#8f00ff" : "#1b3a4b"}
                    />
                ),
            }} />
            <Tab.Screen name="transactions" component={Transactions} options={{
                tabBarIcon: ({ focused }) => (
                    < Feather
                        name="activity"
                        size={38}
                        color={focused ? "#8f00ff" : "#1b3a4b"}
                    />
                ),
            }} />
            <Tab.Screen name="setting" component={Setting} options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        name="settings"
                        size={38}
                        color={focused ? "#8f00ff" : "#1b3a4b"}
                    />
                ),
            }} />
        </Tab.Navigator>
    )
}

export default Tabs