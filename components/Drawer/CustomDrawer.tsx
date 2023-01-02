import React from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import Text from "../Text/Text";
import styles from "./styles";
import { Colors, commonStyles, Fonts } from "lib/constants";
import { ButtonProps as DrawerProps } from "components/types";
import { LinearGradient } from "expo-linear-gradient";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Close from "../../assets/svgs/close.svg";

import Settings from "../../assets/svgs/settings.svg";
import ColorPicker from "../../assets/svgs/color-drop-pick.svg";
import SmallLogo from "../../assets/svgs/small-logo.svg";
import Lock from "../../assets/svgs/lock.svg";
import BookMark from "../../assets/svgs/book-bookmark.svg";
import Twitter from "../../assets/svgs/twitter.svg";
import Logout from "../../assets/svgs/logout.svg";
import LocalStorageService from "services/LocalStorageService";
import { updateUser } from "state/slices/AuthSlice";
import { useDispatch } from "react-redux";
import Footer from "../../assets/svgs/footer.svg";

/**
 * A function component that shows a button.
 */
function CustomDrawer(props: any) {
  const localStorageService = LocalStorageService.getService();
  const dispatch = useDispatch();

  /**
   * Handles on logout button press.
   */
  const onLogoutPress = async () => {
    await localStorageService.clearUser();
    dispatch(updateUser(null));
  };

  const width = useWindowDimensions().width * 0.3;

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.menuWrapper}>
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <Close />
          </TouchableOpacity>
          <Text style={styles.menuTxt} text="القائمة" />
        </View>
        <View style={styles.menuContainer}>
          <Settings />
          <Text style={styles.menuItemTxt} text="إعدادات التطبيق" />
        </View>
        <View style={styles.divider} />
        <View style={styles.menuContainer}>
          <ColorPicker />
          <Text style={styles.menuItemTxt} text="نمط الآلوان" />
        </View>
        <View style={styles.divider} />

        <View style={styles.menuContainer}>
          <SmallLogo />
          <Text style={styles.menuItemTxt} text="عن التطبيق" />
        </View>
        <View style={styles.divider} />

        <View style={styles.menuContainer}>
          <Lock />
          <Text style={styles.menuItemTxt} text="الخصوصية" />
        </View>
        <View style={styles.divider} />
        <View style={styles.menuContainer}>
          <BookMark />
          <Text style={styles.menuItemTxt} text="الأحكام وشروط الاستخدام" />
        </View>
        <View style={styles.divider} />

        <View style={styles.menuContainer}>
          <Twitter />
          <Text style={styles.menuItemTxt} text="@MOFA" />
        </View>
        <View style={styles.divider} />

        <TouchableOpacity
          onPress={() => onLogoutPress()}
          style={styles.menuContainer}
        >
          <Logout />
          <Text style={styles.menuItemTxt} text="تسجيل الخروج" />
        </TouchableOpacity>
        <View style={styles.divider} />
        <View style={{ paddingTop: 100 }}>
          <Text
            style={[styles.menuItemTxt, { fontSize: 12 }]}
            text="تطبيق تجريبي 1.0"
          />
        </View>
      </View>
      <Footer />
    </DrawerContentScrollView>
  );
}

// export as default.
export default CustomDrawer;
