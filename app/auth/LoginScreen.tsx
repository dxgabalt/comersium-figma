import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from '../../components/Button';

import ComersiumLogoImage from '../../assets/images/LogoEmpresa.png';

Dimensions.get('window');

export default function LoginScreen() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('register');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleRegister = () => {
    if (!agreeToTerms) {
      console.log('Debe aceptar los términos y condiciones');
      return;
    }
    console.log('Registrando con:', { firstName, lastName, email, password, agreeToTerms });
    navigation.navigate('PrivacyPolicy' as never);
  };

  const handleLogin = () => {
    console.log('Iniciando sesión con:', { email, password });
    // CORRECCIÓN AQUÍ: El nombre de la ruta debe ser 'subscription'
    navigation.navigate('(main)' as never);
  };

  return (
    <LinearGradient
      colors={['#121212', '#1E1E1E']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <StatusBar style="light" />

      <View style={styles.topLogoContainer}>
        <Image
          source={ComersiumLogoImage}
          style={styles.topLogo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'register' && styles.activeTab]}
              onPress={() => setActiveTab('register')}
            >
              <Text style={[styles.tabText, activeTab === 'register' && styles.activeTabText]}>Regístrate</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'login' && styles.activeTab]}
              onPress={() => setActiveTab('login')}
            >
              <Text style={[styles.tabText, activeTab === 'login' && styles.activeTabText]}>Entrar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formContainer}>
            {activeTab === 'register' ? (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Nombre"
                  placeholderTextColor="#777"
                  value={firstName}
                  onChangeText={setFirstName}
                  autoCapitalize="words"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Apellidos"
                  placeholderTextColor="#777"
                  value={lastName}
                  onChangeText={setLastName}
                  autoCapitalize="words"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#777"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Contraseña"
                  placeholderTextColor="#777"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />

                <TouchableOpacity
                  style={styles.termsCheckboxContainer}
                  onPress={() => setAgreeToTerms(!agreeToTerms)}
                >
                  <View style={[styles.checkbox, agreeToTerms && styles.checkboxActive]}>
                    {agreeToTerms && <Text style={styles.checkboxTick}>✓</Text>}
                  </View>
                  <Text style={styles.termsText}>Acepto los Términos y Condiciones</Text>
                </TouchableOpacity>

                <View style={styles.separatorContainer}>
                  <View style={styles.separatorLine} />
                  <Text style={styles.separatorText}>o</Text>
                  <View style={styles.separatorLine} />
                </View>

                <View style={styles.socialIconsContainer}>
                  <TouchableOpacity style={styles.socialIcon}>
                    <Text style={styles.socialIconText}>G</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.socialIcon}>
                    <Text style={styles.socialIconText}>f</Text>
                  </TouchableOpacity>
                </View>

                <Button
                  title="Registrarse"
                  onPress={handleRegister}
                  variant="primary"
                  style={styles.button}
                />
              </>
            ) : (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#777"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />

                <TextInput
                  style={styles.input}
                  placeholder="Contraseña"
                  placeholderTextColor="#777"
                  secureTextEntry
                />

                <Button
                  title="Iniciar Sesión"
                  onPress={handleLogin}
                  variant="primary"
                  style={styles.button}
                />

                <TouchableOpacity style={styles.forgotPassword}>
                  <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>

                <View style={styles.separatorContainer}>
                  <View style={styles.separatorLine} />
                  <Text style={styles.separatorText}>o</Text>
                  <View style={styles.separatorLine} />
                </View>

                <View style={styles.socialIconsContainer}>
                  <TouchableOpacity style={styles.socialIcon}>
                    <Text style={styles.socialIconText}>G</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.socialIcon}>
                    <Text style={styles.socialIconText}>f</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLogoContainer: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
  },
  topLogo: {
    width: 150,
    height: 150,
  },
  content: {
    flex: 1,
    width: '90%',
    maxWidth: 400,
    justifyContent: 'center',
  },
  card: {
    padding: 20,
    backgroundColor: '#0D0D0D',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#00E5FF',
    flexGrow: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#0D0D0D',
    borderRadius: 30,
    marginBottom: 20,
    padding: 4,
    borderWidth: 1,
    borderColor: '#333',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 25,
  },
  activeTab: {
    backgroundColor: '#1B1B1B',
  },
  tabText: {
    color: '#777',
    fontWeight: '600',
  },
  activeTabText: {
    color: 'white',
  },
  formContainer: {
    flex: 1,
  },
  input: {
    backgroundColor: '#0D0D0D',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
    color: 'white',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#333',
  },
  termsCheckboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#00E5FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: 'transparent',
  },
  checkboxActive: {
    backgroundColor: '#00E5FF',
  },
  checkboxTick: {
    color: '#0D0D0D',
    fontSize: 14,
    fontWeight: 'bold',
  },
  termsText: {
    color: '#ccc',
    fontSize: 14,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#333',
  },
  separatorText: {
    color: '#777',
    marginHorizontal: 10,
    fontSize: 16,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 20,
  },
  socialIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1B1B1B',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  socialIconText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    borderRadius: 30,
    paddingVertical: 15,
  },
  forgotPassword: {
    alignItems: 'center',
    marginTop: 20,
  },
  forgotPasswordText: {
    color: '#00E5FF',
    fontSize: 14,
  },
});