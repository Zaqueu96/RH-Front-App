import api from "./api";

class Auth {
  login({ email, password }) {
    return api.post("/auth/login", { email, password });
  }

  logout() {
    localStorage.clear();
    document.location.reload();
  }
}
export default new Auth();
