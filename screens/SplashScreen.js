import React from 'react';
import { View, Text } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 24 }}>שלום, Splash עובד!</Text>
    </View>
  );
}
