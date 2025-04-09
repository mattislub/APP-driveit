import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopHeader from '../components/TopHeader';
import BottomNavBar from '../components/BottomNavBar';
import BackgroundWrapper from '../components/BackgroundWrapper';

export default function LoginScreen({ navigation }) {
  const handlePress = (label) => {
    console.log(`נלחץ: ${label}`);
  };

  return (
    <BackgroundWrapper showImage={true}>
      {/* כותרת עליונה */}
      <TopHeader
        onPressMenu={() => handlePress('תפריט')}
        onPressAction={() => handlePress('חיוב')}
      />

      {/* סרגל תחתון */}
      <View style={styles.bottomBar}>
        <BottomNavBar onPress={(label) => handlePress(label)} />
      </View>
    </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
});
