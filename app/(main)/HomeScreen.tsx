import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, Image, ImageSourcePropType, ImageStyle, ScrollView, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

import DiamondIcon from '../../assets/images/DiamondICon.png';
import Vector from '../../assets/images/Vector.png';

import { router } from 'expo-router';
import Carrusel1 from '../../assets/images/Carrusel1.png';
import Carrusel2 from '../../assets/images/Carrusel2.png';
import Carrusel3 from '../../assets/images/Carrusel3.png';
import Carrusel4 from '../../assets/images/Carrusel4.png';

const { width, height } = Dimensions.get('window');


interface CarouselItem {
  id: string;
  image: ImageSourcePropType;
  logo: string;
  title: string;
  subtitle: string;
  description: string;
}

interface PromotionItem {
  id: string;
  image: string;
  rating: number;
  store: string;
}

const CAROUSEL_DATA: CarouselItem[] = [
  { id: '1', image: Carrusel1, logo: 'Comersium', title: 'Bienvenido a Comersium', subtitle: 'Tu marketplace de confianza', description: 'Descubre ofertas increíbles y una gran variedad de productos.' },
  { id: '2', image: Carrusel2, logo: 'Comersium', title: 'Nuevas Colecciones', subtitle: 'Lo último en moda y tecnología', description: 'Explora nuestras recién llegadas y mantente a la vanguardia.' },
  { id: '3', image: Carrusel3, logo: 'Comersium', title: 'Promociones Especiales', subtitle: 'Descuentos imperdibles', description: 'Aprovecha nuestras ofertas por tiempo limitado en tus productos favoritos.' },
  { id: '4', image: Carrusel4, logo: 'Comersium', title: 'Promociones Especiales', subtitle: 'Descuentos imperdibles', description: 'Aprovecha nuestras ofertas por tiempo limitado en tus productos favoritos.' },
];

const PROMOTIONS_DATA: PromotionItem[] = [
  { id: 'promo1', image: 'https://api.a0.dev/assets/image?text=Watermelon%20Drink&aspect=1:1', rating: 4.5, store: 'Comercio 1' },
  { id: 'promo2', image: 'https://api.a0.dev/assets/image?text=Energy%20Drink&aspect=1:1', rating: 4.8, store: 'Comercio 2' },
  { id: 'promo3', image: 'https://api.a0.dev/assets/image?text=Super%20Combo&aspect=1:1', rating: 4.7, store: 'Comercio 3' },
];

const AUTO_SWIPE_INTERVAL = 5000;

// Interfaz para tipar el objeto de estilos
interface Style {
  container: ViewStyle;
  topHeader: ViewStyle;
  topHeaderDiamondIcon: ImageStyle;
  headerIcons: ViewStyle;
  profileIcon: ViewStyle;
  notificationIcon: ViewStyle;
  tabsContainerOverlay: ViewStyle;
  tab: ViewStyle;
  activeTab: ViewStyle;
  tabText: TextStyle;
  activeTabText: TextStyle;
  fullScreenCarousel: ViewStyle;
  heroBanner: ViewStyle;
  heroBannerImage: ImageStyle;
  heroBannerOverlay: ViewStyle;
  heroBannerContent: ViewStyle;
  heroBannerTitle: TextStyle;
  heroBannerSubtitle: TextStyle;
  heroBannerDescription: TextStyle;
  carouselButtonsContainer: ViewStyle;
  carouselButton: ViewStyle;
  carouselButtonActive: ViewStyle;
  fixedPromotionsSection: ViewStyle; // Nuevo estilo para la sección de promociones fijas
  sectionTitle: TextStyle;
  promotionsContainer: ViewStyle;
  promotionItem: ViewStyle;
  promotionImage: ImageStyle;
  promotionRating: ViewStyle;
  promotionRatingText: TextStyle;
  promotionStore: TextStyle;
  bottomNavBar: ViewStyle;
  navItem: ViewStyle;
  navItemActive: ViewStyle;
  navItemDiamond: ViewStyle;
  navItemCenterBg: ViewStyle;
  diamondIcon: ImageStyle;
  navText: TextStyle;
  navTextActive: TextStyle;
  footerVector: ImageStyle;
}


