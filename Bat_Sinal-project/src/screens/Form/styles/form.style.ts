import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingRight: 40,
    paddingLeft: 40,
    flex: 1,
    gap: 100,
    justifyContent: "center",
  },
  containerLogo: {
    paddingTop: 15,
  },
  imageLogo: {
    height: 55,
    aspectRatio: 1 / 1,
    resizeMode: "contain",
  },
  formContainer: {
    flexDirection: "column",
    gap: 5,
  },
});
