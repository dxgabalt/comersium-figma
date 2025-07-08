import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import ComersiumLogo from '../../components/ComersiumLogo';
import ComersiumText from '../../components/ComersiumText';
import Button from '../../components/Button';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen2() {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('Onboarding3' as never);
  };

  const handleLogin = () => {
    navigation.navigate('Login' as never);
  };

  const handleInfo = () => {
    // Aquí podría ir alguna acción para mostrar más información
  };

  return (
    <View style={styles.container}>
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
        <View style={styles.pagination}>
          <View style={styles.paginationDot} />
          <View style={[styles.paginationDot, styles.activeDot]} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
        </View>
        
        <Text style={styles.title}>Todo en un mismo lugar,</Text>
        <Text style={styles.subtitle}>promociones todos los días</Text>
        
        <View style={styles.buttonContainer}>
          <Button 
            title="Comenzar" 
            onPress={handleNext} 
            variant="primary" 
            style={styles.primaryButton}
          />
          
          <Button 
            title="Inicio de Sesión Comercial" 
            onPress={handleLogin} 
            variant="secondary" 
            style={styles.secondaryButton}
          />
          
          <Button 
            title="Solicitar información" 
            onPress={handleInfo} 
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
  container: {
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
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#555',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#00E5FF',
    width: 20,
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