import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import Button from '../../components/Button';

import InfoViewProps from '../types/InfoViewProps';

// --- IMPORTACIÓN DE LA IMAGEN LOCAL DEL LOGO ---
import ComersiumLogoImage from '../../assets/images/LogoEmpresa.png';
// --- IMPORTACIÓN DE LA NUEVA IMAGEN DE FONDO LOCAL ---
import NewBackgroundImage from '../../assets/images/PersonasFondo.png';
// --- FIN IMPORTACIONES DE IMAGEN ---

const { width } = Dimensions.get('window');

// Extendemos InfoViewProps para recibir las nuevas props de paginación
interface ForUsersScreenProps extends InfoViewProps {
  currentPage: number;
  totalPages: number;
}

export default function ForUsersScreen({ onNext, onSkip, isLastPage, currentPage, totalPages }: ForUsersScreenProps) {
  return (
    <View style={styles.innerContainer}>
      <StatusBar style="light" />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContentContainer}
      >
        {/* Sección de la Imagen de Fondo y el Logo con Paginación */}
        <View style={styles.imageHeaderContainer}>
          <Image
            // --- USANDO LA NUEVA IMAGEN DE FONDO LOCAL ---
            source={NewBackgroundImage}
            // --- FIN NUEVA IMAGEN DE FONDO ---
            style={styles.backgroundImage}
            resizeMode="cover"
          />
          <View style={styles.overlay} />

          {/* Contenedor del LOGO DE EMPRESA (la imagen local) y los Puntos de Paginación */}
          <View style={styles.logoAndPaginationContainer}>
            {/* Usamos la imagen local importada como el logo */}
            <Image
              source={ComersiumLogoImage}
              style={styles.comersiumLocalLogo}
              resizeMode="contain"
            />

            {/* Puntos de paginación */}
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

        {/* Contenido principal debajo de la imagen (textos y botón) */}
        <View style={styles.content}>
          <Text style={styles.title}>Para los usuarios</Text>

          <Text style={styles.description}>
            COMERSIUM te ayudará a ubicar con prontitud comercios que necesites, para que puedas comprar o conocer el mercado nicaragüense con una experiencia más sencilla.
          </Text>

          {/* Un solo botón: VOLVER AL INICIO */}
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
    marginBottom: 5, // AJUSTADO: Bajamos el logo al reducir el margen inferior
    // Si necesitas que el logo baje más SIN afectar la paginación:
    // Podrías añadir un `marginTop` positivo aquí, o ajustar `justifyContent` en el padre.
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
    fontWeight: '500',
  },
  singleButton: {
    marginTop: 110,
    width: '90%',
    maxWidth: 300,
  },
});