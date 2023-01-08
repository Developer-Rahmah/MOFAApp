import { Platform, StyleSheet } from "react-native";
import { Colors } from "./Colors";

const commonStyles = StyleSheet.create({
  flex: { flex: 1 },
  nonFlex: { flex: 0 },
  flexCenter: { flex: 1, justifyContent: "center", alignItems: "center" },
  // paddings
  paddingH16: { paddingHorizontal: 16 },
  paddingB16: { paddingBottom: 16 },
  // margins
  marginR10: { marginRight: 10 },
  marginR8: { marginRight: 8 },
  marginL8: { marginLeft: 8 },
  marginL16: { marginLeft: 16 },
  marginR16: { marginRight: 16 },
  marginT16: { marginTop: 16 },
  marginT24: { marginTop: 24 },
  marginT8: { marginTop: 8 },
  marginH8: {
    marginHorizontal: 8,
  },
  paddingR8: { paddingRight: 8 },
  paddingR10: { paddingRight: 10 },
  // colors.
  whiteColor: { color: Colors.white },
  whiteBackgroundColor: { backgroundColor: Colors.white },
  // display
  dispalyNone: { display: "none" },
  // layout
  cossRowDirection: {
    flexDirection: Platform.select({ ios: "row", android: "row" }),
  },
  crossTextAlign: {
    textAlign: Platform.select({ ios: "left", android: "left" }),
  },
  fullHeightAndWidth: { height: "100%", width: "100%" },
});

// Gets cross elevation.
export function getCrossElevation(
  shadowRadius = 5,
  shadowOpacity = 0.5,
  androidElevation = 0.7
) {
  const shadowColor = Colors.black;
  return {
    ...Platform.select({
      android: {
        elevation: androidElevation,
      },
      ios: {
        shadowColor,
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity,
        shadowRadius,
      },
    }),
  };
}

// export as default.
export default commonStyles;
