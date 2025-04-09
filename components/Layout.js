// components/Layout.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomNavBar from './BottomNavBar';

export default function Layout({ children, navigation }) {
  const handleNav = (action) => {
    if (action === 'profile') navigation.navigate('Profile');
    else if (action === 'add') navigation.navigate('NewTrip');
    else if (action === 'notifications') navigation.navigate('Notifications');
    else if (action === 'home') navigation.navigate('Home');
    else if (action === 'exit') navigation.navigate('Login');
  };

  return (
    <View style={styles.wrapper}>
      {/* כותרת עליונה */}
      <View style={styles.header}>
        <Text style={styles.headerText}>DriveIt - כותרת עליונה</Text>
      </View>

      {/* תוכן דינמי */}
      <View style={styles.content}>{children}</View>

      {/* כותרת תחתונה */}
      <BottomNavBar onPress={handleNav} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 480,
    height: 680,
    alignSelf: 'center',
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd'
  },
  header: {
    height: 60,
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    padding: 10
  }
});
