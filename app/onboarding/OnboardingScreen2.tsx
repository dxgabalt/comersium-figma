// app/onboarding/OnboardingScreen2.tsx
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button';
import ComersiumLogo from '../../components/ComersiumLogo';
import ComersiumText from '../../components/ComersiumText';
import InfoViewProps from '../types/InfoViewProps';


const { width, height } = Dimensions.get('window');

export default function OnboardingScreen2({ onNext, onSkip, isLastPage }: InfoViewProps) {

  return (
    // ESTE ES EL CONTENEDOR PRINCIPAL QUE OCUPA EL ANCHO COMPLETO PARA EL PAGERVIEW
    <View style={styles.innerContainer}>
      <StatusBar style="light" />
      
      {/* Header con logo */}
      <View style={styles.header}>
        <ComersiumLogo size="small" color="white" />
        <ComersiumText size="small" color="white" />
      </View>
      
      {/* Imagen principal */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://api.a0.dev/assets/image?text=Mexican%20Tacos&aspect=16:9' }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.overlay} />
      </View>
      
      {/* Contenido */}
      <View style={styles.content}>
        {/* Paginación: ELIMINADA DE AQUÍ. La maneja OnboardingFlowScreen.tsx */}
        {/* <View style={styles.pagination}>
          <View style={styles.paginationDot} />
          <View style={[styles.paginationDot, styles.activeDot]} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
        </View> */}
        
        <Text style={styles.title}>Todo en un mismo lugar,</Text>
        <Text style={styles.subtitle}>promociones todos los días</Text>
        
        <View style={styles.buttonContainer}>
          <Button 
            title="Comenzar" 
            onPress={onNext} // Llama a la función onNext pasada por props
            variant="primary" 
            style={styles.primaryButton}
          />
          
          <Button 
            title="Inicio de Sesión Comercial" 
            onPress={onSkip} // Llama a onSkip para salir del onboarding
            variant="secondary" 
            style={styles.secondaryButton}
          />
          
          {/* Botón "Solicitar información" eliminado por falta de acción clara */}
          {/* <Button 
            title="Solicitar información" 
            onPress={handleInfo} 
            variant="text" 
            style={styles.textButton}
          /> */}

          {/* Botón para omitir el flujo, solo visible si no es la última página */}
          {!isLastPage && (
            <Button
              title="OMITIR ESTE PASO" // Texto más genérico para omitir
              onPress={onSkip}
              variant="text" // Puedes ajustar el estilo del botón omitir
              style={styles.skipButton}
            />
          )}
        </View>
        
        <Text style={styles.copyright}>Copyright 2025</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // ESTE ESTILO ES CRUCIAL PARA EL PAGERVIEW
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
    width: width, // Asegura que la imagen ocupe el ancho completo
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
  // Paginación: ELIMINADA DE AQUÍ
  // pagination: { ... },
  // paginationDot: { ... },
  // activeDot: { ... },
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
  textButton: {
    marginTop: 5,
  },
  skipButton: { // Estilo para el nuevo botón "OMITIR"
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