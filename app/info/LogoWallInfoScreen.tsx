import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Button from '../../components/Button';

import InfoViewProps from '../types/InfoViewProps';

import ComersiumLogoImage from '../../assets/images/LogoEmpresa.png';
import LogowallPNG from '../../assets/images/Logowa.png';

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

          {/* ¡Ahora usando el componente Image para el PNG! */}
          <Image
            source={LogowallPNG}
            style={styles.logowallImage} // Nuevo estilo para el PNG
            resizeMode="contain"
          />

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
    justifyContent: 'flex-end',
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
    marginRight: 10,
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
    color: 'white',
  },
  scrollView: {
    flex: 1,
  },
  scrollContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  mainComersiumLogo: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  logowallImage: { // <-- ¡Nuevo estilo para el PNG!
    width: 250, // Ajusta el ancho según necesites
    height: 100, // Ajusta el alto según necesites
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 60,
    paddingHorizontal: 20,
    maxWidth: 600,
  },
  singleButton: {
    marginTop: 20,
    marginBottom: 20,
    width: '90%',
    maxWidth: 300,
  },
});