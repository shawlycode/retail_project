import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { categoryData, products_Category, COLOURS } from "../Global/Data";



function onSelectCategory(category) {
  // filter products

  // const [products, setProducts] = useState(products_Category)
  // // const [categories, setCategories] = useState(categoryData);
  // let productsList = products_Category.filter(a => a.category.includes(category.id))
  setSelectedCategory(category)
  setProducts(productsList)

}


const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const renderItem = ({ item }) => {

    return (
      <TouchableOpacity
        style={{
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

        }}
        onPress={() => onSelectCategory({ item })}
      >
        <View
          style={{

            justifyContent: "center",
            alignItems: "center",
            width: 70,
            height: 70,
            borderRadius: 30,
          }}
        >
          <Image
            source={item.icon}
            style={{ width: 80, height: 80, resizeMode: "contain", }}
          />
        </View>
        <Text
          style={{
            color: COLOURS.white,
            paddingTop: 10,
            paddingBottom: 8,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 18
          }}
        >
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

const styles = StyleSheet.create({});
