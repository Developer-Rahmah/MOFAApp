import React from "react";
import { commonStyles } from "lib/constants";
import { View } from "react-native";
import styles from "./styles";
import Text from "../Text/Text";
import { Translate, LocaleKeys } from "localization";
import { NoDataProps } from "components/types";

/**
 * A function component that shows a no data.
 */
function NoData({ title = Translate(LocaleKeys.common.noData) }: NoDataProps) {
  return (
    <View style={commonStyles.flexCenter}>
      <Text text={title} style={styles.text} />
    </View>
  );
}

// export as default.
export default NoData;
