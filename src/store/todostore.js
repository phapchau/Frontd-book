// store/todostore.js

import { defineStore } from 'pinia';

export const useTodoStore = defineStore({
    id: 'todo',
    state: () => ({
        username: localStorage.getItem('username') || null, // Khởi tạo từ localStorage
    }),
    actions: {
        setUsername(name) {
            this.username = name;
            localStorage.setItem('username', name); // Lưu username vào localStorage
        },
        clearUsername() {
            this.username = '';
            localStorage.removeItem('username'); // Xóa username khỏi localStorage khi đăng xuất
        }
    }
});
