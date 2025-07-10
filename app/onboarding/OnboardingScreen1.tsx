// app/onboarding/OnboardingScreen1.tsx
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'; // Importa Dimensions
// import { useNavigation } from '@react-navigation/native'; // <-- ELIMINADO: Ya no se usa useNavigation aquí
// import { LinearGradient } from 'expo-linear-gradient'; // No estaba en el original, no se añade
import Button from '../../components/Button'; // Ajusta la ruta si es necesario
import ComersiumLogo from '../../components/ComersiumLogo'; // Ajusta la ruta si es necesario
import ComersiumText from '../../components/ComersiumText'; // Ajusta la ruta si es necesario

// Importa la interfaz de tipos desde InfoViewProps (o donde la tengas definida)
// Asegúrate de que esta ruta sea correcta
import InfoViewProps from '../types/InfoViewProps';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen1({ onNext, onSkip, isLastPage }: InfoViewProps) {

  return (
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
          source={{ uri: 'https://api.a0.dev/assets/image?text=Shopping%20Mall&aspect=16:9' }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.overlay} />
      </View>
      
      {/* Contenido */}
      <View style={styles.content}>
        
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
          
          <Button 
            title="Solicitar información" 
            onPress={onSkip} // Llama a onSkip para salir del onboarding
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
  // ESTE ESTILO ES CRUCIAL PARA EL PAGERVIEW
  innerContainer: {
    width: width, // Cada vista ocupa el 100% del ancho de la pantalla
    flex: 1,      // Y se expande verticalmente
    backgroundColor: '#000000', // Mantiene el fondo original
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
  copyright: {
    color: '#555',
    fontSize: 12,
    marginTop: 'auto',
    marginBottom: 20,
  },
});