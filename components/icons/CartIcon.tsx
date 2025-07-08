import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface CartIconProps {
  size?: number;
  color?: string;
}

export default function CartIcon({ size = 24, color = '#FFFFFF' }: CartIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9 22a1 1 0 100-2 1 1 0 000 2zM20 22a1 1 0 100-2 1 1 0 000 2zM1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}