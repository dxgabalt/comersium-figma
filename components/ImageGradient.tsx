import React from 'react';
import { StyleSheet, View, ImageBackground, ViewStyle, StyleProp } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// New reusable ImageGradient component
interface ImageGradientProps {
  uri: string;
  height?: number | string;
  gradientColors?: string[];
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

const ImageGradient: React.FC<ImageGradientProps> = ({
  uri,
  height = '100%',
  gradientColors = ['rgba(106,33,135,0.6)', 'rgba(106,33,135,0)'],
  style,
  children,
}) => {
  return (
    <View style={[{ width: '100%', height }, style]}>  
      <ImageBackground source={{ uri }} style={styles.image}>
        <LinearGradient colors={gradientColors} style={styles.overlay} />
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default ImageGradient;