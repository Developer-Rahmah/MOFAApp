import React from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import Text from "../Text/Text";
import styles from "./styles";
import { Colors, commonStyles, Fonts } from "lib/constants";
import { ButtonProps } from "components/types";
import { LinearGradient } from "expo-linear-gradient";

/**
 * A function component that shows a button.
 */
function Button({
  onPress,
  fontFamily,
  locked,
  text: text,
  txtColor = Colors.white,
  leftIcon,
  style,
  width = "80%",
  textStyle,
  isLoading,
  fontSize = 16,
}: ButtonProps) {
  /**
   * Handles item press.
   */
  const handlePress = () => {
    if (!locked) {
      onPress();
      return;
    }
  };
  return (
    <LinearGradient
      colors={[
        Colors.gradientColor1,
        Colors.gradientColor2,
        Colors.gradientColor3,
      ]}
      style={[
        styles({ locked, width }).button,
        style,
        commonStyles.cossRowDirection,
      ]}
    >
      <TouchableOpacity
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
        activeOpacity={0.8}
        onPress={handlePress}
        disabled={locked}
      >
        {leftIcon}
        {isLoading ? (
          <ActivityIndicator color={Colors.white} />
        ) : (
          <Text
            fontFamily={fontFamily ? fontFamily : Fonts.bold}
            style={textStyle}
            numberOfLines={0}
            text={text}
            color={txtColor}
            fontSize={fontSize}
          />
        )}
      </TouchableOpacity>
    </LinearGradient>
  );
}

// export as default.
export default Button;
