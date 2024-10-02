import React from "react";
import { AppNavigator } from "./navigation/AppNavigator";
import { Keyboard, Pressable, SafeAreaView, StatusBar } from "react-native";

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#155c58" />
      <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
        <AppNavigator />
      </Pressable>
    </SafeAreaView>
  );
}
