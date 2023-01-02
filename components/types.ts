import {
  KeyboardType,
  PressableProps,
  TextInput,
  TextLayoutEventData,
  TextStyle,
  ViewStyle,
} from "react-native";
import { RegisterOptions } from "react-hook-form";
import TextField from "./Input/TextField";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import React from "react";
import Routes from "routes/Routes";

export interface BottomTabButtonProps {
  Icon: any;
  focused: boolean;
  label: string;
  onPress: () => void;
}
export interface BottomTabProps {
  state: any;
  descriptors: any;
  navigation: any;
}
export interface ButtonProps {
  onPress: () => void;
  children?: string;
  locked: boolean;
  text?: string;
  txtColor?: string;
  style?: any;
  width?: string | number;
  borderColor?: string;
  leftIcon?: JSX.Element;
  textStyle?: TextStyle;
  fontFamily?: string;
  large?: boolean;
  isLoading?: boolean;
  fontSize?: number;
}
export interface BottomItemViewProps {
  totalRaised: string;
  totalOffering: string;
  minInvest: string;
}
export interface ProgressBarProps {
  percentage: string;
}
export type DetailsInfoTypeProp = {
  time: string;
  location: string;
  date: string;
};
export type HeaderTypeProps = {
  title?: string;
  name?: string;
  personImage?: string;
  onPress?: () => void;
  navigate?: any;
  isBack?: boolean;
  hiddenPersonalImg?: boolean;
  backColor?: string;
  isSettings?: boolean;
  backBtnStyle?: ViewStyle;
};
export type FormTextFieldProps = React.ComponentProps<typeof TextField> & {
  name: string;
  rules: RegisterOptions;
  message?: string;
  inputHeight?: number | string;
  datePicker?: boolean;
};
export interface InputProps {
  onChangeText?: any;
  value?: string;
  label?: string;
  keyboardType?: KeyboardType;
  isPassword?: boolean;
  background?: string;
  placeHolder?: string;
  style?: any;
  labelColor?: string;
  multiline?: boolean;
  showLabel?: boolean;
  onSubmitEditing?: () => void;
  inputContainerStyle?: ViewStyle;
}
export type TextFieldProps = React.ComponentProps<typeof TextInput> & {
  label: string;
  errorText?: string;
  textFieldStyle?: any;
  inputStyle?: any;
  borderbottomInput?: boolean;
  errorMessage?: string;
  alignLeft?: boolean;
  inputHeight?: number | string;
};
export type MainSheetProps = {
  sheetHeight: number;
  scroll?: boolean;
  contentContainerStyle?: any;
  scrollEnabled?: boolean;
  extraScrollHeight?: number;
  fullWidth?: boolean;
  height?: string | number;
  radius?: number;
};
export interface MemberProfileProps {
  navigation: NavigationProp<any>;
  route: RouteProp<any, Routes.MemberProfile>;
}
export interface NoDataProps {
  title?: string;
}
export interface DeepLinkingParams {
  roomId?: string;
  userId?: string;
  type: "chat" | "discussion";
}
export interface RowProps {
  text?: string;
  txtColor?: string;
  Icon?: any;
  onPress?: () => void;
  fontFamily?: string;
  disabled?: boolean;
}
export interface RowNotificationProps {
  text: string;
  onValueChange: (str: string) => void;
  toggleValue: boolean;
  showBorder?: boolean;
}
export interface SearchBarProps {
  onSearch: (str: string) => void;

  containerStyle?: ViewStyle;
  placeholder?: string;
  onTouchStart?: () => void;
}
export interface TextProps {
  text?: string;
  color?: string;
  numberOfLines?: number | null;
  fontFamily?: string;
  small?: boolean;
  medium?: boolean;
  underline?: boolean;
  large?: boolean;
  bold?: boolean;
  lineHeight?: number;
  style?: any;
  innerText?: JSX.Element | null;
  onPress?: () => void;
  onTextLayout?: (e: TextLayoutEventData) => void;
  adjustsFontSizeToFit?: boolean;
  selectable?: boolean;
  fontSize?: number;
}
export type TouchableProps = PressableProps & {
  hasOpacityEffect?: boolean;
};
export interface UserAvatarProps {
  onPress: () => void;
  img: string;
}
export type HeaderTxtTypeProps = {
  txtColor: string;
};
export type TextStyleProps = {
  color?: string;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  underline?: boolean;
  bold?: boolean;
  lineHeight?: number;
  fontFamily?: string;
};
