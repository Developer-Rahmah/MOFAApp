import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  userInfoContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  avatar: {
    width: 190,
    height: 190,
  },
  descTxt: { textAlign: "center", fontSize: 17 },
  itemContainer: {
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttonContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  editIcon: {
    marginRight: -10,
    marginLeft: "-10%",
    marginVertical: -3,
  },
  mediumTxt: {
    fontSize: 21,
  },

  socialMediaContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "55%",
    justifyContent: "space-evenly",
    paddingBottom: "2.5%",
  },
});

export default styles;
