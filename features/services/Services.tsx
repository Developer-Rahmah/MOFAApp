import { FlatList, View } from "react-native";
import styles from "./styles";
import { ServicesScreenProps } from "navigationTypes";
import Calendar from "../../assets/svgs/calendar2.svg";
import Passport from "../../assets/svgs/passport2.svg";
import CertifiedCertificate from "../../assets/svgs/certified-certificate.svg";
import OfficeStampDocument from "../../assets/svgs/office-stamp-document.svg";
import PassportGlobe from "../../assets/svgs/passport-globe.svg";
import OtherServices from "../../assets/svgs/other-services.svg";
import ServicesIcon from "../../assets/svgs/services-icon.svg";

import { Text } from "components/index";
import ServiceCard from "components/ServiceCard/ServiceCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import Routes from "routes/Routes";
import { Header } from "components/Header/NewHeader";
const services = [
  {
    itemName: "خدمات المواعيد",
    Icon: Calendar,
    items: [{ itemName: "حجز موعد لدى السفارة" }],
  },

  {
    itemName: "خدمات جواز السفر",
    Icon: Passport,
    items: [
      { itemName: "تجديد جواز السفر" },
      { itemName: "إصدار جواز سفر جديد" },
      { itemName: "إصدار جواز سفر إلكتروني" },
      { itemName: "بلاغ فقدان جواز السفر" },
    ],
  },

  {
    itemName: "خدمات الشهادات",
    Icon: CertifiedCertificate,
    items: [
      { itemName: "اصدار شهادة ولادة" },
      { itemName: "اصدار شهادة زواج" },
      { itemName: "اصدار شهادة طلاق" },
      { itemName: "اصدار شهادة وفاة" },
    ],
  },

  {
    itemName: "تصديق الوثائق الرسمية",
    Icon: OfficeStampDocument,
    items: [
      { itemName: "وثائق الشركات" },
      { itemName: "وثائق قانونية" },
      { itemName: "الشهادات الجامعية" },
      { itemName: "الدورات التعليمية" },
    ],
  },

  {
    itemName: "خدمات التأشيرات",
    Icon: PassportGlobe,
    items: [
      { itemName: "الاستعلام عن تأشيرة صادرة من ممثلية" },
      { itemName: "تأشيرة عمل" },
      { itemName: "تأشيرة إقامة" },
      { itemName: "تأشيرة دراسة" },
      { itemName: "زيارة عائلية" },
      { itemName: "زيارة شخصية" },
      { itemName: "زيارة علاج" },
    ],
  },

  {
    itemName: "خدمات آخرى",
    Icon: OtherServices,
    items: [
      { itemName: "إجراءات الزواج من غير المواطنين" },
      { itemName: "طلب تعيين محامي" },
      { itemName: "بلاغ عن حادثة وطلب المساعدة" },
    ],
  },
];
function ServicesScreen({ navigation }: ServicesScreenProps) {
  const _keyExtractor = (item: any) => item.itemName;

  const renderItem = ({ item }: { item: any }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(Routes.ServiceDetailsScreen, { service: item })
        }
      >
        <ServiceCard itemName={item.itemName} Icon={item.Icon} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Header isBack={false} title="الخدمات" />
      <View style={styles.container}>
        <View style={{ paddingBottom: 20 }}>
          <ServicesIcon />
        </View>
        <View style={{ width: "100%", paddingBottom: 40 }}>
          <FlatList
            keyExtractor={_keyExtractor}
            renderItem={renderItem}
            data={services}
          />
          {/* {services.map((it) => (
          <ServiceCard itemName={it.itemName} Icon={it.Icon} />
        ))} */}
        </View>
      </View>
    </>
  );
}

export default ServicesScreen;
