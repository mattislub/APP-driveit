import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TopHeader from '../components/TopHeader';
import BottomNavBar from '../components/BottomNavBar';

export default function LoginScreen({ navigation }) {
  const handlePress = (label) => {
    console.log(`נלחץ: ${label}`);
  };

  return (
    <View style={styles.outerWrapper}>
      <View style={styles.fixedSize}>
        {/* תמונה ברוחב מלא */}
        <Image
          source={require('../assets/images/new-bg.png')}
          style={styles.fullWidthImage}
          resizeMode="contain"
        />

        {/* שכבת גרדיאנט על כל המסך */}
        <LinearGradient
          colors={['#F5F5F5', 'transparent']}
          style={styles.fullScreenGradient}
        />

        {/* תוכן */}
        <TopHeader
          onPressMenu={() => handlePress('תפריט')}
          onPressAction={() => handlePress('חיוב')}
        />

        <View style={styles.bottomBar}>
          <BottomNavBar onPress={(label) => handlePress(label)} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  fixedSize: {
    width: 480,
    height: 640,
    overflow: 'hidden',
    borderRadius: 0,
    position: 'relative',
  },
  fullWidthImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
  },
  fullScreenGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 3,
  },
});
