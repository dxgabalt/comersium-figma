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

import DiamondIcon from '../../assets/images/DiamondICon.png';
import McDonaldAvatar from '../../assets/images/McDonald.png';
import PizzaHutAvatar from '../../assets/images/PizzaHut.png';
import SINSAAvatar from '../../assets/images/SINSA.png';

interface RecentChatItem {
  id: string;
  name: string;
  avatar?: any;
  lastMessage?: string;
}

const RECENT_CHATS_DATA: RecentChatItem[] = [
  { id: '1', name: 'McDonald\'s', avatar: McDonaldAvatar, lastMessage: '¡Tu pedido está en camino!' },
  { id: '2', name: 'Pizza Hut', avatar: PizzaHutAvatar, lastMessage: 'Oferta especial de hoy.' },
  { id: '3', name: 'SINSA', avatar: SINSAAvatar, lastMessage: 'Consulta sobre tu factura.' },
  { id: '4', name: 'ComersiumAI', lastMessage: '¿En qué puedo ayudarte?' },
];

export default function ChatScreen() {
  const navigation = useNavigation();

  const renderRecentChatItem = ({ item }: { item: RecentChatItem }) => {
    const handlePress = () => {
      if (item.id === '1') { // McDonald's chat
        navigation.navigate('McdonaldsChat');
      }
      // Aquí podrías añadir más lógica para otros chats si es necesario
    };

    return (
      <TouchableOpacity style={styles.recentChatItem} onPress={handlePress}>
        {item.id === '4' ? (
          <View style={styles.recentChatLogoContainer}>
            <Image
              source={DiamondIcon}
              style={styles.recentChatDiamondIcon}
              resizeMode="contain"
            />
          </View>
        ) : (
          <Image source={item.avatar} style={styles.recentChatAvatar} />
        )}
        <View style={styles.recentChatTextContent}>
          <Text style={styles.recentChatName}>{item.name}</Text>
          {item.lastMessage && <Text style={styles.recentChatLastMessage} numberOfLines={1}>{item.lastMessage}</Text>}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={DiamondIcon}
            style={styles.headerDiamondIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.profileIcon}>
            <Ionicons name="person-circle-outline" size={28} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationIcon}>
            <Ionicons name="notifications-outline" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </View>

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
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#1B1B1B',
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  headerDiamondIcon: {
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

  recentChatsSection: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#1B1B1B',
  },
  recentChatsList: {
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  recentChatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: '#282828',
    borderRadius: 12,
  },
  recentChatAvatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    borderWidth: 2,
    borderColor: '#00E5FF',
    marginRight: 15,
  },
  recentChatLogoContainer: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    borderWidth: 2,
    borderColor: '#00E5FF',
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00E5FF',
    overflow: 'hidden',
  },
  recentChatDiamondIcon: {
    width: 35,
    height: 35,
  },
  recentChatTextContent: {
    flex: 1,
  },
  recentChatName: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  recentChatLastMessage: {
    fontSize: 13,
    color: '#999',
    marginTop: 4,
  },
});