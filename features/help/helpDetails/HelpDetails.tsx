import { FlatList, ScrollView, TextInput, View } from "react-native";
import { ServicesScreenProps } from "navigationTypes";
import Calendar from "../../../assets/svgs/calendar2.svg";
import Passport from "../../../assets/svgs/passport2.svg";
import CertifiedCertificate from "../../../assets/svgs/certified-certificate.svg";
import OfficeStampDocument from "../../../assets/svgs/office-stamp-document.svg";
import QuestionHelp from "../../../assets/svgs/question-help.svg";
import ServicesLists from "../../../assets/svgs/s-list.svg";

import EllipsDark from "../../../assets/svgs/ellipse-dark.svg";
import EllipsGray from "../../../assets/svgs/ellipse-gray.svg";
import EllipsLight from "../../../assets/svgs/ellipse-light.svg";

import { Button, Text } from "components/index";
import styles from "../styles";
import { useRoute } from "@react-navigation/native";
import ServiceCard from "components/ServiceCard/ServiceCard";
import { Header } from "components/Header/NewHeader";
import { Colors } from "lib/constants/Colors";
import Fonts from "lib/constants/Fonts";
import { getCrossElevation } from "lib/constants";

function HelpDetailsScreen({ navigation }: ServicesScreenProps) {
  return (
    <>
      <Header onPress={() => navigation.goBack()} isBack title="الخدمات" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.container, { paddingTop: 32 }]}>
          <Text
            text={"المساعد الرقمي"}
            style={[styles.title, { marginHorizontal: 10, Color: Colors.back }]}
          />
          <Text
            numberOfLines={0}
            text={
              "مرحبا، انا مساعدك الرقمي من وزارة الخارجية، انا موجود لكي اساعدك في أي وقت، بامكاني المساعد بكل ما هو متعلق بخدمات وزارة الخارجية"
            }
            style={[
              styles.title,
              {
                marginHorizontal: 10,
                Color: Colors.black,
                textAlign: "center",
                fontSize: 12,
                lineHeight: 16.37,
                fontFamily: Fonts.regular,
                marginBottom: 25,
              },
            ]}
          />
          <View style={{ width: "100%" }}>
            <Text
              text={"كيف يمكنني المساعدة اليوم؟"}
              style={[
                styles.title,
                { marginHorizontal: 10, Color: Colors.black },
              ]}
            />
            <ServiceCard itemName="هذه قائمة بخدماتنا" Icon={ServicesLists} />
            <ServiceCard itemName="الاسئلة الشائعة" Icon={QuestionHelp} />
            <View
              style={{
                borderRadius: 16,
                borderWidth: 1,
                width: "70%",
                borderColor: Colors.black,
              }}
            >
              <Text
                numberOfLines={0}
                text={"أرغب بتجديد جواز السفر الخاص بي"}
                style={[
                  styles.title,
                  {
                    marginHorizontal: 10,
                    Color: Colors.black,
                    textAlign: "center",
                    fontSize: 16,
                    fontFamily: Fonts.regular,
                  },
                ]}
              />
            </View>
            <Text
              numberOfLines={0}
              text={"قمت بالارسال في 09:15 AM"}
              style={[
                styles.title,
                {
                  Color: Colors.black,
                  fontSize: 12,
                  paddingStart: 5,

                  fontFamily: Fonts.regular,
                },
              ]}
            />
            <View
              style={{
                paddingTop: 25,
                alignItems: "flex-end",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <EllipsDark />
                <EllipsGray style={{ marginHorizontal: 5 }} />
                <EllipsLight />
              </View>
              <Text
                numberOfLines={0}
                text={"المساعد الشخصي يكتب حالياً"}
                style={[
                  styles.title,
                  {
                    Color: Colors.black,
                    fontSize: 12,
                    paddingStart: 5,

                    fontFamily: Fonts.regular,
                  },
                ]}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderTopWidth: 1,
            borderColor: Colors.gray3,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
            backgroundColor: Colors.white,
            height: 150,
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              borderRadius: 20,
              ...getCrossElevation(),
              justifyContent: "flex-start",
              alignItems: "flex-start",
              borderWidth: 1,
              borderColor: Colors.light_gray,
              backgroundColor: Colors.white,
              width: "90%",
              paddingTop: 15,
              paddingStart: 10,
              height: "45%",
              marginBottom: 10,
            }}
          >
            <TextInput placeholder="أدخل سؤالك هنا" />
          </View>
          <Button
            width="95%"
            style={{ alignSelf: "center" }}
            onPress={() => {
              null;
            }}
            text={"ارسال"}
            textStyle={{ lineHeight: 23 }}
          />
        </View>
      </ScrollView>
    </>
  );
}

export default HelpDetailsScreen;
