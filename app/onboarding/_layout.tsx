// app/onboarding/_layout.tsx
import { Stack } from "expo-router";
import React from "react";

export default function OnboardingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Oculta el encabezado para toda esta sección
      }}
    >
      <Stack.Screen name="OnboardingFlowScreen" />
    
    </Stack>
  );
}