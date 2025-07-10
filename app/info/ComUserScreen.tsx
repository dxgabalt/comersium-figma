import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Button from '../../components/Button';

import InfoViewProps from '../types/InfoViewProps';

import ComUserImage from '../../assets/images/COMUSE.png';
import ComersiumLogoImage from '../../assets/images/LogoEmpresa.png';

const { width } = Dimensions.get('window');

export default function ComUserScreen({ onNext, onSkip, isLastPage }: InfoViewProps) {
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
          {/* Se reemplaza el ComersiumLogo por una Image, usando el mismo ComersiumLogoImage o el que prefieras como logo principal */}
          <Image
            source={ComersiumLogoImage}
            style={styles.mainComersiumLogo}
            resizeMode="contain"
          />

          {/* Imagen específica de COMUSE.png */}
          <Image
            source={ComUserImage}
            style={styles.comUserImage} // Estilo para la imagen COMUSE
            resizeMode="contain"
          />

          <Text style={styles.description}>
            Nuestro asistente exclusivo para que obtengas el mayor rendimiento a tu tiempo y necesidades.
          </Text>

          {/* Un solo botón "VOLVER AL INICIO" */}
          <Button
            title="VOLVER AL INICIO"
            onPress={onSkip} // Se usa onSkip ya que en el ejemplo se usaba para "VOLVER AL INICIO"
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
    backgroundColor: '#000', // Fondo oscuro como en el ejemplo
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Iconos a la derecha como en el ejemplo
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
    color: 'white', // Color de los iconos como en el ejemplo
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
  comUserImage: {
    width: 250,
    height: 100, 
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
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