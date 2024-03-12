import React from 'react';
import { View, Button, StyleSheet, Touchable, TouchableOpacity, Text } from 'react-native';

const HomeScreen = ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{ backgroundColor: 'green', padding: 10, borderRadius: 50 }}
                onPress={() => {
                    navigation.navigate('Flatlist')
                }}>
                <Text>Go to Flatlist Screen</Text>
            </TouchableOpacity>
            <View style={{ margin: 10 }} />
            <Button
                title="Haptic Feedback Screen"
                onPress={() => navigation.navigate('HapticFeedback')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;