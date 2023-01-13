import {
  Colors,
  commonStyles,
  Fonts,
  getCrossElevation,
  Layout,
} from "lib/constants";
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width: "100%",
    backgroundColor: "transparent",
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 25,
    // alignItems: "center",
    ...getCrossElevation(15, 0.53, 5),
    width: "89%",
  },
  label: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    marginBottom: 7,
    color: Colors.primaryColor,
    ...commonStyles.crossTextAlign,
  },
});

export default styles;
