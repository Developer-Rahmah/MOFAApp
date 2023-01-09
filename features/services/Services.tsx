import { View } from "react-native";
import styles from "./styles";
import { ServicesScreenProps } from "navigationTypes";

import { Text } from "components/index";

function ServicesScreen({ navigation }: ServicesScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerListTxt} text={"ServicesScreen"}></Text>
    </View>
  );
}

export default ServicesScreen;
