import { batLogo } from "../../../assets/images";
import React, { useState } from "react";
import { Image, View } from "react-native";
import { styles } from "./styles/form.style";
import { InputTextForm } from "../../components/index";

export default function Form() {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={batLogo} alt="Bat Logo" style={styles.imageLogo} />
      </View>
      <View style={styles.formContainer}>
        <InputTextForm name={name} setName={setName} placeholder="Name" />
      </View>
    </View>
  );
}
