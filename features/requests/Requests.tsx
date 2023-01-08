import { View } from "react-native";
import styles from "./styles";
import { ServicesScreenProps } from "navigationTypes";

import { Text } from "components/index";

function RequestsScreen({ navigation }: ServicesScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerListTxt} text={"RequestsScreen"}></Text>
    </View>
  );
}

export default RequestsScreen;
