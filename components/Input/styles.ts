import Fonts from "lib/constants/Fonts";
import { Platform } from "react-native";
import { StyleSheet } from "react-native";
import { Colors, commonStyles } from "lib/constants";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  inputContainer: {
    alignItems: Platform.OS == "android" ? "flex-end" : "flex-start",
    width: "100%",
    marginBottom: 5,
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  label: {
    fontFamily: Fonts.book,
    fontSize: 14,
    ...commonStyles.crossTextAlign,
  },
  input: {
    borderRadius: 20,
    paddingTop: 19,
    paddingHorizontal: 10,
    borderBottomWidth: 0,
    paddingBottom: 21,
    width: "100%",
    backgroundColor: Colors.light_gray,
    alignItems: "center",
    flexDirection: "row",
    fontFamily: Fonts.book,
    fontSize: 18,
    justifyContent: "center",
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
