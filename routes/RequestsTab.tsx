import React from "react";

import RequestsScreen from "../features/requests/Requests";
import { HomeStackParamList } from "navigationTypes";
import { createStackNavigator } from "@react-navigation/stack";

const HomeStack = createStackNavigator<HomeStackParamList>();

/**
 * Home navigation stack
 */
export const RequestsTab: React.FC = () => (
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
    <HomeStack.Screen name="RequestsScreen" component={RequestsScreen} />
  </HomeStack.Navigator>
);
