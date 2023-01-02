import { Platform } from "react-native";
import { StyleSheet } from "react-native";
import { Colors } from "lib/constants";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  inputContainer: {
    alignItems: Platform.OS == "android" ? "flex-end" : "flex-start",
    width: "75%",
    marginBottom: 5,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    color: Colors.white,
    fontSize: 10,
    textTransform: "uppercase",
    lineHeight: 24,
  },
  inputBorderView: {
    borderBottomWidth: 1,
    height: 40,
    alignContent: "flex-start",
    justifyContent: "center",
    borderBottomColor: "red",
    marginBottom: 30,
  },
});

// export styles as default.
export default styles;
