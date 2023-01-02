import { Colors, Fonts } from "lib/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flex: { flex: 1 },
  flexCenter: {
    alignItems: "center",
  },
  logo: {
    width: 160,
    height: 162,
    resizeMode: "contain",
    marginTop: "20%",
    marginBottom: "9%",
  },
  titleText: {
    marginTop: "13%",
    lineHeight: 40,
    marginBottom: "9%",
    fontFamily: Fonts.bold,
    color: Colors.primaryColor,
    fontSize: 24,
  },
  formContainer: { justifyContent: "space-evenly", width: "100%", flex: 1 },
  loginBtnContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 15,
  },
  termsAndconditionsContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: "7%",
  },
  textAlignCenter: {
    textAlign: "center",
    fontFamily: Fonts.bold,
  },

  forgotPasswordContainer: {
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 30,
    color: Colors.black,
    textAlign: "center",
    marginBottom: -5,
  },
  forgotPassInputContainer: {
    width: "100%",
    paddingHorizontal: 30,
    color: Colors.black,
  },
  buttonContainer: {
    alignItems: "center",
    paddingHorizontal: 30,
    width: "100%",
  },
  enterYourEmailText: {
    marginBottom: 25,
    fontSize: 24,
    textAlign: "center",
    marginHorizontal: 16,
  },
  signUpContainer: {
    flexDirection: "row",
    paddingBottom: 30,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  switch: {
    marginHorizontal: 10,
  },
  arEntxtWrapper: {
    justifyContent: "center",
    padding: 24,
    alignItems: "flex-end",
  },
});

export default styles;
