import createApiClient from "./api.service";
import axios from "axios";

const API_URL = "http://localhost:3003/api/nhaxuatban";
class NhaXuatBanService {
constructor(baseUrl = "/api/nhaxuatban") {
this.api = createApiClient(baseUrl);
}
async getAll() {
return (await this.api.get("/")).data;
}
async create(data) {
return (await this.api.post("/", data)).data;
}
async deleteAll() {
return (await this.api.delete("/")).data;
}
async get(id) {
return (await this.api.get(`/${id}`)).data;
}
async update(id, data) {
return (await this.api.put(`/${id}`, data)).data;
}
async delete(id) {
return (await this.api.delete(`/${id}`)).data;
}

 async getByManxb(manxb) {
        return (await this.api.get(`/find/${manxb}`)).data;
    }

async findOne(filter) {
        return await this.Contact.findOne(filter);
    }
    async checkLogIn(data, token) {
        return axios.put(`${API_URL}`, data, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
    }
}
export default new NhaXuatBanService();