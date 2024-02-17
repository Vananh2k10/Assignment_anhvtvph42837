import { FlatList, 
    Image, SafeAreaView, 
    ScrollView, StyleSheet, Text, TextInput,
     TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const HomeScreen = () => {

    const navigation = useNavigation();
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://65c4f22adae2304e92e3b433.mockapi.io/products').then(res => setData(res.data)).catch(err => console.log(err))
    },[])
    // const dataCF = [ 
    //     { id: 1, name: 'Cappuccino', title: 'With Steamed Milk', price: '4.20', start: '4.5', imge: 'sp1' },
    //     { id: 2, name: 'Cappuccino', title: 'With Foam', price: '4.50', start: '4.2', imge: 'sp2' },
    //     { id: 3, name: 'Cappuccino', title: 'With Steamed Milk', price: '4.10', start: '4.1', imge: 'sp3' }
    // ];

    // const dataCFBeans = [
    //     { id: 1, name: 'Robusta Beans', title: 'Medium Roasted', price: '4.20', imge: 'sp3.png' },
    //     { id: 2, name: 'Cappuccino', title: 'With Steamed Milk', price: '4.10', imge: 'sp3.png' },
    //     { id: 3, name: 'Cappuccino', title: 'With Foam', price: '4.50', imge: 'sp3.png' },
    // ];

    const dataCFCountry = [
        { id: 1, country: 'All' },
        { id: 2, country: 'Cappuccino' },
        { id: 3, country: 'Espresso' },
        { id: 4, country: 'Americano' },
        { id: 5, country: 'Macco' },
        { id: 6, country: 'Vietnam' },
    ]

    const [selectedItem, setSelectedItem] = useState(1);

    const handlePress = (item) => {
        setSelectedItem(item?.id);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Setting')
                }}> 
                    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#141921', width: 34, height: 34, borderRadius: 14 }}>
                        <Image source={require('../image/Vectormenu.png')} tintColor={'gray'} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={styles.imgHeader} source={require('../image/ic_person.png')} />
                </TouchableOpacity>
            </View>
                <Text style={{ fontSize: 28, color: '#FFFFFF', fontWeight: 'bold', marginBottom: 40 }}>
                    Find the best {'\n'}coffee for you
                </Text>

                <View style={{ borderRadius: 15, paddingVertical: 4, flexDirection: 'row', alignItems: 'center', backgroundColor: '#141921', marginBottom: 40 }}>
                    <View style={{ marginHorizontal: 25, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../image/Vectorsearch.png')} tintColor={'gray'} />
                    </View>

                    <TextInput placeholder='Find Your Coffee...' placeholderTextColor='#52555A' color='#ffffff' />
                </View>

                {/* Flatlist do du lieu Xuất xứ của Coffee theo chiều ngang*/}
                <FlatList
                    horizontal={true} style={{ marginBottom: 30 }}
                    scrollEnabled={true}
                    data={dataCFCountry}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => handlePress(item)}>
                            <Text style={[styles.textName, { textAlign: 'center', color: item.id === selectedItem ? '#D17842' : '#52555A' }]}>
                                {item.country}
                                {'\n'}
                                <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: item.id === selectedItem ? '#D17842' : 'black' }}></View>

                            </Text>
                        </TouchableOpacity>
                    }>
                </FlatList>
                <ScrollView>
                {/*Do du lieu len itemSanPham Caffee */}
                <FlatList
                    horizontal={true}
                    scrollEnabled={true}
                    data={data}
                    renderItem={({ item }) =>
                        <View style={styles.item}>
                            {/* Ảnh itemSanPham */}
                            <View style={styles.item_anh}>
                                <Image style={styles.item_anh_img} source={require('../image/sp1.png')} />
                                <View style={styles.item_anh_img_view}>
                                    <Image style={{ width: 10, height: 10, marginLeft: 10 }} source={require('../image/Vectorstart.png')} tintColor={'#D17842'} />
                                    <Text style={[styles.textName, { color: '#FFFFFF', fontSize: 10, marginRight: 5 }]}>{item.start}</Text>
                                </View>
                            </View>
                            {/* Nội dung */}
                            <View>
                                <Text style={[styles.textBase]}>
                                    {'\n'}
                                    {item.name} {'\n'}
                                    <Text style={{ fontSize: 10 }}>{item.title}</Text>
                                </Text>

                                <View style={styles.item_noidung}>
                                    <Text style={[styles.textBase, { fontSize: 20, fontWeight: 'bold' }]}>
                                        <Text style={{ color: '#D17842' }}>$</Text> {item.price}
                                    </Text>

                                    <View style={styles.item_noidung_img}>
                                        <Image style={{ width: 14, height: 14 }} source={require('../image/Vectoradd.png')} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    }>

                </FlatList>

                <View style={{ marginVertical: 20 }}>
                    <Text style={[styles.textBase, { fontSize: 18 }]}>Coffee beans</Text>
                </View>

                {/* Flatlist do du lieu itemSanPham cà phê hạt  */}
                <FlatList
                    horizontal={true}
                    scrollEnabled={true}
                    data={data}
                    renderItem={({ item }) =>
                        <View style={styles.item}>
                            {/* Ảnh itemSanPham */}
                            <View style={styles.item_anh}>
                                <Image style={styles.item_anh_img} source={require('../image/sp3.png')} />
                            </View>

                            {/* Nội dung */}
                            <View>
                                <Text style={[styles.textBase]}>
                                    {'\n'}
                                    {item.name} {'\n'}
                                    <Text style={{ fontSize: 10 }}>{item.title}</Text>
                                </Text>

                                <View style={styles.item_noidung}>
                                    <Text style={[styles.textBase, { fontSize: 20, fontWeight: 'bold' }]}>
                                        <Text style={{ color: '#D17842' }}>$</Text> {item.price}
                                    </Text>

                                    <View style={styles.item_noidung_img}>
                                        <Image style={{ width: 14, height: 14 }} source={require('../image/Vectoradd.png')} />
                                    </View>
                                </View>

                            </View>
                        </View>
                    }>

                </FlatList>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0C0F14',
        height: '100%',
        padding: 20,
    },
    header: {
        backgroundColor: '#0C0F14',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 20
    },
    imgHeader: {
        width: 34,
        height: 34,
        borderRadius: 12,

    },
    textName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 20,
        color: '#52555A'
    },
    textBase: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    item: {
        borderRadius: 28,
        backgroundColor: '#141921',
        padding: 14,
        width: 150,
        height: 250,
        marginRight: 15
    },
    item_anh: {
        flexDirection: 'row', width: '100%', height: '60%'
    },
    item_anh_img: {
        width: '100%', height: '100%', borderRadius: 20
    },
    item_anh_img_view: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'center',
        borderBottomLeftRadius: 80,
        borderTopRightRadius: 70,
        height: 22,
        width: 50,
        position: 'absolute',
        right: 0,
        paddingVertical: 3
    },
    item_noidung: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    item_noidung_img: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        backgroundColor: '#D17842',
        borderRadius: 6
    }
})