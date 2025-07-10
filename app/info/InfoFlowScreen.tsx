import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import InfoViewProps from '../types/InfoViewProps';

// Importa todas tus vistas de información
import AIScreen from './AIScreen';
import ComersiumOptionsScreen from './ComersiumOptionsScreen';
import ComNetScreen from './ComNetScreen';
import ComUserScreen from './ComUserScreen';
import ForMerchantsScreen from './ForMerchantsScreen';
import ForUsersScreen from './ForUsersScreen';
import LogoWallInfoScreen from './LogoWallInfoScreen';
import UserBenefitsScreen from './UserBenefitsScreen';
import WhatIsComersiumScreen from './WhatIsComersiumScreen';

const { width } = Dimensions.get('window');

// Extendemos InfoViewProps para incluir las nuevas props de paginación
interface ExtendedInfoViewProps extends InfoViewProps {
  currentPage: number;
  totalPages: number;
}

type InfoPageComponent = React.ComponentType<ExtendedInfoViewProps>; // Usamos la interfaz extendida

export default function InfoFlowScreen() {
  const pagerRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const pages: InfoPageComponent[] = [
    WhatIsComersiumScreen,
    ForUsersScreen,
    ForMerchantsScreen,
    UserBenefitsScreen,
    ComersiumOptionsScreen,
    LogoWallInfoScreen,
    ComUserScreen,
    ComNetScreen,
    AIScreen,
  ];
  const totalPages = pages.length;

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      pagerRef.current?.setPage(currentPage + 1);
    } else {
      router.replace('/onboarding/OnboardingFlowScreen');
    }
  };

  const handleSkip = async () => {
    await AsyncStorage.setItem('onboardingCompleted', 'false');
    router.replace('/onboarding/OnboardingFlowScreen');
  };

  return (
    <LinearGradient
      colors={['#121212', '#1E1E1E']}
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
              // --- AHORA PASAMOS ESTAS PROPS A CADA VISTA ---
              currentPage={currentPage}
              totalPages={totalPages}
              // --- FIN DE CAMBIO ---
            />
          </View>
        ))}
      </PagerView>

      {/* --- ELIMINAMOS ESTA SECCIÓN DE PAGINACIÓN DE AQUÍ ---
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
      --- FIN DE ELIMINACIÓN --- */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagerView: {
    flex: 1,
  },
  page: {
    width: width,
    flex: 1,
  },
});