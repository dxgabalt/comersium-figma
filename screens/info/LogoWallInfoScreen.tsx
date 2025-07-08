import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import ComersiumLogo from '../../components/ComersiumLogo';
import ComersiumText from '../../components/ComersiumText';
import Button from '../../components/Button';

export default function LogoWallInfoScreen() {
  const navigation = useNavigation();

  const handleBackToStart = () => {
    navigation.navigate('Onboarding1' as never);
  };

  return (
    <LinearGradient
      colors={['#121212', '#1E1E1E']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
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
          
          <Text style={styles.title}>Logowall</Text>
          
          <Text style={styles.description}>
            La innovadora forma de mostrarte el universo de marcas que existen a tu alrededor
          </Text>
          
          <Button 
            title="VOLVER AL INICIO" 
            onPress={handleBackToStart} 
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
});