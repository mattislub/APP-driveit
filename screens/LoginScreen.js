import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
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
        <ImageBackground
          source={require('../assets/images/new-bg.png')}
          style={styles.background}
          resizeMode="contain"
          imageStyle={styles.imagePosition}
        >
          <LinearGradient
            colors={['#F5F5F5', 'transparent']}
            style={styles.gradient}
          />

          <TopHeader
            onPressMenu={() => handlePress('תפריט')}
            onPressAction={() => handlePress('חיוב')}
          />

          <View style={styles.bottomBar}>
            <BottomNavBar onPress={(label) => handlePress(label)} />
          </View>
        </ImageBackground>
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
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imagePosition: {
    alignSelf: 'flex-end',
  },
  gradient: {
    position: 'absolute',
