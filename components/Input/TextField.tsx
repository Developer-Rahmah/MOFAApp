import React, { useRef } from "react";
import { TextInput, TouchableWithoutFeedback, View } from "react-native";
import Text from "components/Text/Text";
import { Colors } from "lib/constants/Colors";
import styles from "./styles";
import { TextFieldProps } from "components/types";

/**
 * A function component that shows a text field.
 */

const TextField: React.FC<TextFieldProps> = (props: any) => {
  const {
    label,
    errorText,
    alignLeft,
    value,
    style,
    onBlur,
    onFocus,
    errorMessage,
    textFieldStyle,
    inputStyle,
    inputHeight,
    borderbottomInput = false,
    ...restOfProps
  } = props;
  const inputRef = useRef<TextInput>(null);
  return (
    <View style={[style, textFieldStyle]}>
      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
        <Text
          numberOfLines={0}
          style={[
            styles.label,
            { color: Colors.dark_gray, alignSelf: "center", marginBottom: 10 },
            textFieldStyle,
          ]}
          text={label}
        />
      </TouchableWithoutFeedback>
      <TextInput
        style={[
          !borderbottomInput ? styles.input : { paddingTop: 20 },
          textFieldStyle,
          borderbottomInput ? inputStyle : style,
          {
            alignSelf: "center",
            height: inputHeight ? inputHeight : undefined,
          },
        ]}
        ref={inputRef}
        {...restOfProps}
        value={value}
        onBlur={(event) => {
          onBlur?.(event);
        }}
        onFocus={(event) => {
          onFocus?.(event);
        }}
        autoCapitalize="none"
      />
      {errorText != undefined && (
        <Text
          style={[styles.error, { textAlign: alignLeft ? "left" : "center" }]}
          text={errorMessage}
        />
      )}
    </View>
  );
};

export default TextField;
