import axios from "axios";
import store from "./store";
import auth from "./auth";
const URL_BASE = "http://localhost:3333/";
const api = axios.create({
  baseURL: URL_BASE,
});
api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log("error", error);
    if (error.message.includes("401")) {
      auth.logout();
    }
    return Promise.reject(error);
  }
);
api.interceptors.request.use(
  function (request) {
    if (store.token)
      request.headers = {
        Authorization: "Bearer " + store.token,
      };

    return request;
  },
  function (error) {
    console.log("error", error);
    if (error.message.includes("401")) {
      auth.logout();
    }
    return Promise.reject(error);
  }
);

export default api;
