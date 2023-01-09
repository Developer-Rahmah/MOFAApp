import { Colors, Fonts } from "lib/constants";
import { StyleSheet } from "react-native";

// constants.
const semiCircleSize = 400;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: Colors.white,
    paddingTop: 77,
    alignItems: "center",
  },

  headerListTxt: {
    fontSize: 16,
    alignItems: "center",
    color: Colors.black,
    fontFamily: Fonts.Almarai700,
    padding: 10,
  },
});

// export styles as default.
export default styles;
