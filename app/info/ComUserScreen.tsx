import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Button from '../../components/Button';
import ComersiumLogo from '../../components/ComersiumLogo';

import InfoViewProps from '../types/InfoViewProps'; // Asegúrate de que la ruta sea correcta

const { width } = Dimensions.get('window');

export default function ComUserScreen({ onNext, onSkip, isLastPage }: InfoViewProps) {
  return (
    <View style={styles.innerContainer}>
      <StatusBar style="light" />

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

          <Text style={styles.title}>ComUser+</Text>

          <Text style={styles.description}>
            Nuestro asistente exclusivo para que obtengas el mayor rendimiento a tu tiempo y necesidades.
          </Text>

          <Button
            title={isLastPage ? "FINALIZAR INFORMACIÓN" : "CONTINUAR"}
            onPress={onNext}
            variant="primary"
            style={styles.button}
          />

          {!isLastPage && (
            <Button
              title="OMITIR ESTA INFORMACIÓN"
              onPress={onSkip}
              variant="secondary"
              style={styles.skipButton}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    width: width,
    flex: 1,
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
    marginTop: 10,
  },
});