import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import ComersiumLogo from '../../components/ComersiumLogo';
import ComersiumText from '../../components/ComersiumText';

export default function SplashScreen1() {
  const navigation = useNavigation();
  const scaleAnim = new Animated.Value(0);
  const opacityAnim = new Animated.Value(0);

  useEffect(() => {
    // Animación de escala para el logo
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 800,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();

    // Animación de opacidad para el logo
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();

    // Navegar a la siguiente pantalla después de un tiempo
    const timer = setTimeout(() => {
      navigation.navigate('Splash2' as never);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={['#00E5FF', '#8942F5']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Animated.View
        style={[
          styles.logoContainer,
          {
            transform: [{ scale: scaleAnim }],
            opacity: opacityAnim,
          },
        ]}
      >
        <ComersiumLogo size="medium" color="white" />
        <ComersiumText size="small" color="white" style={{ marginTop: 10 }} />
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
  },
  // ... keep logoContainer styling ...
});