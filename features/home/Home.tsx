import {
  FlatList,
  I18nManager,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SectionList,
  View,
} from "react-native";
import styles from "./styles";
import { ServicesScreenProps } from "navigationTypes";

import NavigationMenu from "../../assets/svgs/navigation-menu.svg";
import NotificationIcon from "../../assets/svgs/alert-bell-notification.svg";
import SingleNeutralIDCard from "../../assets/svgs/single-neutral-id-card.svg";

import Chat from "../../assets/svgs/chat.svg";
import Phone from "../../assets/svgs/phone.svg";
import Share from "../../assets/svgs/share.svg";
import EmailActionUpload from "../../assets/svgs/email-action-upload.svg";
import ArrowRight from "../../assets/svgs/arrow-right.svg";

import IDCards from "../../assets/svgs/id-cards.svg";
import BirthCertificates from "../../assets/svgs/birth-certificates.svg";
import Appointments from "../../assets/svgs/appointments.svg";
import VisaInvitations from "../../assets/svgs/visa.svg";
import Passports from "../../assets/svgs/passports.svg";
import Attestation from "../../assets/svgs/attestation.svg";
import MofaService from "../../assets/svgs/mofa-service.svg";
import Visa from "../../assets/svgs/visa.svg";

import { Text } from "components/index";
import { User } from "services/mockData/User";
import { useSelector } from "react-redux";
import { langSelector } from "state/slices/Lang";
import { useEffect, useState } from "react";
import { LocaleKeys } from "localization/LocaleKeys";
import { Translate } from "localization/Translate";
import { getSlideIndexForHorizontalList } from "helpers/general";
import { News } from "services/mockData/News";
import Stepper from "components/Stepper/Stepper";
import { SectionGrid } from "react-native-super-grid";
import { ScrollView } from "native-base";
import { Colors, Fonts } from "lib/constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import Routes from "routes/Routes";
import DotsSlider from "components/dotsSlider/dotsSlider";
import SliderListItem from "components/sliderListItem";
import SearchBar from "components/SearchBar/SearchBar";

const limit = 10;
let content = [];

/**
 * A function component that shows a home screen.
 */
