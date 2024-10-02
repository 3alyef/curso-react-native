import { StyleSheet } from "react-native";
import { H } from "../../../constants/window.constants";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: H / 1.5,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  containerBtn: {
    alignItems: "center",
    justifyContent: "center",
  },
  activateBtn: {
    padding: 5,
    backgroundColor: "gray",
    width: 250,
    borderRadius: 4,
  },
  textBtn: {
    fontSize: 25,
    textAlign: "center",
  },
});
