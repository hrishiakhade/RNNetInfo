import React, { useEffect, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const NetworkStatusAlert = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);


if (isConnected) {
    return null;
  }


  return (
    <View style={{ backgroundColor:  'red', height: 20, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#fff' }}>No Internet Connection</Text>
    </View>
  );
};

export default NetworkStatusAlert;
