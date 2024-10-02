import { TextInput } from "react-native";
import { styles } from "./styles";
import React from "react";
import { isRTL } from "../../constants/window.constants";

interface PropsIptTextForm {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  placeTextColor?: string;
}
export default function InputTextForm({
  name,
  setName,
  placeholder,
  placeTextColor,
}: PropsIptTextForm) {
  return (
    <>
      <TextInput
        style={[
          styles.InputText,
          {
            paddingLeft: isRTL ? 0 : 10,
            paddingRight: isRTL ? 10 : 0,
          },
        ]}
        onChangeText={setName}
        value={name}
        placeholder={placeholder}
        placeholderTextColor={placeTextColor || "gray"}
      />
    </>
  );
}
