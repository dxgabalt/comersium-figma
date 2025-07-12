// app/(main)/EditUserScreen.tsx
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router'; // Para la navegación
import React from 'react';
import { Image, ImageStyle, ScrollView, StatusBar, StyleSheet, Text, TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
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
  avatarContainer: ViewStyle;
  userInfo: ViewStyle;
  userName: TextStyle;
  userEmail: TextStyle;
  questionIcon: TextStyle;
  subtitle: TextStyle; // Estilo para los subtítulos "Ajustes de Perfil" y "Cambiar Contraseña"
  inputField: TextStyle; // Estilo para los TextInput
  saveButton: ViewStyle;
  saveButtonText: TextStyle;
}

export default function EditUserScreen() {
  // Estados para los campos de usuario
  const [userName, setUserName] = React.useState('Kenner Z');
  const [phoneNumber, setPhoneNumber] = React.useState('+1 809-555-1234');
  const [userEmail, setUserEmail] = React.useState('kener.angulo@global-bds.com');

  // Estados para los campos de contraseña
  const [currentPassword, setCurrentPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');

  const handleSaveProfile = () => {
    console.log('Guardar perfil:', { userName, phoneNumber, userEmail });
    // Aquí iría la lógica para guardar los datos del usuario
  };

  const handleChangePassword = () => {
    console.log('Cambiar contraseña:', { currentPassword, newPassword });
    // Aquí iría la lógica para cambiar la contraseña
    setCurrentPassword(''); // Limpiar campos después de intentar cambiar
    setNewPassword('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Header - Se mantiene igual que ProfileScreen */}
        <View style={styles.header}>
          <Image source={DiamondIcon} style={styles.diamondIcon} resizeMode="contain" />
          <Text style={styles.headerTitle}>COMERSIUM™</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.headerIcon} onPress={() => router.push('/(main)/ProfileScreen')}>
              <Ionicons name="person-circle-outline" size={26} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIcon} onPress={() => console.log('Ir a notificaciones')}>
              <Ionicons name="notifications-outline" size={26} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Sección de Perfil de Usuario (igual que ProfileScreen) */}
        <View style={styles.profileSection}>
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
        </View>

        {/* Subtítulo: Ajustes de Perfil */}
        <Text style={styles.subtitle}>Ajustes de Perfil</Text>

        {/* Campos de Edición de Perfil */}
        <View style={{ marginHorizontal: 20 }}>
          <TextInput
            style={styles.inputField}
            placeholder="Nombre"
            placeholderTextColor="#888"
            value={userName}
            onChangeText={setUserName}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Número de Teléfono"
            placeholderTextColor="#888"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Correo Electrónico"
            placeholderTextColor="#888"
            keyboardType="email-address"
            autoCapitalize="none"
            value={userEmail}
            onChangeText={setUserEmail}
          />

          {/* Botón Guardar Perfil */}
          <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
            <Text style={styles.saveButtonText}>Guardar</Text>
          </TouchableOpacity>
        </View>

        {/* Subtítulo: Cambiar Contraseña */}
        <Text style={[styles.subtitle, { marginTop: 30 }]}>Cambiar Contraseña</Text>

        {/* Campos para Cambiar Contraseña */}
        <View style={{ marginHorizontal: 20 }}>
          <TextInput
            style={styles.inputField}
            placeholder="Contraseña Actual"
            placeholderTextColor="#888"
            secureTextEntry
            value={currentPassword}
            onChangeText={setCurrentPassword}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Nueva Contraseña"
            placeholderTextColor="#888"
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
          />

          {/* Botón Guardar Contraseña */}
          <TouchableOpacity style={styles.saveButton} onPress={handleChangePassword}>
            <Text style={styles.saveButtonText}>Guardar</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Fondo oscuro
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
  },
  avatarContainer: {
    width: 70, 
    height: 70,
    borderRadius: 35,
    backgroundColor: '#1C1C1C',
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
  subtitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 15,
  },
  inputField: {
    backgroundColor: '#1C1C1C',
    color: 'white',
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#00e5ff7c',
  },
  saveButton: {
    backgroundColor: '#00E5FF', // Color del botón "Guardar"
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#121212', // Color de texto oscuro para contraste
    fontSize: 16,
    fontWeight: 'bold',
  },
});