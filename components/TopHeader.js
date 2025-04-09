import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MenuIcon from './MenuIcon';

export default function TopHeader({ onPressMenu, onPressAction }) {
  return (
    <View style={styles.header}>
      {/* כפתור חיוב בצד שמאל */}
      <TouchableOpacity onPress={onPressAction} style={styles.leftButtonWrapper}>
        <Text style={styles.leftButton}>חיוב</Text>
      </TouchableOpacity>

      {/* אייקון תפריט בצד ימין */}
      <TouchableOpacity onPress={onPressMenu} style={styles.menuIconWrapper}>
        <MenuIcon width={30} height={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    paddingHorizontal: 12,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    zIndex: 10,
  },
  menuIconWrapper: {
    marginRight: 8,
  },
  leftButtonWrapper: {
    marginLeft: 8,
  },
  leftButton: {
    backgroundColor: '#FFD877',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    color: '#3E404C',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
