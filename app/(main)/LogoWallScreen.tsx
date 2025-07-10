import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useMemo, useState } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ComersiumLogo from "../../components/ComersiumLogo";
import ComersiumText from "../../components/ComersiumText";

const { width, height } = Dimensions.get("window");
const LOGO_SIZE = 80;
const PADDING = 20; // Espacio mínimo entre logos y bordes
const MIN_DISTANCE_BETWEEN_LOGOS = LOGO_SIZE * 0.8; // Distancia mínima para evitar colisiones

interface Logo {
  id: string;
  name: string;
  image: string;
  initialPosition: { x: number; y: number }; // Posición inicial estática
  animatedScale: Animated.Value; // Para la animación de agrandar/achicar
  animatedOpacity: Animated.Value; // Para el efecto de desenfoque/atenuación
}

const LOGOS_DATA = [
  {
    id: "1",
    name: "Starbucks",
    image: "https://api.a0.dev/assets/image?text=Starbucks&aspect=1:1",
  },
  {
    id: "2",
    name: "McDonalds",
    image: "https://api.a0.dev/assets/image?text=McDonalds&aspect=1:1",
  },
  {
    id: "3",
    name: "Adidas",
    image: "https://api.a0.dev/assets/image?text=Adidas&aspect=1:1",
  },
  {
    id: "4",
    name: "Nike",
    image: "https://api.a0.dev/assets/image?text=Nike&aspect=1:1",
  },
  {
    id: "5",
    name: "Apple",
    image: "https://api.a0.dev/assets/image?text=Apple&aspect=1:1",
  },
  {
    id: "6",
    name: "Samsung",
    image: "https://api.a0.dev/assets/image?text=Samsung&aspect=1:1",
  },
  {
    id: "7",
    name: "Coca-Cola",
    image: "https://api.a0.dev/assets/image?text=CocaCola&aspect=1:1",
  },
  {
    id: "8",
    name: "Pepsi",
    image: "https://api.a0.dev/assets/image?text=Pepsi&aspect=1:1",
  },
  {
    id: "9",
    name: "Chupa Chups",
    image: "https://api.a0.dev/assets/image?text=ChupaChups&aspect=1:1",
  },
  {
    id: "10",
    name: "Sherpa",
    image: "https://api.a0.dev/assets/image?text=Sherpa&aspect=1:1",
  },
];

export default function LogoWallScreen() {
  const navigation = useNavigation();
  const [selectedLogoId, setSelectedLogoId] = useState<string | null>(null);

  const logos: Logo[] = useMemo(() => {
    const headerFixedApproxHeight = 100;
    const bottomNavBarFixedHeight = 70;

    const availableWidth = width - PADDING * 2;
    const availableHeightForLogos = height - headerFixedApproxHeight - bottomNavBarFixedHeight - PADDING * 2;

    const placedLogos: Logo[] = [];

    LOGOS_DATA.forEach((logoData) => {
      let attempts = 0;
      let newX, newY;
      let collided;

      do {
        collided = false;
        newX = PADDING + Math.random() * (availableWidth - LOGO_SIZE);
        newY = PADDING + Math.random() * (availableHeightForLogos - LOGO_SIZE);

        for (const placedLogo of placedLogos) {
          const distanceX = Math.abs(newX - placedLogo.initialPosition.x);
          const distanceY = Math.abs(newY - placedLogo.initialPosition.y);
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

          if (distance < MIN_DISTANCE_BETWEEN_LOGOS) {
            collided = true;
            break;
          }
        }
        attempts++;
      } while (collided && attempts < 1000); // Límite de intentos para evitar bucles infinitos

      placedLogos.push({
        ...logoData,
        initialPosition: { x: newX, y: newY },
        animatedScale: new Animated.Value(1),
        animatedOpacity: new Animated.Value(1),
      });
    });

    return placedLogos;
  }, []);

  const handleLogoPress = (logo: Logo) => {
    if (selectedLogoId === logo.id) {
      // Si se hace clic en el mismo logo, lo deseleccionamos
      setSelectedLogoId(null);
      Animated.parallel([
        Animated.timing(logo.animatedScale, {
          toValue: 1,
          duration: 300,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        ...logos
          .filter((l) => l.id !== logo.id)
          .map((l) =>
            Animated.timing(l.animatedOpacity, {
              toValue: 1,
              duration: 300,
              easing: Easing.out(Easing.cubic),
              useNativeDriver: true,
            })
          ),
      ]).start();
    } else {
      // Seleccionamos un nuevo logo
      setSelectedLogoId(logo.id);
      Animated.parallel([
        Animated.timing(logo.animatedScale, {
          toValue: 1.8, // Escala para agrandar
          duration: 300,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        ...logos
          .filter((l) => l.id !== logo.id)
          .map((l) =>
            Animated.timing(l.animatedOpacity, {
              toValue: 0.3, // Opacidad para desenfocar el resto
              duration: 300,
              easing: Easing.out(Easing.cubic),
              useNativeDriver: true,
            })
          ),
      ]).start();
    }
    // Navegación (puedes mantenerla si es deseado)
    if (logo.name === "McDonalds") {
      // navigation.navigate("McdonaldsChat" as never);
    }
  };

  const renderLogo = (logo: Logo) => {
    const isSelected = selectedLogoId === logo.id;

    return (
      <Animated.View
        key={logo.id}
        style={[
          styles.logoContainer,
          {
            left: logo.initialPosition.x,
            top: logo.initialPosition.y,
            transform: [{ scale: logo.animatedScale }],
            opacity: logo.animatedOpacity,
            zIndex: isSelected ? 100 : 1, // El logo seleccionado encima del resto
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => handleLogoPress(logo)}
          style={styles.logoTouchable}
          activeOpacity={0.8}
        >
          <View style={styles.logoCircle}>
            <Image
              source={{ uri: logo.image }}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <ComersiumLogo size="small" color="white" />
        <ComersiumText size="small" color="white" />
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.profileIcon}>
            <Ionicons name="person-circle-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationIcon}>
            <Ionicons name="notifications-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.logoWallContainer}>
        {logos.map(renderLogo)}

        {selectedLogoId && (
          <TouchableOpacity
            style={styles.overlay}
            activeOpacity={1}
            onPress={() => setSelectedLogoId(null)} // Deseleccionar al hacer clic fuera
          />
        )}
      </View>

      <View style={styles.bottomNavBar}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Home" as never)}
        >
          <Ionicons name="home-outline" size={24} color="#777" />
          <Text style={styles.navText}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("McdonaldsChat" as never)}
        >
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: "#1B1B1B",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileIcon: {
    marginRight: 15,
  },
  notificationIcon: {},
  logoWallContainer: {
    flex: 1,
    position: "relative",
    overflow: "hidden",
  },
  logoContainer: {
    position: "absolute",
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    justifyContent: "center",
    alignItems: "center",
  },
  logoTouchable: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logoCircle: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    borderRadius: LOGO_SIZE / 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  logoImage: {
    width: "80%",
    height: "80%",
    borderRadius: LOGO_SIZE / 2, // Para que la imagen también se recorte en círculo
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.7)", // Fondo semitransparente oscuro
    zIndex: 99, // Debe estar por debajo del logo seleccionado pero encima de los otros
  },
  bottomNavBar: {
    flexDirection: "row",
    backgroundColor: "#1B1B1B",
    height: 70,
    borderTopWidth: 1,
    borderTopColor: "#333",
    paddingHorizontal: 10,
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