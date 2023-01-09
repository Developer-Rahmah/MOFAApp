import { Image, SectionList, View } from "react-native";
import styles from "./styles";
import { ServicesScreenProps } from "navigationTypes";

import OutLineShare from "../../assets/svgs/out-line-share.svg";

import Copy from "../../assets/svgs/copy.svg";

import { Text } from "components/index";
import { User } from "services/mockData/User";
import { useSelector } from "react-redux";
import { langSelector } from "state/slices/Lang";
import { useState } from "react";
import { Colors } from "lib/constants";
import { Header } from "components/Header/NewHeader";

const limit = 10;

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b2a",
    title: { en: "National ID", ar: "الهوية الوطنية" },
    data: [
      {
        id: "1000",
        IconName: (
          <Image
            // resizeMode="contain"
            source={require("../../assets/images/id.png")}
            style={styles.docImage}
          />
        ),
      },
    ],
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f643",
    title: { en: "Passport", ar: "جواز السفر" },
    data: [
      {
        id: "2000",
        IconName: (
          <Image
            source={require("../../assets/images/passport.png")}
            style={styles.docImage}
          />
        ),
      },
    ],
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f633",
    title: { en: "Driving License ", ar: "رخصة السياقة" },
    data: [
      {
        id: "3000",
        IconName: (
          <Image
            source={require("../../assets/images/driving-license.png")}
            style={styles.docImage}
          />
        ),
      },
    ],
  },
];

function DigitalIDsScreen({ navigation }: ServicesScreenProps) {
  const { lang } = useSelector(langSelector);
  const [isEN, setIsEN] = useState(lang === "en");

  return (
    <>
      <Header
        onPress={() => navigation.goBack()}
        isBack
        title="الوثائق الرقمية"
      />
      <View
        style={[styles.container, { paddingHorizontal: 16, paddingTop: 0 }]}
      >
        <View style={styles.slideContainer}>
          <View style={[styles.slide]}>
            <View
              style={[
                styles.firstSliderContainer,
                { backgroundColor: "transparent", paddingHorizontal: 0 },
              ]}
            >
              <Image
                source={require("../../assets/images/abd-alaziz-img.png")}
                style={styles.image}
              />
              <View>
                <Text
                  style={[styles.nameSliderTxt, { color: Colors.black }]}
                  text={`${isEN ? User.name.en : User.name.ar}`}
                />
                <Text
                  style={[styles.passportIDTxt, { color: Colors.black }]}
                  text={`${isEN ? User.PassportID.en : User.PassportID.ar}`}
                />
                <Text
                  style={[styles.idSliderTxt, { color: Colors.black }]}
                  text={`${isEN ? User.ID.en : User.ID.ar}`}
                />
              </View>
            </View>
            <View style={styles.divider} />
          </View>
        </View>

        <SectionList
          contentContainerStyle={{ paddingHorizontal: 8 }}
          sections={DATA}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item, section, index }) => {
            let Icon = item.IconName;

            return (
              <View style={{ width: "100%", paddingVertical: 8 }}>{Icon}</View>
            );
          }}
          renderSectionHeader={({ section: { title } }) => (
            <View style={[styles.listHeaderContainer]}>
              <Text style={styles.headerListTxt} text={title.ar}></Text>
              <View style={{ flexDirection: "row", paddingTop: 5 }}>
                <View style={styles.headerIconContainer}>
                  <OutLineShare />
                </View>
                <View style={styles.headerIconContainer}>
                  <Copy />
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
}

export default DigitalIDsScreen;
