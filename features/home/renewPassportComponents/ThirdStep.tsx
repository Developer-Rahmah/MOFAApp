import React, { useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors, commonStyles, Fonts, getCrossElevation } from "lib/constants";
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
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const data = [
  { label: "على العنوان التالي", value: "1" },
  { label: "من أقرب سفارة", value: "2" },
];

const handOverType = [
  { label: "الرجاء تسليم الجواز لي شخصياً", value: "1" },
  { label: "الرجاء تسليم الجواز لي شخصياً", value: "20" },
];
const embassies = [
  { label: "سفارة المملكة العربية السعودية في واشنطن", value: "10" },
];

const ThirdStep: React.FC<any> = (props) => {
  const [value, setValue] = useState(null);
  const [handOverTypeValue, setHandOverTypeValue] = useState(null);
  const [embassyValue, setEmbassyValue] = useState(null);

  const [isFocus, setIsFocus] = useState(false);
  const [isSelected, setIsSelection] = useState(false);
  const [visible, setVisible] = useState<boolean>(false);

  const formMethods = useForm<any>({
    mode: "onChange",
  });

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.formContainer}>
        <View style={{ paddingBottom: 15 }}>
          <FormProvider {...formMethods}>
            <View style={styles.dropDownWrapper}>
              <Text style={[styles.label]} text={"أرغب بإستلام جواز السفر"} />
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
              <Text
                style={[styles.label, { marginTop: 5, fontSize: 12 }]}
                text={"ملاحظة: خاضع لاحكام وزارة الخارجية ووزارة الداخلية"}
              />
            </View>
            {value == "1" ? (
              <>
                <View style={[styles.dropDownWrapper, { paddingTop: 20 }]}>
                  <Text
                    style={[styles.label]}
                    text={"عنوان التوصيل لغاية الاستلام"}
                  />
                  <View style={[styles.dropDownPickerContainer]}>
                    <View style={styles.mapViewWrapper}>
                      <MapView
                        style={{ flex: 1, borderRadius: 20 }}
                        showsUserLocation={true}
                        provider={PROVIDER_GOOGLE}
                        showsMyLocationButton={true}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        width: "100%",
                        paddingTop: 10,
                        paddingHorizontal: 5,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => setIsSelection(!isSelected)}
                        style={{
                          borderRadius: 2,
                          width: 16,
                          height: 16,
                          borderWidth: 1,
                          padding: 1,
                          borderColor: Colors.black,
                          justifyContent: "center",
                          alignItems: "center",
                          ...getCrossElevation(),
                        }}
                      >
                        <View
                          style={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: isSelected
                              ? Colors.primaryColor
                              : "transparent",
                          }}
                        />
                      </TouchableOpacity>

                      <Text
                        text="أرغب بتعبئة العنوان يدوياً"
                        style={{
                          fontSize: 12,
                          color: "#00303E",
                          start: 5,
                          opacity: 0.5,
                        }}
                      ></Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.dropDownWrapper, { paddingTop: 17 }]}>
                  <Text style={[styles.label]} text={"آلية الاستلام"} />

                  <View style={[styles.dropDownPickerContainer]}>
                    <Dropdown
                      style={styles.dropdown}
                      data={handOverType}
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      placeholderStyle={{ color: Colors.gradientColor1 }}
                      placeholder={"الرجاء الاختيار"}
                      searchPlaceholder="Search..."
                      value={handOverTypeValue}
                      onChange={(item) => {
                        setHandOverTypeValue(item.value);
                      }}
                    />
                  </View>
                  <Text
                    style={[styles.label, { marginTop: 5, fontSize: 12 }]}
                    text={"  رسوم إضافية ستترتب"}
                  />
                </View>
              </>
            ) : (
              <View style={[styles.dropDownWrapper, { paddingTop: 20 }]}>
                <Text style={[styles.label]} text={"السفارات القريبة"} />
                <View style={[styles.dropDownPickerContainer]}>
                  <Dropdown
                    style={styles.dropdown}
                    data={embassies}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholderStyle={{ color: Colors.gradientColor1 }}
                    placeholder={"الرجاء الاختيار"}
                    searchPlaceholder="Search..."
                    value={embassyValue}
                    onChange={(item) => {
                      setEmbassyValue(item.value);
                    }}
                  />
                </View>
              </View>
            )}
          </FormProvider>
        </View>
      </View>
    </ScrollView>
  );
};

// export as default.
export default ThirdStep;
