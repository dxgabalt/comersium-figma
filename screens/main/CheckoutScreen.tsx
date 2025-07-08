import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import ComersiumLogo from '../../components/ComersiumLogo';

const { width } = Dimensions.get('window');

export default function CheckoutScreen() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <ComersiumLogo size="small" color="white" />
        <Text style={styles.headerTitle}>COMERSIUM</Text>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
      
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.brandName}>The north face</Text>
        <View style={styles.cartContainer}>
          <Ionicons name="cart-outline" size={24} color="#333" />
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>2</Text>
          </View>
        </View>
      </View>
      
      {/* Main Content */}
      <ScrollView style={styles.content}>
        
        {/* Payment Total */}
        <View style={styles.paymentSection}>
          <Text style={styles.paymentTitle}>Pago total</Text>
          <Text style={styles.paymentAmount}>U$ 135.00</Text>
          <View style={styles.securePayment}>
            <Ionicons name="shield-outline" size={16} color="#00E5FF" />
            <Text style={styles.securePaymentText}>Pago seguro</Text>
          </View>
        </View>
        
        {/* Product Item */}
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
        
        {/* Detalles Generales */}
        <View style={styles.detailsSection}>
          <Text style={styles.detailsTitle}>Detalles Generales</Text>
          
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>
              Verifica tu usuario por <Text style={styles.highlightedText}>$1,370/Año</Text> y obtén descuentos
            </Text>
          </View>
          
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Pagos aceptados:</Text>
            <View style={styles.paymentMethodsContainer}>
              <View style={[styles.paymentMethod, { backgroundColor: '#FF0000' }]} />
              <View style={[styles.paymentMethod, { backgroundColor: '#FFCC00' }]} />
            </View>
          </View>
          
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Comercio:</Text>
            <View style={styles.storeInfo}>
              <Text style={styles.storeText}>The north face</Text>
              <Image 
                source={{ uri: 'https://api.a0.dev/assets/image?text=NorthFace&aspect=1:1' }} 
                style={styles.storeLogo} 
              />
            </View>
          </View>
          
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>SKU:</Text>
            <Text style={styles.skuText}>NF0A52PQZJ4</Text>
          </View>
        </View>
      </ScrollView>
      
      {/* Pay Now Button */}
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
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#1B1B1B',
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
    backgroundColor: '#fff',
  },
  brandName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
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
    backgroundColor: '#4CD964',
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
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
  paymentSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  paymentTitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  paymentAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#8942F5',
    marginBottom: 8,
  },
  securePayment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  securePaymentText: {
    marginLeft: 6,
    color: '#555',
    fontSize: 14,
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 16,
    padding: 16,
    flexDirection: 'row',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  colorIndicator: {
    position: 'absolute',
    left: 0,
    top: 20,
    width: 4,
    height: 70,
    backgroundColor: '#00E5FF',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
    backgroundColor: '#f0f0f0',
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
    color: '#333',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  productAvailability: {
    fontSize: 12,
    color: '#777',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  quantityButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#777',
  },
  quantityPlusButton: {
    color: '#8942F5',
  },
  quantityText: {
    paddingHorizontal: 16,
    fontSize: 16,
    fontWeight: '500',
  },
  expandButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    alignSelf: 'center',
  },
  detailsSection: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 100,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  detailItem: {
    marginBottom: 12,
  },
  detailText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  highlightedText: {
    color: '#8942F5',
    fontWeight: '600',
  },
  detailLabel: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  paymentMethodsContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  paymentMethod: {
    width: 40,
    height: 24,
    borderRadius: 4,
    marginRight: 8,
  },
  storeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  storeText: {
    fontSize: 14,
    color: '#333',
  },
  storeLogo: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  skuText: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(245, 245, 245, 0.95)',
  },
  payButton: {
    backgroundColor: '#1B1B1B',
    borderRadius: 4,
    paddingVertical: 16,
    alignItems: 'center',
  },
  payButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});