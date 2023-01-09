import { Colors, Fonts } from "lib/constants";
import { StyleSheet } from "react-native";

// constants.
const semiCircleSize = 400;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 24,
    backgroundColor: Colors.white,
    paddingTop: 77,
    alignItems: "center",
  },

  map: {
    width: "100%",
    height: "100%",
  },
});

// export styles as default.
export default styles;
