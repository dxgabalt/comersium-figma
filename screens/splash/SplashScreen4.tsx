import React, { useEffect } from 'react';
import { View, StyleSheet, Animated, Easing, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import ComersiumLogo from '../../components/ComersiumLogo';
import ComersiumText from '../../components/ComersiumText';

export default function SplashScreen4() {
  const navigation = useNavigation();
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    // Animación de fade in para el logo y texto
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();

    // Navegar a la primera pantalla de onboarding después de un tiempo
    const timer = setTimeout(() => {
      navigation.navigate('Onboarding1' as never);
    }, 2000);

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
          styles.contentContainer,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        <ComersiumLogo size="tiny" color="white" />
        <View style={styles.textContainer}>
          <ComersiumText size="medium" color="white" />
        </View>
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
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    marginTop: 20,
  },
});