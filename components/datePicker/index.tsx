import { BlurView } from "expo-blur";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";
import Modal from "react-native-modal";
import DateTimePicker from "@react-native-community/datetimepicker";

import { DatePickerButton } from "../select/TextInputButton";
import { getFormattedDate } from "helpers/format";
import { Colors } from "lib/constants/Colors";
import styles from "./styles";
import styled from "styled-components/native";

/**
 * @typedef SelectProps
 */
export type SelectProps = {
  /**
   * Label displayed above the clickable element
   */
  label?: string;
  /**
   * Placeholder displayed in the clickabel element when there's no value
   */
  placeholder?: string;
  /**
   * Title displayed in the popup sheet
   */
  title?: string;
  onChange?: (date: Date) => void;
  fontSize?: number;
  value?: Date;
  style?: StyleProp<ViewStyle>;
};
export const Container = styled.View`
  width: 100%;
  padding: 35px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${Colors.black};
`;

const KeyboardPlatformView =
  Platform.OS === "ios" ? KeyboardAvoidingView : View;

const KeyboardViewStyled = styled(KeyboardPlatformView)`
  margin: 0;
  bottom: 0;
  position: absolute;
  width: 100%;
  max-height: 400px;
`;

export const KeyboardView: React.FC = (props) => (
  <KeyboardViewStyled behavior={"position"} enabled {...props} />
);

export const SelectDate: React.FC<SelectProps> = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [selectState, setSelectState] = useState<any | undefined>(props.value);
  const [date, setDate] = useState<any>(new Date());
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const onChange = (e: any, selectedDate: Date) => {
    Keyboard.dismiss();
    setDate(selectedDate);
    if (props.onChange) {
      props.onChange(selectedDate);
    }
    setSelectState(selectedDate);
    setShowLabel(true);
  };

  return (
    <View style={styles.container}>
      <DatePickerButton
        onPress={toggleModal}
        viewProps={{ style: props.style }}
        placeholder={props.placeholder}
        label={props.label}
        showLabel={showLabel}
        selectedItem={selectState && getFormattedDate({ date: selectState })}
      />

      <Modal
        isVisible={modalVisible}
        hideModalContentWhileAnimating
        useNativeDriver
        onBackdropPress={toggleModal}
        onBackButtonPress={toggleModal}
        style={{ margin: 0 }}
        customBackdrop={Platform.select({
          ios: (
            <BlurView style={{ flex: 1 }} intensity={200} tint="dark">
              <TouchableWithoutFeedback
                style={{ flex: 1 }}
                onPress={toggleModal}
              >
                <View style={{ flex: 1 }} />
              </TouchableWithoutFeedback>
            </BlurView>
          ),
          android: null,
        })}
      >
        <KeyboardView>
          <Container>
            <DateTimePicker
              maximumDate={new Date()}
              value={date}
              mode="date"
              display="spinner"
              onChange={onChange}
              textColor={Colors.white}
            />
          </Container>
        </KeyboardView>
      </Modal>
    </View>
  );
};

export default SelectDate;
