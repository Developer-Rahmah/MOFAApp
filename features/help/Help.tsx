import { FlatList, View } from "react-native";
import styles from "./styles";
import { ServicesScreenProps } from "navigationTypes";
import Calendar from "../../assets/svgs/calendar2.svg";
import Passport from "../../assets/svgs/passport2.svg";
import CertifiedCertificate from "../../assets/svgs/certified-certificate.svg";
import OfficeStampDocument from "../../assets/svgs/office-stamp-document.svg";
import PassportGlobe from "../../assets/svgs/passport-globe.svg";
import OtherServices from "../../assets/svgs/other-services.svg";
import HelpIcon from "../../assets/svgs/help-icon.svg";
import HelpGrayIcon from "../../assets/svgs/help-gray-icon.svg";
import EServices from "../../assets/svgs/e-services.svg";
import Call from "../../assets/svgs/call.svg";
import Emergency from "../../assets/svgs/emergency.svg";

import { Text } from "components/index";
import ServiceCard from "components/ServiceCard/ServiceCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import Routes from "routes/Routes";
import { Header } from "components/Header/NewHeader";
import { Colors } from "lib/constants/Colors";
const services = [
  {
    itemName: "المساعد الرقمي",
    Icon: HelpGrayIcon,
  },

  {
    itemName: "الخدمات الالكتروني",
    Icon: EServices,
  },

  {
    itemName: "إتصل بنا",
    Icon: Call,
  },

  {
    itemName: "الطوارئ",
    Icon: Emergency,
  },
];
function HelpScreen({ navigation }: ServicesScreenProps) {
  const _keyExtractor = (item: any) => item.itemName;

  const renderItem = ({ item }: { item: any }) => {
    return (
      <TouchableOpacity
        disabled={item.itemName !== "المساعد الرقمي"}
        onPress={() =>
          item.itemName === "المساعد الرقمي"
            ? navigation.navigate(Routes.HelpDetailsScreen)
            : null
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
          <HelpIcon />
        </View>
        <View style={{ width: "100%", paddingBottom: 40 }}>
          <Text
            text={"خدمة دعم المواطنين"}
            style={[styles.title, { marginHorizontal: 10, Color: Colors.back }]}
          ></Text>
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

export default HelpScreen;
