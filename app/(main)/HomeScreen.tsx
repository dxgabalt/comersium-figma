import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, Image, ImageSourcePropType, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ComersiumText from '../../components/ComersiumText';

import DiamondIcon from '../../assets/images/DiamondICon.png'; // Asegúrate de que esta importación sea correcta

import Carrusel1 from '../../assets/images/Carrusel1.png';
import Carrusel2 from '../../assets/images/Carrusel2.png';
import Carrusel3 from '../../assets/images/Carrusel3.png';
import Carrusel4 from '../../assets/images/Carrusel4.png';

const { width } = Dimensions.get('window');

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  store: string;
  discount?: number;
}

interface CarouselItem {
  id: string;
  image: ImageSourcePropType;
  logo: string;
  title: string;
  subtitle: string;
  description: string;
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

const CAROUSEL_DATA: CarouselItem[] = [
  { id: '1', image: Carrusel1, logo: 'Comersium', title: 'Bienvenido a Comersium', subtitle: 'Tu marketplace de confianza', description: 'Descubre ofertas increíbles y una gran variedad de productos.' },
  { id: '2', image: Carrusel2, logo: 'Comersium', title: 'Nuevas Colecciones', subtitle: 'Lo último en moda y tecnología', description: 'Explora nuestras recién llegadas y mantente a la vanguardia.' },
  { id: '3', image: Carrusel3, logo: 'Comersium', title: 'Promociones Especiales', subtitle: 'Descuentos imperdibles', description: 'Aprovecha nuestras ofertas por tiempo limitado en tus productos favoritos.' },
  { id: '4', image: Carrusel4, logo: 'Comersium', title: 'Promociones Especiales', subtitle: 'Descuentos imperdibles', description: 'Aprovecha nuestras ofertas por tiempo limitado en tus productos favoritos.' },
];

const AUTO_SWIPE_INTERVAL = 5000;

export default function HomeScreen() {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('home');
  const navItemRefs = useRef<{ [key: string]: any }>({});
  const carouselRef = useRef<FlatList<CarouselItem>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navItems = [
    { key: 'home', icon: 'home-outline', text: 'Inicio', route: 'HomeScreen' },
    { key: 'chat', icon: 'chatbubble-outline', text: 'Mensajes', route: 'chat' },
    { key: 'diamond', icon: '', text: '', route: 'subscription' },
    { key: 'cart', icon: 'cart-outline', text: 'Carrito', route: 'CheckoutScreen' },
    { key: 'settings', icon: 'settings-outline', text: 'Ajustes', route: 'CategoriesScreen' },
  ];

  const handleProductPress = (product: Product) => {
    navigation.navigate('CheckoutScreen' as never);
  };

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    const selectedNavItem = navItems.find(item => item.key === tab);
    if (selectedNavItem && selectedNavItem.route) {
      if (selectedNavItem.route === 'HomeScreen') {
        navigation.navigate('(main)' as never);
      } else {
        navigation.navigate(selectedNavItem.route as never);
      }
    }
  };

  const renderCarouselItem = ({ item }: { item: CarouselItem }) => (
    <View style={styles.heroBanner}>
      <Image
        source={item.image}
        style={styles.heroBannerImage}
      />
      <View style={styles.heroBannerOverlay} />
      <View style={styles.heroBannerContent}>
        <Text style={styles.heroBannerLogo}>{item.logo}</Text>
        <Text style={styles.heroBannerTitle}>{item.title}</Text>
        <Text style={styles.heroBannerSubtitle}>{item.subtitle}</Text>
        <Text style={styles.heroBannerDescription}>
          {item.description}
        </Text>
      </View>
    </View>
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % CAROUSEL_DATA.length;
      setCurrentIndex(nextIndex);
      carouselRef.current?.scrollToOffset({
        offset: nextIndex * width,
        animated: true,
      });
    }, AUTO_SWIPE_INTERVAL);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        {/* Reemplazado ComersiumLogo por el DiamondIcon */}
        <TouchableOpacity onPress={() => navigation.navigate('subscription' as never)}>
          <Image
            source={DiamondIcon}
            style={styles.headerDiamondIcon} // Usaremos un estilo específico para el encabezado
            resizeMode="contain"
          />
        </TouchableOpacity>
        {/* Mantén ComersiumText si es necesario, o elimínalo si solo quieres el ícono */}
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

      <FlatList
        ref={carouselRef}
        data={CAROUSEL_DATA}
        renderItem={renderCarouselItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.carouselContainer}
        onViewableItemsChanged={({ viewableItems }) => {
          if (viewableItems.length > 0 && viewableItems[0].index !== null) {
            setCurrentIndex(viewableItems[0].index);
          }
        }}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
      />

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

      <View style={styles.bottomNavBar}>
        {navItems.map((item, index) => (
          <TouchableOpacity
            key={item.key}
            style={[
              styles.navItem,
              selectedTab === item.key && styles.navItemActive,
              item.key === 'diamond' && styles.navItemDiamond,
            ]}
            onPress={() => handleTabChange(item.key)}
            onLayout={(event) => {
              if (navItemRefs.current) {
                navItemRefs.current[item.key] = event.target;
              }
            }}
          >
            {item.key === 'diamond' ? (
              <View style={styles.navItemCenterBg}>
                <Image
                  source={DiamondIcon}
                  style={styles.diamondIcon}
                  resizeMode="contain"
                />
              </View>
            ) : (
              <>
                <Ionicons
                  name={item.icon as any}
                  size={24}
                  color={selectedTab === item.key ? '#00E5FF' : 'white'}
                />
                <Text style={[styles.navText, selectedTab === item.key && styles.navTextActive]}>
                  {item.text}
                </Text>
              </>
            )}
          </TouchableOpacity>
        ))}
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
  headerDiamondIcon: { // Nuevo estilo para el ícono de diamante en el encabezado
    width: 30, // Ajusta el tamaño según sea necesario
    height: 30, // Ajusta el tamaño según sea necesario
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
  carouselContainer: {
    width: '100%',
    height: 300,
  },
  heroBanner: {
    width: width,
    height: '100%',
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
  navItemDiamond: {
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
  diamondIcon: {
    width: 30,
    height: 30,
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