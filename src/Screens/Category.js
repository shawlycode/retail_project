import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { categoryData, COLOURS } from "../Global/Data";



const Category = ({ setSelectedCategory }) => {



  const renderItem = ({ item }) => {

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => setSelectedCategory(item.name)}
      >
        <View style={styles.image_container}>
          <Image
            source={item.icon}
            style={styles.image} />
        </View>
        <Text style={styles.text}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={categoryData}
        keyExtractor={(item) => `${item.id}`}
        horizontal
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOURS.dark,
    borderWidth: 2,
    paddingTop: 20,
    borderColor: COLOURS.white,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 6,
    borderRadius: 10,
    width: 145,
    height: 145,
    margin: 10,
  },
  image_container: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    borderRadius: 30,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  text: {
    color: COLOURS.white,
    paddingTop: 10,
    paddingBottom: 8,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18
  }
});
