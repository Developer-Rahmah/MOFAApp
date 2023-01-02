import * as ImagePicker from "expo-image-picker";
import { Alert, Platform } from "react-native";

export const checkGalleryPermissions = async () => {
  if (Platform.OS === "web") {
    return true;
  }
  const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (permission.status != "granted") {
    Alert.alert(
      "Insufficient permissions!",
      "you need to granted camera permission to use this app",
      [{ text: "OK" }]
    );
    return false;
  }
  return true;
};

export const checkCameraPermissions = async () => {
  const permission = await ImagePicker.requestCameraPermissionsAsync();
  if (permission.status != "granted") {
    Alert.alert(
      "Insufficient permissions!",
      "you need to granted camera permission to use this app",
      [{ text: "OK" }]
    );
    return false;
  }
  return true;
};
