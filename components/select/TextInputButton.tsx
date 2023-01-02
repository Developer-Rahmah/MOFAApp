import SvgArrow from "assets/svgs/SVGArrow";
import styles from "components/Input/styles";
import { Colors } from "lib/constants/Colors";
import React from "react";
import { View, ViewProps, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { HorizontalView } from "./styled";

export interface TextInputButtonProps {
  label?: string;
  placeholder?: string;
  onPress: () => void;
  viewProps?: ViewProps;
  accessibilityLabel?: string;
  testID?: string;
  onFocus?: () => void;
  showLabel?: boolean;
  selectedItem?: any;
  isDatePicker?: boolean;
  smallArrrow?: boolean;
  leftIcon?: any;
}

const TextPlaceholder = styled.Text`
  font-size: 18px;
  text-align: left;
  color: #959393;
`;
const SelectedText = styled.Text`
  font-size: 16px;
  text-align: left;
  color: ${Colors.dark_gray};
`;

export const DatePickerButton: React.FC<TextInputButtonProps> = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity
        style={styles.input}
        onPress={props.onPress}
        testID={props.testID}
        accessibilityLabel={props.accessibilityLabel}
        activeOpacity={0.8}
      >
        <HorizontalView>
          {!props.showLabel && (
            <TextPlaceholder>{props.placeholder}</TextPlaceholder>
          )}
          <SelectedText>{props.selectedItem}</SelectedText>

          <SvgArrow />
        </HorizontalView>
      </TouchableOpacity>
    </View>
  );
};
