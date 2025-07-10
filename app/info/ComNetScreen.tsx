import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Button from '../../components/Button';

import InfoViewProps from '../types/InfoViewProps'; // Asegúrate de que la ruta sea correcta

import ComersiumLogoImage from '../../assets/images/LogoEmpresa.png';
import MneImage from '../../assets/images/mne.png';

const { width } = Dimensions.get('window');


export default function MneInfoScreen({ onNext, onSkip, isLastPage }: InfoViewProps) {
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

          <Image
            source={MneImage}
            style={styles.mneImage}
            resizeMode="contain"
          />

          <Text style={styles.description}>
            Con MNE, gestiona tus tareas y proyectos de forma eficiente y centralizada.
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
    backgroundColor: '#000', // Fondo oscuro
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Iconos a la derecha
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
    color: 'white', // Color de los iconos
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
  mneImage: {
    width: 250,
    height: 100, 
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