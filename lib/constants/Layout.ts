/**
 * If you want to use the Dimensions use the layout prop
 * @example
 * <View style={{width: layout.width, height: layout.height}} />
 */
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width <= 375,
};
