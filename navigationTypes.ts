import {
  NavigationProp,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { BottomTabParamList } from "routes/BottomTabNavigator";
import Routes from "routes/Routes";

export type RootStackParamList = {
  [Routes.BottomTabNavigator]: NavigatorScreenParams<BottomTabParamList>;
  [Routes.Profile]: undefined;
  [Routes.DigitalIDsScreen]: undefined;
  [Routes.RenewPassportScreen]: undefined;
  [Routes.NoInternetConnectionScreen]: undefined;
  [Routes.HelpScreen]: undefined;
  [Routes.MapScreen]: undefined;
  [Routes.RequestsScreen]: undefined;
  [Routes.ServiceDetailsScreen]: ServiceTypeProp;
  [Routes.HelpDetailsScreen]: undefined;
};
export type AuthStackParamsList = {
  Login: undefined;
  ProfileScreen: undefined;
  [Routes.SlidersIntroScreen]: undefined;
};

export type HomeStackParamList = {
  ServicesScreen: undefined;
  DigitalIDsScreen: undefined;
  RenewPassportScreen: undefined;
  ProfileSettings: undefined;
  HelpScreen: undefined;
  MapScreen: undefined;
  RequestsScreen: undefined;
  ServiceDetailsScreen: ServiceTypeProp;
  HelpDetailsScreen: undefined;
};
export type MoreStackParamList = {
  Profile: undefined;
};
export type ServiceTypeProp = {
  service: any;
};

export interface SignInScreenProps {
  navigation: NavigationProp<any>;
}

export type ProfileScreenNavigation = NavigationProp<RootStackParamList>;
export interface ServicesScreenProps {
  navigation: NavigationProp<HomeStackParamList>;
}
