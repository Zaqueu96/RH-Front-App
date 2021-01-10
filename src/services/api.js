import axios from "axios";
import store from "./store";

const URL_BASE = "http://localhost:3333/";
const api = axios.create({
  baseURL: URL_BASE,
  headers: {
    Authorization: "Bearer " + store.token,
  },
});

export default api;
