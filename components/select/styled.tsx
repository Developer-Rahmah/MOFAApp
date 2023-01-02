import { Colors } from "lib/constants/Colors";
import React from "react";
import { View, KeyboardAvoidingView, Platform } from "react-native";
import styled from "styled-components/native";

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

export const HorizontalView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InputLabelView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LabelText = styled.Text`
  color: ${Colors.white};
  font-size: 10px;
  text-transform: uppercase;
  line-height: 24px;
`;

export const InputLabel: React.FC = ({ children }) => (
  <InputLabelView>
    <LabelText>{children}</LabelText>
  </InputLabelView>
);
