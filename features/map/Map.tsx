import {
  ImageBackground,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import { ServicesScreenProps } from "navigationTypes";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Button, Text } from "components/index";
import { useRef, useState } from "react";
import Location from "expo-location";
import Pin from "../../assets/svgs/pin.svg";
import Animated from "react-native-reanimated";
import Phone from "../../assets/svgs/phone.svg";
import Share from "../../assets/svgs/share.svg";
import EmailActionUpload from "../../assets/svgs/email-action-upload.svg";
import ArrowRight from "../../assets/svgs/arrow-right.svg";
import Chat from "../../assets/svgs/chat.svg";

import BottomSheet from "reanimated-bottom-sheet";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { User } from "services/mockData/User";
import { Colors } from "lib/constants";
function MapScreen({ navigation }: ServicesScreenProps) {
  const sheetRef = useRef(null);
  const [showRegionDetails, setShowRegionDetails] = useState(false);
  const [mapRegion, setMapRegion] = useState([
    {
      latitude: 31.971539,
      longitude: 35.834228,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    {
      latitude: 31.967977,

      longitude: 35.829526,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    {
      latitude: 31.971507,
      longitude: 35.839278,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    {
      latitude: 31.968912,
      longitude: 35.832381,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  ]);
  const [errorMsg, setErrorMsg] = useState("");
  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    console.log(location.coords.latitude, location.coords.longitude);
  };
  const renderContent = () => (
    <View style={{ backgroundColor: "transparent" }}>
      <ImageBackground
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
        source={require("../../assets/images/sa-embassy.jpeg")}
        style={{
          backgroundColor: "transparent",
          // padding: 16,
          height: "100%",
          justifyContent: "flex-end",
        }}
      >
        <View style={styles.firstSliderContainer}>
          <View>
            <Text
              numberOfLines={0}
              style={[styles.nameSliderTxt, { fontSize: 16 }]}
              text={"سفارة المملكة العربية السعودية - واشنطن"}
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
        <View style={styles.avigationBtnContainer}>
          <Button
            width={345}
            onPress={() => null}
            locked={false}
            text={"التوجه الى العنوان"}
          />
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          provider={PROVIDER_GOOGLE}
          showsMyLocationButton={true}
          // {...(Platform.OS === "android"
          //   ? (provider = { PROVIDER_GOOGLE })
          //   : console.log("Using iOS native maps"))}
        >
          {mapRegion.map((item) => (
            <Marker
              onPress={() => {
                setShowRegionDetails(true);
              }}
              coordinate={item}
            >
              <Pin width={30} height={30} />
            </Marker>
          ))}
        </MapView>
      </View>
      {showRegionDetails && (
        <BottomSheet
          ref={sheetRef}
          snapPoints={[350, 100, 0]}
          initialSnap={0}
          borderRadius={10}
          enabledHeaderGestureInteraction={false}
          renderContent={() => renderContent()}
          onCloseEnd={() => setShowRegionDetails(false)}
        />
      )}
    </>
  );
}

export default MapScreen;
