// SubscriptionPlansScreen.tsx
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ComersiumLogoImage from '../../assets/images/LogoEmpresa.png';
import CardBackgroundImage from '../../assets/images/Tarjeta.png';

interface PlanProps {
  title: string;
  price: string;
  isPremium?: boolean;
  isStandard?: boolean;
}

const Plan: React.FC<PlanProps> = ({ title, price, isPremium, isStandard }) => {
  const navigation = useNavigation();

  let titleColor = '#FFFFFF';
  let priceColor = '#BBBBBB';
  let detailsScreenName = 'PlanDetailsBasicScreen'; // Nombre de archivo dentro de la misma carpeta

  if (isStandard) {
    titleColor = '#FFD700';
    priceColor = '#FFEA00';
    detailsScreenName = 'PlanDetailsStandardScreen';
  } else if (isPremium) {
    titleColor = '#00E5FF';
    priceColor = '#00EAFF';
    detailsScreenName = 'PlanDetailsPremiumScreen';
  }

  const handleViewDetails = () => {
    navigation.navigate(detailsScreenName as never);
  };

  return (
    <View style={styles.planCardContainer}>
      <ImageBackground
        source={CardBackgroundImage}
        style={styles.planCardBackground}
        imageStyle={styles.planCardImageStyle}
      >
        <View style={styles.centeredContent}>
          <Text style={[styles.planTitle, { color: titleColor }]}>{title}</Text>
          <Text style={[styles.planPrice, { color: priceColor }]}>{price}</Text>
        </View>

        <TouchableOpacity onPress={handleViewDetails} style={styles.subtleDetailsButton}>
          <Text style={styles.subtleDetailsButtonText}>Ver detalles del plan</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default function SubscriptionPlansScreen() {
  return (
    <LinearGradient
      colors={['#121212', '#1E1E1E']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <StatusBar style="light" />

      <View style={styles.header}>
        <View style={styles.headerLogoContainer}>
          <Image
            source={ComersiumLogoImage}
            style={styles.headerLogo}
            resizeMode="contain"
          />
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Plan
            title="Básico"
            price="$25/Mes"
          />

          <Plan
            title="Estándar"
            price="$45/Mes"
            isStandard
          />

          <Plan
            title="Premium"
            price="$70/Mes"
            isPremium
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 10,
  },
  headerLogoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLogo: {
    width: 100,
    height: 40,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingTop: 20,
  },
  planCardContainer: {
    marginBottom: 25,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    height: 150,
  },
  planCardBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  planCardImageStyle: {
    borderRadius: 15,
  },
  centeredContent: {
    alignItems: 'center',
  },
  planTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  planPrice: {
    fontSize: 22,
    marginTop: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subtleDetailsButton: {
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  subtleDetailsButtonText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    fontWeight: '600',
  },
});