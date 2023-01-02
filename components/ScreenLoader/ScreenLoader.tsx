import React from "react";
import { Colors } from "lib/constants";
import { Spinner } from "native-base";
import { View } from "react-native";
import styles from "./styles";

/**
 * A function component that shows a screen loader.
 */
function ScreenLoader() {
  return (
    <View style={styles.container}>
      <Spinner size={"large"} color={Colors.primary} />
    </View>
  );
}

// export as default.
export default ScreenLoader;
