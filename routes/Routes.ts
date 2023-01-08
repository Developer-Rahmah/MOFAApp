/**
 * Const route names. All routes must exist in this list to ensure no duplicates, since duplicates breaks navigation TypeScript support.
 *
 * https://jakallergis.com/proper-react-navigation-v-5-with-type-script
 */
export enum Routes {
  BottomTabNavigator = "BottomTabNavigator",
  SlidersIntroScreen = "SlidersIntroScreen",
  Login = "Login",
  ServicesTab = "ServicesTab",
  MoreTab = "MoreTab",
  MapTab = "MapTab",
  HelpTab = "HelpTab",
  RequestsTab = "RequestsTab",
  MainNavigator = "MainNavigator",
  DigitalIDsScreen = "DigitalIDsScreen",
  RenewPassportScreen = "RenewPassportScreen",
  ServicesScreen = "ServicesScreen",
  Profile = "Profile",
  HelpScreen = "HelpScreen",
  "MapScreen" = "MapScreen",
  RequestsScreen = "RequestsScreen",
  NoInternetConnectionScreen = "NoInternetConnectionScreen",
}

export default Routes;
