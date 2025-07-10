import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import ComersiumLogo from '../../components/ComersiumLogo';
import ComersiumText from '../../components/ComersiumText';
import Header from '../../components/Header';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 48) / 2;

interface Category {
  id: string;
  name: string;
  image: string;
  selected: boolean;
}

export default function CategoriesScreen() {
  const navigation = useNavigation();
  const [categories, setCategories] = useState<Category[]>([
    { id: '1', name: 'Financiera', image: 'https://api.a0.dev/assets/image?text=Finance&aspect=1:1', selected: false },
    { id: '2', name: 'Entretenimiento', image: 'https://api.a0.dev/assets/image?text=Entertainment&aspect=1:1', selected: false },
    { id: '3', name: 'Tecnología', image: 'https://api.a0.dev/assets/image?text=Technology&aspect=1:1', selected: false },
    { id: '4', name: 'Turismo', image: 'https://api.a0.dev/assets/image?text=Tourism&aspect=1:1', selected: false },
    { id: '5', name: 'Moda', image: 'https://api.a0.dev/assets/image?text=Fashion&aspect=1:1', selected: false },
    { id: '6', name: 'Comida', image: 'https://api.a0.dev/assets/image?text=Food&aspect=1:1', selected: false },
    { id: '7', name: 'Hogar', image: 'https://api.a0.dev/assets/image?text=Home&aspect=1:1', selected: false },
    { id: '8', name: 'Infantil', image: 'https://api.a0.dev/assets/image?text=Kids&aspect=1:1', selected: false },
    { id: '9', name: 'Automóviles', image: 'https://api.a0.dev/assets/image?text=Cars&aspect=1:1', selected: false },
    { id: '10', name: 'Mascotas', image: 'https://api.a0.dev/assets/image?text=Pets&aspect=1:1', selected: false },
    { id: '11', name: 'Fotografía', image: 'https://api.a0.dev/assets/image?text=Photography&aspect=1:1', selected: false },
    { id: '12', name: 'Servicios', image: 'https://api.a0.dev/assets/image?text=Services&aspect=1:1', selected: false },
  ]);
  
  const [selectedCount, setSelectedCount] = useState(0);

  const toggleCategory = (id: string) => {
    const updatedCategories = categories.map(category => {
      if (category.id === id) {
        const newSelected = !category.selected;
        if (newSelected && selectedCount >= 3) {
          // Ya hay 3 categorías seleccionadas, no permitir más
          return category;
        }
        setSelectedCount(prev => newSelected ? prev + 1 : prev - 1);
        return { ...category, selected: newSelected };
      }
      return category;
    });
    
    setCategories(updatedCategories);
  };

  const handleContinue = () => {
    if (selectedCount === 3) {
      navigation.navigate('LogoWall' as never);
    }
  };

  return (
    <LinearGradient
      colors={['#121212', '#1E1E1E']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <ComersiumLogo size="small" color="white" />
        <ComersiumText size="small" color="white" />
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.profileIcon}>
            <Ionicons name="person-circle-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationIcon}>
            <Ionicons name="notifications-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Título */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Selecciona 3</Text>
        <Text style={styles.subtitle}>categorías de tu interés</Text>
      </View>
      
      {/* Categorías */}
      <ScrollView 
        style={styles.content} 
        contentContainerStyle={styles.categoriesContainer}
        showsVerticalScrollIndicator={false}
      >
        {categories.map((category) => (
          <TouchableOpacity 
            key={category.id} 
            style={[styles.categoryItem, category.selected && styles.selectedItem]}
            onPress={() => toggleCategory(category.id)}
          >
            <Image 
              source={{ uri: category.image }} 
              style={styles.categoryImage} 
              resizeMode="cover"
            />
            <View style={styles.overlay} />
            <View style={styles.categoryNameContainer}>
              <Text style={styles.categoryName}>{category.name}</Text>
            </View>
            <View style={styles.selectionIndicator}>
              {category.selected ? (
                <Ionicons name="checkmark-circle" size={24} color="#00E5FF" />
              ) : (
                <Ionicons name="add-circle-outline" size={24} color="white" />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      {/* Botón de continuar */}
      {selectedCount === 3 && (
        <View style={styles.continueButtonContainer}>
          <TouchableOpacity 
            style={styles.continueButton}
            onPress={handleContinue}
          >
            <Text style={styles.continueButtonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      )}
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
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    marginRight: 15,
  },
  notificationIcon: {},
  titleContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00E5FF',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00E5FF',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 100,
  },
  categoryItem: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  selectedItem: {
    borderWidth: 2,
    borderColor: '#00E5FF',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  categoryNameContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  categoryName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  selectionIndicator: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  continueButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(18, 18, 18, 0.9)',
  },
  continueButton: {
    backgroundColor: '#00E5FF',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#121212',
    fontSize: 16,
    fontWeight: '600',
  },
});