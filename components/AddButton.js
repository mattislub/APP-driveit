
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Line, Circle } from 'react-native-svg';

export default function AddButton({ onPress, size = 89 }) {
  const center = size / 2;
  const plusLength = size * 0.4;
  const strokeWidth = 4;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={{ width: size, height: size }}>
      <View style={[styles.shadow, { width: size, height: size, borderRadius: center }]}>
        <Svg width={size} height={size}>
          <Circle cx={center} cy={center} r={center} fill="#3E404C" />
          <Line
            x1={center - plusLength / 2}
            y1={center}
            x2={center + plusLength / 2}
            y2={center}
            stroke="#FFFFFF"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <Line
            x1={center}
            y1={center - plusLength / 2}
            x2={center}
            y2={center + plusLength / 2}
            stroke="#FFFFFF"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </Svg>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
});
