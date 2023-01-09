import { useState } from "react";
import {
  I18nManager,
  KeyboardAvoidingView,
  Platform,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components";
import Text from "../../components/Text/Text";
import { OauthService } from "../../services";
import { updateUser } from "../../state/slices/AuthSlice";
import styles from "./styles";
import { showCrossToast } from "helpers/general";
import { Colors } from "lib/constants";
import { LocaleKeys } from "localization/LocaleKeys";
import { Translate } from "localization/Translate";
import { ScrollView } from "native-base";
import { langSelector, updateLang } from "state/slices/Lang";
import LocalStorageBasicService from "services/LocalStorageBasicService";

import Footer from "../../assets/svgs/footer.svg";
import Logo from "../../assets/svgs/logo.svg";

import LoginViaNafazAr from "../../assets/svgs/login-via-nafaz-ar.svg";
import LoginViaNafazEn from "../../assets/svgs/login-via-nafaz-en.svg";
import { User } from "services/mockData/User";
import { TouchableOpacity } from "react-native-gesture-handler";

// constants.
const oauthService = OauthService.getService();
const localStorageBasicService = LocalStorageBasicService.getService();
function SignInScreen() {
  const { lang } = useSelector(langSelector);

  //state
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isEN, setIsEN] = useState(lang === "en");

  // use redux dispatch.
  const dispatch = useDispatch();

  const onLogin = async (data: any) => {
    console.log("User", User);
    setIsSubmiting(true);

    try {
      await oauthService.login(User);
      setIsSubmiting(false);

      dispatch(updateUser(User));
    } catch (e: any) {
      setIsSubmiting(false);

      showCrossToast(e.message);
    }
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.flex}
      >
        <SafeAreaView style={styles.flex}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.arEntxtWrapper}>
              <Text text={isEN ? "EN" : "عربي"}></Text>
            </View>
            <View style={styles.flexCenter}>
              <View style={styles.logo}>
                <Logo />
              </View>
              <Text
                style={styles.titleText}
                large
                text={Translate(LocaleKeys.login.signIn)}
                color={Colors.primary}
              />
              <View style={styles.formContainer}>
                <View style={styles.loginBtnContainer}>
                  {/* <Button
                    width="100%"
                    onPress={onLogin}
                    locked={false}
                    // text={Translate(LocaleKeys.login.continueAsAquest)}
                    isLoading={isSubmiting}
                    leftIcon={
                      isSubmiting ? null : (
                        <View style={{ paddingTop: 15 }}>
                          {I18nManager.isRTL ? (
                            <LoginViaNafazAr />
                          ) : (
                            <LoginViaNafazEn />
                          )}
                        </View>
                      )
                    }
                  /> */}
                  <TouchableOpacity onPress={() => onLogin()}>
                    {I18nManager.isRTL ? (
                      <LoginViaNafazAr style={{ paddingHorizontal: 30 }} />
                    ) : (
                      <LoginViaNafazEn />
                    )}
                  </TouchableOpacity>
                </View>

                <View style={styles.loginBtnContainer}>
                  <Button
                    width={345}
                    onPress={() => null}
                    locked={false}
                    text={Translate(LocaleKeys.login.continueAsAquest)}
                    isLoading={isSubmiting}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
        <Footer />
      </KeyboardAvoidingView>
    </>
  );
}

export default SignInScreen;
