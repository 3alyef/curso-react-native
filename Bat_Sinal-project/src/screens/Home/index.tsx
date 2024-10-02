import { batLogo } from "../../../assets/images";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View } from "react-native";
import { StackTypes } from "src/navigation/types/StackTypes";
import { styles } from "./styles/home.style";
import CustomButtonForm from "../../components/CustomButtonForm";

export default function Home() {
  const navigation = useNavigation<StackTypes>();
  return (
    <>
      <View style={styles.container}>
        <Image source={batLogo} style={styles.image} alt="Bat Logo" />
      </View>
      <CustomButtonForm
        onPress={() => navigation.navigate("Form")}
        btnText="Activate Bat Signal"
      />
    </>
  );
}
