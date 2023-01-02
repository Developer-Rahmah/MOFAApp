import React from "react";

import ServicesScreen from "../features/services/Services";
import DigitalIDsScreen from "../features/services/DigitalIDs";

import { HomeStackParamList } from "navigationTypes";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button, View } from "react-native";

const HomeStack = createStackNavigator<HomeStackParamList>();
const Drawer = createDrawerNavigator();

/**
 * Home navigation stack
 */
export function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      />
    </View>
  );
}
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

    {/* <Drawer.Navigator>
      <Drawer.Screen name="drawer" component={HomeScreen} />
    </Drawer.Navigator> */}
  </HomeStack.Navigator>
);
