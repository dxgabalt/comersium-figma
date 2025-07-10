// (suscriptions)/_layout.tsx
import { Stack } from "expo-router";
import React from "react";

export default function SubscriptionLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SubscriptionPlansScreen" />
      <Stack.Screen name="PlanDetailsBasicScreen" />
      <Stack.Screen name="PlanDetailsStandardScreen" />
      <Stack.Screen name="PlanDetailsPremiumScreen" />
    </Stack>
  );
}