import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Button from '../../components/Button';
import InfoViewProps from '../types/InfoViewProps';

import ComersiumLogoImage from '../../assets/images/LogoEmpresa.png';

const { width } = Dimensions.get('window');

export default function TermsAndConditionsScreen({ onNext, onSkip, isLastPage }: InfoViewProps) {
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
            style={styles.mainContentLogo}
            resizeMode="contain"
          />

          <Text style={styles.termsParagraph}>
            En **[Nombre de la Empresa]**, valoramos y protegemos con el más alto compromiso la privacidad de nuestros usuarios y la integridad de sus datos. Nuestro objetivo es brindarte una experiencia segura, confiable y plenamente transparente. Al interactuar con nuestra plataforma, confirmas tu aceptación de estos términos, diseñados para garantizar una convivencia digital armoniosa y proteger tus derechos.
          </Text>

          <Text style={styles.termsParagraph}>
            Nos reservamos el derecho de actualizar estos términos para reflejar mejoras en nuestros servicios o cambios regulatorios, notificándote con antelación sobre cualquier modificación significativa. Tu uso continuado de [Nombre de la Empresa] después de dichos cambios significa tu consentimiento a las nuevas condiciones, fortaleciendo nuestra relación basada en la confianza mutua.
          </Text>

          <Button
            title="FINALIZAR REVISIÓN"
            onPress={onNext}
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
    paddingBottom: 10,
  },
  rightIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  notificationIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'transparent',
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
  },
  mainContentLogo: {
    width: 180,
    height: 80,
    marginBottom: 20,
    marginTop: 10,
  },
  termsParagraph: {
    fontSize: 16, // Tamaño de fuente ligeramente más grande
    lineHeight: 26, // Interlineado ajustado
    color: '#ccc',
    textAlign: 'justify', // Texto justificado
    marginBottom: 20,
    paddingHorizontal: 15, // Más padding horizontal
    maxWidth: 600,
  },
  singleButton: {
    marginTop: 60, // Más abajo
    marginBottom: 30, // Un poco más grande
    width: '95%', // Ligeramente más ancho
    maxWidth: 350, // Mayor ancho máximo
  },
});