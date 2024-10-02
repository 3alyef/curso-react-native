import { batLogo } from "../../../assets/images";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { StackTypes } from "src/navigation/types/StackTypes";
import { styles } from "./styles/home.style";

export default function Home() {
  const navigation = useNavigation<StackTypes>();
  return (
    <>
      <View style={styles.container}>
        <Image source={batLogo} style={styles.image} alt="Bat Logo" />
      </View>
      <View style={styles.containerBtn}>
        <TouchableOpacity
          style={styles.activateBtn}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Form")}
        >
          <Text style={styles.textBtn}>Activate Bat Signal</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
