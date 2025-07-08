import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import ComersiumLogo from '../../components/ComersiumLogo';
import ComersiumText from '../../components/ComersiumText';
import Button from '../../components/Button';

export default function UserBenefitsScreen() {
  const navigation = useNavigation();

  const handleBackToStart = () => {
    navigation.navigate('ComersiumOptions' as never);
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
            source={{ uri: 'https://api.a0.dev/assets/image?text=People%20Using%20Smartphones&aspect=16:9' }}
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
          <View style={styles.benefitItem}>
            <TouchableOpacity style={styles.benefitButton}>
              <Text style={styles.benefitText}>Conéctate con COMERSIUM</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.benefitItem}>
            <TouchableOpacity style={styles.benefitButton}>
              <Text style={styles.benefitText}>Usa tu pase premium para obtener descuentos y productos exclusivos</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.benefitItem}>
            <TouchableOpacity style={styles.benefitButton}>
              <Text style={styles.benefitText}>Conoce potenciales clientes para tu negocio</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.benefitItem}>
            <TouchableOpacity style={styles.benefitButton}>
              <Text style={styles.benefitText}>Espera las premiaciones y regalías por usar nuestra app</Text>
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
  benefitItem: {
    marginBottom: 15,
  },
  benefitButton: {
    backgroundColor: 'rgba(0, 229, 255, 0.1)',
    borderWidth: 1,
    borderColor: '#00E5FF',
    borderRadius: 10,
    padding: 15,
  },
  benefitText: {
    color: 'white',
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
});