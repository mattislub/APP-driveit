import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logo from '../assets/NotFound.svg';


export default function SplashScreen() {
  useEffect(() => {
    console.log("SplashScreen נטען");
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>שלום, Splash עובד!</Text>

      <View style={styles.logoWrapper}>
        <Logo width={220} height={220} />
      </View>
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
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
  logoWrapper: {
    borderWidth: 2,
    borderColor: 'red',
    padding: 10,
  },
});
console.log('LOGO =', Logo);
