// components/BottomNavBackground.js
import React from 'react';
import Svg, { Path, G, Circle, Ellipse, Line, Rect, Defs, ClipPath, Polygon, Polyline, Stop, LinearGradient, Use, Symbol, Text } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

export default function BottomNavBackground() {
  return (
    <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: -1 }}>
<Svg width="480" height="81" viewBox="0 0 480 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_2454_15645)">
<path d="M194.56 24.445C189.998 16.0338 182.105 9 172.537 9H20C8.95431 9 0 17.9543 0 29V81H480V29C480 17.9543 471.046 9 460 9L312.463 9C302.895 9 295.002 16.0338 290.44 24.445C281.216 41.4521 263.207 53 242.5 53C221.793 53 203.784 41.4521 194.56 24.445Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_2454_15645" x="-7" y="0" width="494" height="86" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-2"/>
<feGaussianBlur stdDeviation="3.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.243137 0 0 0 0 0.25098 0 0 0 0 0.298039 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2454_15645"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2454_15645" result="shape"/>
</filter>
</defs>
</Svg>

    </View>
  );
}
