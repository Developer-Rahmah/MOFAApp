import React from "react";

import HomeScreen from "../features/home/Home";
import DigitalIDsScreen from "../features/home/DigitalIDs";
import RenewPassportScreen from "../features/home/RenewPassport";

import { HomeStackParamList } from "navigationTypes";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button, View } from "react-native";

const HomeStack = createStackNavigator<HomeStackParamList>();
const Drawer = createDrawerNavigator();

export const HomeTab: React.FC = () => (
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
    <HomeStack.Screen name="ServicesScreen" component={HomeScreen} />
    <HomeStack.Screen name="DigitalIDsScreen" component={DigitalIDsScreen} />
    <HomeStack.Screen
      name="RenewPassportScreen"
      component={RenewPassportScreen}
    />
  </HomeStack.Navigator>
);
