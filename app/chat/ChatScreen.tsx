import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Importar las imágenes de los avatares
import DiamondIcon from '../../assets/images/DiamondICon.png'; // Descomentado para usar el DiamondIcon
import McDonaldAvatar from '../../assets/images/McDonald.png';
import PizzaHutAvatar from '../../assets/images/PizzaHut.png';
import SINSAAvatar from '../../assets/images/SINSA.png';

interface RecentChatItem {
  id: string;
  name: string;
  avatar?: any; // Hacemos el avatar opcional ya que ComersiumAI usará un componente
  lastMessage?: string;
}

// Datos de ejemplo para los chats recientes
const RECENT_CHATS_DATA: RecentChatItem[] = [
  { id: '1', name: 'McDonald\'s', avatar: McDonaldAvatar, lastMessage: '¡Tu pedido está en camino!' },
  { id: '2', name: 'Pizza Hut', avatar: PizzaHutAvatar, lastMessage: 'Oferta especial de hoy.' },
  { id: '3', name: 'SINSA', avatar: SINSAAvatar, lastMessage: 'Consulta sobre tu factura.' },
  { id: '4', name: 'ComersiumAI', lastMessage: '¿En qué puedo ayudarte?' }, // Eliminamos el avatar aquí, se renderizará el componente
  // Puedes añadir más chats recientes aquí
];

export default function ChatScreen() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const renderRecentChatItem = ({ item }: { item: RecentChatItem }) => (
    <TouchableOpacity style={styles.recentChatItem}>
      {item.id === '4' ? ( // Si es el chat de ComersiumAI, renderiza el logo
        <View style={styles.recentChatLogoContainer}>
          <Image
            source={DiamondIcon} // Usamos DiamondIcon aquí
            style={styles.recentChatDiamondIcon} // Nuevo estilo para el tamaño del diamante
            resizeMode="contain"
          />
        </View>
      ) : ( // De lo contrario, renderiza la imagen del avatar
        <Image source={item.avatar} style={styles.recentChatAvatar} />
      )}
      <View style={styles.recentChatTextContent}>
        <Text style={styles.recentChatName}>{item.name}</Text>
        {item.lastMessage && <Text style={styles.recentChatLastMessage} numberOfLines={1}>{item.lastMessage}</Text>}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Header */}
      <View style={styles.header}>
        {/* DiamondIcon en el header a la izquierda */}
        <TouchableOpacity>
          <Image
            source={DiamondIcon}
            style={styles.headerDiamondIcon} // Estilo específico para el DiamondIcon en el header
            resizeMode="contain"
          />
        </TouchableOpacity>
        
        {/* Iconos de usuario y campana a la derecha */}
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.profileIcon}>
            <Ionicons name="person-circle-outline" size={28} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationIcon}>
            <Ionicons name="notifications-outline" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Recent Chats */}
      <View style={styles.recentChatsSection}>
        <FlatList
          data={RECENT_CHATS_DATA}
          renderItem={renderRecentChatItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.recentChatsList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Fondo oscuro principal
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Para espaciar los elementos a los extremos
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#1B1B1B', // Fondo del encabezado
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  headerDiamondIcon: { // Estilo para el DiamondIcon en el header
    width: 30, // Ajusta el tamaño según sea necesario
    height: 30, // Ajusta el tamaño según sea necesario
  },
  headerIcons: { // Nuevo estilo para los iconos de la derecha
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    marginRight: 15,
  },
  notificationIcon: {},
  
  // Estilos para Chats Recientes
  recentChatsSection: {
    flex: 1, // Permite que la sección de chats recientes ocupe todo el espacio restante
    paddingVertical: 10,
    backgroundColor: '#1B1B1B', // Fondo de la sección de chats
  },
  recentChatsList: {
    paddingHorizontal: 16, // Mantener padding horizontal para la lista vertical
    paddingBottom: 10,
  },
  recentChatItem: {
    flexDirection: 'row', // Ahora los elementos están en fila
    alignItems: 'center',
    marginBottom: 15, // Espacio entre elementos verticales (aumentado)
    paddingVertical: 12, // Aumentado el padding vertical
    paddingHorizontal: 15, // Aumentado el padding horizontal
    backgroundColor: '#282828', // Fondo para cada chat reciente
    borderRadius: 12, // Ligeramente más redondeado
  },
  recentChatAvatar: {
    width: 55, // Aumentado el tamaño del avatar
    height: 55, // Aumentado el tamaño del avatar
    borderRadius: 27.5, // Para hacer el avatar redondo
    borderWidth: 2,
    borderColor: '#00E5FF', // Borde de color para los avatares
    marginRight: 15, // Espacio a la derecha del avatar
  },
  recentChatLogoContainer: { // Contenedor para el logo/diamante de ComersiumAI
    width: 55,
    height: 55,
    borderRadius: 27.5,
    borderWidth: 2,
    borderColor: '#00E5FF',
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00E5FF', // Fondo para el logo/diamante, puedes ajustarlo
    overflow: 'hidden', // Asegura que el contenido no se salga del contenedor redondo
  },
  recentChatDiamondIcon: { // Nuevo estilo para el tamaño del DiamondIcon dentro del contenedor
    width: 35, // Ajusta el tamaño del diamante para que se vea bien dentro del círculo
    height: 35,
  },
  recentChatTextContent: {
    flex: 1, // Permite que el contenido de texto ocupe el espacio restante
  },
  recentChatName: {
    fontSize: 16, // Aumentado el tamaño de la fuente
    color: 'white',
    fontWeight: '600',
  },
  recentChatLastMessage: {
    fontSize: 13, // Aumentado el tamaño de la fuente
    color: '#999',
    marginTop: 4, // Ligeramente más espacio
  },
});