function HomeScreen({ navigation }: ServicesScreenProps) {
  const { lang } = useSelector(langSelector);
  const [isEN, setIsEN] = useState(lang === "en");
  const [active, setActive] = useState(0);
  // const navigation = useNavigation();
  //state
  const [activeSlide, setActiveSlide] = useState(0);

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: { en: "Favorites", ar: "المفضلة" },
      data: [
        {
          id: "33",
          serviceName: { en: "Visa Invitations", ar: "دعوات تأشيرات" },
          IconName: <VisaInvitations />,
        },
        {
          id: "33",
          serviceName: { en: "ID Cards", ar: "الهوية الوطنية" },
          IconName: <IDCards />,
        },
        {
          id: "22",
          serviceName: { en: "Appointments", ar: "المواعيد" },
          IconName: <Appointments />,
        },

        {
          id: "1",
          serviceName: { en: "Birth Certificates", ar: "شهادات الميلاد" },
          IconName: <BirthCertificates />,
        },
      ],
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: { en: "Embassy Services", ar: "خدمات السفارة" },
      data: [
        {
          id: "2",
          serviceName: { en: "Passports", ar: "الشهادات" },
          IconName: <Attestation />,
        },
        {
          id: "2",
          serviceName: { en: "Attestation", ar: "المواعيد" },
          IconName: <Appointments />,
        },
        {
          id: "3",
          serviceName: { en: "Appointments", ar: "الوثائق الرسمية" },
          IconName: <BirthCertificates />,
        },
        {
          id: "33",
          serviceName: { en: "Birth Certificates", ar: "جوازات السفر" },
          IconName: (
            <TouchableOpacity
              onPress={() => navigation.navigate(Routes.RenewPassportScreen)}
            >
              <Passports />
            </TouchableOpacity>
          ),
        },
        {
          id: "33",
          serviceName: { en: "ID Cards", ar: "خدمات الوزارة" },
          IconName: <MofaService />,
        },
        {
          id: "33",
          serviceName: { en: "Visa Invitations", ar: " دعوات تأشيرات" },
          IconName: <VisaInvitations />,
        },
      ],
    },
  ];
  useEffect(() => {
    for (let i = 0; i < News.length; i++) {
      content.push(
        <View style={{ width: "90%" }}>
          <Text
            style={[styles.passportIDTxt, { paddingVertical: 5, fontSize: 12 }]}
            text={`${isEN ? News[i]?.title?.en : News[i]?.title?.ar}`}
          />
          <Text
            numberOfLines={0}
            style={[
              styles.passportIDTxt,
              { paddingTop: 3, paddingBottom: 0, fontSize: 14 },
            ]}
            text={`${
              isEN ? News[i]?.description?.en : News[i]?.description?.ar
            }`}
          />
        </View>
      );
    }
  }, []);

  const _keyExtractor = (item: any) => item.title;
  /**
   * Handles on scroll end.
   */
  const keyExtractor = (item: any) => item.id;
  const onMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setActiveSlide(0);
    setActive(0);
    setActiveSlide(getSlideIndexForHorizontalList(e));
  };

  /**
   * Renders news item.
   */
  const renderSlide = ({ item }: { item: any }) => {
    return (
      <SliderListItem
        containerStyle={styles.sliderItemContainer}
        children={item.children}
        imgUri={""}
        title={""}
        description={""}
      />
    );
  };

  const slides = [
    {
      key: 2,
      children: (
        <View style={styles.firstSliderContainer}>
          <Image
            source={require("../../assets/images/abd-alaziz-img.png")}
            style={styles.image}
          />
          <View>
            <Text
              style={styles.nameSliderTxt}
              text={`${isEN ? User.name.en : User.name.ar}`}
            />
            <Text
              style={styles.passportIDTxt}
              text={`${isEN ? User.PassportID.en : User.PassportID.ar}`}
            />
            <Text
              style={styles.idSliderTxt}
              text={`${isEN ? User.ID.en : User.ID.ar}`}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate(Routes.DigitalIDsScreen)}
              style={styles.singleNeutralIDCardContainer}
            >
              <SingleNeutralIDCard />
              <Text style={styles.docsTxt} text={`الوثائق الرقمية`} />
            </TouchableOpacity>
          </View>
        </View>
      ),
    },
    {
      key: 2,
      children: (
        <View style={styles.firstSliderContainer}>
          <View>
            <Text
              numberOfLines={0}
              style={[styles.nameSliderTxt, { fontSize: 15 }]}
              text={`${isEN ? User.embassy.en : User.embassy.ar}`}
            />
            <Text style={styles.passportIDTxt} text={`${User.phone}`} />
            <Text style={styles.idSliderTxt} text={`${User.email}`} />
            <View style={styles.iconsContainer}>
              <View style={styles.iconContainer}>
                <EmailActionUpload />
              </View>
              <View style={styles.iconContainer}>
                <Share />
              </View>
              <View style={styles.iconContainer}>
                <Phone />
              </View>
              <View style={styles.iconContainer}>
                <Chat />
              </View>
            </View>
          </View>
        </View>
      ),
    },
    {
      key: 2,
      children: (
        <View style={[styles.firstSliderContainer]}>
          <View style={{ paddingTop: 20 }}>
            <Text
              numberOfLines={0}
              style={[styles.nameSliderTxt]}
              text={`آخر أخبار المملكة`}
            />
            <Stepper
              active={active}
              content={content}
              onNext={() => setActive((p) => p + 1)}
              stepStyle={{ backgroundColor: "transparent" }}
              stepTextStyle={{ backgroundColor: "transparent" }}
              onBack={undefined}
              onFinish={undefined}
              customizeBtn={undefined}
            />
          </View>
        </View>
      ),
    },
  ];
  const _renderSectionListItem = (item: any) => {
    return (
      <FlatList
        data={item.data}
        numColumns={3}
        keyExtractor={_keyExtractor}
        renderItem={renderItem}
      />
    );
  };
  const renderItem = (item) => {
    console.log("---item---", item);

    return (
      <Text
        text={"item.serviceName.en"}
        style={{ color: "green", width: 50 }}
      ></Text>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.helloContainer}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <NavigationMenu />
          </TouchableOpacity>
          <View>
            <Text
              style={styles.helloTxt}
              text={`${Translate(LocaleKeys.common.hello)} ${
                isEN ? User.name.en : User.name.ar
              }`}
            />
            <Text
              style={styles.weatherTxt}
              text={isEN ? User.weather.en : User.weather.ar}
            />
          </View>
        </View>
        <NotificationIcon />
      </View>
      <View style={styles.slideContainer}>
        <View style={[styles.slide]}>
          <FlatList
            keyExtractor={_keyExtractor}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={onMomentumScrollEnd}
            horizontal
            renderItem={renderSlide}
            data={slides}
            pagingEnabled
          />
          <View>
            <DotsSlider
              style={styles.dotSlider}
              index={activeSlide}
              length={slides.length}
            />
          </View>
        </View>
        <SearchBar
          containerStyle={styles.searchBarContainer}
          // onSearch={handleSearch}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SectionGrid
          horizontal={false}
          itemDimension={48}
          // staticDimension={300}
          // fixed
          scrollEnabled={true}
          spacing={20}
          sections={DATA}
          renderItem={({ item, section, index }) => {
            let Icon = item.IconName;

            return (
              <View
                style={[
                  styles.serviceItemContainer,
                  {
                    height: 76,
                    justifyContent: "flex-start",
                  },
                ]}
              >
                <View
                  style={[
                    styles.serviceIconContainer,

                    {
                      backgroundColor:
                        section.title.en === "Favorites"
                          ? Colors.gradientColor1
                          : Colors.gray3,
                    },
                  ]}
                >
                  {Icon}
                </View>
                <Text
                  numberOfLines={0}
                  text={item.serviceName.ar}
                  style={styles.serviceName}
                ></Text>
              </View>
            );
          }}
          renderSectionHeader={({ section }) => (
            <View style={styles.listHeaderContainer}>
              <Text style={styles.headerListTxt} text={section.title.ar}></Text>
              <View style={styles.viewAllIconContainer}>
                <Text
                  style={styles.viewAllTxt}
                  text={Translate(LocaleKeys.common.viewAll)}
                ></Text>
                <ArrowRight />
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
