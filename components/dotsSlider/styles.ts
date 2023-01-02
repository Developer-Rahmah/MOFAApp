import { Colors } from "lib/constants";
import { StyleSheet } from "react-native";

// constants.
const size = 8;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -120,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  dotItem: {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: Colors.secondaryColor,
    marginRight: 4,
  },
  selectedDotItem: {
    backgroundColor: Colors.primaryColor,
  },
});

export default styles;
