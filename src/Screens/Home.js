import React from 'react';
import {
    Dimensions,
    SafeAreaView,
    View,
    Image,
    TextInput,
    Text,
    TouchableOpacity,
    FlatList,
    ScrollView,
    StyleSheet,
    StatusBar,
} from 'react-native';
import { COLORS } from '../Global/Data';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { products } from '../Global/Data'
const { height } = Dimensions.get('window');


const product_Category = [
    { name: 'FROZEN FOODS', id: '2773', image: require('../../assets/category_img/frozen-yogurt.png') },
    { name: 'BAKES & SNACKS', id: "hhd", image: require('../../assets/category_img/cookie.png') },
    { name: 'GROCERY', id: "gsys", image: require('../../assets/category_img/groceries.png') },
    { name: 'PERSONAL', id: "bbc", image: require('../../assets/category_img/care.png') },
];

const Card = ({ category, navigation }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('details', category)}>
            <View style={{ justifyContent: "center", alignItems: "center", marginLeft: 12, borderWidth: 1, borderRadius: 10, marginBottom: 10 }}>
                {/* Render the card image */}
                <View style={style.cardImageContainer}>
                    <Image
                        source={category.image}
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'cover',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,

                        }}
                    />
                </View>

                {/* Render all the card details here */}
                <View style={style.cardDetailsContainer}>

                    <View>
                        <Text
                            style={{ fontWeight: 'bold', color: COLORS.dark, fontSize: 20 }}>
                            {category?.name}
                        </Text>
                        {/* <Icon name="heart" size={24} color={COLORS.grey} /> */}
                    </View>

                    <Text style={{ fontSize: 20, marginTop: 5, color: COLORS.dark }}>
                        &#x20B5; {category?.price}.00
                    </Text>



                </View>
            </View>
        </TouchableOpacity>
    );
};

const HomeScreen = ({ navigation }) => {
    const [selectedCategoryIndex, setSeletedCategoryIndex] = React.useState(0);
    const [filteredProducts, setFilteredProducts] = React.useState([]);

    const filterProduct = index => {
        const current_products = products.filter(
            item => item?.category?.toUpperCase() == product_Category[index].name,
        )[0]?.products;
        setFilteredProducts(current_products);
    };

    React.useEffect(() => {
        filterProduct(0);
    }, []);


    function renderItem_Category() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                }}>
                {product_Category.map((item, index) => (
                    <View key={'category' + index} style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => {
                                setSeletedCategoryIndex(index);
                                filterProduct(index);
                            }}
                            style={[
                                style.categoryBtn,
                                {
                                    backgroundColor:
                                        selectedCategoryIndex == index
                                            ? COLORS.primary
                                            : COLORS.white,
                                },
                            ]}>
                            <Image
                                source={item.image}
                                color={
                                    selectedCategoryIndex == index
                                        ? COLORS.white
                                        : COLORS.primary
                                }
                                style={{ width: 65, height: 65 }}
                            />
                        </TouchableOpacity>
                        <Text style={style.categoryBtnName}>{item.name}</Text>
                    </View>
                ))}
            </View>
        )
    }
    return (
        <>
            <View style={{ flex: 1, backgroundColor: COLORS.background, justifyContent: "center", paddingTop: 50 }}>
                <StatusBar barStyle='dark-content' />

                <View style={style.header}>
                    <TouchableOpacity onPress={navigation.toggleDrawer}>
                        <Icon name="sort-variant" size={28} />

                    </TouchableOpacity>
                    <Text style={{ color: COLORS.primary, fontWeight: 'bold', fontSize: 16 }}>
                        JANE GARY
                    </Text>
                    <TouchableOpacity >
                        <Image
                            source={require('../../assets/person.jpg')}
                            style={{ height: 30, width: 30, borderRadius: 25 }}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={style.mainContainer}>
                        {/* Render the search inputs */}
                        <View style={style.searchInputContainer}>
                            <Icon name="magnify" size={24} color={COLORS.grey} />
                            <TextInput
                                placeholderTextColor={COLORS.grey}
                                placeholder="Search pet to adopt"
                                style={{ flex: 1 }}
                            />
                            <Icon name="sort-ascending" size={24} color={COLORS.grey} />
                        </View>

                        {/* Render all the categories */}
                        <View>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={product_Category}
                                renderItem={(renderItem_Category)}


                            />
                        </View>

                        {/* Render the cards with flat list */}
                        <View style={{ marginTop: 20 }}>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                numColumns={3}
                                data={filteredProducts}
                                renderItem={({ item }) => (
                                    <Card category={item} navigation={navigation} />
                                )}
                            />
                        </View>
                    </View>
                </ScrollView>

            </View>
        </>
    );
};

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        marginTop: 30,
        justifyContent: "center",
    },
    header: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20

    },
    searchInputContainer: {
        height: 50,
        backgroundColor: COLORS.white,
        borderRadius: 7,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10

    },
    categoryBtn: {
        height: 90,
        width: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 5,
        marginHorizontal: 10
    },
    categoryBtnName: {
        color: COLORS.dark,
        fontSize: 12,
        marginTop: 5,
        fontWeight: 'bold',
        marginRight: 10,
        textAlign: "center"
    },
    cardContainer: {
        alignItems: "center",
        backgroundColor: COLORS.grey,

        marginBottom: 10,
        borderRadius: 10,
        justifyContent: "center",
        borderWidth: 2,





    },
    cardDetailsContainer: {
        height: 90,
        width: 120,
        justifyContent: "center",
        alignItems: "center",



    },
    cardImageContainer: {
        width: 120,
        height: 100,
        borderRadius: 10,



    },
});
export default HomeScreen;
