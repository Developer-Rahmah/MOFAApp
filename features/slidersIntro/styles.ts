import { Colors, Fonts } from "lib/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  slide: {
    // flex: 0.9,
    alignItems: "center",
    paddingBottom: 103,
    justifyContent: "center",
    // backgroundColor: "blue",
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: "green",
    textAlign: "center",
  },
  title: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    marginHorizontal: -10,
    marginVertical: 5,
  },
  noDataMsg: {
    color: Colors.black,
    // fontFamily: fonts.OpenSans300Italic,
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
    marginHorizontal: 40,
  },
  footerContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  skipContainer: {
    alignItems: "flex-end",
    width: "90%",
    paddingBottom: 30,
  },
});

export default styles;
