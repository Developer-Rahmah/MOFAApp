import React from "react";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import Text from "../Text/Text";
import { Colors, commonStyles, Fonts } from "lib/constants";
import { ButtonProps } from "components/types";
import { LinearGradient } from "expo-linear-gradient";
import LeftArrow from "../../assets/svgs/left-arrow.svg";
import styles from "./styles";

/**
 * A function component that shows a button.
 */
function ServiceCard({ itemName, Icon }: any) {
  return (
    <View style={{ paddingBottom: 15 }}>
      <LinearGradient
        start={[0, 0.5]}
        end={[1, 0.5]}
        colors={[
          Colors.gradientColor1,
          Colors.gradientColor2,
          Colors.gradientColor3,
        ]}
        style={styles.borderGradient}
      >
        <View style={[styles.takePhotoContainer, { borderRadius: 20 }]}>
          <LinearGradient
            start={[0, 0.5]}
            end={[1, 0.5]}
            colors={["rgba(237, 237, 237, 0.3)", "rgba(145, 144, 163, 0.3)"]}
            style={styles.grayGradient}
          >
            <View style={styles.appleContainer}>
              <Icon />
              <Text
                text={itemName}
                style={[
                  styles.uploadFormalTxt,
                  { marginStart: 5, Color: Colors.back },
                ]}
              ></Text>
            </View>
            <LeftArrow style={{ top: 6 }} />
          </LinearGradient>
        </View>
      </LinearGradient>
    </View>
  );
}

// export as default.
export default ServiceCard;
