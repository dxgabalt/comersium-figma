// app/(main)/ProfileScreen.tsx
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router'; // Importa el objeto router para la navegación
import React from 'react';
import { Image, ImageStyle, ScrollView, StatusBar, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Importa tus imágenes aquí
import DiamondIcon from '../../assets/images/DiamondICon.png';

interface Style {
  container: ViewStyle;
  header: ViewStyle;
  diamondIcon: ImageStyle;
  headerTitle: TextStyle;
  headerIcons: ViewStyle;
  headerIcon: ViewStyle;
  profileSection: ViewStyle;
  avatarContainer: ViewStyle; // Contenedor para el icono de avatar
  userInfo: ViewStyle;
  userName: TextStyle;
  userEmail: TextStyle;
  questionIcon: TextStyle;
  settingsTitle: TextStyle;
  menuItem: ViewStyle;
  menuItemActive: ViewStyle;
  menuItemContent: ViewStyle;
  menuIcon: ViewStyle; // Estilo para el CONTENEDOR del icono (ej. margen)
  menuText: TextStyle;
  logoutButton: ViewStyle;
  logoutButtonText: TextStyle;
  bottomNavBar: ViewStyle;
  navItem: ViewStyle;
  navItemActive: ViewStyle;
  navItemDiamond: ViewStyle;
  navItemCenterBg: ViewStyle; // Cambiado a ViewType para consistencia
  navText: TextStyle;
  navTextActive: TextStyle;
}

export default function ProfileScreen() {
  const [selectedTab, setSelectedTab] = React.useState('settings');

  const navItems = [
    // CORREGIDO: Rutas sin el prefijo '(main)/' directamente al nombre del archivo dentro del stack
    { key: 'home', icon: 'home-outline', text: 'Inicio', route: 'HomeScreen' },
    { key: 'chat', icon: 'chatbubble-outline', text: 'Mensajes', route: 'chat' },
    { key: 'diamond', icon: '', text: '', route: 'subscription' },
    { key: 'cart', icon: 'cart-outline', text: 'Carrito', route: 'CheckoutScreen' },
    { key: 'settings', icon: 'settings-outline', text: 'Ajustes', route: 'ProfileScreen' },
  ];

  const handleBottomTabPress = (itemKey: string, route: string) => {
    setSelectedTab(itemKey);
    
    if (route === 'chat' || route === 'subscription') {
        console.log(`Navegar a ${route} (ruta no definida en Stack, considera añadirla)`);
    } else {
        router.push(route as any); // 'as any' para evitar problemas de tipado con expo-router
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={DiamondIcon} style={styles.diamondIcon} resizeMode="contain" />
          <Text style={styles.headerTitle}>COMERSIUM™</Text>
          <View style={styles.headerIcons}>
            {/* Este es el avatar del header, NO el grande. */}
            <TouchableOpacity style={styles.headerIcon} onPress={() => router.push('/ProfileScreen')}>
              <Ionicons name="person-circle-outline" size={26} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIcon} onPress={() => console.log('Ir a notificaciones')}>
              <Ionicons name="notifications-outline" size={26} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Sección de Perfil de Usuario - AHORA ES CLICKEABLE */}
        {/* CORREGIDO: Envuelve toda la sección de avatar/userInfo en un TouchableOpacity */}
        <TouchableOpacity 
          style={styles.profileSection} 
          onPress={() => router.push('/(main)/EditUser')} // Redirige a EditUserScreen
        >
            <View style={styles.avatarContainer}>
                <Ionicons name="person-circle-outline" size={70} color="#00E5FF" />
            </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>
              Kenner Z
              <Text style={styles.questionIcon}> ?</Text> 
            </Text>
            <Text style={styles.userEmail}>kener.angulo@global-bds.com</Text>
          </View>
        </TouchableOpacity>

        {/* Título Ajustes */}
        <Text style={styles.settingsTitle}>Ajustes</Text>

        {/* Opciones de Menú */}
        <View>
          {/* Promociones globales - Activa/Resaltada */}
          <TouchableOpacity style={[styles.menuItem, styles.menuItemActive]}>
            <View style={styles.menuItemContent}>
              <View style={styles.menuIcon}> 
                <Ionicons name="flash-outline" size={22} color="#00E5FF" />
              </View>
              <Text style={[styles.menuText, { color: '#00E5FF' }]}>Promociones globales</Text>
            </View>
          </TouchableOpacity>

          {/* Registrar Negocio */}
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemContent}>
              <View style={styles.menuIcon}> 
                <Ionicons name="business-outline" size={22} color="white" />
              </View>
              <Text style={styles.menuText}>Registrar Negocio</Text>
            </View>
          </TouchableOpacity>

          {/* Cambiar Preferencias */}
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemContent}>
              <View style={styles.menuIcon}> 
                <Ionicons name="heart-outline" size={22} color="white" />
              </View>
              <Text style={styles.menuText}>Cambiar Preferencias</Text>
            </View>
          </TouchableOpacity>

          {/* Activar notificaciones */}
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemContent}>
              <View style={styles.menuIcon}> 
                <Ionicons name="notifications-outline" size={22} color="white" />
              </View>
              <Text style={styles.menuText}>Activar notificaciones</Text>
            </View>
          </TouchableOpacity>

          {/* Regulador de radio por ubicación */}
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemContent}>
              <View style={styles.menuIcon}> 
                <Ionicons name="location-outline" size={22} color="white" />
              </View>
              <Text style={styles.menuText}>Regulador de radio por ubicación</Text>
            </View>
          </TouchableOpacity>

          {/* COMERSIUM Exchange */}
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemContent}>
              <Image source={DiamondIcon} style={[styles.diamondIcon, { width: 22, height: 22, tintColor: 'white', marginRight: 15 }]} resizeMode="contain" />
              <Text style={styles.menuText}>COMERSIUM Exchange</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Botón Cerrar sesión */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* Barra de Navegación Inferior */}
      <View style={styles.bottomNavBar}>
        {navItems.map((item) => (
          <TouchableOpacity
            key={item.key}
            style={[
              styles.navItem,
              selectedTab === item.key && styles.navItemActive,
              item.key === 'diamond' && styles.navItemDiamond,
            ]}
            onPress={() => handleBottomTabPress(item.key, item.route)} 
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  diamondIcon: {
    width: 25,
    height: 25,
    tintColor: '#00E5FF', // Asegurarse de que el color es consistente si es una imagen SVG o similar
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginLeft: 15,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#1C1C1C', // Añadido para hacer la zona más visible y clickeable
    borderRadius: 10,
    marginHorizontal: 20, // Para que tenga el mismo margen que los otros items
  },
  avatarContainer: {
    width: 70, 
    height: 70,
    borderRadius: 35,
    backgroundColor: '#1C1C1C', // Este fondo debería ser visible dentro del TouchableOpacity
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    borderWidth: 2,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userEmail: {
    color: '#CCC',
    fontSize: 14,
  },
  questionIcon: {
    color: '#999',
    fontSize: 16,
    fontWeight: 'normal',
  },
  settingsTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 15,
  },
  menuItem: {
    backgroundColor: '#1C1C1C',
    borderRadius: 50, // Manteniendo el borderRadius de 50
    marginHorizontal: 20,
    marginBottom: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuItemActive: {
    borderWidth: 1,
    borderColor: '#00E5FF',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: { 
    marginRight: 15,
  },
  menuText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 30,
    paddingVertical: 15,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNavBar: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#1C1C1C',
    borderTopWidth: 1,
    borderTopColor: '#222',
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  navItemActive: {
     borderTopWidth: 2,
     borderTopColor: '#00E5FF',
     paddingTop: 2,
  },
  navItemDiamond: {
    marginTop: -20,
  },
  navItemCenterBg: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#00E5FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    color: '#AAA',
    fontSize: 11,
    marginTop: 4,
  },
  navTextActive: {
    color: '#00E5FF',
  },
});