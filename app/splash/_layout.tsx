import { Stack } from "expo-router";
import React from "react";

export default function SplashLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SplashScreen1" />
      <Stack.Screen name="SplashScreen2" />
      <Stack.Screen name="SplashScreen3" />
      <Stack.Screen name="SplashScreen4" />
    </Stack>
  );
}
