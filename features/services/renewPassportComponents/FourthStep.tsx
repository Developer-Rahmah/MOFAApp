import React, { useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors, commonStyles, Fonts } from "lib/constants";
import { ButtonProps } from "components/types";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles";
import { Button, Text } from "components/index";
import OutLineShare from "../../../assets/svgs/out-line-share.svg";

import LeftArrow from "../../../assets/svgs/left-arrow.svg";
import Apple from "../../../assets/svgs/apple.svg";
import CreditCard from "../../../assets/svgs/credit-card.svg";
import CashPayment from "../../../assets/svgs/cash-payment-bills.svg";

import { LocaleKeys } from "localization/LocaleKeys";
import { Translate } from "localization/Translate";
import Camera from "../../../assets/svgs/camera.svg";
import Attach from "../../../assets/svgs/attatch.svg";
import { FormProvider, useForm } from "react-hook-form";
import FormTextField from "components/Input/FormInputField";
import { Dropdown } from "react-native-element-dropdown";

const data = [
  { label: "على العنوان التالي", value: "1" },
  { label: "من أقرب سفارة", value: "2" },
];

const FourthStep: React.FC<any> = (props) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const formMethods = useForm<any>({
    mode: "onChange",
  });
  const renderItem = (itemName, Icon) => {
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
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.formContainer}>
        <View style={{ paddingBottom: 42, paddingHorizontal: 24 }}>
          <Text text="الملخص" style={styles.uploadFormalTxt}></Text>
        </View>
        <View style={{ paddingBottom: 14, paddingHorizontal: 24 }}>
          <Text
            text="رسوم تجديد جواز سفر لمدة ١٠ سنوات"
            style={styles.uploadFormalTxt}
          ></Text>
        </View>
        <View style={{ paddingBottom: 15, paddingHorizontal: 24 }}>
          <Text text="150 دولار امريكي" style={styles.uploadFormalTxt}></Text>
          {renderItem("أبل بي", Apple)}
          {renderItem("البطاقة الإتمانية", CreditCard)}
          {renderItem("الدفع نقداً بالسفارة", CashPayment)}
        </View>
      </View>
    </ScrollView>
  );
};

// export as default.
export default FourthStep;
