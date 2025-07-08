import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import ComersiumLogo from '../../components/ComersiumLogo';
import ComersiumText from '../../components/ComersiumText';
import Button from '../../components/Button';
import Header from '../../components/Header';

export default function PrivacyPolicyScreen() {
  const navigation = useNavigation();

  const handleAccept = () => {
    navigation.navigate('Categories' as never);
  };

  return (
    <LinearGradient
      colors={['#121212', '#1E1E1E']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <ComersiumLogo size="small" color="white" />
        <ComersiumText size="small" color="white" />
        <View style={styles.headerIcons}>
          <View style={styles.profileIcon} />
          <View style={styles.notificationIcon} />
        </View>
      </View>
      
      {/* Título */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Política de privacidad</Text>
      </View>
      
      {/* Contenido */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.paragraph}>
          En [Nombre de tu empresa o sitio], valoramos y protegemos la privacidad de nuestros usuarios. Toda la información personal que recopilamos —como nombre, correo electrónico o datos de navegación— se utiliza exclusivamente para brindar una mejor experiencia, ofrecer soporte personalizado y mantenerte informado sobre nuestros servicios. No compartimos, vendemos ni alquilamos tu información a terceros sin tu consentimiento expreso.
        </Text>
        
        <Text style={styles.paragraph}>
          Al utilizar nuestro sitio o servicios, aceptas los términos de esta política. Implementamos medidas de seguridad técnicas y administrativas para proteger tus datos frente a accesos no autorizados. Nos reservamos el derecho de actualizar esta política en cualquier momento, y notificaremos los cambios relevantes a través de nuestros canales oficiales.
        </Text>
        
        <Text style={styles.paragraph}>
          Recopilamos información cuando te registras en nuestro sitio, realizas una compra, participas en una encuesta o interactúas con nuestras comunicaciones. Esta información puede incluir tu nombre, dirección de correo electrónico, número de teléfono, dirección de facturación y detalles de pago.
        </Text>
        
        <Text style={styles.paragraph}>
          Utilizamos cookies y tecnologías similares para mejorar tu experiencia, analizar el tráfico y personalizar el contenido. Puedes configurar tu navegador para rechazar todas las cookies o para que te avise cuando se envía una cookie.
        </Text>
        
        <Text style={styles.paragraph}>
          Nos comprometemos a proteger la privacidad de los niños. Nuestro sitio no está diseñado para personas menores de 13 años y no recopilamos intencionalmente información de niños menores de 13 años.
        </Text>
        
        <Text style={styles.paragraph}>
          Si tienes preguntas sobre esta política de privacidad, puedes contactarnos a través de [correo electrónico de contacto] o [número de teléfono].
        </Text>
        
        <View style={styles.buttonContainer}>
          <Button 
            title="Aceptar" 
            onPress={handleAccept} 
            variant="primary" 
            style={styles.button}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#555',
    marginRight: 10,
  },
  notificationIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#555',
  },
  titleContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  paragraph: {
    fontSize: 16,
    color: '#DDD',
    marginBottom: 20,
    lineHeight: 24,
  },
  buttonContainer: {
    marginVertical: 30,
  },
  button: {
    borderRadius: 30,
    paddingVertical: 15,
  },
});