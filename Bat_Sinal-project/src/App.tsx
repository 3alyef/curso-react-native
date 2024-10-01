import React from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import { Navigation } from "./Navigation";

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Shalom</Text>
      <Navigation />
    </SafeAreaView>
  );
}
