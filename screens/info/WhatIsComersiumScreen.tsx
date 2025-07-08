import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import ComersiumLogo from '../../components/ComersiumLogo';
import ComersiumText from '../../components/ComersiumText';
import Button from '../../components/Button';

export default function WhatIsComersiumScreen() {
  const navigation = useNavigation();

  const handleBackToStart = () => {
    navigation.navigate('ForUsers' as never);
  };

  return (
    <LinearGradient
      colors={['#121212', '#1E1E1E']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <StatusBar style="light" />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Imagen de fondo con overlay */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://api.a0.dev/assets/image?text=Business%20Meeting&aspect=16:9' }}
            style={styles.backgroundImage}
            resizeMode="cover"
          />
          <View style={styles.overlay} />
          
          {/* Logo centrado sobre la imagen */}
          <View style={styles.logoContainer}>
            <ComersiumLogo size="medium" color="white" />
          </View>
          
          {/* Indicadores de página */}
          <View style={styles.pagination}>
            <View style={[styles.paginationDot, styles.activeDot]} />
            <View style={styles.paginationDot} />
            <View style={styles.paginationDot} />
          </View>
        </View>
        
        {/* Contenido */}
        <View style={styles.content}>
          <Text style={styles.title}>¿QUÉ ES COMERSIUM?</Text>
          
          <Text style={styles.description}>
            COMERSIUM es una plataforma digital innovadora que centraliza los comercios nicaragüenses en un ecosistema tecnológico avanzado. Está diseñada para mejorar la visibilidad e interacción de usuarios y comercios a través de herramientas de inteligencia artificial y optimización comercial.
          </Text>
          
          <Button 
            title="VOLVER AL INICIO" 
            onPress={handleBackToStart} 
            variant="primary" 
            style={styles.button}
          />
          
          <Text style={styles.copyright}>Copyright 2025</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  imageContainer: {
    height: 400,
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  logoContainer: {
    position: 'absolute',
    bottom: 120,
    alignSelf: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40,
    width: '100%',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#555',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 20,
  },
  content: {
    padding: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#ccc',
    marginBottom: 40,
  },
  button: {
    marginBottom: 20,
  },
  copyright: {
    color: '#555',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});