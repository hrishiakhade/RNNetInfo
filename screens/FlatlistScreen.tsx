import React, { useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import useGetData from '../customHook/useGetData';
import LoadingComponent from './Loading';

const FlatlistScreen = ({ navigation }: { navigation: any }) => {

    const { data, loading, error } = useGetData();

    // const renderDataItem = useCallback(({ item }) => {
    //     return (
    //         <View style={{ backgroundColor: 'white', width: 350, margin: 10, borderRadius: 10, elevation: 10 }}>
    //             <Image source={{ uri: item.thumbnail }} style={{ width: '100%', height: 200, borderTopRightRadius: 10, borderTopLeftRadius: 10 }} />
    //             <View style={{ padding: 10 ,flexDirection:'row'}}>
    //                 <Text style={{flex:1}}>{item.title}</Text>
    //                 <Text>${item.price}</Text>
    //             </View>
    //         </View>
    //     );
    // }, []);
    const renderDataItem = ({ item }) => {
        return (
            <View style={{ backgroundColor: 'white', width: 350, margin: 10, borderRadius: 10, elevation: 10 }}>
                <Image
                    source={{ uri: item.thumbnail , cache : 'reload'}}
                    style={{ width: '100%', height: 200, borderTopRightRadius: 10, borderTopLeftRadius: 10 }} />
                <View style={{ padding: 10, flexDirection: 'row' }}>
                    <Text style={[{ flex: 1 }, styles.text]}>{item.title}</Text>
                    <Text style={styles.text}>${item.price}</Text>
                </View>
            </View >
        );
    };

    return (
        <>
            <View style={styles.container}>
                {loading && <LoadingComponent />}
                {error && <Text>Something went wrong</Text>}

                <FlatList
                    data={data}
                    keyExtractor={(item, index) => item.id.toString() + index.toString()}
                    renderItem={renderDataItem}
                    maxToRenderPerBatch={50}
                />
            </View>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }
});

export default FlatlistScreen;