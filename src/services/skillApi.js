import api from "./api";

class SKillApi {
  constructor() {
    this.prefix = "/api/v1/skills";
  }

  list() {
    return api.get(this.prefix);
  }
}

export default new SKillApi();
