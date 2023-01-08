import Calendar from "assets/svgs/calendar.svg";
import styles from "components/Input/styles";
import { Colors } from "lib/constants/Colors";
import React from "react";
import { View, ViewProps, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Text } from "..";
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
  text-align: right;
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
      <Text
        style={[
          styles.label,
          {
            color: Colors.black,
            paddingBottom: 10,
            textAlign: "left",
            width: "100%",
          },
        ]}
        text={props.label}
      />

      <TouchableOpacity
        style={[styles.input, { marginBottom: 7 }]}
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

          <Calendar />
        </HorizontalView>
      </TouchableOpacity>
    </View>
  );
};
