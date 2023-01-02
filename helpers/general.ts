import * as Font from "expo-font";
import { Toast } from "native-base";
import { Layout } from "lib/constants";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

/**
 * Loads custom fonts.
 */
export const loadCustomFonts = async () => {
  try {
    const customFonts = {
      "Almarai-Bold": require("../assets/fonts/Almarai-Bold.ttf"),
      "Almarai-ExtraBold": require("../assets/fonts/Almarai-ExtraBold.ttf"),
      "Almarai-Light": require("../assets/fonts/Almarai-Light.ttf"),
      "Almarai-Regular": require("../assets/fonts/Almarai-Regular.ttf"),
      "Almarai-700": require("../assets/fonts/Almarai-Bold.ttf"),
    };

    await Font.loadAsync(customFonts);
  } catch (error) {
    console.log("ERROR: loadCustomFonts_function", error);
  }
};

/**
 * Shows a toast for iOS and Android.
 */
export function showCrossToast(message: string) {
  Toast.show({
    title: message,
    duration: 3000,
    width: Layout.window.width / 1.3,
  });
}
/**
 * Gets the index slide for horizontal list.
 */
export const getSlideIndexForHorizontalList: (
  e: NativeSyntheticEvent<NativeScrollEvent>
) => number = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
  try {
    const w = e.nativeEvent.layoutMeasurement.width;
    const x = e.nativeEvent.contentOffset.x;
    return Math.round(x / w);
  } catch (error) {
    return 0;
  }
};
