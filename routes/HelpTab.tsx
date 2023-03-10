import React from "react";

import HelpScreen from "../features/help/Help";
import { HomeStackParamList } from "navigationTypes";
import { createStackNavigator } from "@react-navigation/stack";
import HelpDetailsScreen from "../features/help/helpDetails/HelpDetails";

const HomeStack = createStackNavigator<HomeStackParamList>();

/**
 * Home navigation stack
 */
export const HelpTab: React.FC = () => (
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
    <HomeStack.Screen name="HelpScreen" component={HelpScreen} />
    <HomeStack.Screen name="HelpDetailsScreen" component={HelpDetailsScreen} />
  </HomeStack.Navigator>
);
