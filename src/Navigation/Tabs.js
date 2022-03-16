import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import Home from '../Screens/Home';
import Cart from '../Screens/Cart';
import Transaction from '../Screens/Transaction';
import Account from '../Screens/Account';

import { Ionicons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { COLORS } from '../Global/Data';



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
                        size={30}
                        color={focused ? COLORS.primary : "tomato"}
                    />
                ),
            }} />
            <Tab.Screen name="transaction" component={Transaction} options={{
                tabBarIcon: ({ focused }) => (
                    < MaterialCommunityIcons
                        name="chart-arc"
                        size={30}
                        color={focused ? COLORS.primary : "tomato"}
                    />
                ),
            }} />
            <Tab.Screen name="cart" component={Cart} options={{
                tabBarIcon: ({ focused }) => (
                    <Fontisto
                        name="shopping-basket"
                        size={30}
                        color={focused ? COLORS.primary : "tomato"}
                    />
                ),
            }} />
            <Tab.Screen name="account" component={Account} options={{
                tabBarIcon: ({ focused }) => (
                    <Fontisto
                        name="person"
                        size={30}
                        color={focused ? COLORS.primary : "tomato"}
                    />
                ),
            }} />

        </Tab.Navigator>
    )
}

export default Tabs