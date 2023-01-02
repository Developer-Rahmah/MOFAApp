import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Text } from "..";
import styles from "./styles";

// type checking.
interface DotItemProps {
  style?: any;
}
interface DotsSliderProps extends DotItemProps {
  index: number;
  length: number;
}

/**
 * A function component that shows a dots slider.
 */
export const DotsSlider: React.FC<DotsSliderProps> = ({
  index,
  length,
  style,
}) => {
  // state.
  const [dots, setDots] = useState<number[]>([]);

  // fill the array.
  useEffect(() => {
    if (length > 0) {
      const arr = Array.from(Array(length).keys());
      setDots(arr);
    }
  }, [length]);

  if (length < 0 || length === 1) return null;
  return (
    <View style={[styles.container, style]}>
      {dots.map((it) => (
        <DotItem
          key={String(it)}
          style={(it === index && styles.selectedDotItem) || {}}
        />
      ))}
    </View>
  );
};

/**
 * A function component that shows a dot item.
 */
function DotItem({ style }: DotItemProps) {
  return <View style={[styles.dotItem, style]} />;
}

// export as default.
export default DotsSlider;
