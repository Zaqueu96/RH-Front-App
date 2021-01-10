import api from "./api";

class CandidateApi {
  constructor() {
    this.prefix = "/api/v1/candidates";
  }

  list({ nameOrEmail = null, skills = null }) {
    let params = {};
    if (nameOrEmail) params.nameOrEmail = nameOrEmail;
    if (skills) params.skills = skills;
    return api.get(this.prefix, { params: { ...params } });
  }

  show(candidateId) {
    return api.get(`${this.prefix}/${candidateId}`);
  }

  delete(candidateId) {
    return api.delete(`${this.prefix}/${candidateId}`);
  }

  update(candidateId, data) {
    return api.put(`${this.prefix}/${candidateId}`, { ...data });
  }

  store(data) {
    return api.post(`${this.prefix}`, { ...data });
  }
}

export default new CandidateApi();
