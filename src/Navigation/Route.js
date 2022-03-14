import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import Tabs from './Tabs';


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

            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Route