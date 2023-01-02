import React from "react";
import { Text as Title } from "react-native";
import { Colors, Fonts } from "lib/constants";
import styles from "./styles";
import { TextProps } from "components/types";

/**
 * A function component that shows a text.
 */
function Text({
  text: text,
  color = Colors.primaryColor,
  numberOfLines = 1,
  underline = false,
  small = false,
  medium = false,
  large = false,
  bold = false,
  fontFamily = Fonts.regular,
  lineHeight,
  onPress,
  innerText,
  style,
  onTextLayout,
  adjustsFontSizeToFit,
  selectable,
}: TextProps) {
  return (
    <Title
      selectable={selectable}
      onTextLayout={(e) => onTextLayout && onTextLayout(e.nativeEvent)}
      onPress={onPress}
      style={[
        styles({
          fontFamily,
          color,
          small,
          medium,
          large,
          underline,
          bold,
          lineHeight,
        }).container,
        style,
      ]}
      numberOfLines={numberOfLines as number}
      lineBreakMode="tail"
      adjustsFontSizeToFit={adjustsFontSizeToFit}
    >
      {text}
      {innerText}
    </Title>
  );
}

// export as default.
export default Text;
