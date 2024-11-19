import createApiClient from "./api.service";
import axios from "axios";

const API_URL = "http://localhost:3003/api/contacts";
class ContactService {
constructor(baseUrl = "/api/contacts") {
this.api = createApiClient(baseUrl);
}
async getAll() {
return (await this.api.get(API_URL)).data;
}
async create(data) {
return (await this.api.post(API_URL, data)).data;
}
async deleteAll() {
return (await this.api.delete(API_URL)).data;
}
async get(id) {
return (await this.api.get(API_URL/`${id}`)).data;
}
async update(id, data) {
return (await this.api.put(`/${id}`, data)).data;
}
async delete(id) {
return (await this.api.delete(`/${id}`)).data;
}

async findOne(filter) {
        return await this.Contact.findOne(filter);
    }

async findByName(username) {
        return (await this.api.get(`/user/${username}`)).data;
    }
async checkLogIn(data, token) {
        return axios.put(`${API_URL}`, data, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
    }
}
export default new ContactService();