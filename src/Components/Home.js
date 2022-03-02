import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ScrollView,
    ImageBackground,
    Image,
    TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Card } from "react-native-shadow-cards";
import { Badge } from "react-native-elements";
import { dummyData } from "../../assets/constants";

const DATA = [
    {
        id: "66t3dv",
        name: "Milo Tin",
        price: "Gh 45.00",
        img: require("../../assets/images/milo.jpeg"),
        weight: "1kg",
        description: "This product is the best you can get in the market. Original",
    },
    {
        id: "66v",
        name: "Coke",
        price: "Gh 20.00",
        img: require("../../assets/images/coke.jpeg"),
        weight: "500ml",
        description: "This product is the best you can get in the market. Original",
    },
    {
        id: "66v",
        name: "Coke",
        price: "Gh 20.00",
        img: require("../../assets/images/frytol.jpeg"),
        weight: "500ml",
        description: "This product is the best you can get in the market. Original",
    },
    {
        id: "66v",
        name: "Coke",
        price: "Gh 20.00",
        img: require("../../assets/images/mailt.jpeg"),
        weight: "500ml",
        description: "This product is the best you can get in the market. Original",
    },
];
const Item = ({ name, img }) => (

    <View style={styles.item}>

        <Image
            source={img}
            style={{ width: "100%", height: 110, resizeMode: "cover" }}
        />
        <Text style={{ fontSize: 20 }}>{name}</Text>
    </View>
);

const Home = () => {
    const renderItem = ({ item }) => <Item img={item.img} />;
    function renderTrending() {
        return (

            <ScrollView style={{ position: "absolute", top: "45%" }}>
                <View>
                    <Text style={{ fontSize: 30, color: '#fff', fontWeight: "bold", marginLeft: 20, }}>Trending Now</Text>
                </View>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </ScrollView>
        );
    }
    function renderCategory() {
        const renderItem = ({ item }) => <Item name={item.name} />;
        return (
            <View style={{ marginTop: 20 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10, marginBottom: 10 }}>
                    <View>
                        <Text style={{ fontSize: 16 }}>Buy Products By Category</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, color: "blue", textDecorationLine: "underline" }}>View more</Text>
                    </View>
                </View>
                <FlatList

                    numColumns={4}
                    data={dummyData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}

                />
            </View>
        )
    }
    function renderDeals() {
        const renderItem = ({ item }) => <Item />;
        return (
            <View style={{ justifyContent: "center", marginTop: 50 }}>
                <View>
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: "bold",
                            marginTop: 20,
                            marginBottom: 10,
                            marginLeft: 20,
                        }}
                    >
                        Deals & Promotions
                    </Text>
                </View>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        );
    }
    function renderHeader() {
        return (
            <View>
                <Card style={{ width: "100%" }}>
                    <ImageBackground
                        source={require("../../assets/images/banner.jpeg")}
                        style={{ width: "100%", height: 290 }}
                    >
                        <View style={styles.header}>
                            <TouchableOpacity>
                                <Ionicons name="md-menu" size={40} color="white" />
                            </TouchableOpacity>
                            <View>
                                <TouchableOpacity>
                                    <Text
                                        style={{
                                            fontSize: 30,
                                            fontWeight: "bold",
                                            color: "yellow",
                                        }}
                                    >
                                        LOGO
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
                            >
                                <TouchableOpacity>
                                    <Ionicons name="ios-notifications" size={40} color="white" />
                                    <View style={{ position: "absolute", left: 15, top: -10 }}>
                                        <Badge value="3" status="error" />
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ marginLeft: 10 }}>
                                    <Ionicons name="ios-cart" size={40} color="white" />
                                    <View style={{ position: "absolute", left: 15, top: -10 }}>
                                        <Badge value="5" status="warning" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {renderTrending()}
                    </ImageBackground>
                </Card>
            </View>
        );
    }
    return <ScrollView style={styles.container}>
        {renderHeader()}
        {renderDeals()}
        {renderCategory()}

    </ScrollView>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: 45,
    },
    item: {
        width: 220,
        height: 180,
        backgroundColor: "#BCADBC",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginHorizontal: 10,
    },
});

export default Home;
