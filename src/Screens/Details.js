import React from "react";
import {
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  View,
  Image,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, products } from "../Global/Data";

const DetailsScreen = ({ navigation, route }) => {
  const category = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background }}>
      <StatusBar barStyle="dark-content" />

      <View style={{ width: "100%", height: '50%' }}>
        <ImageBackground
          resizeMode="cover"
          source={category?.image}
          style={{
            height: "100%",
            width: "100%",

          }}
        >
          {/* Render  Header */}
          <View style={style.header}>
            <Icon
              name="arrow-left"
              size={34}
              color={COLORS.white}
              onPress={navigation.goBack}
            />
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          backgroundColor: COLORS.white,
          height: 300,
          width: "100%",
          borderBottomEndRadius: 30,

        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 30,
            paddingVertical: 20,
          }}
        >
          <View
            style={{
              width: 90,
              height: 50,
              backgroundColor: COLORS.dark,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: COLORS.white }}
            >
              {category.name}
            </Text>
          </View>
          <View
            style={{
              width: 120,
              height: 50,
              backgroundColor: COLORS.dark,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: COLORS.white }}
            >
              &#x20B5;{category.price}.00
            </Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 22, fontStyle: "italic", letterSpacing: 1, paddingHorizontal: 15 }}>{category.description}</Text>
        </View>
        <View style={{ alignItems: "flex-end", marginTop: 20, marginRight: 30 }}>
          <TouchableOpacity style={{
            width: 150,
            height: 60,
            backgroundColor: COLORS.dark,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
            onPress={() => navigation.navigate({ category }, 'cart')}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: COLORS.white }}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('homeScreen')}
          style={{
            width: 200,
            height: 60,
            backgroundColor: COLORS.dark,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: COLORS.white }}>Continue Shopping</Text>
        </TouchableOpacity>
      </View>
    </View >
  );
};

const style = StyleSheet.create({
  detailsContainer: {
    height: 120,
    backgroundColor: COLORS.dark,
    marginHorizontal: 20,
    flex: 1,
    bottom: -60,
    borderRadius: 18,
    elevation: 10,
    padding: 20,
    justifyContent: "center",
  },

  footer: {
    height: 100,
    backgroundColor: COLORS.light,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  iconCon: {
    backgroundColor: COLORS.primary,
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  btn: {
    backgroundColor: COLORS.primary,
    flex: 1,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    position: "absolute",
    top: 80,
    left: 15,
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: COLORS.dark,
    justifyContent: "center",
    alignItems: "center"
  },
});
export default DetailsScreen;
