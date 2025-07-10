// app/_layout.tsx
import { useColorScheme } from '@/hooks/useColorScheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [appReady, setAppReady] = useState(false);
  const [initialSegment, setInitialSegment] = useState<string | null>(null);

  useEffect(() => {
    async function prepareApp() {
      try {
        if (!loaded) return;
        const onboardingCompleted = await AsyncStorage.getItem('onboardingCompleted');

        if (onboardingCompleted === 'true') {
          // Si el onboarding está completo, normalmente iríamos a (main)
          // Pero como no existe, por ahora vamos a 'info' o 'onboarding' para pruebas
          setInitialSegment('info'); // O 'info' si quieres empezar desde ahí siempre
        } else {
          // Si el onboarding NO está completo, vamos al flujo de información inicial
          setInitialSegment('info');
        }

      } catch (e) {
        console.warn(e);
      } finally {
        setAppReady(true);
        SplashScreen.hideAsync();
      }
    }

    if (loaded) {
      prepareApp();
    }
  }, [loaded]);

  if (!loaded || !appReady) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={initialSegment || 'info'} 
      >
        <Stack.Screen name="info"/>           
        <Stack.Screen name="onboarding"/>     
        <Stack.Screen name="auth"/>           
        <Stack.Screen name="chat"/>           
        <Stack.Screen name="subscription"/>   
        <Stack.Screen name="(main)"/>       
         <Stack.Screen name="+not-found"/>
      </Stack>
      <StatusBar />
    </ThemeProvider>
  );
}