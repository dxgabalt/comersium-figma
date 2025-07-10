// app/onboarding/OnboardingFlowScreen.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import PagerView from 'react-native-pager-view'; // Importa PagerView

// Asegúrate de que esta ruta sea correcta para tus tipos
import InfoViewProps from '../types/InfoViewProps';

// Importa todas tus vistas de onboarding
import OnboardingScreen1 from './OnboardingScreen1';
import OnboardingScreen2 from './OnboardingScreen2';
import OnboardingScreen3 from './OnboardingScreen3';
import OnboardingScreen4 from './OnboardingScreen4';

const { width } = Dimensions.get('window');

type OnboardingPageComponent = React.ComponentType<InfoViewProps>;

export default function OnboardingFlowScreen() {
  const pagerRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const pages: OnboardingPageComponent[] = [
    OnboardingScreen1,
    OnboardingScreen2,
    OnboardingScreen3,
    OnboardingScreen4, // Incluye tu vista placeholder
  ];
  const totalPages = pages.length;

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      pagerRef.current?.setPage(currentPage + 1); // Navega a la siguiente página
    } else {
      // Si es la última página del onboarding, marcamos como completado y vamos al flujo principal
      AsyncStorage.setItem('onboardingCompleted', 'true').then(() => {
        router.replace('/auth/LoginScreen'); // Redirige al grupo principal de la app
      });
    }
  };

  const handleSkip = async () => {
    // Si el usuario decide omitir el onboarding, marcamos como completado y vamos al flujo principal
    await AsyncStorage.setItem('onboardingCompleted', 'true');
    router.replace('/auth/LoginScreen');
  };

  return (
    <LinearGradient
      colors={['#121212', '#1E1E1E']} // Puedes ajustar estos colores si tu onboarding tiene un fondo diferente
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <StatusBar style="light" />

      <PagerView
        style={styles.pagerView}
        initialPage={0}
        ref={pagerRef}
        onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
      >
        {pages.map((PageComponent, index) => (
          <View key={index} style={styles.page}>
            <PageComponent
              onNext={handleNextPage}
              onSkip={handleSkip}
              isLastPage={index === totalPages - 1}
            />
          </View>
        ))}
      </PagerView>

      {/* Indicadores de página (puntos) */}
      <View style={styles.paginationContainer}>
        <View style={styles.paginationDots}>
          {pages.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                currentPage === index && styles.activeDot,
              ]}
            />
          ))}
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagerView: {
    flex: 1, // PagerView debe ocupar todo el espacio disponible
  },
  page: {
    width: width, // Cada página debe ocupar el ancho completo de la pantalla
    flex: 1,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
  },
  paginationDots: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#555',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 20,
  },
});