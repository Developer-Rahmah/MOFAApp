import {
  NavigationProp,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { BottomTabParamList } from "routes/BottomTabNavigator";
import Routes from "routes/Routes";

export type RootStackParamList = {
  [Routes.BottomTabNavigator]: NavigatorScreenParams<BottomTabParamList>;
  [Routes.Profile]: undefined;
  [Routes.NoInternetConnectionScreen]: undefined;
};
export type AuthStackParamsList = {
  Login: undefined;
  ProfileScreen: undefined;
};

export type HomeStackParamList = {
  ServicesScreen: undefined;
  DigitalIDsScreen: undefined;
  ProfileSettings: undefined;
};
export type MoreStackParamList = {
  Profile: undefined;
};
export type VerificationTypeProp = {
  code: string | undefined;
};

export interface SignInScreenProps {
  navigation: NavigationProp<any>;
}

export type ProfileScreenNavigation = NavigationProp<RootStackParamList>;
export interface ServicesScreenProps {
  navigation: NavigationProp<HomeStackParamList>;
}
