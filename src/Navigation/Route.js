import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import Tabs from './Tabs';
import Details from '../Screens/Details'
import Cart from '../Screens/Cart';


const Stack = createStackNavigator();

const Route = ({ route, navigation }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,

                }} >
                <Stack.Screen name='home' component={Tabs}
                    options={{ headerShown: false }} />
                <Stack.Screen name='details' component={Details}
                    options={{ headerShown: false }} />
                <Stack.Screen name='cart' component={Cart}
                    options={{ headerShown: false }} />

            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Route