import React from "react";

import DigitalIDsScreen from "../features/home/DigitalIDs";
import RenewPassportScreen from "../features/home/RenewPassport";

import { HomeStackParamList } from "navigationTypes";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button, View } from "react-native";
import ServicesScreen from "../features/services/Services";
import ServiceDetailsScreen from "../features/services/serviceDetails/ServiceDetails";

const HomeStack = createStackNavigator<HomeStackParamList>();
const Drawer = createDrawerNavigator();

export const ServicesTab: React.FC = () => (
  <HomeStack.Navigator
    initialRouteName="ServicesScreen"
    detachInactiveScreens={false}
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: ({ current: { progress } }) => ({
        cardStyle: {
          opacity: progress,
        },
      }),
    }}
  >
    <HomeStack.Screen name="ServicesScreen" component={ServicesScreen} />
    <HomeStack.Screen name="DigitalIDsScreen" component={DigitalIDsScreen} />
    <HomeStack.Screen
      name="ServiceDetailsScreen"
      component={ServiceDetailsScreen}
    />

    <HomeStack.Screen
      name="RenewPassportScreen"
      component={RenewPassportScreen}
    />

    {/* <Drawer.Navigator>
      <Drawer.Screen name="drawer" component={HomeScreen} />
    </Drawer.Navigator> */}
  </HomeStack.Navigator>
);
