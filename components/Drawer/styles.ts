import { Colors, Fonts } from "lib/constants";
import { StyleSheet } from "react-native";

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
    flex: 1,
    backgroundColor: Colors.primaryColor,
    paddingStart: 32,
  },
  menuTxt: {
    color: Colors.white,
    marginBottom: 50,
    fontFamily: Fonts.Almarai700,
    start: 12,
    fontSize: 18,
  },
  menuItemTxt: {
    color: Colors.white,
    marginBottom: 16,
    fontSize: 16,
    paddingStart: 12,
  },
  divider: {
    width: "85%",
    height: 1,
    backgroundColor: Colors.white,
    marginBottom: 16,
  },
});

// export styles as default.
export default styles;
