// app/info/_layout.tsx
import { Stack } from "expo-router";
import React from "react";

export default function InfoLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="InfoFlowScreen" />
    </Stack>
  );
}