import LocalStorageService from "../services/LocalStorageService.js";
import { response_catch } from "./commonResponse";

const localStorageService = LocalStorageService.getService();

const OauthService = (function () {
  let _service = null;

  function _getService() {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }

  async function _login(data) {
    try {
      if (data) {
        await localStorageService.setUser(JSON.stringify(data));
        return Promise.resolve(data);
      } else {
        return Promise.reject(new Error("Unable to signup"));
      }
    } catch (error) {
      console.log("error", error);
      return response_catch(error, "Unable to signup");
    }
  }

  return {
    getService: _getService,
    login: _login,
  };
})();
export default OauthService;
