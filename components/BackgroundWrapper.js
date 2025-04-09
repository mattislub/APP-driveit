import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function BackgroundWrapper({ children, showImage = true }) {
  return (
    <View style={styles.container}>
      {showImage && (
        <Image
          source={require('../assets/images/new-bg.png')}
          style={styles.image}
          resizeMode="stretch"
        />
      )}

      <LinearGradient
        colors={['#F5F5F5', 'transparent']}
        style={styles.gradient}
      />

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 480,
    height: 640,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },
  image: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 480,
    height: 480,
    opacity: 0.5,
    zIndex: 0,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 360,
    zIndex: 1,
  },
});
