import * as Localization from "expo-localization";

export const GetLocale = (): "en" | "ar" => {
  return Localization.locale.slice(0, 2) as "en" | "ar";
};

export default GetLocale;
