import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
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
        {/* תמונה מדויקת בתחתית המסך */}
        <Image
          source={require('../assets/images/new-bg.png')}
          style={styles.manualImage}
          resizeMode="stretch"
        />

        {/* גרדיאנט עליון */}
        <LinearGradient
          colors={['#F5F5F5', 'transparent']}
          style={styles.gradient}
        />

        {/* כותרת עליונה */}
        <TopHeader
          onPressMenu={() => handlePress('תפריט')}
          onPressAction={() => handlePress('חיוב')}
        />

        {/* סרגל תחתון */}
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
    backgroundColor: '#F5F5F5', // רקע מסביב
  },
  fixedSize: {
    width: 480,
    height: 640,
    overflow: 'hidden',
    borderRadius: 0,
    position: 'relative',
  },
  manualImage: {
    position: 'absolute',
    bottom: 0,
    left: 13, // (480 - 454) / 2
    width: 454,
    height: 480,
    zIndex: 0,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 180,
    zIndex: 5,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
});
