import { HeaderTxtTypeProps } from "components/types";
import { Colors } from "lib/constants/Colors";
import { Platform, TouchableOpacity } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const UserDataContainer = styled.View`
  justify-content: space-between;
  flex-direction: ${Platform.select({ ios: "row", android: "row" })};
  height: 106px;
  align-items: center;
  padding-top: ${Platform.OS === "ios" ? 29 : 0};
  background: #f7f7f7;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
export const HeaderText = styled.Text<HeaderTxtTypeProps>`
  color: ${(props) => (props.txtColor ? props.txtColor : Colors.white)};
  font-size: 21px;
  margin-left: 5px;
`;

export const BackButton = styled(
  Platform.OS === "android" ? TouchableWithoutFeedback : TouchableOpacity
)`
  align-items: center;
`;
