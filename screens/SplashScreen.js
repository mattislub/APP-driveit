import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import SvgUri from 'react-native-svg-uri'; // ודא שהחבילה מותקנת
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const init = async () => {
      const data = await AsyncStorage.getItem('deviceSetup');
      setTimeout(() => {
        if (data) {
          navigation.replace('Login');
        } else {
          navigation.replace('Setup');
        }
      }, 1500); // 1.5 שניות
    };

    init();
  }, []);

  return (
    <View style={styles.container}>
      <SvgUri
        width="220"
        height="220"
        source={require('../assets/Vector.svg')} // ודא שזה הנתיב
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
