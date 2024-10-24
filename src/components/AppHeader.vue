<template>
    <header>
        <nav>
            <a href="/" class="navbar-brand">Quản lý mượn sách</a>
            <div class="mr-auto navbar-nav">
                <li class="nav-item">
                    <router-link :to="{ name: 'contactbook' }" class="aliceblue">
                        Home
                        <i class="fas fa-address-book"></i>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'contactbook' }" class="aliceblue">
                        Book
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'contactbook' }" class="aliceblue">
                        Danh ba
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'contactbook' }" class="aliceblue">
                        Theo doi muon sach
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'contactbook' }" class="aliceblue">
                        Nhan vien
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'contactbook' }" class="aliceblue">
                        Doc gia
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'book.login' }">
                        <button class="btn_login">
                            Login
                        </button>
                    </router-link>
                </li>
            </div>
        </nav>
    </header>
</template>
