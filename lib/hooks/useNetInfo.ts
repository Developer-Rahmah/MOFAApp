import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";
export const useNetInfo = () => {
  //state
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // To get current network connection status
    NetInfo.addEventListener((state: any) => {
      setIsConnected(state.isConnected);
    });
  }, []);

  // returns current network connection status
  return isConnected;
};
