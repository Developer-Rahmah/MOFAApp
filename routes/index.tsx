import React, { useCallback, useRef } from "react";
import { ColorSchemeName } from "react-native";
import ScreenLoader from "../components/ScreenLoader/ScreenLoader";
import RootNavigator from "./RootNavigator";
import { useDispatch } from "react-redux";
import {
  NavigationContainer,
  Route,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { updateCurrentRoute } from "state/slices/General";

// type checking.
type Props = {
  colorScheme: ColorSchemeName;
};

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
//Pass this function inside the App.tsx file

export const Navigation: React.FC<Props> = ({ children }: any) => {
  // use dispatch.
  const dispatch = useDispatch();

  // refs.
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<Route<string>>();

  // listen to navigation state changes.
  const onStateChange = useCallback(() => {
    // constants.
    const previousRouteName = routeNameRef.current;
    const currentRoute = navigationRef.getCurrentRoute();

    // compare to prevent waste redux updates.
    if (currentRoute && previousRouteName?.name !== currentRoute?.name) {
      routeNameRef.current = currentRoute;
      dispatch(updateCurrentRoute(currentRoute));
    }
  }, [dispatch]);

  return (
    <>
      <NavigationContainer
        ref={navigationRef}
        onStateChange={onStateChange}
        fallback={<ScreenLoader />}
      >
        <RootNavigator />
        {children}
      </NavigationContainer>
    </>
  );
};

export default Navigation;