export default function HomeScreen() {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('logowall');
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

  const handlePromotionPress = () => {
    navigation.navigate('McDonaldsDetails' as never);
  };

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    if (tab === 'logowall') {
      navigation.navigate('LogoWallScreen' as never);
    } else if (tab === 'populares') {
      navigation.navigate('Home' as never);
    } else {
      const selectedNavItem = navItems.find(item => item.key === tab);
      if (selectedNavItem && selectedNavItem.route && selectedNavItem.route !== 'HomeScreen') {
        // En el caso de "Ajustes", navegar a la pantalla de perfil
        if (selectedNavItem.key === 'settings') {
          router.push('ProfileScreen' as never);
        } else {
          navigation.navigate(selectedNavItem.route as never);
        }
      }
    }
  };

  // Función para manejar la navegación al ProfileScreen desde el icono del header
  const handleProfileIconPress = () => {
    navigation.navigate('ProfileScreen' as never); // <--- NUEVA FUNCIÓN PARA NAVEGAR AL PERFIL
  };


  const renderCarouselItem = ({ item, index }: { item: CarouselItem, index: number }) => (
    <View style={styles.heroBanner}>
      <Image
        source={item.image}
        style={styles.heroBannerImage}
      />
      <View style={styles.heroBannerOverlay} />
      <View style={styles.heroBannerContent}>
        <Text style={styles.heroBannerTitle}>{item.title}</Text>
        <Text style={styles.heroBannerSubtitle}>{item.subtitle}</Text>
        <Text style={styles.heroBannerDescription}>
          {item.description}
        </Text>
      </View>
      <View style={styles.carouselButtonsContainer}>
        {CAROUSEL_DATA.map((_, i) => (
          <TouchableOpacity
            key={i}
            style={[
              styles.carouselButton,
              i === currentIndex && styles.carouselButtonActive,
            ]}
            onPress={() => {
              carouselRef.current?.scrollToOffset({
                offset: i * width,
                animated: true,
              });
              setCurrentIndex(i);
            }}
          />
        ))}
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

      {/* Carrusel a pantalla completa - es el fondo de todo */}
      <FlatList
        ref={carouselRef}
        data={CAROUSEL_DATA}
        renderItem={renderCarouselItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.fullScreenCarousel}
        onViewableItemsChanged={({ viewableItems }) => {
          if (viewableItems.length > 0 && viewableItems[0].index !== null) {
            setCurrentIndex(viewableItems[0].index);
          }
        }}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
      />

      {/* Elementos fijos en la parte superior, superpuestos al carrusel */}
      <View style={styles.topHeader}>
        <Image
          source={DiamondIcon}
          style={styles.topHeaderDiamondIcon}
          resizeMode="contain"
        />
        <View style={styles.headerIcons}>
          {/* CAMBIO CLAVE: AÑADIR onPress PARA NAVEGAR A PROFILESCREEN */}
          <TouchableOpacity style={styles.profileIcon} onPress={handleProfileIconPress}>
            <Ionicons name="person-circle-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationIcon}>
            <Ionicons name="notifications-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs de navegación, también fijos y superpuestos */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainerOverlay}>
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

      {/* Sección de Promociones destacadas - ahora fija, superpuesta al carrusel */}
      <View style={styles.fixedPromotionsSection}>
        <Text style={styles.sectionTitle}>Promociones destacadas ★</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.promotionsContainer}>
          {PROMOTIONS_DATA.map((promotion) => (
            <TouchableOpacity
              key={promotion.id}
              style={styles.promotionItem}
              onPress={handlePromotionPress}
            >
              <Image
                source={{ uri: promotion.image }}
                style={styles.promotionImage}
              />
              <View style={styles.promotionRating}>
                <Text style={styles.promotionRatingText}>★ {promotion.rating.toFixed(1)}</Text>
              </View>
              <Text style={styles.promotionStore}>{promotion.store}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Fondo del Footer con Vector.png (posicionado absolutamente en la parte inferior) */}
      <Image
        source={Vector}
        style={styles.footerVector}
        resizeMode="stretch"
      />

      {/* Barra de navegación inferior (con sus iconos, posicionado absolutamente en la parte inferior) */}
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

// Aplicamos la interfaz Style a StyleSheet.create
const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  // El carrusel ahora es el único ScrollView de contenido
  fullScreenCarousel: {
    width: width,
    height: height, // El carrusel ocupa toda la altura visible
    position: 'absolute', // Es el fondo, así que es absoluto
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
    bottom: height * 0.45, // Ajusta esta posición si es necesario
    left: 0,
    right: 0,
    padding: 20,
    zIndex: 2,
    alignItems: 'center',
  },
  heroBannerTitle: {
    color: '#00E5FF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  heroBannerSubtitle: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  heroBannerDescription: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  carouselButtonsContainer: {
    position: 'absolute',
    bottom: height * 0.4, // Ajusta esto para que esté por encima de las promociones si es necesario
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    zIndex: 3,
  },
  carouselButton: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 5,
  },
  carouselButtonActive: {
    backgroundColor: 'white',
  },
  // Header, Tabs y Promociones fijas
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
    position: 'absolute',
    width: '100%',
    zIndex: 10, // Por encima de todo
    backgroundColor: 'transparent',
  },
  topHeaderDiamondIcon: {
    width: 30,
    height: 30,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    marginRight: 15,
  },
  notificationIcon: {},
  tabsContainerOverlay: {
    position: 'absolute',
    top: 90, // Debajo del header
    width: '100%',
    zIndex: 10, // Por encima del carrusel
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
  },
  tab: {
    paddingHorizontal: 10,
    paddingVertical: 2,
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
  fixedPromotionsSection: {
    position: 'absolute',
    bottom: 70, // Posiciona la sección de promociones justo encima de la barra de navegación inferior
    width: '100%',
    zIndex: 5, // Por encima del carrusel, pero por debajo de la barra de navegación
    paddingHorizontal: 20,
    backgroundColor: 'rgba(43, 43, 43, 0.14)', // Fondo semi-transparente para visibilidad
    paddingVertical: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  promotionsContainer: {
    flexDirection: 'row',
  },
  promotionItem: {
    width: 120,
    marginRight: 15,
  },
  promotionImage: {
    width: '100%',
    height: 150,
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
    color: '#DDD',
    fontSize: 13,
    marginTop: 5,
    fontWeight: '500',
  },
  bottomNavBar: {
    flexDirection: 'row',
    height: 70,
    borderTopWidth: 1,
    borderTopColor: 'transparent',
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 10, // Los iconos de la barra de navegación deben estar encima de la imagen Vector y las promociones
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
    color: '#EEE',
    fontSize: 12,
    marginTop: 4,
    fontWeight: '500',
  },
  navTextActive: {
    color: '#00E5FF',
  },
  footerVector: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    zIndex: 9, // La imagen de fondo debe estar debajo de la bottomNavBar
  },
});