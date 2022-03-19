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
import { BackgroundImage } from "react-native-elements/dist/config";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, products } from "../Global/Data";

const DetailsScreen = ({ navigation, route }) => {
  const category = route.params;

  function renderHeader() {
    return (
      <View>
        <Icon
          name="arrow-left"
          size={38}
          style={{ paddingTop: 50, marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }
  function renderDetailsContainer() {
    return (
      <View
        style={{
          marginTop: 30,

          width: "100%",
          height: "40%",
          backgroundColor: COLORS.background,
          borderTopRightRadius: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              width: 120,
              height: 40,
              backgroundColor: COLORS.dark,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                fontStyle: "italic",

                color: COLORS.white,
              }}
            >
              {category.name}
            </Text>
          </View>
          <View
            style={{
              width: 120,
              height: 40,
              backgroundColor: COLORS.dark,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              marginRight: 20,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                fontStyle: "italic",

                color: COLORS.white,
              }}
            >
              &#x20B5; {category.price}.00
            </Text>
          </View>
        </View>

        <BackgroundImage
          source={category.image}
          style={{
            resizeMode: "contain",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        ></BackgroundImage>
        <View
          style={{
            alignItems: "center",
            backgroundColor: COLORS.background,
            width: "100%",
            height: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 23,
              padding: 10,
              letterSpacing: 1,
              lineHeight: 27,
            }}
          >
            {category.description}
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",

              marginTop: 20,
              paddingHorizontal: 20,
            }}
          >
            <TouchableOpacity
              style={{
                width: 200,
                justifyContent: "center",
                alignItems: "center",
                height: 50,
                backgroundColor: COLORS.dark,
                marginRight: 60,
                borderRadius: 10,
              }}
              onPress={() => navigation.navigate("home")}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 20,
                  textAlign: "center",
                  padding: 10,
                }}
              >
                Continue Shopping
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 120,
                justifyContent: "center",
                alignItems: "center",
                height: 50,
                backgroundColor: COLORS.dark,

                borderRadius: 10,
              }}
              onPress={() => navigation.navigate("cart")}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 20,
                  textAlign: "center",
                  padding: 10,
                }}
              >
                Add To Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background }}>
      <StatusBar barStyle="dark-content" />

      {renderHeader()}
      {renderDetailsContainer()}
    </View>
  );
};

const style = StyleSheet.create({});
export default DetailsScreen;
