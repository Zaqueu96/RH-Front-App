import axios from "axios";
import store from "./store";
import auth from "./auth";

const URL_BASE = "http://localhost:3333/";
const api = axios.create({
  baseURL: URL_BASE,
  headers: {
    ...(store.token && { Authorization: "Bearer " + store.token }),
  },
});
api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error.status);
    if (error.status === "403") {
      auth.logout();
    }
    return Promise.reject(error);
  }
);

export default api;
