import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Button from '../../components/Button';

import InfoViewProps from '../types/InfoViewProps';

import ComersiumLogoImage from '../../assets/images/LogoEmpresa.png';

const { width } = Dimensions.get('window');

interface LogoWallInfoScreenProps extends InfoViewProps {
  currentPage: number;
  totalPages: number;
}

export default function LogoWallInfoScreen({ onNext, onSkip, isLastPage, currentPage, totalPages }: LogoWallInfoScreenProps) {
  return (
    <View style={styles.innerContainer}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <View style={styles.rightIconsContainer}>
          <TouchableOpacity>
            <View style={styles.profileIcon}>
              <Text style={styles.iconText}>👤</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.notificationIcon}>
              <Text style={styles.iconText}>🔔</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContentContainer}
      >
        <View style={styles.content}>
          <Image
            source={ComersiumLogoImage}
            style={styles.mainComersiumLogo}
            resizeMode="contain"
          />

          <Text style={styles.title}>Logowall</Text>

          <Text style={styles.description}>
            La innovadora forma de mostrarte el universo de marcas que existen a tu alrededor.
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
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Alinea los iconos a la derecha
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  rightIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10, // Espacio entre el perfil y la campana
  },
  notificationIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 20,
    color: 'white', // Asegura que los emojis sean visibles
  },
  scrollView: {
    flex: 1,
  },
  scrollContentContainer: {
    flexGrow: 1,
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center',
    padding: 20,
  },
  content: {
    flex: 1, // Permite que el contenido ocupe el espacio disponible
    alignItems: 'center', // Centra el contenido horizontalmente
    justifyContent: 'center', // Centra el contenido verticalmente dentro de sí mismo
    width: '100%', // Ocupa todo el ancho disponible
  },
  mainComersiumLogo: {
    width: 200, // Ajusta el tamaño de tu logo principal
    height: 200, // Ajusta el tamaño de tu logo principal
    marginBottom: 30, // Espacio entre el logo y el título
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 60, // Espacio antes del botón
    paddingHorizontal: 20, // Para evitar que el texto se pegue a los bordes
    maxWidth: 600, // Limita el ancho del texto en pantallas grandes
  },
  singleButton: {
    marginTop: 20,
    marginBottom: 20,
    width: '90%',
    maxWidth: 300,
  },
});