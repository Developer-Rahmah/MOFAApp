import { useHeaderHeight } from "@react-navigation/elements";
import { Colors } from "lib/constants/Colors";
import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styled from "styled-components/native";
export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.white};
  width: 100%;
`;
export const Body: React.FC = (props) => (
  <ScrollView
    showsVerticalScrollIndicator={false}
    {...props}
    contentContainerStyle={{ paddingBottom: 20 }}
  />
);
type KeyboardAvoidingViewProps = {
  behavior?: "padding" | "height" | "position" | "position-absolute";
  children?: React.ReactNode;
  style?: any;
};
export const KeyboardView: React.FC<KeyboardAvoidingViewProps> = ({
  children,
  style = {},
}) => {
  const KEYBOARD_VERTICAL_OFFSET = useHeaderHeight();
  const KeyboardAvoidingViewPlatform =
    Platform.OS === "ios" ? KeyboardAvoidingView : View;
  return (
    <KeyboardAvoidingViewPlatform
      behavior={"padding"}
      enabled
      style={{
        ...style,
        flex: 1,
        width: "100%",
        backgroundColor: Colors.white,
      }}
      keyboardVerticalOffset={KEYBOARD_VERTICAL_OFFSET}
    >
      {children}
    </KeyboardAvoidingViewPlatform>
  );
};

const SafeViewContent = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  background-color: ${Colors.white};
  padding-top: 15px;
`;

export const SafeView: React.FC = (props) => <SafeViewContent {...props} />;

