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
            <View style={style.cardContainer}>
                {/* Render the card image */}
                <View style={style.cardImageContainer}>
                    <Image
                        source={category.image}
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'cover',
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
                        &#x20B5; {category?.price}
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
        <SafeAreaView style={{ flex: 1, color: COLORS.white }}>
            <View style={style.header}>
                <Icon name="sort-variant" size={28} onPress={navigation.toggleDrawer} />
                <Text style={{ color: COLORS.primary, fontWeight: 'bold', fontSize: 16 }}>
                    JANE GARY
                </Text>
                <Image
                    source={require('../../assets/person.jpg')}
                    style={{ height: 30, width: 30, borderRadius: 25 }}
                />
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
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    header: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.background,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 40,
        minHeight: height,
    },
    searchInputContainer: {
        height: 50,
        backgroundColor: COLORS.white,
        borderRadius: 7,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',

    },
    categoryBtn: {
        height: 90,
        width: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 5
    },
    categoryBtnName: {
        color: COLORS.dark,
        fontSize: 12,
        marginTop: 5,
        fontWeight: 'bold',
        marginRight: 10
    },
    // cardContainer: {
    //     marginHorizontal: 3,
    //     alignItems: 'center',
    //     marginBottom: 20,
    // },
    cardDetailsContainer: {
        height: 120,
        width: 120,
        marginHorizontal: 3,
        backgroundColor: COLORS.white,
        flex: 1,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        padding: 20,
        justifyContent: 'center',
    },
    cardImageContainer: {
        height: 120,
        width: 120,
        borderWidth: 0.5,
        borderColor: COLORS.dark,
        marginBottom: 1


    },
});
export default HomeScreen;
