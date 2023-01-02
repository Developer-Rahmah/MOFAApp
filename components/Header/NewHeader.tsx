import { SvgBack } from "assets/svgs/SvgBack";
import { HeaderTypeProps } from "components/types";
import React from "react";

import { UserDataContainer, BackButton } from "./HeaderStyled";

export const Header: React.FC<HeaderTypeProps> = (props) => {
  return (
    <UserDataContainer style={props.backBtnStyle}>
      {props.isBack && (
        <BackButton onPress={props.onPress}>
          <SvgBack fill={props.backColor ? props.backColor : "#fff"} />
        </BackButton>
      )}
    </UserDataContainer>
  );
};
