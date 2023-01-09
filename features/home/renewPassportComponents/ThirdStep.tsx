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

import Copy from "../../../assets/svgs/copy.svg";
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

const ThirdStep: React.FC<any> = (props) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const formMethods = useForm<any>({
    mode: "onChange",
  });
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.formContainer}>
        <View style={{ paddingBottom: 15 }}>
          <FormProvider {...formMethods}>
            <View style={styles.dropDownWrapper}>
              <Text style={[styles.label]} text={"الغرض من التجديد"} />
              <View style={[styles.dropDownPickerContainer]}>
                <Dropdown
                  style={styles.dropdown}
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholderStyle={{ color: Colors.gradientColor1 }}
                  placeholder={"الرجاء الاختيار"}
                  searchPlaceholder="Search..."
                  value={value}
                  onChange={(item) => {
                    setValue(item.value);
                  }}
                />
              </View>
            </View>
          </FormProvider>
        </View>
      </View>
    </ScrollView>
  );
};

// export as default.
export default ThirdStep;
