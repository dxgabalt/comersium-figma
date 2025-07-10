import React, { useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen2() {
  const navigation = useNavigation();
  const scaleAnim = new Animated.Value(1);
  const opacityAnim = new Animated.Value(1);

  useEffect(() => {
    // Animación de escala para el logo (reducir tamaño)
    Animated.timing(scaleAnim, {
      toValue: 0.6,
      duration: 800,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();

    // Navegar a la siguiente pantalla después de un tiempo
    const timer = setTimeout(() => {
      navigation.navigate('Splash3' as never);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            transform: [{ scale: scaleAnim }],
            opacity: opacityAnim,
          },
        ]}
      >
        {/* Diamante exterior cyan */}
        <View style={styles.outerDiamond}>
          {/* Diamante interior púrpura */}
          <View style={styles.innerDiamond}>
            {/* Notch (muesca) en la parte inferior derecha */}
            <View style={styles.notch} />
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerDiamond: {
    width: 200,
    height: 200,
    transform: [{ rotate: '45deg' }],
    borderColor: '#00E5FF',
    borderWidth: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerDiamond: {
    width: 160,
    height: 160,
    borderColor: '#8942F5',
    borderWidth: 6,
    backgroundColor: 'transparent',
    position: 'relative',
  },
  notch: {
    position: 'absolute',
    width: 40,
    height: 40,
    backgroundColor: '#8942F5',
    bottom: 40,
    right: 0,
  },
});