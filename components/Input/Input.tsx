import { InputProps } from "components/types";
import React from "react";
import { TextInput, View } from "react-native";
import Text from "../Text/Text";
import styles from "./styles";

/**
 * A function component that shows a input.
 */
function Input({
  onChangeText,
  label,
  keyboardType,
  isPassword,
  placeHolder = label,
  labelColor,
  value,
  multiline = false,
  inputContainerStyle,
  style,
  showLabel = true,
  onSubmitEditing,
}: InputProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, inputContainerStyle]}>
        {showLabel && (
          <Text style={[styles.label, { color: labelColor }]} text={label} />
        )}
      </View>

      <TextInput
        autoCorrect={false}
        multiline={multiline}
        secureTextEntry={isPassword}
        placeholder={placeHolder}
        style={[styles.input, style]}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        onSubmitEditing={onSubmitEditing}
        autoCapitalize="none"
      />
    </View>
  );
}

// export as default.
export default Input;
