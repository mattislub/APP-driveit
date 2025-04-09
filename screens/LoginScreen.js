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
        {/* תמונה ברוחב מלא, בתחתית */}
        <Image
          source={require('../assets/images/new-bg.png')}
          style={styles.fullWidthImage}
          resizeMode="stretch"
        />

        {/* רקע אפור עדין משתלב בהדרגה */}
        <LinearGradient
          colors={['#F2F2F2', 'rgba(242,242,242,0.5)', 'transparent']}
          style={styles.fadeBackground}
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 480,
    height: 480,
    zIndex: 0,
  },
  fadeBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 300,
    zIndex: 1,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
});
