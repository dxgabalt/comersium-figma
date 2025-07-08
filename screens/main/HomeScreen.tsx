import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import ComersiumLogo from '../../components/ComersiumLogo';
import ComersiumText from '../../components/ComersiumText';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  store: string;
  discount?: number;
}

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Base Camp Voyager Duffel 42 L',
    price: 135,
    image: 'https://api.a0.dev/assets/image?text=North%20Face%20Duffel%20Bag&aspect=1:1',
    store: 'The north face',
    discount: 20,
  },
  {
    id: '2',
    name: 'Zapatillas Ultraboost',
    price: 180,
    image: 'https://api.a0.dev/assets/image?text=Adidas%20Ultraboost&aspect=1:1',
    store: 'Adidas',
  },
  {
    id: '3',
    name: 'Chaqueta Impermeable',
    price: 250,
    image: 'https://api.a0.dev/assets/image?text=Waterproof%20Jacket&aspect=1:1',
    store: 'Columbia',
    discount: 15,
  },
  {
    id: '4',
    name: 'Mochila Resistente',
    price: 120,
    image: 'https://api.a0.dev/assets/image?text=Backpack&aspect=1:1',
    store: 'Osprey',
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('populares');

  const handleProductPress = (product: Product) => {
    navigation.navigate('Checkout' as never);
  };

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    if (tab === 'logowall') {
      navigation.navigate('LogoWall' as never);
    }
  };

  return (
    <View style={styles.container}>
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
      
      {/* Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
        <TouchableOpacity 
          style={[styles.tab, selectedTab === 'logowall' && styles.activeTab]} 
          onPress={() => handleTabChange('logowall')}
        >
          <Text style={[styles.tabText, selectedTab === 'logowall' && styles.activeTabText]}>LOGOWALL</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, selectedTab === 'populares' && styles.activeTab]} 
          onPress={() => handleTabChange('populares')}
        >
          <Text style={[styles.tabText, selectedTab === 'populares' && styles.activeTabText]}>POPULARES</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, selectedTab === 'gastronomia' && styles.activeTab]} 
          onPress={() => handleTabChange('gastronomia')}
        >
          <Text style={[styles.tabText, selectedTab === 'gastronomia' && styles.activeTabText]}>GASTRONOMÍA</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, selectedTab === 'entretenimiento' && styles.activeTab]} 
          onPress={() => handleTabChange('entretenimiento')}
        >
          <Text style={[styles.tabText, selectedTab === 'entretenimiento' && styles.activeTabText]}>ENTRETENIMIENTO</Text>
        </TouchableOpacity>
      </ScrollView>
      
      {/* Hero Banner - McDonald's */}
      <View style={styles.heroBanner}>
        <Image 
          source={{ uri: 'https://api.a0.dev/assets/image?text=McDonald%27s%20Epic%20Meal%20Bundle&aspect=16:9' }} 
          style={styles.heroBannerImage} 
        />
        <View style={styles.heroBannerOverlay} />
        <View style={styles.heroBannerContent}>
          <Text style={styles.heroBannerLogo}>McDonald's</Text>
          <Text style={styles.heroBannerTitle}>EPIC MEAL BUNDLE</Text>
          <Text style={styles.heroBannerSubtitle}>McDonald's Maestro Creative</Text>
          <Text style={styles.heroBannerDescription}>
            Conoce McDonald's, con un enfoque en ofrecer experiencias más que solo hamburguesas. McDonald's ha revolucionado la manera en que las personas disfrutan.
          </Text>
        </View>
      </View>
      
      {/* Promociones destacadas */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Promociones destacadas ★</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.promotionsContainer}>
          <TouchableOpacity style={styles.promotionItem}>
            <Image 
              source={{ uri: 'https://api.a0.dev/assets/image?text=Watermelon%20Drink&aspect=1:1' }} 
              style={styles.promotionImage} 
            />
            <View style={styles.promotionRating}>
              <Text style={styles.promotionRatingText}>★ 4.5</Text>
            </View>
            <Text style={styles.promotionStore}>Comercio 1</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.promotionItem}>
            <Image 
              source={{ uri: 'https://api.a0.dev/assets/image?text=Energy%20Drink&aspect=1:1' }} 
              style={styles.promotionImage} 
            />
            <View style={styles.promotionRating}>
              <Text style={styles.promotionRatingText}>★ 4.8</Text>
            </View>
            <Text style={styles.promotionStore}>Comercio 2</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.promotionItem}>
            <Image 
              source={{ uri: 'https://api.a0.dev/assets/image?text=Super%20Combo&aspect=1:1' }} 
              style={styles.promotionImage} 
            />
            <View style={styles.promotionRating}>
              <Text style={styles.promotionRatingText}>★ 4.7</Text>
            </View>
            <Text style={styles.promotionStore}>Comercio 3</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      
      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]} onPress={() => navigation.navigate('Home' as never)}>
          <Ionicons name="home-outline" size={24} color="white" />
          <Text style={[styles.navText, styles.navTextActive]}>Inicio</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('McdonaldsChat' as never)}
        >
          <Ionicons name="chatbubble-outline" size={24} color="white" />
          <Text style={styles.navText}>Mensajes</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItemCenter}>
          <View style={styles.navItemCenterBg}>
            <ComersiumLogo size="tiny" color="white" />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Checkout' as never)}
        >
          <Ionicons name="cart-outline" size={24} color="white" />
          <Text style={styles.navText}>Carrito</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('ComersiumOptions' as never)}
        >
          <Ionicons name="settings-outline" size={24} color="white" />
          <Text style={styles.navText}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: '#1B1B1B',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    marginRight: 15,
  },
  notificationIcon: {},
  tabsContainer: {
    backgroundColor: '#1B1B1B',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  tab: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 5,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#00E5FF',
  },
  tabText: {
    color: '#777',
    fontWeight: '600',
    fontSize: 14,
  },
  activeTabText: {
    color: 'white',
  },
  heroBanner: {
    width: '100%',
    height: 300,
    position: 'relative',
  },
  heroBannerImage: {
    width: '100%',
    height: '100%',
  },
  heroBannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1,
  },
  heroBannerContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    zIndex: 2,
  },
  heroBannerLogo: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  heroBannerTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  heroBannerSubtitle: {
    color: '#00E5FF',
    fontSize: 16,
    marginBottom: 10,
  },
  heroBannerDescription: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 12,
  },
  promotionsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  promotionItem: {
    width: 120,
    marginRight: 15,
  },
  promotionImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  promotionRating: {
    position: 'absolute',
    bottom: 25,
    right: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  promotionRatingText: {
    color: '#FFD700',
    fontSize: 12,
  },
  promotionStore: {
    color: '#777',
    fontSize: 12,
    marginTop: 5,
  },
  bottomNavBar: {
    flexDirection: 'row',
    backgroundColor: '#1B1B1B',
    height: 70,
    borderTopWidth: 1,
    borderTopColor: '#333',
    paddingHorizontal: 10,
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navItemActive: {
    borderTopWidth: 2,
    borderTopColor: '#00E5FF',
  },
  navItemCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
  },
  navItemCenterBg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#00E5FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    color: '#777',
    fontSize: 12,
    marginTop: 4,
  },
  navTextActive: {
    color: '#00E5FF',
  },
});