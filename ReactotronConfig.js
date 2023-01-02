import Reactotron from "reactotron-react-native";
import { NativeModules } from "react-native";

const { scriptURL } = NativeModules.SourceCode;
const scriptHostname = scriptURL.split("://")[1].split(":")[0];

Reactotron
  // .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({
    name: "Expo Basic App",
    host: scriptHostname,
  })
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage.
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate|generate_204/,
    },
    editor: false, // there are more options to editor
    errors: { veto: () => false }, // or turn it off with false
    overlay: false, // just turning off overlay
  })
  .connect();
