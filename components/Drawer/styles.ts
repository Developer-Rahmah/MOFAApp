import { Colors, Fonts } from "lib/constants";
import { Platform, StyleSheet } from "react-native";

// constants.
const semiCircleSize = 400;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    paddingTop: 112,
  },
  menuContainer: {
    // flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.primaryColor,
  },
  menuItemsCard: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  menuWrapper: {
    backgroundColor: Colors.primaryColor,
    alignItems: "flex-start",
    paddingStart: Platform.OS === "ios" ? 32 : 0,
    start: Platform.OS === "android" ? 32 : 0,
  },
  menuTxt: {
    color: Colors.white,
    marginBottom: 50,
    fontFamily: Fonts.Almarai700,
    top: -4,

    fontSize: 18,
    paddingStart: Platform.OS === "ios" ? 12 : 0,
    start: Platform.OS === "android" ? 12 : 0,
  },
  menuItemTxt: {
    color: Colors.white,
    marginBottom: 16,
    fontSize: 16,
    paddingStart: Platform.OS === "ios" ? 12 : 0,
    paddingRight: Platform.OS === "android" ? 12 : 0,
  },
  divider: {
    width: "80%",
    height: 0.75,
    backgroundColor: Colors.white,
    marginBottom: 16,
  },
  footerContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});

// export styles as default.
export default styles;
