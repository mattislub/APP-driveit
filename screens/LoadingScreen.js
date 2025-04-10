import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import Logo from '../assets/Layer_1.svg';

export default function LoadingScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Logo width={180} height={180} style={styles.logo} />
      <ActivityIndicator size="large" color="#000" style={{ marginTop: 30 }} />
      <Text style={styles.text}>טוען נתונים...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 40,
  },
  text: {
    marginTop: 15,
    fontSize: 16,
    color: '#444',
  },
});
