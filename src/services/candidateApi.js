import api from "./api";

class CandidateApi {
  constructor() {
    this.prefix = "/api/v1/candidates";
  }

  list({ nameOremail, skills }) {
    return api.get(this.prefix, { params: { nameOremail, skills } });
  }

  show(candidateId) {
    return api.get(`${this.prefix}/${candidateId}`);
  }

  delete(candidateId) {
    return api.delete(`${this.prefix}/${candidateId}`);
  }

  update(candidateId, data) {
    return api.put(`${this.prefix}/${candidateId}`, {...data });
  }

  store(data) {
    return api.post(`${this.prefix}`, {...data });
  }
}

export default new CandidateApi();
