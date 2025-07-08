import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface DiamondProps {
  size?: number;
  color?: string;
}

export default function Diamond({ size = 48, color = '#FFFFFF' }: DiamondProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2L2 12l10 10 10-10L12 2zm0 2.83L19.17 12 12 19.17 4.83 12 12 4.83z"
        fill={color}
        strokeWidth={1}
        stroke={color}
      />
    </Svg>
  );
}