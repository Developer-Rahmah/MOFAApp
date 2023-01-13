import { FlatList, View } from "react-native";
import { ServicesScreenProps } from "navigationTypes";
import Calendar from "../../../assets/svgs/calendar2.svg";
import Passport from "../../../assets/svgs/passport2.svg";
import CertifiedCertificate from "../../../assets/svgs/certified-certificate.svg";
import OfficeStampDocument from "../../../assets/svgs/office-stamp-document.svg";
import PassportGlobe from "../../../assets/svgs/passport-globe.svg";
import OtherServices from "../../../assets/svgs/other-services.svg";

import { Text } from "components/index";
import styles from "../styles";
import { useRoute } from "@react-navigation/native";
import ServiceCard from "components/ServiceCard/ServiceCard";
import { Header } from "components/Header/NewHeader";
import { Colors } from "lib/constants/Colors";

function ServiceDetailsScreen({ navigation }: ServicesScreenProps) {
  const routes = useRoute() as any;

  const { service } = routes.params;
  console.log("service", service);

  const _keyExtractor = (item: any) => item.itemName;

  const renderItem = ({ item }: { item: any }) => {
    return <ServiceCard itemName={item.itemName} Icon={service.Icon} />;
  };

  return (
    <>
      <Header onPress={() => navigation.goBack()} isBack title="الخدمات" />
      <View style={styles.container}>
        <View style={{ width: "100%" }}>
          <Text
            text={service.itemName}
            style={[styles.title, { marginHorizontal: 10, Color: Colors.back }]}
          ></Text>
          {!!service?.items && (
            <FlatList
              keyExtractor={_keyExtractor}
              renderItem={renderItem}
              data={service.items}
            />
          )}
        </View>
      </View>
    </>
  );
}

export default ServiceDetailsScreen;
