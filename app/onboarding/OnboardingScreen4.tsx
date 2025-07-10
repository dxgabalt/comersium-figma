// app/onboarding/OnboardingScreen4.tsx
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

import Button from '../../components/Button';
import ComersiumLogo from '../../components/ComersiumLogo';
import ComersiumText from '../../components/ComersiumText';

import InfoViewProps from '../types/InfoViewProps'; // Asegúrate de que esta ruta sea correcta

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen4({ onNext, onSkip, isLastPage }: InfoViewProps) {
  return (
    <View style={styles.innerContainer}>
      <StatusBar style="light" />
      
      <View style={styles.header}>
        <ComersiumLogo size="small" color="white" />
        <ComersiumText size="small" color="white" />
      </View>
      
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://api.a0.dev/assets/image?text=Beach%20Beer&aspect=16:9' }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.overlay} />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>Todo en un mismo lugar,</Text>
        <Text style={styles.subtitle}>promociones todos los días</Text>
        
        <View style={styles.buttonContainer}>
          <Button 
            title="Comenzar" 
            onPress={onNext}
            variant="primary" 
            style={styles.primaryButton}
          />
          
          <Button 
            title="Inicio de Sesión Comercial" 
            onPress={onSkip} // Llama a onSkip para salir del onboarding
            variant="secondary" 
            style={styles.secondaryButton}
          />
        </View>
        
        <Text style={styles.copyright}>Copyright 2025</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    width: width,
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    gap: 10,
  },
  imageContainer: {
    width: width,
    height: height * 0.5,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 10,
  },
  primaryButton: {
    width: '100%',
  },
  secondaryButton: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 1,
    borderColor: '#333',
  },
  skipButton: { // Estilo para el botón omitir si se decidiera mantener
    marginTop: 5,
    width: '100%',
  },
  copyright: {
    color: '#555',
    fontSize: 12,
    marginTop: 'auto',
    marginBottom: 20,
  },
});