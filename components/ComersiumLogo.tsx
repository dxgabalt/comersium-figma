import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ComersiumText from './ComersiumText';

interface ComersiumLogoProps {
  size?: 'tiny' | 'small' | 'medium';
  color?: 'white' | 'black' | 'color';
}

export default function ComersiumLogo({ size = 'medium', color = 'white' }: ComersiumLogoProps) {
  const logoSize = size === 'tiny' ? 24 : size === 'small' ? 32 : 48;
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {/* Fallback diamond icon until SVG assets are available */}
      <Ionicons name="diamond-outline" size={logoSize} color={
        color === 'black' ? '#000' : color === 'color' ? '#00E5FF' : '#fff'
      } />
      {size !== 'tiny' && <ComersiumText size={size} color={color} />}
    </View>
  );
}