import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import styles from "./styles";
import TextField from "./TextField";
import { LocaleKeys } from "localization/LocaleKeys";
import { Translate } from "localization/Translate";
import { FormTextFieldProps } from "components/types";
import SelectDate from "components/datePicker";

/**
 * A function component that shows a form text field.
 */
const FormTextField: React.FC<FormTextFieldProps> = (props) => {
  const {
    name,
    inputHeight,
    rules,
    message = Translate(LocaleKeys.login.fieldRequired),
    datePicker,
    ...restOfProps
  } = props;

  const { control, formState } = useFormContext();

  return props.datePicker ? (
    <Controller
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <SelectDate onChange={onChange} value={value} {...restOfProps} />
        );
      }}
      name={name}
      rules={rules}
    />
  ) : (
    <Controller
      control={control}
      render={({ field: { onChange, value, onBlur } }) => (
        <TextField
          // passing everything down to TextField
          // to be able to support all TextInput props
          {...restOfProps}
          errorText={formState.errors[name]}
          onBlur={onBlur}
          onChangeText={(val) => onChange(val)}
          value={value && restOfProps.secureTextEntry ? value.trim() : value}
          style={styles.marginBottom}
          errorMessage={message}
          inputHeight={inputHeight}
        />
      )}
      name={name as any}
      rules={rules}
    />
  );
};

// export as default.
export default FormTextField;
