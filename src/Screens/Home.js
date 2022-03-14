import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { COLOURS } from '../Global/Data'

import { Ionicons } from '@expo/vector-icons';
import Category from '../Screens/Category'



const Home = () => {
    function renderSearchBar() {
        return (
            <View style={{ justifyContent: "center", alignItems: "center", width: 400, height: 50, backgroundColor: COLOURS.white, marginVertical: 20, marginHorizontal: 8, paddingHorizontal: 15, borderRadius: 10, justifyContent: "space-between", flexDirection: "row" }}>
                <View style={{ maxWidth: "80%" }}>
                    <TextInput style={{ fontSize: 20, fontStyle: 'italic', flex: 1, fontWeight: "bold", paddingLeft: 20 }} placeholder='find products' placeholderTextColor={'grey'} marginHorizontal={10} />
                </View>
                <View>
                    <Ionicons name="search" size={28} color="black" />
                </View>
            </View>
        )
    };
    function renderCategory() {
        return (
            <View>
                <Text style={{ fontSize: 24, fontWeight: "bold", marginLeft: 20, marginBottom: 20 }}>
                    Categories

                </Text>
                <View>
                    <Category />
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, marginHorizontal: 20 }}>

                <View>
                    <TouchableOpacity>
                        <Ionicons name="menu" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <TouchableOpacity>
                            <Ionicons name="notifications" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <View style={{ width: 30, height: 30, backgroundColor: COLOURS.dark, borderRadius: 20, marginHorizontal: 5, }}></View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            {renderSearchBar()}
            {renderCategory()}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,

        paddingTop: 30,
        backgroundColor: COLOURS.background

    }
})