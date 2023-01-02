import SvgArrow from "assets/svgs/SVGArrow";
import { TouchableOpacity } from "react-native";
import { Text } from "..";

export const DatePickerButton: React.FC<any> = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      accessibilityLabel={props.accessibilityLabel}
      activeOpacity={0.8}
    >
      <Text text={props.selectedItem} />
      <SvgArrow />
    </TouchableOpacity>
  );
};
