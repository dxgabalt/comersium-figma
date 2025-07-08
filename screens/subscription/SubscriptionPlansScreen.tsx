import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import ComersiumLogo from '../../components/ComersiumLogo';
import ComersiumText from '../../components/ComersiumText';
import Button from '../../components/Button';

interface PlanProps {
  title: string;
  price: string;
  features: string[];
  isPremium?: boolean;
  isStandard?: boolean;
}

const Plan: React.FC<PlanProps> = ({ title, price, features, isPremium, isStandard }) => {
  const iconColor = isPremium ? '#00E5FF' : isStandard ? '#FFFFFF' : '#00E5FF';
  const iconBgColor = isPremium ? '#0D47A1' : isStandard ? '#333' : '#333';
  const iconName = isPremium ? 'crown' : 'sparkles';
  
  return (
    <View style={[styles.planCard, isPremium && styles.premiumCard]}>
      <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
        <Ionicons name={iconName} size={20} color={iconColor} />
      </View>
      
      <View style={styles.planHeader}>
        <Text style={[styles.planTitle, isPremium && styles.premiumText]}>{title}</Text>
        <Text style={[styles.planPrice, isPremium && styles.premiumText]}>{price}</Text>
      </View>
      
      <View style={styles.featuresContainer}>
        {features.map((feature, index) => (
          <View key={index} style={styles.featureRow}>
            <Ionicons 
              name="checkmark-circle" 
              size={18} 
              color={isPremium ? '#00E5FF' : '#FFFFFF'} 
            />
            <Text style={[styles.featureText, isPremium && styles.premiumText]}>{feature}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default function SubscriptionPlansScreen() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient
      colors={['#121212', '#1E1E1E']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <StatusBar style="light" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        
        <View style={styles.logoContainer}>
          <ComersiumLogo size="small" color="white" />
          <ComersiumText size="small" color="white" />
        </View>
        
        <View style={styles.rightHeader}>
          <TouchableOpacity>
            <Ionicons name="person-circle-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationIcon}>
            <Ionicons name="notifications-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Plan 
            title="Básico" 
            price="$25/Mes"
            features={[
              "Descuento fijo en cada pedido",
              "Acceso a promociones exclusivas para suscriptores",
              "Notificaciones prioritarias sobre ofertas y descuentos"
            ]}
          />
          
          <Plan 
            title="Estandar" 
            price="$45/Mes"
            features={[
              "Descuento fijo en cada pedido",
              "Acceso a promociones exclusivas para suscriptores",
              "Notificaciones prioritarias sobre ofertas y descuentos"
            ]}
            isStandard
          />
          
          <Plan 
            title="Premium" 
            price="$70/Mes"
            features={[
              "Descuento fijo en cada pedido",
              "Acceso a promociones exclusivas para suscriptores",
              "Notificaciones prioritarias sobre ofertas y descuentos"
            ]}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  rightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcon: {
    marginLeft: 15,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingTop: 20,
  },
  planCard: {
    backgroundColor: '#1B1B1B',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  premiumCard: {
    backgroundColor: '#0D2A4A',
    borderColor: '#00E5FF',
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  planTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  planPrice: {
    fontSize: 16,
    color: 'white',
  },
  premiumText: {
    color: '#00E5FF',
  },
  featuresContainer: {
    gap: 10,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  featureText: {
    fontSize: 14,
    color: 'white',
  },
});