import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";
import Text from "components/Text/Text";
import { commonStyles } from "lib/constants";
import { LocaleKeys } from "localization/LocaleKeys";
import { Translate } from "localization/Translate";

// type checking.
interface RefreshButtonProps {
  onPress: () => Promise<void> | void;
}

/**
 * A function component that shows a refresh button.
 */
export const RefreshButton = (Props: RefreshButtonProps) => {
  return (
    <TouchableOpacity onPress={Props.onPress} style={styles.refreshButton}>
      <Text
        style={commonStyles.whiteColor}
        text={Translate(LocaleKeys.common.refresh)}
      />
    </TouchableOpacity>
  );
};
