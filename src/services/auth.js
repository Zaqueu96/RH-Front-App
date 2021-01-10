import api from "./api";
class Auth {
  login({ username, password }) {
    return api.post("/api/login", { username, password });
  }

  logout() {
    localStorage.clear();
  }
}
export default new Auth();
