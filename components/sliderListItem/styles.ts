import { Colors, Layout } from "lib/constants";
import fonts from "lib/constants/Fonts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    width: Layout.window.width,
    paddingLeft: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    borderColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 220,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    width: 220,
  },
  content: {
    margin: 16,
    color: Colors.black,
    fontSize: 16,
    fontFamily: fonts.bold,
  },
  desc: {
    margin: 16,
    color: Colors.primaryColor,
    fontSize: 24,
    fontFamily: fonts.bold,
    textAlign: "center",
  },
});

export default styles;
