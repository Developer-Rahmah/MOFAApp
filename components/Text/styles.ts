import { TextStyleProps } from "components/types";
import Fonts from "lib/constants/Fonts";
import { StyleSheet } from "react-native";

const styles = ({
  color,
  small,
  medium,
  large,
  underline,
  bold,
  lineHeight,
  fontFamily,
}: TextStyleProps) =>
  StyleSheet.create({
    container: {
      color,
      fontSize: small ? 12 : medium ? 18 : large ? 34 : 16,
      textDecorationLine: underline ? "underline" : "none",
      fontWeight: bold ? "bold" : "normal",
      textAlign: "left",
      lineHeight: lineHeight ? lineHeight : undefined,
      fontFamily: fontFamily ? fontFamily : Fonts.book,
    },
  });

// export styles as default.
export default styles;
