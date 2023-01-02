import { BottomTabProps } from "components/types";
import React from "react";
import { View } from "react-native";
import BottomTabButton from "./BottomTabButton";
import styles from "./styles";

type RouteType = {
  name: string;
  key: string;
};
export const BottomTab: React.FC<BottomTabProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const tabs = state.routes;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {tabs.map((route: RouteType, index: number) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel;
        const icon = options.tabBarIcon;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <BottomTabButton
            onPress={onPress}
            label={label}
            Icon={icon}
            focused={isFocused}
            key={route.key}
          />
        );
      })}
    </View>
  );
};

export default BottomTab;
