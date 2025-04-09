import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from '../assets/Vector.svg'; // השתמש בייבוא SVG ישיר
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
      }, 1500); // השהייה של 1.5 שניות
    };

    init();
  }, []);

  return (
    <View style={styles.container}>
      <Logo width={220} height={220} />
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
