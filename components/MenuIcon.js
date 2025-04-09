import * as React from 'react';
import Svg, { path } from 'react-native-svg';

export default function MenuIcon(props) {
  return (
    <Svg viewBox="0 0 27 17" width={props.width || 30} height={props.height || 30} {...props}>
      <path d="M1 1H26" stroke="#3E404C" stroke-linecap="round" stroke-width="2"/><path d="M1 8L26 8" stroke="#3E404C" stroke-linecap="round" stroke-width="2"/><path d="M1 16H26" stroke="#3E404C" stroke-linecap="round" stroke-width="2"/>
    </Svg>
  );
}
