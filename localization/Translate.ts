import i18n from "i18n-js";
// import { I18nManager } from 'react-native';

/**
 * A function that translates by key.
 * @param key
 * @param params
 */
export const Translate = (
  key: string,
  params: i18n.TranslateOptions = {}
): string => i18n.t(key, params);

// constants.
// export const IS_RTL = I18nManager.isRTL;
