import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Toaster } from 'sonner-native';

// Splash screens
import SplashScreen1 from "./screens/splash/SplashScreen1";
import SplashScreen2 from "./screens/splash/SplashScreen2";
import SplashScreen3 from "./screens/splash/SplashScreen3";
import SplashScreen4 from "./screens/splash/SplashScreen4";

// Onboarding screens
import OnboardingScreen1 from "./screens/onboarding/OnboardingScreen1";
import OnboardingScreen2 from "./screens/onboarding/OnboardingScreen2";
import OnboardingScreen3 from "./screens/onboarding/OnboardingScreen3";
import OnboardingScreen4 from "./screens/onboarding/OnboardingScreen4";

// Auth screens
import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import PrivacyPolicyScreen from "./screens/auth/PrivacyPolicyScreen";

// Info screens
import WhatIsComersiumScreen from "./screens/info/WhatIsComersiumScreen";
import ForUsersScreen from "./screens/info/ForUsersScreen";
import ForMerchantsScreen from "./screens/info/ForMerchantsScreen";
import UserBenefitsScreen from "./screens/info/UserBenefitsScreen";
import ComersiumOptionsScreen from "./screens/info/ComersiumOptionsScreen";
import LogoWallInfoScreen from "./screens/info/LogoWallInfoScreen";
import ComUserScreen from "./screens/info/ComUserScreen";
import ComNetScreen from "./screens/info/ComNetScreen";
import AIScreen from "./screens/info/AIScreen";

// Main screens
import CategoriesScreen from "./screens/main/CategoriesScreen";
import LogoWallScreen from "./screens/main/LogoWallScreen";
import HomeScreen from "./screens/main/HomeScreen";
import CheckoutScreen from "./screens/main/CheckoutScreen";

// Chat screens
import ChatScreen from "./screens/chat/ChatScreen";
import McdonaldsChat from "./screens/chat/McdonaldsChat";

// Subscription screens
import SubscriptionPlansScreen from "./screens/subscription/SubscriptionPlansScreen";

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} initialRouteName="Splash1">
      {/* Splash Screens */}
      <Stack.Screen name="Splash1" component={SplashScreen1} />
      <Stack.Screen name="Splash2" component={SplashScreen2} />
      <Stack.Screen name="Splash3" component={SplashScreen3} />
      <Stack.Screen name="Splash4" component={SplashScreen4} />
      
      {/* Onboarding Screens */}
      <Stack.Screen name="Onboarding1" component={OnboardingScreen1} />
      <Stack.Screen name="Onboarding2" component={OnboardingScreen2} />
      <Stack.Screen name="Onboarding3" component={OnboardingScreen3} />
      <Stack.Screen name="Onboarding4" component={OnboardingScreen4} />
      
      {/* Auth Screens */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      
      {/* Info Screens */}
      <Stack.Screen name="WhatIsComersium" component={WhatIsComersiumScreen} />
      <Stack.Screen name="ForUsers" component={ForUsersScreen} />
      <Stack.Screen name="ForMerchants" component={ForMerchantsScreen} />
      <Stack.Screen name="UserBenefits" component={UserBenefitsScreen} />
      <Stack.Screen name="ComersiumOptions" component={ComersiumOptionsScreen} />
      <Stack.Screen name="LogoWallInfo" component={LogoWallInfoScreen} />
      <Stack.Screen name="ComUser" component={ComUserScreen} />
      <Stack.Screen name="ComNet" component={ComNetScreen} />
      <Stack.Screen name="AI" component={AIScreen} />
      
      {/* Main Screens */}
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="LogoWall" component={LogoWallScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      
      {/* Chat Screens */}
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="McdonaldsChat" component={McdonaldsChat} />
      
      {/* Subscription Screens */}
      <Stack.Screen name="SubscriptionPlans" component={SubscriptionPlansScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Toaster />
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    userSelect: "none"
  }
});