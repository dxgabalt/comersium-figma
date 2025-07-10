import { useNavigation } from '@react-navigation/native'; // Importar useNavigation
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ComersiumLogoImage from '../../assets/images/LogoEmpresa.png';

export default function PlanDetailsPremiumScreen() {
  const navigation = useNavigation(); // Hook de navegación

  const handleAcquirePlan = () => {
    Alert.alert(
      'Confirmación de Adquisición',
      '¿Estás seguro de que quieres adquirir el Plan Premium?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Adquirir',
          onPress: () => {
            // Redirigir a HomeScreen dentro del grupo 'main'
            navigation.navigate('(main)/' as never); // Asegúrate de que 'HomeScreen' es el nombre del archivo en 'main/'
          },
        },
      ],
      { cancelable: true }
    );
  };

  const features = [
    "Todas las funciones de los Planes Básico y Estándar",
    "Descuento del 20% en todas las compras",
    "Soporte al cliente VIP 24/7 con gestor personal",
    "Acceso exclusivo a eventos y lanzamientos de productos",
    "Pedidos ilimitados al mes",
    "Regalos y sorpresas exclusivas",
    "Servicio de conserjería para pedidos especiales"
  ];

  const benefits = [
    "Máximos ahorros y el mejor valor",
    "Atención superior y personalizada",
    "Experiencias exclusivas y privilegios de élite",
    "Libertad total para comprar sin límites"
  ];

  return (
    <LinearGradient
      colors={['#121212', '#1E1E1E']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <StatusBar style="light" />

      <View style={styles.topLogoContainer}>
        <Image
          source={ComersiumLogoImage}
          style={styles.topLogo}
          resizeMode="contain"
        />
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.card}>
          <Text style={[styles.planName, styles.premiumTextColor]}>Plan Premium</Text>
          <Text style={[styles.planPrice, styles.premiumPriceColor]}>$70/Mes</Text>

          <View style={styles.section}>
            <Text style={[styles.sectionTitle, styles.premiumTextColor]}>Características</Text>
            {features.map((item, index) => (
              <Text key={index} style={styles.listItem}>• {item}</Text>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={[styles.sectionTitle, styles.premiumTextColor]}>Beneficios</Text>
            {benefits.map((item, index) => (
              <Text key={index} style={styles.listItem}>• {item}</Text>
            ))}
          </View>

          <TouchableOpacity onPress={handleAcquirePlan} style={styles.acquireButton}>
            <Text style={styles.acquireButtonText}>Adquirir</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  topLogoContainer: {
    paddingTop: 50,
    marginBottom: 20,
  },
  topLogo: {
    width: 150,
    height: 150,
  },
  scrollView: {
    width: '100%',
  },
  card: {
    backgroundColor: '#0D0D0D',
    borderRadius: 20,
    marginHorizontal: 20,
    padding: 25,
    marginBottom: 30,
    shadowColor: '#00E5FF',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 12,
    elevation: 12,
    alignItems: 'center',
  },
  planName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  planPrice: {
    fontSize: 26,
    color: '#BBBBBB',
    fontWeight: '600',
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  premiumTextColor: {
    color: '#00E5FF',
  },
  premiumPriceColor: {
    color: '#00EAFF',
  },
  section: {
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00E5FF',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 229, 255, 0.3)',
    paddingBottom: 5,
  },
  listItem: {
    fontSize: 16,
    color: '#CCCCCC',
    marginBottom: 5,
    lineHeight: 24,
  },
  acquireButton: {
    backgroundColor: '#00E5FF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 20,
    shadowColor: '#00E5FF',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 8,
  },
  acquireButtonText: {
    color: '#0D0D0D',
    fontSize: 18,
    fontWeight: 'bold',
  },
});