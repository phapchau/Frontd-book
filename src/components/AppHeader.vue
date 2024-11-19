<template>
    <header>

        <h2 class="logo">Quản lý mượn sách</h2>
        <nav class="navbar   navigation">
            <div class="nav-item">
                <router-link :to="{ name: 'contactbook' }" style="color: aliceblue;">

                    Home
                    <i class="fas fa-address-book"></i>

                </router-link>
            </div>
            <div class="nav-item">
                <router-link :to="{ name: 'book.list' }" style="color: aliceblue;">

                    Sách
                    <i class="fas fa-address-book"></i>

                </router-link>
            </div>
            <div class="nav-item">
                <router-link :to="{ name: 'account.list' }" style="color: aliceblue;">

                    Tài khoản
                    <i class="fas fa-address-book"></i>

                </router-link>
            </div>
            <div class="nav-item">
                <router-link :to="{ name: 'nxb.list' }" style="color: aliceblue;">

                    Nhà xuất bản
                    <i class="fas fa-address-book"></i>

                </router-link>
            </div>
            <div class="nav-item">
                <router-link :to="{ name: 'nhanvien.list' }" style="color: aliceblue;">

                    Nhân viên
                    <i class="fas fa-address-book"></i>

                </router-link>
            </div>
            <div class="nav-item">
                <router-link :to="{ name: '' }" style="color: aliceblue;">

                    Mượn sách
                    <i class="fas fa-address-book"></i>

                </router-link>
            </div>
            <div class="nav-item2">
                <router-link v-if="!username" :to="{ name: 'book.login' }">
                    <button class="btn_login">Login</button>
                </router-link>
                <button v-else @click="logout" class="btn_login">
                    Đăng xuất
                </button>
            </div>


        </nav>
        <!-- <router-view></router-view> -->
    </header>
</template>

<script>
import { useTodoStore } from "@/store/todostore"; // Import the Pinia store

export default {
    computed: {
        username() {
            const store = useTodoStore(); // Access the store
            return store.username; // Return the username from the store
        }
    },
    methods: {
        logout() {
            const store = useTodoStore();
            store.clearUsername(); // Call the action to clear the username in the store and localStorage
        }
    }
};
</script>
