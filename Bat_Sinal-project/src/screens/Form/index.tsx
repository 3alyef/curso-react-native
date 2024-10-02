import { batLogo } from "../../../assets/images";
import React, { useState } from "react";
import { Image, View } from "react-native";
import { CustomInputForm } from "../../components/index";
import { styles } from "./styles/form.style";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../navigation/types/StackTypes";
import CustomButtonForm from "../../components/CustomButtonForm";

export default function Form() {
  const navigation = useNavigation<StackTypes>();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [obs, setObs] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={batLogo} alt="Bat Logo" style={styles.imageLogo} />
      </View>
      <View style={styles.formContainer}>
        <CustomInputForm
          onChangeText={(text) => setName(text)}
          placeHolder="Nome"
          autoComplete="cc-name"
        />
        <CustomInputForm
          onChangeText={(text) => setPhone(text)}
          placeHolder="Telefone"
          autoComplete="tel-device"
        />
        <CustomInputForm
          onChangeText={(text) => setObs(text)}
          placeHolder="Observação"
        />
      </View>

      <CustomButtonForm
        onPress={() => {
          console.log("Enviar");
          navigation.navigate("Home");
        }}
        btnText="Enviar"
      />
    </View>
  );
}
