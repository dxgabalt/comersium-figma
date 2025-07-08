import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import ComersiumLogo from '../../components/ComersiumLogo';
import ComersiumText from '../../components/ComersiumText';
import Button from '../../components/Button';

export default function ComersiumOptionsScreen() {
  const navigation = useNavigation();

  const handleBackToStart = () => {
    navigation.navigate('Onboarding1' as never);
  };

  const handleNavigateToLogoWall = () => {
    navigation.navigate('LogoWall' as never);
  };

  const handleNavigateToComUser = () => {
    navigation.navigate('ComUser' as never);
  };

  const handleNavigateToComNet = () => {
    navigation.navigate('ComNet' as never);
  };

  const handleNavigateToAI = () => {
    navigation.navigate('Chat' as never);
  };

  return (
    <LinearGradient
      colors={['#121212', '#1E1E1E']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <StatusBar style="light" />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Imagen de fondo con overlay */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://api.a0.dev/assets/image?text=Person%20Using%20Tablet&aspect=16:9' }}
            style={styles.backgroundImage}
            resizeMode="cover"
          />
          <View style={styles.overlay} />
          
          {/* Logo centrado sobre la imagen */}
          <View style={styles.logoContainer}>
            <ComersiumLogo size="medium" color="white" />
          </View>
          
          {/* Indicadores de página */}
          <View style={styles.pagination}>
            <View style={styles.paginationDot} />
            <View style={styles.paginationDot} />
            <View style={styles.paginationDot} />
          </View>
        </View>
        
        {/* Contenido */}
        <View style={styles.content}>
          <View style={styles.optionsContainer}>
            <TouchableOpacity 
              style={styles.optionButton}
              onPress={handleNavigateToLogoWall}
            >
              <Text style={styles.optionText}>Logowall</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.optionButton}
              onPress={handleNavigateToComUser}
            >
              <Text style={styles.optionText}>ComUser+</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.optionButton}
              onPress={handleNavigateToComNet}
            >
              <Text style={styles.optionText}>ComNet</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.optionButton}
              onPress={handleNavigateToAI}
            >
              <Text style={styles.optionText}>AI</Text>
            </TouchableOpacity>
          </View>
          
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
  scrollView: {
    flex: 1,
  },
  imageContainer: {
    height: 400,
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  logoContainer: {
    position: 'absolute',
    bottom: 120,
    alignSelf: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40,
    width: '100%',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#555',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 20,
  },
  content: {
    padding: 20,
    paddingTop: 30,
  },
  optionsContainer: {
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#1B1B1B',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  optionText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  button: {
    marginTop: 10,
    marginBottom: 20,
  },
});