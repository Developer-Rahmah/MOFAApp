import { TouchableProps } from "components/types";
import { Colors } from "lib/constants";
import React from "react";
import { Platform, Pressable } from "react-native";

/**
 * Wraps `Pressable` with "touchable" styles
 *
 * @param props {@link PressableProps}
 */
export const Touchable: React.FunctionComponent<TouchableProps> = (props) => {
  return (
    <Pressable
      pressRetentionOffset={Platform.OS === "android" ? 20 : 18}
      style={({ pressed }) => [
        {
          opacity: pressed && props.hasOpacityEffect !== false ? 0.5 : 1,
        },
      ]}
      android_ripple={{ color: Colors.primary }}
      {...props}
    >
      {props.children}
    </Pressable>
  );
};

export default Touchable;
