import { Colors, Layout } from "lib/constants";
import fonts from "lib/constants/Fonts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: Colors.white,

    padding: 10,
  },
  secWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  stepWrapper: {
    flex: 1,
    height: 1,
    opacity: 1,
  },
  step: {
    paddingTop: 5,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  nextWrapper: {
    width: "100%",
    top: -30,
    justifyContent: "flex-end",
  },
});

export default styles;
