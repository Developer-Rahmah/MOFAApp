import { HeaderTypeProps } from "components/types";
import { Fonts } from "lib/constants";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "..";
import ArrowLeft from "../../assets/svgs/arrow-left.svg";

import { UserDataContainer } from "./HeaderStyled";

export const Header: React.FC<HeaderTypeProps> = (props) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 60,
        paddingBottom: 25,
        flexDirection: "row",
      }}
    >
      <View
        style={{ justifyContent: "center", alignItems: "center", flex: 0.33 }}
      >
        {props.isBack && (
          <TouchableOpacity onPress={props.onPress} style={{ marginEnd: 30 }}>
            <ArrowLeft />
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{ flex: 0.33, justifyContent: "center", alignItems: "center" }}
      >
        <Text style={{ fontFamily: Fonts.Almarai700 }} text={props.title} />
      </View>
      <View style={{ flex: 0.33 }}></View>
    </View>

    // <UserDataContainer
    //   style={[
    //     { borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
    //     props.backBtnStyle,
    //   ]}
    // >
    //   {props.isBack ? (
    //     <View style={{ width: 50, paddingStart: 19 }}>
    //       <TouchableOpacity
    //         onPress={props.onPress}
    //         style={{ marginBottom: props.hiddenPersonalImg ? 13.3 : 0 }}
    //       >
    //         <ArrowLeft />
    //       </TouchableOpacity>
    //     </View>
    //   ) : null}
    //   <View style={{ flex: 0.75 }}>
    //     <Text style={{ fontFamily: Fonts.Almarai700 }} text={props.title} />
    //   </View>
    // </UserDataContainer>
  );
};
