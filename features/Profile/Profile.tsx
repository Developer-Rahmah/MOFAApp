import { ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, updateUser } from "../../state/slices/AuthSlice";
import styles from "./styles";
import Button from "components/Button/Button";
import { Header } from "components/Header/NewHeader";
import { Colors, commonStyles, Fonts } from "lib/constants";
import { LocaleKeys } from "localization/LocaleKeys";
import { Translate } from "localization/Translate";
import ProfileSection from "./Details/ProfileSection";
import { getFormattedDate } from "helpers/format";
import LocalStorageService from "services/LocalStorageService";

// constants.
const localStorageService = LocalStorageService.getService();
/***
 * A function component that shows a profile screen.
 */
function ProfileScreen() {
  // use dispatch.
  const dispatch = useDispatch();

  // get user info from redux.
  const { user } = useSelector(authSelector);

  /**
   * Handles on logout button press.
   */
  const onLogoutPress = async () => {
    await localStorageService.clearUser();
    dispatch(updateUser(null));
  };

  return (
    <View style={commonStyles.flex}>
      <Header hiddenPersonalImg />
      <ScrollView>
        {user && (
          <View style={styles.userInfoContainer}>
            <ProfileSection
              text={`${Translate(LocaleKeys.login.id)} : ${String(user?.ID)}`}
            />
            <ProfileSection
              text={`${Translate(LocaleKeys.login.email)} : ${String(
                user?.email
              )}`}
            />
            <ProfileSection
              text={`${Translate(LocaleKeys.login.phoneNumber)} : ${String(
                user?.phone
              )}`}
            />
            <ProfileSection
              text={`${Translate(
                LocaleKeys.login.dateOfBirth
              )} : ${getFormattedDate(user?.dateOfBirth)}`}
            />
          </View>
        )}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          fontFamily={Fonts.bold}
          width="96%"
          large
          txtColor={Colors.blue_zodiac}
          onPress={onLogoutPress}
          locked={false}
          text={Translate(LocaleKeys.profile.logout)}
        />
      </View>
    </View>
  );
}

export default ProfileScreen;
