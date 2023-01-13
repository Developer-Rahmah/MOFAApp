import {
  Colors,
  commonStyles,
  Fonts,
  getCrossElevation,
  Layout,
} from "lib/constants";
import fonts from "lib/constants/Fonts";
import { Platform, StyleSheet } from "react-native";

// constants.
const semiCircleSize = 400;

const styles = StyleSheet.create({
  borderGradient: {
    borderRadius: 20,
    width: "100%",
  },
  grayGradient: {
    paddingBottom: 15,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    width: "100%",
  },
  appleContainer: {
    borderRadius: 20,
    marginBottom: -5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: 3,
  },
  takePhotoContainer: {
    margin: 1,
    backgroundColor: Colors.white,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  uploadFormalTxt: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    marginVertical: 10,
  },
});

// export styles as default.
export default styles;
