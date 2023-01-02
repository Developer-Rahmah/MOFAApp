import { HeaderTxtTypeProps } from "components/types";
import { Colors } from "lib/constants/Colors";
import { Platform, TouchableOpacity } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const UserDataContainer = styled.View`
  justify-content: space-between;
  flex-direction: ${Platform.select({ ios: "row", android: "row" })};
  align-items: center;
  padding: 0px 16px;
  background-color: transparent;
  margin-top: 50px;
  align-items: flex-start;
`;

export const HeaderText = styled.Text<HeaderTxtTypeProps>`
  color: ${(props) => (props.txtColor ? props.txtColor : Colors.white)};
  font-size: 21px;
  margin-left: 5px;
`;

export const BackButton = styled(
  Platform.OS === "android" ? TouchableWithoutFeedback : TouchableOpacity
)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  height: 35px;
  width: 35px;
  background-color: #a9a9a9;
`;
