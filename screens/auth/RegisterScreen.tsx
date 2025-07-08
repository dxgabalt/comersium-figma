import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import ComersiumLogo from '../../components/ComersiumLogo';
import ComersiumText from '../../components/ComersiumText';
import Button from '../../components/Button';

const { width } = Dimensions.get('window');

export default function RegisterScreen() {
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
    navigation.navigate('Login' as never);
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
        <ComersiumText size="small" color="white" />
      </View>
      
      {/* Contenido */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
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
            onPress={() => handleLogin()}
          >
            <Text style={[styles.tabText, activeTab === 'login' && styles.activeTabText]}>Entrar</Text>
          </TouchableOpacity>
        </View>
        
        {/* Formulario */}
        <View style={styles.formContainer}>
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
        </View>
      </ScrollView>
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
    paddingBottom: 20,
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
});