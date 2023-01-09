import { View } from "react-native";
import styles from "./styles";
import { ServicesScreenProps } from "navigationTypes";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Text } from "components/index";

function MapScreen({ navigation }: ServicesScreenProps) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        showsMyLocationButton={true}
      />
    </View>
  );
}

export default MapScreen;
