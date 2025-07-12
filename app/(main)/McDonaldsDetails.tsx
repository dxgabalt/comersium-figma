import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ComersiumLogo from "../../components/ComersiumLogo";

const MCDONALDS_DATA = {
  name: "McDonald's",
  headerImage: "https://api.a0.dev/assets/image?text=McDonalds%20Header%202&aspect=2:1",
  rating: "4.5 (2k+ comentarios)",
  distance: "4.5 km de distancia",
  deliveryTime: "15 mins Entrega",
  foodQuality: "350 ra Good food",
  products: [
    { id: 'p1', name: 'Big Mac', image: 'https://api.a0.dev/assets/image?text=Big%20Mac&aspect=1:1', price: 'U$ 6.00' },
    { id: 'p2', name: 'McNuggets', image: 'https://api.a0.dev:assets/image?text=McNuggets&aspect=1:1', price: 'U$ 5.50' },
    { id: 'p3', name: 'Papas Fritas', image: 'https://api.a0.dev/assets/image?text=Fries&aspect=1:1', price: 'U$ 3.00' },
    { id: 'p4', name: 'McFlurry', image: 'https://api.a0.dev/assets/image?text=McFlurry&aspect=1:1', price: 'U$ 4.00' },
  ],
  promotions: [
    { id: 'pr1', name: 'Combo Grande', image: 'https://api.a0.dev/assets/image?text=Combo%20Grande&aspect=1:1', discount: '40% OFF', price: 'U$ 9.00' },
    { id: 'pr2', name: 'Doble Queso', image: 'https://api.a0.dev/assets/image?text=Doble%20Queso&aspect=1:1', discount: '¡GRAN ESTRENO!', price: 'U$ 7.50' },
    { id: 'pr3', name: 'Desayuno', image: 'https://api.a0.dev/assets/image?text=Breakfast&aspect=1:1', discount: '¡FELIZ NOVEDAD!', price: 'U$ 5.00' },
  ],
};


export default function McDonaldsDetailScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.appHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.userAvatar}>
          <Ionicons name="person-circle-outline" size={36} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.restaurantImageContainer}>
        <Image
          source={{ uri: MCDONALDS_DATA.headerImage }}
          style={styles.restaurantImage}
          resizeMode="cover"
        />
        <View style={styles.imageOverlay} />
      </View>

      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={styles.tabButtonActive}>
            <Text style={styles.tabButtonTextActive}>Información General</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabButton}
            onPress={() => navigation.navigate("McDonaldsInfo" as never)}
          >
            <Text style={styles.tabButtonText}>Otros detalles</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <Ionicons name="star" size={18} color="#FFD700" />
            <Text style={styles.detailText}>{MCDONALDS_DATA.rating}</Text>
          </View>
          <View style={styles.detailItem}>
            <Ionicons name="location-outline" size={18} color="#aaa" />
            <Text style={styles.detailText}>{MCDONALDS_DATA.distance}</Text>
          </View>
          <View style={styles.detailItem}>
            <Ionicons name="time-outline" size={18} color="#aaa" />
            <Text style={styles.detailText}>{MCDONALDS_DATA.deliveryTime}</Text>
          </View>
          <View style={styles.detailItem}>
            <Ionicons name="fast-food-outline" size={18} color="#aaa" />
            <Text style={styles.detailText}>{MCDONALDS_DATA.foodQuality}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>¿Quieres repetir? Productos pedidos recientes</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productsScroll}>
          {MCDONALDS_DATA.products.map(product => (
            <TouchableOpacity key={product.id} style={styles.productCard}>
              <Image source={{ uri: product.image }} style={styles.productImage} />
              <Text style={styles.productCardName}>{product.name}</Text>
              <Text style={styles.productCardPrice}>{product.price}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Promociones destacadas</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.promotionsScroll}>
          {MCDONALDS_DATA.promotions.map(promo => (
            <TouchableOpacity key={promo.id} style={styles.promotionCard}>
              <Image source={{ uri: promo.image }} style={styles.promotionImage} />
              <View style={styles.promotionTextOverlay}>
                <Text style={styles.promotionDiscount}>{promo.discount}</Text>
                <Text style={styles.promotionName}>{promo.name}</Text>
                {promo.price && <Text style={styles.promotionPrice}>{promo.price}</Text>}
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("HomeScreen" as never)}>
          <Ionicons name="home-outline" size={24} color="#777" />
          <Text style={styles.navText}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("McdonaldsChat" as never)}>
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
    backgroundColor: "#121212",
  },
  appHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: "#1B1B1B",
  },
  backButton: {
    padding: 5,
  },
  userAvatar: {
  },
  restaurantImageContainer: {
    width: "100%",
    height: 200,
    position: 'relative',
  },
  restaurantImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  scrollViewContent: {
    flex: 1,
    backgroundColor: "#121212",
  },
  tabsContainer: {
    flexDirection: "row",
    backgroundColor: "#1B1B1B",
    borderRadius: 25,
    marginHorizontal: 20,
    marginTop: 15,
    padding: 5,
    justifyContent: "space-around",
    alignItems: "center",
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 20,
  },
  tabButtonActive: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#00E5FF",
  },
  tabButtonText: {
    color: "white",
    fontWeight: "600",
  },
  tabButtonTextActive: {
    color: "#121212",
    fontWeight: "600",
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: '100%',
    paddingVertical: 20,
    backgroundColor: "#1B1B1B",
    marginVertical: 10,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  detailItem: {
    alignItems: "center",
  },
  detailText: {
    color: "#ccc",
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 15,
  },
  productsScroll: {
    paddingLeft: 20,
    marginBottom: 20,
  },
  productCard: {
    width: 140,
    marginRight: 15,
    backgroundColor: "#1B1B1B",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  productImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#333',
  },
  productCardName: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 5,
  },
  productCardPrice: {
    color: "#00E5FF",
    fontSize: 14,
    fontWeight: "bold",
  },
  promotionsScroll: {
    paddingLeft: 20,
    marginBottom: 20,
  },
  promotionCard: {
    width: 200,
    height: 150,
    marginRight: 15,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  promotionImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
  },
  promotionTextOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
    padding: 10,
  },
  promotionDiscount: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  promotionName: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  promotionPrice: {
    color: '#00E5FF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  bottomNavBar: {
    flexDirection: "row",
    backgroundColor: "#1B1B1B",
    height: 70,
    borderTopWidth: 1,
    borderTopColor: "#333",
    paddingHorizontal: 10,
    justifyContent: "space-around",
    alignItems: "center",
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navItemCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -20,
  },
  navItemCenterBg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#00E5FF",
    justifyContent: "center",
    alignItems: "center",
  },
  navText: {
    color: "#777",
    fontSize: 12,
    marginTop: 4,
  },
});