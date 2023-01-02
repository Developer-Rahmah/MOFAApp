import { Image, View, ViewStyle } from "react-native";
import { Text } from "..";
import styles from "./styles";

// type checking.
interface NewsListItemProps {
  imgUri: string;
  title: string;
  description: string;
  children: any;

  // optinal.
  containerStyle?: ViewStyle;
}

/**
 * A function component that shows a news list item component.
 */
function SliderListItem({
  imgUri,
  title,
  description,
  containerStyle,
  children,
}: NewsListItemProps): JSX.Element {
  // use private image and pdf urls.

  return (
    <View style={[styles.mainContainer, containerStyle]}>
      {!!children ? (
        <>{children}</>
      ) : (
        <View pointerEvents="none" style={styles.container}>
          <Image resizeMode="contain" source={imgUri} style={styles.image} />
          <Text text={title} numberOfLines={2} style={styles.content}></Text>
          <Text text={description} numberOfLines={2} style={styles.desc}></Text>
        </View>
      )}
    </View>
  );
}

// export as default.
export default SliderListItem;
