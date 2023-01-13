import { Colors, Fonts } from "lib/constants";
import { Platform, StyleSheet } from "react-native";

// constants.
const semiCircleSize = 400;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 24,
    backgroundColor: Colors.white,
    alignItems: "center",
  },

  map: {
    width: "100%",
    height: "100%",
  },
  firstSliderContainer: {
    flexDirection: "row",
    backgroundColor: Colors.primaryColor,
    width: "100%",
    // height: "60%",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 12,
    alignItems: "center",
    justifyContent: "flex-start",
    bottom: 0,
    // position: "absolute",
  },
  nameSliderTxt: {
    fontFamily: Fonts.Almarai700,
    paddingStart: Platform.OS === "ios" ? 12 : 0,
    paddingRight: Platform.OS === "android" ? 12 : 0,
    fontSize: 18,
    color: Colors.white,
  },
  passportIDTxt: {
    fontFamily: Fonts.regular,
    paddingStart: Platform.OS === "ios" ? 12 : 0,
    paddingRight: Platform.OS === "android" ? 12 : 0,
    fontSize: 16,
    paddingVertical: 8,
    color: Colors.white,
  },
  idSliderTxt: {
    fontFamily: Fonts.regular,
    paddingStart: Platform.OS === "ios" ? 12 : 0,
    paddingRight: Platform.OS === "android" ? 12 : 0,
    fontSize: 16,
    color: Colors.white,
  },
  iconContainer: {
    width: 32,
    height: 32,
    marginEnd: 12,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  iconsContainer: {
    margin: 8,
    borderRadius: 8,
    alignItems: "center",
    // width: "50%",
    flexDirection: "row",
    // justifyContent: "space-around",
  },
  avigationBtnContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 15,
    backgroundColor: Colors.white,
  },
});

// export styles as default.
export default styles;
