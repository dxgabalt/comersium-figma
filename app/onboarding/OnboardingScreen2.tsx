import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button';
import InfoViewProps from '../types/InfoViewProps';

// Importación de la imagen de fondo específica para este onboarding
import Onboarding2Image from '../../assets/images/Taco.png';
// Importación del logo de la empresa para colocarlo sobre la imagen
import ComersiumLogoImage from '../../assets/images/LogoEmpresa.png';

const { width, height } = Dimensions.get('window');

interface OnboardingScreen2Props extends InfoViewProps {
  currentPage: number;
  totalPages: number;
}

export default function OnboardingScreen2({ onNext, onSkip, isLastPage, currentPage, totalPages }: OnboardingScreen2Props) {
  return (
    <View style={styles.innerContainer}>
      <StatusBar style="light" />

      {/* La imagen principal con overlay y contenido superpuesto */}
      <View style={styles.imageBackgroundContainer}>
        <Image
          source={Onboarding2Image}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        <View style={styles.overlay} />

        {/* Contenido flotante sobre la imagen: Logo y Paginación */}
        <View style={styles.imageContentOverlay}>
          <Image
            source={ComersiumLogoImage}
            style={styles.comersiumBottomLogo}
            resizeMode="contain"
          />
          <View style={styles.paginationDots}>
            {[...Array(totalPages)].map((_, index) => (
              <View
                key={index}
                style={[styles.dot, index === currentPage && styles.activeDot]}
              />
            ))}
          </View>
        </View>
      </View>

      {/* Contenido de texto y botones */}
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
            onPress={onSkip}
            variant="secondary"
            style={styles.secondaryButton}
          />

          <Button
            title="Solicitar información"
            onPress={onSkip}
            variant="text"
            style={styles.textButton}
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
  imageBackgroundContainer: {
    width: width,
    height: height * 0.55,
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  imageContentOverlay: {
    alignItems: 'center',
    marginBottom: 20,
    zIndex: 1,
  },
  comersiumBottomLogo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 0,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#888',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
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
    gap: 15,
    marginBottom: 20,
  },
  primaryButton: {
    width: '90%',
    maxWidth: 350,
  },
  secondaryButton: {
    width: '90%',
    maxWidth: 350,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 1,
    borderColor: '#333',
  },
  textButton: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '90%',
    maxWidth: 350,
  },
  copyright: {
    color: '#555',
    fontSize: 12,
    marginTop: 'auto',
    marginBottom: 20,
  },
});