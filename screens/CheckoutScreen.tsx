import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';

export default function CheckoutScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.diamond}>
          <Ionicons name="diamond-outline" size={20} color="white" />
        </View>
        <Text style={styles.headerTitle}>COMERSIUM</Text>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
      
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
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
      <View style={styles.content}>
        
        {/* Payment Total */}
        <View style={styles.paymentSection}>
          <Text style={styles.paymentTitle}>Pago total</Text>
          <Text style={styles.paymentAmount}>U$ 135.00</Text>
          <View style={styles.securePayment}>
            <Feather name="shield" size={16} color="#00BCD4" />
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
      </View>
      
      {/* Pay Now Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>Pagar ahora</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
  diamond: {
    width: 24,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 2,
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
    padding: 16,
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
    marginTop: 16,
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
  footer: {
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 32 : 16,
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