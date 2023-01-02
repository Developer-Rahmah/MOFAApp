import React from "react";
import { VStack, Input } from "native-base";
import { LocaleKeys, Translate } from "localization";
import { Colors, commonStyles, Fonts } from "lib/constants";
import { SearchBarProps } from "components/types";
import Search from "../../assets/svgs/search.svg";
import { Text } from "..";
import styles from "./styles";

// constants.
const inputBorderRadius = 16;
/**
 * A function component that shows a search bar.
 */
function SearchBar({
  onSearch,
  containerStyle,
  onTouchStart,
  placeholder = Translate(LocaleKeys.common.search),
}: SearchBarProps) {
  // Renders input search icon.
  const renderInputSearchIcon = () => {
    return (
      <Search onTouchStart={onTouchStart} style={commonStyles.marginR16} />
    );
  };
  // Renders input search placeholder.

  const renderInputSearchTxt = () => {
    return (
      <Text
        text={placeholder}
        style={[styles.searchTxt, commonStyles.marginL16]}
      />
    );
  };
  return (
    <VStack style={containerStyle} width="100%" space={2}>
      <Input
        fontFamily={Fonts.regular}
        borderTopLeftRadius={inputBorderRadius}
        borderBottomLeftRadius={inputBorderRadius}
        borderTopRightRadius={inputBorderRadius}
        borderBottomRightRadius={inputBorderRadius}
        backgroundColor={Colors.gray2}
        height={45}
        // placeholder={placeholder}
        variant="filled"
        width="100%"
        borderRadius={12}
        py={1}
        px={2}
        InputLeftElement={renderInputSearchTxt()}
        InputRightElement={renderInputSearchIcon()}
        onEndEditing={(e) => onSearch && onSearch(e.nativeEvent.text)}
      />
    </VStack>
  );
}

// export as default.
export default SearchBar;
