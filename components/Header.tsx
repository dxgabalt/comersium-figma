import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ComersiumLogo from './ComersiumLogo';
import ComersiumText from './ComersiumText';

interface HeaderProps {
  showSearch?: boolean;
  showBack?: boolean;
  showProfile?: boolean;
  showNotifications?: boolean;
  onBackPress?: () => void;
  onSearchPress?: () => void;
  onProfilePress?: () => void;
  onNotificationsPress?: () => void;
}

export default function Header({
  showSearch = true,
  showBack = false,
  showProfile = false,
  showNotifications = false,
  onBackPress,
  onSearchPress,
  onProfilePress,
  onNotificationsPress,
}: HeaderProps) {
  return (
    <View style={styles.header}>
      {/* Lado izquierdo */}
      <View style={styles.leftContainer}>
        {showBack ? (
          <TouchableOpacity onPress={onBackPress} style={styles.iconButton}>
            <Ionicons name="arrow-back-outline" size={24} color="white" />
          </TouchableOpacity>
        ) : (
          <ComersiumLogo size="small" color="white" />
        )}
      </View>

      {/* Centro - Logo y texto */}
      <View style={styles.centerContainer}>
        <ComersiumText size="small" color="white" />
      </View>

      {/* Lado derecho */}
      <View style={styles.rightContainer}>
        {showSearch && (
          <TouchableOpacity onPress={onSearchPress} style={styles.iconButton}>
            <Ionicons name="search" size={24} color="white" />
          </TouchableOpacity>
        )}
        
        {showProfile && (
          <TouchableOpacity onPress={onProfilePress} style={styles.profileButton}>
            <Ionicons name="person-circle-outline" size={24} color="white" />
          </TouchableOpacity>
        )}
        
        {showNotifications && (
          <TouchableOpacity onPress={onNotificationsPress} style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#1B1B1B',
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  centerContainer: {
    flex: 2,
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconButton: {
    padding: 4,
  },
  profileButton: {
    marginLeft: 8,
    padding: 4,
  },
});