import { Stack } from "expo-router";
import React from "react";

export default function MainLayout() {
  
  return (

    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
        <Stack.Screen name="HomeScreen"/>           
        <Stack.Screen name="CategoriesScreen"/>     
        <Stack.Screen name="CheckoutScreen"/>           
        <Stack.Screen name="LogoWallScreen"/>    
        <Stack.Screen name="McDonaldsDetails"/>   
        <Stack.Screen name="McDonaldsInfo"/> 
        <Stack.Screen name="ProfileScreen"/>
        <Stack.Screen name="EditUser"/>            
     
      </Stack>


  );
}