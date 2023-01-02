import { BottomTabButtonProps } from "components/types";
import { Colors } from "lib/constants";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "..";
import styles from "./styles";

export const BottomTabButton: React.FC<BottomTabButtonProps> = ({
  Icon,
  label,
  focused,
  onPress,
}) => {
  return (
    <TouchableOpacity style={[styles.internalTabbarBtnStyle]} onPress={onPress}>
      <Icon
        fill={focused ? Colors.secondaryColor : "transparent"}
        height={25}
        width={25}
        style={[focused && { fill: Colors.primaryColor }]}
      />
      <Text
        style={[
          styles.label,
          { color: focused ? Colors.primaryColor : Colors.black },
        ]}
        text={label}
      />
    </TouchableOpacity>
  );
};

export default BottomTabButton;
