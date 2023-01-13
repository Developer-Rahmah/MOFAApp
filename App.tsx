import { useEffect, useState } from "react";
import { LogBox, StatusBar, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import SetLocale from "./localization/SetLocale";
import Navigation from "./routes";
import reduxStore from "./state";
import { NativeBaseProvider } from "native-base";
import { loadCustomFonts } from "./helpers/general";
// require("./ReactotronConfig");

// // ignore all warnings.
// LogBox.ignoreLogs(["Setting a timer"]);

/**
 * A function
 */
export default function App() {
  // state.
  const [isSetupDone, setIsSetupDone] = useState<boolean>(false);

  // setup the app.
  useEffect(() => {
    (async () => {
      SetLocale();
      await loadCustomFonts();
      setIsSetupDone(true);
    })();
  }, []);

  if (!isSetupDone) return null;
  return (
    <SafeAreaProvider>
      <Provider store={reduxStore}>
        <NativeBaseProvider>
          <Navigation colorScheme="light" />
        </NativeBaseProvider>
        <StatusBar animated={true} barStyle={"dark-content"} />
      </Provider>
    </SafeAreaProvider>
  );
}
