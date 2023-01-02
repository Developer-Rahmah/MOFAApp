import axios from "axios";
import { response_catch, response_then } from "./commonResponse";

const _CACHE = {};

const ContentService = (function () {
  let _service = null;

  function _getService() {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }

  function _callAPI(url, config) {
    return axios.get(url, config).then(response_then).catch(response_catch);
  }

  async function _getRandomUsers(limit) {
    const url = `https://randomuser.me/api/?&results=${limit}`;
    let config = {
      params: {},
    };
    return _callAPI(url, config).then((data) => {
      return Promise.resolve(data);
    });
  }

  return {
    getService: _getService,

    getRandomUsers: _getRandomUsers,
  };
})();
export default ContentService;
