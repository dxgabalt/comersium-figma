import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import Button from '../../components/Button';

import InfoViewProps from '../types/InfoViewProps';

import ComersiumLogoImage from '../../assets/images/LogoEmpresa.png';
// --- IMPORTACIÓN DE LA NUEVA IMAGEN DE FONDO LOCAL ---
import NewBackgroundImage from '../../assets/images/PersonaReunida.png';
// --- FIN IMPORTACIÓN DE IMAGEN ---

const { width } = Dimensions.get('window');

interface WhatIsComersiumScreenProps extends InfoViewProps {
  currentPage: number;
  totalPages: number;
}

export default function WhatIsComersiumScreen({ onNext, onSkip, isLastPage, currentPage, totalPages }: WhatIsComersiumScreenProps) {
  return (
    <View style={styles.innerContainer}> 
      <StatusBar style="light" />
      
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContentContainer}
      >
        <View style={styles.imageHeaderContainer}>
          <Image
            // --- USANDO LA NUEVA IMAGEN DE FONDO LOCAL ---
            source={NewBackgroundImage} 
            // --- FIN NUEVA IMAGEN DE FONDO ---
            style={styles.backgroundImage}
            resizeMode="cover"
          />
          <View style={styles.overlay} />
          
          <View style={styles.logoAndPaginationContainer}>
            <Image
              source={ComersiumLogoImage} 
              style={styles.comersiumLocalLogo} 
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
        
        <View style={styles.content}>
          <Text style={styles.title}>¿QUÉ ES COMERSIUM?</Text>
          
          <Text style={styles.description}>
            COMERSIUM es una plataforma digital innovadora que centraliza los comercios nicaragüenses en un ecosistema tecnológico avanzado. Está diseñada para mejorar la visibilidad e interacción de usuarios y comercios a través de herramientas de inteligencia artificial y optimización comercial.
          </Text>
          
          <Button 
            title="VOLVER AL INICIO"
            onPress={onSkip} 
            variant="primary" 
            style={styles.singleButton}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    width: width, 
    flex: 1,      
    backgroundColor: '#000', 
  },
  scrollView: {
    flex: 1,
  },
  scrollContentContainer: {
    flexGrow: 1, 
    justifyContent: 'space-between', 
  },
  imageHeaderContainer: {
    height: 400, 
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
  },
  logoAndPaginationContainer: {
    alignItems: 'center', 
    marginBottom: 0, 
    paddingBottom: 20, 
  },
  comersiumLocalLogo: {
    width: 150, 
    height: 150, 
    marginBottom: 30, 
  },
  paginationDots: { 
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:-30,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#888', 
    marginHorizontal: 4
  },
  activeDot: {
    backgroundColor: 'white', 
  },
  content: {
    padding: 20,
    paddingTop: 30, 
    alignItems: 'center', 
    flexGrow: 1, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center', 
  },
  description: {
    fontSize: 20,
    lineHeight: 28, 
    color: '#ccc',
    marginBottom: 40, 
    textAlign: 'center', 
    paddingHorizontal: 20, 
    maxWidth: 600, 
    fontWeight: '700', 
  },
  singleButton: {
    marginTop: 15, 
    marginBottom: 20, 
    width: '90%', 
    maxWidth: 300, 
  },
});