import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Button from '../../components/Button';

import InfoViewProps from '../types/InfoViewProps';

import ComersiumLogoImage from '../../assets/images/LogoEmpresa.png';
import NewBackgroundImage from '../../assets/images/PersonasTelefono.png';
const { width } = Dimensions.get('window');

interface UserBenefitsScreenProps extends InfoViewProps {
  currentPage: number;
  totalPages: number;
}

export default function UserBenefitsScreen({ onNext, onSkip, isLastPage, currentPage, totalPages }: UserBenefitsScreenProps) {
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
            source={NewBackgroundImage}
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
          <Text style={styles.title}>Beneficios para Usuarios</Text> 

          <View style={styles.benefitItem}>
            <TouchableOpacity style={styles.benefitButton}>
              <Text style={styles.benefitText}>Conéctate con COMERSIUM</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.benefitItem}>
            <TouchableOpacity style={styles.benefitButton}>
              <Text style={styles.benefitText}>Usa tu pase premium para obtener descuentos y productos exclusivos</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.benefitItem}>
            <TouchableOpacity style={styles.benefitButton}>
              <Text style={styles.benefitText}>Encuentra lo que necesitas de forma rápida y sencilla</Text> {/* Texto ajustado para usuario */}
            </TouchableOpacity>
          </View>

          <View style={styles.benefitItem}>
            <TouchableOpacity style={styles.benefitButton}>
              <Text style={styles.benefitText}>Espera las premiaciones y regalías por usar nuestra app</Text>
            </TouchableOpacity>
          </View>

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
    marginBottom: 5, 
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
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
    padding: 20,
    paddingTop: 30,
    alignItems: 'center',
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  benefitItem: {
    marginBottom: 15,
    width: '100%', 
    maxWidth: 600, 
  },
  benefitButton: {
    backgroundColor: 'rgba(0, 229, 255, 0.1)',
    borderWidth: 1,
    borderColor: '#00E5FF',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  benefitText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
  singleButton: {
    marginTop: 30,
    marginBottom: 20,
    width: '90%',
    maxWidth: 300,
  },
});