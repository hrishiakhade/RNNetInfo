import React from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import { trigger } from "react-native-haptic-feedback";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

const HapticFeedbackScreen = () => {

    const options = {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false,
    };


    const handlePress = (method: string) => {
        ReactNativeHapticFeedback.trigger(method, options);
    };

    const methods = ['impactLight', 'impactMedium', 'impactHeavy', 'rigid', 'soft', 'selection', 'notificationSuccess', 'notificationWarning', 'notificationError', 'clockTick', 'contextClick', 'keyboardPress', 'keyboardRelease', 'keyboardTap', 'longPress', 'textHandleMove', 'virtualKey', 'virtualKeyRelease', 'effectClick', 'effectDoubleClick', 'effectHeavyClick', 'effectTick']
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                data={methods}
                numColumns={2}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', height: 50, alignItems: 'center', justifyContent: 'center', margin: 5 }}>
                        <TouchableOpacity
                            onPress={() => handlePress(item)}
                            style={{ padding: 10, backgroundColor: 'green', borderRadius: 10, width: 170 }}
                        >
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item) => item}
            />
        </View>
    );
};

export default HapticFeedbackScreen;