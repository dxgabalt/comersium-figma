import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/Button'; // Ajusta la ruta si es necesario
import ComersiumLogo from '../../components/ComersiumLogo';
import InfoViewProps from '../types/InfoViewProps';

const { width } = Dimensions.get('window');

export default function AIScreen({ onNext, onSkip, isLastPage }: InfoViewProps) {


  return (
    // El contenedor principal de esta vista, ocupando todo el ancho de la pantalla
    <View style={styles.innerContainer}>
      <StatusBar style="light" />

      {/* El header se mantiene si es parte del diseño de esta vista específica */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <TouchableOpacity>
            <View style={styles.profileIcon}>
              <Text style={styles.profileText}>👤</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.logoContainer}>
          <ComersiumLogo size="small" color="white" />
        </View>

        <View style={styles.notificationContainer}>
          <TouchableOpacity>
            <View style={styles.notificationIcon}>
              <Text style={styles.notificationText}>🔔</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <ComersiumLogo size="large" color="white" />

          <Text style={styles.title}>AI</Text>

          <Text style={styles.description}>
            Próximamente
          </Text>

          {/* El botón ahora llama a onNext y su título se adapta */}
          <Button
            title={isLastPage ? "FINALIZAR INFORMACIÓN" : "CONTINUAR"}
            onPress={onNext}
            variant="primary"
            style={styles.button}
          />

          {/* Botón para omitir el flujo, solo visible si no es la última página */}
          {!isLastPage && (
            <Button
              title="OMITIR ESTA INFORMACIÓN"
              onPress={onSkip}
              variant="secondary" // Asumiendo que tienes un estilo 'secondary'
              style={styles.skipButton}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // Contenedor principal de esta vista, crucial para el ScrollView paginado
  innerContainer: {
    width: width, // Asegura que esta vista ocupe el 100% del ancho de la pantalla
    flex: 1, // Permite que el contenido se expanda verticalmente
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  profileContainer: {
    width: 40,
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    fontSize: 20,
  },
  logoContainer: {
    alignItems: 'center',
  },
  notificationContainer: {
    width: 40,
    alignItems: 'flex-end',
  },
  notificationIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    fontSize: 20,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 30,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 60,
  },
  button: {
    width: '100%',
    marginTop: 20,
  },
  skipButton: {
    width: '100%',
    marginTop: 10, // Ajusta el margen si es necesario
  },
});