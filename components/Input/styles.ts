import Fonts from "lib/constants/Fonts";
import { Platform } from "react-native";
import { StyleSheet } from "react-native";
import { Colors, commonStyles, getCrossElevation } from "lib/constants";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  inputContainer: {
    alignItems: Platform.OS == "android" ? "flex-end" : "flex-start",
    width: "100%",
    marginBottom: 10,
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  label: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    start: 10,

    ...commonStyles.crossTextAlign,
  },
  input: {
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    // paddingBottom: 21,
    width: "100%",
    borderColor: Colors.light_gray,
    alignItems: "flex-start",
    flexDirection: "row",
    fontFamily: Fonts.regular,
    alignSelf: "flex-start",
    fontSize: 16,

    justifyContent: "center",
    // ...getCrossElevation(7),
  },
  error: {
    marginTop: -9,
    marginLeft: 12,
    fontSize: 14,
    color: Colors.monza,
    fontFamily: Fonts.book,
  },
  marginBottom: {
    marginBottom: 16,
  },
});

// export styles as default.
export default styles;
