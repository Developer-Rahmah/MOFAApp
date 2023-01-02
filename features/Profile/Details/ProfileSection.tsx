import { View } from "react-native";
import styles from "../styles";
import Text from "components/Text/Text";
import { Colors } from "lib/constants/Colors";
import Fonts from "lib/constants/Fonts";
import { ProfileSectionProps } from "features/types";

function ProfileSection({ text }: ProfileSectionProps) {
  return (
    <View style={styles.itemContainer}>
      <Text
        fontFamily={Fonts.book}
        color={Colors.light_blue2}
        text={text}
        style={styles.mediumTxt}
      />
    </View>
  );
}

// export as default.
export default ProfileSection;
