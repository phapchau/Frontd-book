import createApiClient from "./api.service";
import axios from "axios";

const API_URL = "http://localhost:3003/api/theodoi";
class TheoDoiService {
constructor(baseUrl = "/api/theodoi") {
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

async findOne(filter) {
        return await this.Contact.findOne(filter);
    }
    async checkLogIn(data, token) {
        return axios.put(`${API_URL}`, data, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
    }
    async theodoi(data) {
        return axios.post(API_URL, data);
    }
}

// import axios from "axios";

// const API_URL = "http://localhost:3003/api/theodoi"; // Địa chỉ API để lưu thông tin mượn sách

// class TheodoiService {
//     async borrow(data) {
//         return axios.post(API_URL, data);
//     }
// }

export default new TheoDoiService();







// //kiem tra laij khuc nay vi nay them cho giong
// // class TheoDoiService {
// //     async theodoi(data) {
// //         return axios.post(API_URL, data);
// //     }
// // }
// //
// export default new TheoDoiService();