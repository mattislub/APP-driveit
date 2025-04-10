import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { SvgXml } from 'react-native-svg';

const logoXml = `<svg width="34" height="40" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.2909 11.94C33.1888 11.5971 33.0715 11.2542 32.9388 10.9063C32.3469 9.31802 31.5204 7.81039 30.4693 6.46916C27.8824 3.15137 23.9893 0.847075 19.8105 0.161332C18.3053 -0.0857371 16.6828 -0.110948 15.3511 0.610091C14.2388 1.21012 13.4224 2.32949 13.2336 3.56988C13.0448 4.81027 13.5091 6.13637 14.4582 6.9633C15.8868 8.21377 17.9329 8.18856 19.6932 8.60707C21.6882 9.08103 23.423 10.4071 24.5149 12.1215C25.1526 13.1199 25.5608 14.2594 25.7241 15.4292C25.9333 16.9015 25.7547 18.4293 25.1782 19.8059C23.3362 24.1825 17.9533 26.2044 13.6469 24.117C11.5754 23.1136 9.90181 21.2328 9.23851 19.0394C9.13646 18.7066 9.05992 18.3688 9.0089 18.0209C8.61602 15.4393 8.16192 12.5955 4.78928 12.5652C2.69732 12.545 0.834964 14.1031 0.681894 16.0494C0.355346 20.2445 2.19728 24.1523 4.74334 27.3995C7.86086 31.3778 11.4223 35.1292 14.8409 38.8504C16.346 40.4891 18.6625 40.3328 20.1116 38.6386C26.7752 30.8483 36.7554 23.2447 33.296 11.9349L33.2909 11.94Z" fill="#F9CF70"/></svg>`;

export default function SplashScreen({ navigation }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, { toValue: 1.1, duration: 400, useNativeDriver: true }),
        Animated.timing(scaleAnim, { toValue: 1.0, duration: 400, useNativeDriver: true }),
      ])
    ).start();

    const timeout = setTimeout(() => {
      navigation.replace('Login');
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <SvgXml xml={logoXml} width="160" height="160" />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // רקע אפור בהיר
    justifyContent: 'center',
    alignItems: 'center',
  },
});
