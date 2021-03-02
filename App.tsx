import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthProvider from "./src/contexts/AuthContext";
import RootNavigator from "./src/navigation";

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </AuthProvider>
  );
}
