import AsyncStorage from "@react-native-async-storage/async-storage";

const LocalStorageBasicService = (function () {
  let _service;

  function _getService() {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }
  async function _setUser(user) {
    try {
      await AsyncStorage.setItem("user", user);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async function _getUser() {
    try {
      return JSON.parse(await AsyncStorage.getItem("user"));
    } catch (e) {
      console.log(e);
      return null;
    }
  }
  async function _clearUser() {
    try {
      await AsyncStorage.removeItem("user");
    } catch (e) {
      console.log(e);
    }
  }

  async function _setLang(lang) {
    try {
      await AsyncStorage.setItem("lang", lang);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async function _getLang() {
    try {
      return await AsyncStorage.getItem("lang");
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  return {
    getService: _getService,

    setUser: _setUser,
    getUser: _getUser,
    clearUser: _clearUser,
    setLang: _setLang,
    getLang: _getLang,
  };
})();
export default LocalStorageBasicService;
