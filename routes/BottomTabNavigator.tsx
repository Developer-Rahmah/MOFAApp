import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import BottomTab from "../components/BottomTabButton";
import { ServicesTab } from "./ServicesTab";
import Routes from "./Routes";
import { HomeStackParamList, MoreStackParamList } from "navigationTypes";
import { MapTab } from "./MapTab";
import { RequestsTab } from "./RequestsTab";
import { HelpTab } from "./HelpTab";
import Help from "../assets/svgs/help.svg";
import Services from "../assets/svgs/services.svg";
import Map from "../assets/svgs/map.svg";
import Requests from "../assets/svgs/requests.svg";
import Home from "../assets/svgs/home.svg";
import { LocaleKeys } from "localization/LocaleKeys";
import { Translate } from "localization/Translate";
import { HomeTab } from "./HomeTab";
// type checking.
export type BottomTabParamList = {
  ServicesTab: NavigatorScreenParams<HomeStackParamList>;
  MoreTab: NavigatorScreenParams<MoreStackParamList>;
  MapTab: NavigatorScreenParams<HomeStackParamList>;
  RequestsTab: NavigatorScreenParams<HomeStackParamList>;
  HelpTab: NavigatorScreenParams<HomeStackParamList>;
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
};
// create bottom tab navigator.
const Tab = createBottomTabNavigator<BottomTabParamList>();

/**
 * A function component that shows a bottom tab navigator.
 */

export const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomTab {...props} />}
    >
      <Tab.Screen
        name={Routes.HelpTab}
        component={HelpTab}
        options={() => ({
          tabBarIcon: Help,
          tabBarLabel: `${Translate(LocaleKeys.common.help)}`,
        })}
      />
      <Tab.Screen
        name={Routes.RequestsTab}
        component={RequestsTab}
        options={() => ({
          tabBarIcon: Requests,
          tabBarLabel: `${Translate(LocaleKeys.common.requests)}`,
        })}
      />
      <Tab.Screen
        name={Routes.HomeTab}
        component={HomeTab}
        options={() => ({
          tabBarIcon: Home,
          tabBarLabel: `${Translate(LocaleKeys.common.home)}`,
        })}
      />
      <Tab.Screen
        name={Routes.ServicesTab}
        component={ServicesTab}
        options={() => ({
          tabBarIcon: Services,
          tabBarLabel: `${Translate(LocaleKeys.common.services)}`,
        })}
      />

      <Tab.Screen
        name={Routes.MapTab}
        component={MapTab}
        options={() => ({
          tabBarIcon: Map,
          tabBarLabel: `${Translate(LocaleKeys.common.map)}`,
        })}
      />

      {/* <Tab.Screen
        name={Routes.MoreTab}
        component={MoreTab}
        options={{
          tabBarIcon: More,
          tabBarLabel: "Profile",
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
