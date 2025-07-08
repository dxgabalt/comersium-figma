import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  style,
  textStyle,
}: ButtonProps) {
  // Estilos de botón basados en la variante
  const buttonStyles = {
    primary: {
      backgroundColor: '#00E5FF',
      borderColor: 'transparent',
    },
    secondary: {
      backgroundColor: '#1B1B1B',
      borderColor: 'transparent',
    },
    outline: {
      backgroundColor: 'transparent',
      borderColor: '#00E5FF',
      borderWidth: 1,
    },
    text: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },
  };

  // Estilos de texto basados en la variante
  const textStyles = {
    primary: {
      color: '#1B1B1B',
    },
    secondary: {
      color: 'white',
    },
    outline: {
      color: '#00E5FF',
    },
    text: {
      color: '#00E5FF',
    },
  };

  // Tamaños de botón
  const buttonSizes = {
    small: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 4,
    },
    medium: {
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 6,
    },
    large: {
      paddingVertical: 16,
      paddingHorizontal: 32,
      borderRadius: 8,
    },
  };

  // Tamaños de texto
  const fontSizes = {
    small: 14,
    medium: 16,
    large: 18,
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        buttonStyles[variant],
        buttonSizes[size],
        disabled && styles.disabled,
        style,
      ]}
    >
      <Text
        style={[
          styles.text,
          textStyles[variant],
          { fontSize: fontSizes[size] },
          disabled && styles.disabledText,
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
  },
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    opacity: 0.7,
  },
});