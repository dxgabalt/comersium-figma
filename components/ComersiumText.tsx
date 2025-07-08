import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface ComersiumTextProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  style?: TextStyle;
}

export default function ComersiumText({ 
  size = 'medium', 
  color = 'white',
  style 
}: ComersiumTextProps) {
  // Tamaños del texto basados en la prop size
  const textSizes = {
    small: 13,
    medium: 18,
    large: 24,
  };

  return (
    <Text style={[
      styles.text, 
      { 
        fontSize: textSizes[size],
        color: color,
      },
      style
    ]}>
      COMERSIUM<Text style={styles.trademark}>™</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Michroma',
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 18, // Ajustar según el tamaño
  },
  trademark: {
    fontSize: 8,
    verticalAlign: 'top',
  }
});