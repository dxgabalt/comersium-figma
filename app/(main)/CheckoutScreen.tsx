import { Ionicons } from '@expo/vector-icons'; // FontAwesome no se usa, lo podemos quitar si no hay planes futuros
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ComersiumLogo from '../../components/ComersiumLogo'; // Asegúrate de que esta ruta sea correcta

const { width } = Dimensions.get('window');

export default function CheckoutScreen() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <ComersiumLogo size="small" color="white" />
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity onPress={handleGoBack} style={styles.navBarBackButton}>
          <Ionicons name="arrow-back" size={24} color="white" /> {/* Color blanco para fondo negro */}
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>

        <View style={styles.productCard}>
          <View style={styles.colorIndicator} />
          <Image
            source={{ uri: 'https://api.a0.dev/assets/image?text=North%20Face%20Duffel%20Bag&aspect=1:1' }}
            style={styles.productImage}
          />
          <View style={styles.productDetails}>
            <View style={styles.productInfo}>
              <Text style={styles.productName}>Base Camp Voyager Duffel 42 L</Text>
              <Text style={styles.productPrice}>U$ 135.00</Text>
              <Text style={styles.productAvailability}>Solo quedan 5 Disponibles</Text>
            </View>
            <View style={styles.quantityControls}>
              <TouchableOpacity style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>1</Text>
              <TouchableOpacity style={styles.quantityButton}>
                <Text style={[styles.quantityButtonText, styles.quantityPlusButton]}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.expandButton}>
            <Ionicons name="chevron-down" size={20} color="#aaa" />
          </TouchableOpacity>
        </View>

        {/* La sección de "Detalles Generales" ha sido eliminada de aquí */}

      </ScrollView>

      {/* Pay Now Button (Footer) - Con el nuevo color azul celeste */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>Pagar ahora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Fondo negro
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#1B1B1B', // Se mantiene el color oscuro del header
  },
  headerTitle: {
    fontSize: 13,
    fontWeight: '400',
    color: 'white',
    fontFamily: 'Michroma',
    letterSpacing: 0,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#1B1B1B', // Fondo negro para la nueva navBar
    borderBottomWidth: 1, // Puedes añadir un borde si quieres separar visualmente
    borderBottomColor: '#333',
  },
  navBarBackButton: {
    padding: 5, // Aumenta el área táctil
  },
  navBarCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8, // Espacio entre el logo de Comersium y el texto de la marca
  },
  brandName: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white', // Texto blanco para contraste
  },
  cartContainer: {
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#4CD964', // Mantener verde o cambiar si prefieres
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    backgroundColor: '#121212', // El contenido también en negro
  },
  paymentSection: {
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 16, // Asegura padding en los bordes
  },
  paymentTitle: {
    fontSize: 16,
    color: '#ccc', // Color más claro para texto en fondo oscuro
    marginBottom: 8,
  },
  paymentAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#8942F5', // Este color de acento es bueno, lo mantengo
    marginBottom: 8,
  },
  securePayment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  securePaymentText: {
    marginLeft: 6,
    color: '#ccc', // Color más claro
    fontSize: 14,
  },
  productCard: {
    backgroundColor: '#1B1B1B', // Tarjeta del producto también oscura
    borderRadius: 8,
    marginHorizontal: 16,
    padding: 16,
    flexDirection: 'row',
    position: 'relative',
    shadowColor: '#000', // Sombra si es necesario, pero menos visible en negro
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3, // Aumentada para que se note en oscuro
    shadowRadius: 3,
    elevation: 5, // Elevación para Android
    marginBottom: 16, // Espacio debajo de la tarjeta
  },
  colorIndicator: {
    position: 'absolute',
    left: 0,
    top: 20,
    width: 4,
    height: 70,
    backgroundColor: '#00E5FF', // Azul celeste para el indicador
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
    backgroundColor: '#333', // Fondo del placeholder de la imagen
  },
  productDetails: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'space-between',
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white', // Texto blanco
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white', // Texto blanco
    marginBottom: 4,
  },
  productAvailability: {
    fontSize: 12,
    color: '#aaa', // Texto gris claro
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  quantityButton: {
    width: 28, // Un poco más grande
    height: 28, // Un poco más grande
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#555', // Borde más claro
    borderRadius: 4,
  },
  quantityButtonText: {
    fontSize: 18, // Texto más grande
    fontWeight: '500',
    color: '#00E5FF', // Azul celeste para los botones de cantidad
  },
  quantityPlusButton: {
    // Ya tiene el color del quantityButtonText
  },
  quantityText: {
    paddingHorizontal: 16,
    fontSize: 16,
    fontWeight: '500',
    color: 'white', // Texto blanco
  },
  expandButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    alignSelf: 'center',
  },
  // La sección 'detailsSection', 'detailsTitle', 'detailItem', etc. han sido eliminadas.
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#1B1B1B', // Fondo del footer oscuro
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  payButton: {
    backgroundColor: '#00E5FF', // ¡Tu color azul celeste!
    borderRadius: 4,
    paddingVertical: 16,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#121212', // Texto oscuro para contrastar con el azul celeste
    fontSize: 16,
    fontWeight: '600',
  },
});