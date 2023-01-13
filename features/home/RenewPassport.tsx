import { Image, View } from "react-native";
import styles from "./styles";
import { ServicesScreenProps } from "navigationTypes";

import OutLineShare from "../../assets/svgs/out-line-share.svg";

import Copy from "../../assets/svgs/copy.svg";

import Camera from "../../assets/svgs/camera.svg";

import { Button, Text } from "components/index";
import { User } from "services/mockData/User";
import { useSelector } from "react-redux";
import { langSelector } from "state/slices/Lang";
import { useEffect, useState } from "react";
import { Colors, Fonts, getCrossElevation } from "lib/constants";
import { Header } from "components/Header/NewHeader";
import { Checkbox, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Stepper } from "components/Stepper/Stepper";
import { News } from "services/mockData/News";
import { FormProvider, useForm } from "react-hook-form";
import FormTextField from "components/Input/FormInputField";

import { isNotEmpty, validateEmail } from "helpers/config";
import Attach from "../../assets/svgs/attatch.svg";
import { LinearGradient } from "expo-linear-gradient";
import FirstStep from "./renewPassportComponents/FirstStep";
import { Translate } from "localization/Translate";
import { LocaleKeys } from "localization/LocaleKeys";
import SecondStep from "./renewPassportComponents/SecondStep";
import ThirdStep from "./renewPassportComponents/ThirdStep";
import FourthStep from "./renewPassportComponents/FourthStep";

const limit = 10;
let content = [];
let stepperTitles = [
  "المعلومات الشخصية",
  "تفاصيل جواز السفر",
  "معلومات عنوان التوصيل",
  "بيانات                الدفع",
];

function RenewPassportScreen({ navigation }: ServicesScreenProps) {
  const { lang } = useSelector(langSelector);
  const [isEN, setIsEN] = useState(lang === "en");
  const [isSelected, setIsSelection] = useState(false);
  const [active, setActive] = useState(-1);
  const formMethods = useForm<any>({
    mode: "onChange",
  });
  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      content.push(
        <FirstStep />,
        <SecondStep />,
        <ThirdStep />,
        <FourthStep navigation={navigation} />
      );
    }
  }, [active]);
  return (
    <>
      <Header
        onPress={() => navigation.goBack()}
        isBack
        title="تجديد جواز السفر"
      />
      <ScrollView style={{ backgroundColor: Colors.white }}>
        {active == -1 ? (
          <View
            style={[
              styles.container,
              { paddingHorizontal: 16, paddingTop: 24, alignItems: "center" },
            ]}
          >
            <Text
              style={{ fontFamily: Fonts.Almarai700, fontSize: 18 }}
              text="الشروط والأحكام"
            />
            <Text
              numberOfLines={0}
              text="خاص من خلال الجهة الحكومية التي يتبع لها صاحب الطلب, ويتم ارسال طلبات اصدار الجوازات الدبلوماسية أو الخاصة الكترونيا عبر بوابة المراسم.
يتم ارفاق خطاب من جهة العمل بالطلب المقدم من الوزارة أو الجهة التي يتبع لها الموظف
يتم ارفاق الصورة الشخصية بالطلب حسب المواصفات التالية
على كل الجنسين (نساء ورجال) ان يظهروا الوجه كاملا.
بالنسبة للرجال يجب ان تكون الصورة بالزي الرسمي السعودي وبالحجاب بالنسبة للمرأة.
مقاس الصورة 4*6 بخلفية بيضاء.
ارفاق صورة من الهوية الوطنية أو بطاقة العائلة في حال وجود مرافقين .
على كل الجنسين (نساء ورجال) ان يظهروا الوجه كاملا.
بالنسبة للرجال يجب ان تكون الصورة بالزي الرسمي السعودي وبالحجاب بالنسبة للمرأة.
مقاس الصورة 4*6 بخلفية بيضاء."
              style={{
                textAlign: "left",
                lineHeight: 23,
                fontSize: 16,
                top: 24,
                paddingHorizontal: 30,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                paddingVertical: 45,
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
                paddingHorizontal: 35,
              }}
            >
              <TouchableOpacity
                value={isSelected}
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
                text="أنا أعي كل المذكور أعلاه"
                style={{
                  fontSize: 12,
                  color: "#00303E",
                  start: 5,
                }}
              ></Text>
            </View>
            <Button
              width="100%"
              onPress={() => setActive(active + 1)}
              locked={false}
              text={"تابع"}
              textStyle={{ lineHeight: 23 }}
              // isLoading={isSubmiting}
            />
          </View>
        ) : (
          <View
            style={{
              // position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              flex: 1,
            }}
          >
            <Stepper
              active={active}
              content={content}
              onNext={() => setActive((p) => p + 1)}
              stepStyle={{ backgroundColor: "transparent" }}
              stepTextStyle={{ backgroundColor: "transparent" }}
              stepTitles={stepperTitles}
              customizeBtn={true}
              navigation={navigation}
            />
          </View>
        )}
      </ScrollView>
    </>
  );
}

export default RenewPassportScreen;
