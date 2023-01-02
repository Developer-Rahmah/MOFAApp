import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { commonStyles } from "lib/constants";
import ProfileScreen from "../features/Profile/Profile";
import { MoreStackParamList } from "navigationTypes";

// create members tab.
const MembersStack = createStackNavigator<MoreStackParamList>();

// add members screens here
const MoreTab: React.FC = () => (
  <MembersStack.Navigator
    initialRouteName="Profile"
    screenOptions={{
      headerShown: false,
      headerTransparent: true,
      headerBackTitleVisible: false,
      headerTitleAllowFontScaling: true,
      animationTypeForReplace: "pop",
      cardStyle: commonStyles.whiteBackgroundColor,
    }}
  >
    <MembersStack.Screen name="Profile" component={ProfileScreen} />
  </MembersStack.Navigator>
);

// export as default.
export default MoreTab;
