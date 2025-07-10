import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import ComersiumLogo from '../../components/ComersiumLogo';
import ComersiumText from '../../components/ComersiumText';
import Button from '../../components/Button';

const { width } = Dimensions.get('window');

export default function LoginScreen() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('register'); // 'register' o 'login'
  const [email, setEmail] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [facebookLink, setFacebookLink] = useState('');

  const handleRegister = () => {
    navigation.navigate('PrivacyPolicy' as never);
  };

  const handleLogin = () => {
    navigation.navigate('Categories' as never);
  };

  return (
    <LinearGradient
      colors={['#121212', '#1E1E1E']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <StatusBar style="light" />
      
      {/* Header con logo */}
      <View style={styles.header}>
        <ComersiumLogo size="small" color="white" />
      </View>
      
      {/* Contenido */}
      <View style={styles.content}>
        <View style={styles.card}>
          {/* Tabs */}
          <View style={styles.tabContainer}>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'register' && styles.activeTab]} 
              onPress={() => setActiveTab('register')}
            >
              <Text style={[styles.tabText, activeTab === 'register' && styles.activeTabText]}>Resgístrate</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'login' && styles.activeTab]} 
              onPress={() => setActiveTab('login')}
            >
              <Text style={[styles.tabText, activeTab === 'login' && styles.activeTabText]}>Entrar</Text>
            </TouchableOpacity>
          </View>
          
          {/* Formulario */}
          <View style={styles.formContainer}>
            {activeTab === 'register' ? (
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
                  placeholder="Video Link"
                  placeholderTextColor="#777"
                  value={videoLink}
                  onChangeText={setVideoLink}
                  autoCapitalize="none"
                />
                
                <TextInput
                  style={styles.input}
                  placeholder="Número de Celular"
                  placeholderTextColor="#777"
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                />
                
                <TextInput
                  style={styles.input}
                  placeholder="Dirección - Ubicación"
                  placeholderTextColor="#777"
                  value={location}
                  onChangeText={setLocation}
                />
                
                <TextInput
                  style={styles.input}
                  placeholder="Descripción"
                  placeholderTextColor="#777"
                  value={description}
                  onChangeText={setDescription}
                  multiline
                />
                
                <TextInput
                  style={styles.input}
                  placeholder="Palabras clave - SEO"
                  placeholderTextColor="#777"
                  value={keywords}
                  onChangeText={setKeywords}
                />
                
                <TextInput
                  style={styles.input}
                  placeholder="Link de facebook"
                  placeholderTextColor="#777"
                  value={facebookLink}
                  onChangeText={setFacebookLink}
                  autoCapitalize="none"
                />
                
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 20,
    gap: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  card: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0D0D0D',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#00E5FF',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#0D0D0D',
    borderRadius: 30,
    marginBottom: 20,
    padding: 4,
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