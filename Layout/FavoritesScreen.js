import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const FavoritesScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#141921', width: 34, height: 34, borderRadius: 14 }}>
                        <Image source={require('../image/Vectormenu.png')} tintColor={'gray'} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={styles.imgHeader} source={require('../image/ic_person.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView>

                <View style={[styles.item]}>
                    {/* Ảnh */}
                    <View style={{ width: '100%', height: '76%' }}>

                        {/* anh san SanPham */}
                        <Image style={[styles.item_img]} source={require('../image/sp4.png')} />

                        {/* phan thong tin  */}
                        <View style={[styles.item_img_info]}>
                            <View style={styles.item_img_info_row}>

                                <View style={{ width: '100%' }}>
                                    <Text style={[styles.textBase, { fontSize: 20, fontWeight: 'bold' }]}>Cappuccino</Text>
                                    <Text style={[styles.textBase, { fontSize: 10, color: '#AEAEAE' }]}>With Steamed Milk</Text>
                                </View>

                                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <View style={styles.item_img_info_row_ic}>
                                        <Image source={require('../image/coffee2.png')} tintColor={'#D17842'} />
                                        <Text style={[styles.textBase, { fontSize: 10, color: '#AEAEAE', textAlign: 'center' }]}>Coffee</Text>
                                    </View>
                                    <View style={styles.item_img_info_row_ic}>
                                        <Image source={require('../image/Vectorwater.png')} tintColor={'#D17842'} />
                                        <Text style={[styles.textBase, { fontSize: 10, color: '#AEAEAE', textAlign: 'center' }]}>Milk</Text>
                                    </View>
                                </View>

                            </View>

                            <View style={styles.item_img_info_row}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                                    <Image source={require('../image/Vectorstart.png')} tintColor={'#D17842'} />
                                    <Text style={[styles.textBase, { fontSize: 20, fontWeight: 'bold', marginHorizontal: 7 }]}>4.5</Text>
                                    <Text style={[styles.textBase, { fontSize: 10, color: '#AEAEAE' }]}>(6,879)</Text>
                                </View>
                                <View style={[styles.item_img_info_row_ic, { width: '80%', height: '80%', marginLeft: 15 }]}>
                                    <Text style={[styles.textBase, { fontSize: 10, color: '#AEAEAE' }]}>Medium Roasted</Text>
                                </View>
                            </View>
                        </View>

                        {/* Nut yeu thich */}
                        <View style={[styles.item_heart]}>
                            <View></View>
                            <View style={[styles.item_img_info_row_ic, { width: 34, height: 34 }]}>
                                <Image source={require('../image/Vectorhear.png')} tintColor={'red'} />
                            </View>
                        </View>
                    </View>

                    {/* Nội dung */}
                    <View style={{ width: '100%', height: '24%', padding: 20 }}>
                        <Text style={[styles.textBase]}>
                            <Text style={[{ color: '#AEAEAE', fontWeight: 'bold', fontSize: 16 }]}>Description</Text>
                            {'\n'}Cappuccino is a latte made with more foam than
                            {'\n'}steamed milk, often with a sprinkle of cocoa
                            {'\n'}powder or cinnamon on top.
                        </Text>
                    </View>
                </View>

                <View style={[styles.item1]}>
                    {/* Ảnh */}
                    <View style={{ width: '100%', height: '76%' }}>

                        {/* anh san SanPham */}
                        <Image style={[styles.item_img]} source={require('../image/sp4.png')} />

                        {/* phan thong tin  */}
                        <View style={[styles.item_img_info]}>
                            <View style={styles.item_img_info_row}>

                                <View style={{ width: '100%' }}>
                                    <Text style={[styles.textBase, { fontSize: 20, fontWeight: 'bold' }]}>Cappuccino</Text>
                                    <Text style={[styles.textBase, { fontSize: 10, color: '#AEAEAE' }]}>With Steamed Milk</Text>
                                </View>

                                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <View style={styles.item_img_info_row_ic}>
                                        <Image source={require('../image/coffee2.png')} tintColor={'#D17842'} />
                                        <Text style={[styles.textBase, { fontSize: 10, color: '#AEAEAE', textAlign: 'center' }]}>Coffee</Text>
                                    </View>
                                    <View style={styles.item_img_info_row_ic}>
                                        <Image source={require('../image/Vectorwater.png')} tintColor={'#D17842'} />
                                        <Text style={[styles.textBase, { fontSize: 10, color: '#AEAEAE', textAlign: 'center' }]}>Milk</Text>
                                    </View>
                                </View>

                            </View>

                            <View style={styles.item_img_info_row}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                                    <Image source={require('../image/Vectorstart.png')} tintColor={'#D17842'} />
                                    <Text style={[styles.textBase, { fontSize: 20, fontWeight: 'bold', marginHorizontal: 7 }]}>4.5</Text>
                                    <Text style={[styles.textBase, { fontSize: 10, color: '#AEAEAE' }]}>(6,879)</Text>
                                </View>
                                <View style={[styles.item_img_info_row_ic, { width: '80%', height: '80%', marginLeft: 15 }]}>
                                    <Text style={[styles.textBase, { fontSize: 10, color: '#AEAEAE' }]}>Medium Roasted</Text>
                                </View>
                            </View>
                        </View>

                        {/* Nut yeu thich */}
                        <View style={[styles.item_heart]}>
                            <View></View>
                            <View style={[styles.item_img_info_row_ic, { width: 34, height: 34 }]}>
                                <Image source={require('../image/Vectorhear.png')} tintColor={'red'} />
                            </View>
                        </View>
                    </View>

                    {/* Nội dung */}
                    <View style={{ width: '100%', height: '24%', padding: 20 }}>
                        <Text style={[styles.textBase]}>
                            <Text style={[{ color: '#AEAEAE', fontWeight: 'bold', fontSize: 16 }]}>Description</Text>
                            {'\n'}Cappuccino is a latte made with more foam than
                            {'\n'}steamed milk, often with a sprinkle of cocoa
                            {'\n'}powder or cinnamon on top.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default FavoritesScreen

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
    textBase: {
        color: '#FFFFFF',
        fontSize: 14,
    },
    item: {
        backgroundColor: '#141921',
        width: '100%',
        height: 540,
        borderRadius: 25,
    },
    item1: {
        backgroundColor: '#141921',
        width: '100%',
        height: 540,
        borderRadius: 25,
        marginTop: 20
    },
    item_img: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    item_img_info: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: '100%',
        height: '30%',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 20,
        justifyContent: 'space-between'

    },
    item_img_info_row: {
        width: '50%', height: '60%', flexDirection: 'row', justifyContent: 'space-between',
        alignItems: 'center'
    },
    item_img_info_row_ic: {
        flexDirection: 'column', backgroundColor: '#0C0F14', padding: 5,
        borderRadius: 8, justifyContent: 'space-around',
        alignItems: 'center', width: 50, height: 50
    },
    item_heart: {
        position: 'absolute', width: '100%', top: 20, right: 20,
        height: '20%', justifyContent: 'space-between', flexDirection: 'row',
    }

})