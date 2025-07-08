import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface BackArrowProps {
  size?: number;
  color?: string;
}

export default function BackArrow({ size = 24, color = '#FFFFFF' }: BackArrowProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19 12H5M12 19l-7-7 7-7"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}