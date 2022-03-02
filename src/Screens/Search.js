import React from "react";
import {
    View,
    Text,
    FlatList,
    TextInput,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Card } from "react-native-shadow-cards";
import { TouchableOpacity } from "react-native-gesture-handler";

const DATA = [
    {
        id: "66t3dv",
        category: "COOKING FATS & OLI",
        price: "Gh 45.00",
        img: require("../../assets/images/milo.jpeg"),
        weight: "1kg",
        description: "This product is the best you can get in the market. Original",
        listings: "123",
    },
    {
        id: "66v",
        category: "FLOUR & SUGAR",
        price: "Gh 20.00",
        img: require("../../assets/images/coke.jpeg"),
        weight: "500ml",
        description: "This product is the best you can get in the market. Original",
        listings: "140",
    },
    {
        id: "66v",
        category: "PERSONAL & HOME CARE",
        price: "Gh 20.00",
        img: require("../../assets/images/frytol.jpeg"),
        weight: "500ml",
        description: "This product is the best you can get in the market. Original",
    },
    {
        id: "66v",
        category: "BEVERAGES",
        price: "Gh 20.00",
        img: require("../../assets/images/mailt.jpeg"),
        weight: "500ml",
        description: "This product is the best you can get in the market. Original",
        listings: "23",
    },
    {
        id: "66v",
        category: "FLOUR & SUGAR",
        price: "Gh 20.00",
        img: require("../../assets/images/coke.jpeg"),
        weight: "500ml",
        description: "This product is the best you can get in the market. Original",
    },
    {
        id: "66v",
        category: "PERSONAL & HOME CARE",
        price: "Gh 20.00",
        img: require("../../assets/images/frytol.jpeg"),
        weight: "500ml",
        description: "This product is the best you can get in the market. Original",
        listings: "303",
    },
    {
        id: "66v",
        category: "BEVERAGES",
        price: "Gh 20.00",
        img: require("../../assets/images/mailt.jpeg"),
        weight: "500ml",
        description: "This product is the best you can get in the market. Original",
    },
    {
        id: "66v",
        category: "FLOUR & SUGAR",
        price: "Gh 20.00",
        img: require("../../assets/images/coke.jpeg"),
        weight: "500ml",
        description: "This product is the best you can get in the market. Original",
    },
    {
        id: "66v",
        category: "PERSONAL & HOME CARE",
        price: "Gh 20.00",
        img: require("../../assets/images/frytol.jpeg"),
        weight: "500ml",
        description: "This product is the best you can get in the market. Original",
    },
    {
        id: "66v",
        category: "BEVERAGES",
        price: "Gh 20.00",
        img: require("../../assets/images/mailt.jpeg"),
        weight: "500ml",
        description: "This product is the best you can get in the market. Original",
    },
];
const Item = ({ category, img, listings }) => (
    <TouchableOpacity>
        <Card style={styles.item}>
            <Image
                source={img}
                style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
            />
            <Text style={styles.category}>{category}</Text>
            <Text
                style={{
                    fontSize: 20,
                    color: "green",

                }}
            >
                {listings}
            </Text>
        </Card>
    </TouchableOpacity>
);
const Search = () => {
    function renderSearchBar() {
        return (
            <View
                style={{
                    flexDirection: "row",
                    paddingTop: 50,
                    justifyContent: "center",
                }}
            >
                <Card
                    style={{
                        width: 400,
                        height: 50,
                        flexDirection: "row",
                        backgroundColor: "white",
                        borderRadius: 10,
                    }}
                >
                    <View style={{ justifyContent: "center" }}>
                        <Ionicons
                            name="search"
                            size={30}
                            color="black"
                            style={{ marginHorizontal: 20 }}
                        />
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <TextInput
                            placeholder="Find Products"
                            style={{ fontSize: 20, fontWeight: "bold" }}
                            keyboardAppearance={true}
                        />
                    </View>
                </Card>
            </View>
        );
    }
    function renderBanner() {
        return (
            <Card
                style={{
                    justifyContent: "center",
                    marginVertical: 20,
                    width: 380,
                    height: 100,
                    marginLeft: 25,
                }}
            >
                <ImageBackground
                    source={require("../../assets/images/banner2.jpg")}
                    style={{ width: "100%", height: 100 }}
                >
                    <Text
                        style={{
                            fontSize: 30,
                            color: "#fff",
                            fontWeight: "bold",
                            textAlign: "center",
                            marginTop: 25,
                        }}
                    >
                        Brows Categories
                    </Text>
                </ImageBackground>
            </Card>
        );
    }

    function renderCategories() {
        const renderItem = ({ item }) => (
            <View style={{ flex: 1, flexDirection: "row" }}>
                <Item
                    category={item.category}
                    img={item.img}
                    listings={item.listings}
                />
            </View>
        );

        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </SafeAreaView>
        );
    }
    return (
        <View style={{ flex: 1 }}>
            {renderSearchBar()}
            {renderBanner()}
            {renderCategories()}
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        marginVertical: 8,
        marginLeft: 27,
    },
    category: {
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default Search;
