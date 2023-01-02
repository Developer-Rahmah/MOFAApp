import { Colors, commonStyles } from "lib/constants";
import { StyleSheet } from "react-native";
const internalTabHolderSize = 70;

const circleSize = 10;
const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingBottom: 23,
    justifyContent: "space-evenly",
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    ...commonStyles.cossRowDirection,
  },
  internalTabbarBtnStyle: {
    width: internalTabHolderSize,
    height: internalTabHolderSize,
    // borderRadius: internalTabHolderSize / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    height: circleSize,
    width: circleSize,
    borderRadius: circleSize / 2,
    backgroundColor: Colors.cornflowerBlue,
    alignSelf: "center",
    position: "absolute",
    bottom: 8,
  },
  label: {
    color: Colors.black,
    fontSize: 12,
  },
});

// export styles as default.
export default styles;
