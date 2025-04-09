import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ScreenWrapper({ children, showImage = true }) {
  return (
    <View style={styles.outerWrapper}>
      <View style={styles.fixedSize}>
        {/* רקע עם תמונה אם נבחר */}
        {showImage && (
          <Image
            source={require('../assets/images/new-bg.png')}
            style={styles.fullWidthImage}
            resizeMode="stretch"
          />
        )}

        {/* גרדיאנט */}
        <LinearGradient
          colors={['#FFFFFF', '#FAFAFA', '#F5F5F5', 'transparent']}
          style={styles.softFadeFromTop}
        />

        {/* תוכן */}
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  fixedSize: {
    width: 480,
    height: 640,
    overflow: 'hidden',
    borderRadius: 0,
    position: 'relative',
  },
  fullWidthImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 480,
    height: 480,
    zIndex: 0,
    opacity: 0.5,
  },
  softFadeFromTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 280,
    zIndex: 1,
  },
});
