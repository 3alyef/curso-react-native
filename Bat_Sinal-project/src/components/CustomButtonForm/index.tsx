import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles/styles";

interface PropsCustomButtonForm {
  onPress: (event: GestureResponderEvent) => void;
  btnText: string;
}
export default function CustomButtonForm({
  btnText,
  onPress,
}: PropsCustomButtonForm) {
  return (
    <View style={styles.containerBtn}>
      <TouchableOpacity
        style={styles.activateBtn}
        activeOpacity={0.7}
        onPress={onPress}
      >
        <Text style={styles.textBtn}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
}
