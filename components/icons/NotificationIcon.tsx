import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

interface NotificationIconProps {
  size?: number;
  color?: string;
}

export default function NotificationIcon({ size = 24, color = '#FFFFFF' }: NotificationIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}