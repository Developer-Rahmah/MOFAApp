import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignInScreen from "../features/SignIn/SignIn";
import LocalStorageService from "../services";
import { authSelector, updateUser } from "../state/slices/AuthSlice";
import BottomTabNavigator from "./BottomTabNavigator";
import Routes from "./Routes";
import { useNetInfo } from "lib/hooks/useNetInfo";
import NoInternetConnectionScreen from "../features/NoInternetConnectionScreen/NoInternetConnectionScreen";
import { AuthStackParamsList, RootStackParamList } from "navigationTypes";
import { I18nManager } from "react-native";
import { updateLang } from "state/slices/Lang";
import LocalStorageBasicService from "services/LocalStorageBasicService";
import SetLocale from "localization/SetLocale";
import SlidersIntroScreen from "../features/slidersIntro/SlidersIntroScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawer } from "components/index";
// import { MainNavigator } from ".";

// constants.
// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const RootStack = createStackNavigator<RootStackParamList>();
const AuthStack = createStackNavigator<AuthStackParamsList>();
const localStorageBasicService = LocalStorageBasicService.getService();
const Drawer = createDrawerNavigator();

// a function that check the user if hes logged in it will navigate him to the screens.
// if not it will navigate him to the login screen
export const RootNavigator: React.FC = () => {
  // state.
  const [isAppReady, setIsAppReady] = useState<boolean>(false);

  //check internet connection
  const isConnected = useNetInfo();
  // get user from redux.
  const { user } = useSelector(authSelector);

  // use redux dispatch.
  const dispatch = useDispatch();

  // check if user logged in or not.
  useEffect(() => {
    (async () => {
      let userinfo;
      let lang;
      try {
        userinfo = await LocalStorageService.getUser();
        lang = await localStorageBasicService.getLang();
        // if (lang === "ar") {
        I18nManager.forceRTL(true);
        SetLocale("ar");
        // } else {
        //   I18nManager.forceRTL(false);
        //   SetLocale("en");
        // }
        dispatch(updateLang(lang));

        if (userinfo) {
          dispatch(updateUser(userinfo));
        }
        setIsAppReady(true);
      } catch (e) {
        setIsAppReady(true);
        console.log(e);
      }
    })();
  }, []);

  if (!isAppReady) return null;
  return (
    <>
      {isConnected ? (
        user !== null ? (
          <>
            <Drawer.Navigator
              drawerContent={(props) => <CustomDrawer {...props} />}
            >
              <Drawer.Screen
                name="Drawer"
                component={BottomTabNavigator}
                options={{
                  headerShown: false,
                }}
              />
            </Drawer.Navigator>
          </>
        ) : (
          <AuthStack.Navigator
            screenOptions={{
              headerShown: false,
              gestureEnabled: true,
            }}
          >
            <AuthStack.Screen
              name={Routes.SlidersIntroScreen}
              component={SlidersIntroScreen}
            />
            <AuthStack.Screen name={Routes.Login} component={SignInScreen} />
          </AuthStack.Navigator>
        )
      ) : (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen
            name={Routes.NoInternetConnectionScreen}
            component={NoInternetConnectionScreen}
          />
        </RootStack.Navigator>
      )}
    </>
  );
};

export default RootNavigator;
