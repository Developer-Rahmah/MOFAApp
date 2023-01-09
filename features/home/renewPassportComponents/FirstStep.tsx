import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { Colors } from "lib/constants";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles";
import { Button, Text } from "components/index";

import { LocaleKeys } from "localization/LocaleKeys";
import { Translate } from "localization/Translate";
import Camera from "../../../assets/svgs/camera.svg";
import Attach from "../../../assets/svgs/attatch.svg";
import { FormProvider, useForm } from "react-hook-form";
import FormTextField from "components/Input/FormInputField";
// import DropDownPicker from "react-native-dropdown-picker";
import { Dropdown } from "react-native-element-dropdown";

const data = [
  { label: "ذكر", value: "1" },
  { label: "انثى", value: "2" },
];
const FirstStep: React.FC<any> = (props) => {
  const formMethods = useForm<any>({
    mode: "onChange",
  });
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.formContainer}>
        <View style={{ paddingBottom: 15 }}>
          <View style={{ paddingHorizontal: 30 }}>
            <Text text="تحميل صورة شخصية رسمية" style={styles.uploadTxt}></Text>
          </View>
          <Button
            width="90%"
            style={{ alignSelf: "center" }}
            onPress={() => {
              null;
            }}
            leftIcon={
              <View style={{ paddingEnd: 6.64 }}>
                <Attach />
              </View>
            }
            locked={false}
            text={"تحميل"}
            textStyle={{ lineHeight: 23 }}
          />
        </View>
        <FormProvider {...formMethods}>
          <FormTextField
            name="fullName"
            label="الإسم الكامل"
            rules={{
              required: true,
              minLength: {
                value: 10,
                message: "الإسم الكامل",
              },

              maxLength: {
                value: 10,
                message: "الإسم الكامل",
              },
            }}
            maxLength={10}
            alignLeft
            autoCorrect={false}
            textFieldStyle={[styles.inputContainer]}
            message={Translate(LocaleKeys.login.invalidID)}
            placeholder={"عبدالعزيز الدوسري"}
          />

          <FormTextField
            name="birthDate"
            label="تاريخ الميلاد"
            rules={{
              required: true,
              minLength: {
                value: 10,
                message: "تاريخ الميلاد",
              },

              maxLength: {
                value: 10,
                message: "تاريخ الميلاد",
              },
            }}
            maxLength={10}
            alignLeft
            autoCorrect={false}
            message={Translate(LocaleKeys.login.invalidID)}
            placeholder={"13/10/1999"}
            datePicker
          />

          <FormTextField
            name="birthCity"
            label="مدينة الميلاد"
            rules={{
              required: true,
              minLength: {
                value: 10,
                message: "مدينة الميلاد",
              },

              maxLength: {
                value: 10,
                message: "مدينة الميلاد",
              },
            }}
            maxLength={10}
            alignLeft
            autoCorrect={false}
            textFieldStyle={styles.inputContainer}
            message={Translate(LocaleKeys.login.invalidID)}
            placeholder={"عبدالعزيز الدوسري"}
          />
          <View style={styles.dropDownWrapper}>
            <Text style={[styles.label]} text={"الجنس"} />
            <View style={[styles.dropDownPickerContainer]}>
              <Dropdown
                style={styles.dropdown}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="ذكر"
                searchPlaceholder="Search..."
                value={value}
                onChange={(item) => {
                  setValue(item.value);
                }}
              />
            </View>
          </View>
          <View style={{ paddingHorizontal: 30 }}>
            <Text
              text="تحميل صورة شخصية رسمية"
              style={styles.uploadFormalTxt}
            ></Text>
            <View style={styles.uploadPhotoContainer}>
              <View style={styles.uploadPhotoGradient}>
                <Text
                  style={{ padding: 10, fontSize: 12 }}
                  numberOfLines={0}
                  text="هذه الصور لك و لجواز سفرك الحالي وهويتك الوطنية ستساعدنا على التحقق منك والتأكد من أنك أنت من يقدم على تجديد الجواز"
                ></Text>

                <LinearGradient
                  start={[0, 0.5]}
                  end={[1, 0.5]}
                  colors={[
                    Colors.gradientColor1,
                    Colors.gradientColor2,
                    Colors.gradientColor3,
                  ]}
                  style={{
                    borderRadius: 30,
                    width: "70%",
                  }}
                >
                  <View style={styles.takePhotoContainer}>
                    <Camera />
                    <Text
                      text="التقاط الصور"
                      style={styles.takePhotoTxt}
                    ></Text>
                  </View>
                </LinearGradient>
              </View>
            </View>
          </View>
        </FormProvider>
      </View>
    </ScrollView>
  );
};

// export as default.
export default FirstStep;
