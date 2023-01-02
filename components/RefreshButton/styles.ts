import { Colors } from "lib/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  refreshButton: {
    backgroundColor: Colors.black,
    padding: 10,
    borderRadius: 15,
    opacity: 0.6,
    position: "absolute",
    zIndex: 1,
    alignSelf: "center",
  },
});

export default styles;
