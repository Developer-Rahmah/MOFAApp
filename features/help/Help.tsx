import { View } from "react-native";
import styles from "./styles";
import { ServicesScreenProps } from "navigationTypes";

import { Text } from "components/index";

function HelpScreen({ navigation }: ServicesScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerListTxt} text={"HelpScreen"}></Text>
    </View>
  );
}

export default HelpScreen;
