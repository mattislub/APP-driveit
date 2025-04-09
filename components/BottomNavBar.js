
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import ExitIcon from './ExitIcon';
import ProfileIcon from './ProfileIcon';
import BellIcon from './BellIcon';
import HomeIcon from './HomeIcon';
import BottomNavBackground from './BottomNavBackground';
import AddButton from './AddButton'; // ייבוא הכפתור החדש

export default function BottomNavBar({ onPress, iconColor = '#3E404C' }) {
  return (
    <View style={styles.container}>
      <BottomNavBackground style={styles.backgroundShape} />

      {/* צד שמאל */}
      <View style={styles.sideGroupLeft}>
        <TouchableOpacity onPress={() => onPress('exit')}>
          <ExitIcon width={30} height={30} fill={iconColor} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress('profile')} style={styles.innerIconMargin}>
          <ProfileIcon width={30} height={30} fill={iconColor} />
        </TouchableOpacity>
      </View>

      {/* כפתור מרכזי */}
      <View style={styles.centerButtonWrapper}>
        <AddButton onPress={() => onPress('add')} />
      </View>

      {/* צד ימין */}
      <View style={styles.sideGroupRight}>
        <TouchableOpacity onPress={() => onPress('notifications')} style={styles.bellIconAdjust}>
          <BellIcon width={30} height={30} fill={iconColor} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress('home')}>
          <HomeIcon width={30} height={30} fill={iconColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 127,
    width: '100%',
    justifyContent: 'center',
  },
  backgroundShape: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 0,
  },
  sideGroupLeft: {
    position: 'absolute',
    bottom: 20,
    left: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sideGroupRight: {
    position: 'absolute',
    bottom: 20,
    right: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerIconMargin: {
    marginLeft: 50,
  },
  bellIconAdjust: {
    marginRight: 50,
  },
  centerButtonWrapper: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: [{ translateX: -40.5 }],
    zIndex: 10,
  }
});
