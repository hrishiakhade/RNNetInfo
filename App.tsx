/* eslint-disable react-native/no-inline-styles */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/home';
import FlatlistScreen from './screens/FlatlistScreen';
import HapticFeedbackScreen from './screens/HapticFeedback';
import NetworkStatusAlert from './screens/component/NetworkStatusAlert';


const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <> 
    <NetworkStatusAlert />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Home' }}
          />
          <Stack.Screen
            name="Flatlist"
            component={FlatlistScreen}
            options={{ title: 'Flatlist' }}
          />
          <Stack.Screen
            name="HapticFeedback"
            component={HapticFeedbackScreen}
            options={{ title: 'Haptic Feedback' }}
          />
        </Stack.Navigator>
      </NavigationContainer >
    </>
  );
};

export default App;