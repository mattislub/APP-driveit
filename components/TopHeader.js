import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, I18nManager } from 'react-native';
import MenuIcon from './MenuIcon';

export default function TopHeader({ onPressMenu, onPressAction }) {
  return (
    <View style={styles.header}>
      {/* תפריט בצד ימין */}
      <View style={styles.right}>
        <TouchableOpacity onPress={onPressMenu} style={styles.menuIconWrapper}>
          <MenuIcon width={30} height={30} />
        </TouchableOpacity>
      </View>

      {/* חיוב בצד שמאל */}
      <View style={styles.left}>
        <TouchableOpacity onPress={onPressAction} style={styles.leftButtonWrapper}>
          <Text style={styles.leftButton}>חיוב</Text>
        </TouchableOpacity>
      </View>
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
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    zIndex: 10,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIconWrapper: {
    marginLeft: I18nManager.isRTL ? 0 : 8,
    marginRight: I18nManager.isRTL ? 8 : 0,
  },
  leftButtonWrapper: {
    marginRight: I18nManager.isRTL ? 0 : 8,
    marginLeft: I18nManager.isRTL ? 8 : 0,
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
