import React from 'react';
import { View } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import TopHeader from '../components/TopHeader';
import BottomNavBar from '../components/BottomNavBar';

export default function LoginScreen({ navigation }) {
  const handlePress = (label) => {
    console.log(`נלחץ: ${label}`);
  };

  return (
    <ScreenWrapper showImage={true}>
      <TopHeader
        onPressMenu={() => handlePress('תפריט')}
        onPressAction={() => handlePress('חיוב')}
      />
      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10 }}>
        <BottomNavBar onPress={(label) => handlePress(label)} />
      </View>
    </ScreenWrapper>
  );
}

