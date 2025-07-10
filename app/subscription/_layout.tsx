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

    </Stack>
  );
}
