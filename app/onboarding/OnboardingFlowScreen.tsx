import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import InfoViewProps from '../types/InfoViewProps';

import OnboardingScreen1 from './OnboardingScreen1';
import OnboardingScreen2 from './OnboardingScreen2';
import OnboardingScreen3 from './OnboardingScreen3';

const { width } = Dimensions.get('window');

interface OnboardingFlowPageProps extends InfoViewProps {
  currentPage: number;
  totalPages: number;
}

type OnboardingPageComponent = React.ComponentType<OnboardingFlowPageProps>;

export default function OnboardingFlowScreen() {
  const pagerRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const pages: OnboardingPageComponent[] = [
    OnboardingScreen1,
    OnboardingScreen2,
    OnboardingScreen3,
  ];
  const totalPages = pages.length;

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      pagerRef.current?.setPage(currentPage + 1);
    } else {
      AsyncStorage.setItem('onboardingCompleted', 'true').then(() => {
        router.replace('/auth/LoginScreen');
      });
    }
  };

  const handleSkip = async () => {
    await AsyncStorage.setItem('onboardingCompleted', 'true');
    router.replace('/auth/LoginScreen');
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
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </View>
        ))}
      </PagerView>
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