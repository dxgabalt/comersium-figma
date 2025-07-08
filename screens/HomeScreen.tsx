import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Bienvenido a Comersium</Text>
        <Text style={styles.subtitle}>Tu plataforma de compras</Text>
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Checkout')}
        >
          <Text style={styles.buttonText}>Ver checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#1B1B1B',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});