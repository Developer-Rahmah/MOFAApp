import React from "react";

import MapScreen from "../features/map/Map";
import { HomeStackParamList } from "navigationTypes";
import { createStackNavigator } from "@react-navigation/stack";

const HomeStack = createStackNavigator<HomeStackParamList>();

/**
 * Home navigation stack
 */
export const MapTab: React.FC = () => (
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
    <HomeStack.Screen name="MapScreen" component={MapScreen} />
  </HomeStack.Navigator>
);
