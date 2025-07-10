import React, { useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, Easing, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import ComersiumLogo from '../../components/ComersiumLogo';
import ComersiumText from '../../components/ComersiumText';

const { width, height } = Dimensions.get('window');
const LOGO_SIZE = 80;
const CENTER_LOGO_SIZE = 120;

interface Logo {
  id: string;
  name: string;
  image: string;
  position: {
    x: number;
    y: number;
  };
  scale: Animated.Value;
  opacity: Animated.Value;
}

// Logos de marcas conocidas
const LOGOS = [
  { id: '1', name: 'Starbucks', image: 'https://api.a0.dev/assets/image?text=Starbucks&aspect=1:1' },
  { id: '2', name: 'McDonalds', image: 'https://api.a0.dev/assets/image?text=McDonalds&aspect=1:1' },
  { id: '3', name: 'Adidas', image: 'https://api.a0.dev/assets/image?text=Adidas&aspect=1:1' },
  { id: '4', name: 'Nike', image: 'https://api.a0.dev/assets/image?text=Nike&aspect=1:1' },
  { id: '5', name: 'Apple', image: 'https://api.a0.dev/assets/image?text=Apple&aspect=1:1' },
  { id: '6', name: 'Samsung', image: 'https://api.a0.dev/assets/image?text=Samsung&aspect=1:1' },
  { id: '7', name: 'Coca-Cola', image: 'https://api.a0.dev/assets/image?text=CocaCola&aspect=1:1' },
  { id: '8', name: 'Pepsi', image: 'https://api.a0.dev/assets/image?text=Pepsi&aspect=1:1' },
  { id: '9', name: 'Chupa Chups', image: 'https://api.a0.dev/assets/image?text=ChupaChups&aspect=1:1' },
  { id: '10', name: 'Sherpa', image: 'https://api.a0.dev/assets/image?text=Sherpa&aspect=1:1' },
];

export default function LogoWallScreen() {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('logowall');
  const [centerLogoIndex, setCenterLogoIndex] = useState(0);
  const animationRef = useRef<Animated.CompositeAnimation | null>(null);
  
  // Generar posiciones aleatorias para los logos en un patrón circular
  const logos: Logo[] = useMemo(() => {
    return LOGOS.map((logo, index) => {
      const centerX = width / 2 - LOGO_SIZE / 2;
      const centerY = height / 2 - LOGO_SIZE / 2 - 50; // Ajustado para centrar mejor
      
      // Distribuir logos en un círculo alrededor del centro
      const angle = (index / LOGOS.length) * Math.PI * 2;
      const radius = Math.min(width, height) * 0.35; // Radio proporcional al tamaño de pantalla
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      return {
        ...logo,
        position: { x, y },
        scale: new Animated.Value(index === centerLogoIndex ? 1.5 : 1),
        opacity: new Animated.Value(index === centerLogoIndex ? 1 : 0.7),
      };
    });
  }, []);

  // Función para animar los logos
  const animateLogos = () => {
    if (animationRef.current) {
      animationRef.current.stop();
    }

    const animations = logos.map((logo, index) => {
      const isCenter = index === centerLogoIndex;
      
      return Animated.parallel([
        Animated.timing(logo.scale, {
          toValue: isCenter ? 1.5 : 1,
          duration: 500,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(logo.opacity, {
          toValue: isCenter ? 1 : 0.7,
          duration: 500,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]);
    });

    animationRef.current = Animated.parallel(animations);
    animationRef.current.start();
  };

  // Cambiar el logo central cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCenterLogoIndex((prev) => (prev + 1) % logos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [logos.length]);

  // Animar logos cuando cambia el logo central
  useEffect(() => {
    animateLogos();
  }, [centerLogoIndex]);

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    if (tab === 'populares') {
      navigation.navigate('Home' as never);
    }
  };

  const handleLogoPress = (index: number) => {
    setCenterLogoIndex(index);
    // Si el logo es McDonalds, navegar al chat
    if (LOGOS[index].name === 'McDonalds') {
      navigation.navigate('McdonaldsChat' as never);
    }
  };

  const navigateToHome = () => {
    navigation.navigate('Home' as never);
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
      
      {/* Logo Wall */}
      <View style={styles.logoWallContainer}>
        {logos.map((logo, index) => (
          <TouchableOpacity
            key={logo.id}
            onPress={() => handleLogoPress(index)}
            style={[
              styles.logoContainer,
              {
                left: logo.position.x,
                top: logo.position.y,
              },
            ]}
          >
            <Animated.View
              style={[
                styles.logoCircle,
                {
                  transform: [{ scale: logo.scale }],
                  opacity: logo.opacity,
                },
              ]}
            >
              <Image
                source={{ uri: logo.image }}
                style={styles.logo}
                resizeMode="contain"
              />
            </Animated.View>
          </TouchableOpacity>
        ))}
      </View>
      
      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home' as never)}>
          <Ionicons name="home-outline" size={24} color="#777" />
          <Text style={styles.navText}>Inicio</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('McdonaldsChat' as never)}>
          <Ionicons name="chatbubble-outline" size={24} color="#777" />
          <Text style={styles.navText}>Mensajes</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItemCenter}>
          <View style={styles.navItemCenterBg}>
            <ComersiumLogo size="tiny" color="white" />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="cart-outline" size={24} color="#777" />
          <Text style={styles.navText}>Carrito</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="settings-outline" size={24} color="#777" />
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
  logoWallContainer: {
    flex: 1,
    position: 'relative',
  },
  logoContainer: {
    position: 'absolute',
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoCircle: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    borderRadius: LOGO_SIZE / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  logo: {
    width: '80%',
    height: '80%',
    borderRadius: LOGO_SIZE / 2,
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
});