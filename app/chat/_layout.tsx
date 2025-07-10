import { Stack } from 'expo-router';
import React from 'react';

export default function ChatLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name='ChatScreen'/>
      <Stack.Screen name='McdonaldsChat'/>
    </Stack>
  );
}