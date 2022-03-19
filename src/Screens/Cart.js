import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { category } from '../Global/Data'

const Cart = ({ navigation, route }) => {
  const category = route.params;
  return (
    <View>
      <Image source={category.image} style={{
        height: "100%",
        width: "100%",

      }} />
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})