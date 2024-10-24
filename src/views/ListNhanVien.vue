<template>
    <div class="page row">
        <div class="col-md-10">
            <InputSearch v-model="searchText" />
        </div>
        <div class="mt-3 col-md-6">
            <h4>
                Nhân Viên
                <i class="fas fa-address-book"></i>
            </h4>
            <NhanVienList v-if="filteredContactsCount > 0" :contacts="filteredContacts"
                v-model:activeIndex="activeIndex" />
            <p v-else>Không có nhân viên nào.</p>
            <div class="mt-3 row justify-content-around align-items-center">
                <button class="btn btn-sm btn-primary" @click="refreshList()">
                    <i class="fas fa-redo"></i> Làm mới
                </button>
                <button class="btn btn-sm btn-success" @click="goToAddContact">
                    <i class="fas fa-plus"></i> Đăng ký
                </button>
                <button class="btn btn-sm btn-success" @click="goToLogIn">
                    <i class="fas fa-plus"></i> Đăng nhập
                </button>

                <button class="btn btn-sm btn-success" @click="goToAddNXB">
                    <i class="fas fa-plus"></i> Thêm sách
                </button>

                <button class="btn btn-sm btn-danger" @click="removeAllContacts">
                    <i class="fas fa-trash"></i> Xóa tất cả
                </button>
            </div>
        </div>
        <div class="mt-3 col-md-6">
            <div v-if="activeContact">
                <h4>
                    Chi tiết Liên hệ
                    <i class="fas fa-address-card"></i>
                </h4>
                <NhanVienCard :contact="activeContact" />
            </div>
        </div>
    </div>
</template>
<script>
import NhanVienCard from "@/components/NhanVienCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import NhanVienList from "@/components/NhanVienList.vue";
import NhanVienService from "@/services/Nhanvien.service";
export default {
    components: {
        NhanVienCard,
        InputSearch,
        NhanVienList,
    },
    // Đoạn mã xử lý đầy đủ sẽ trình bày bên dưới
    data() {
        return {
            contacts: [],
            activeIndex: -1,
            searchText: "",
        };
    },
    watch: {
        // Giám sát các thay đổi của biến searchText.
        // Bỏ chọn phần tử đang được chọn trong danh sách.
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        // Chuyển các đối tượng contact thành chuỗi để tiện cho tìm kiếm.
        contactStrings() {
            return this.contacts.map((contact) => {
                const { name, password } = contact;
                return [name, password].join("");
            });
        },
        // Trả về các contact có chứa thông tin cần tìm kiếm.
        filteredContacts() {
            if (!this.searchText) return this.contacts;
            return this.contacts.filter((_contact, index) =>
                this.contactStrings[index].includes(this.searchText)
            );
        },
        activeContact() {
            if (this.activeIndex < 0) return null;
            return this.filteredContacts[this.activeIndex];
        },
        filteredContactsCount() {
            return this.filteredContacts.length;
        },
    },
    methods: {
        async retrieveContacts() {
            try {
                this.contacts = await NhanVienService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveContacts();
            this.activeIndex = -1;
        },
        async removeAllContacts() {

            if (confirm("Bạn muốn xóa tất cả các nhân viên?")) {
                try {
                    await NhanVienService.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },


        goToAddContact() {
            this.$router.push({ name: "book.signup" });
        },
        goToAddNXB() {
            this.$router.push({ name: "nhanvien.add" });
        },
        goToLogIn() {
            this.$router.push({ name: "book.login" });
        },

        mounted() {
            this.refreshList();
        },
    },
};

</script>
<style scoped>
.page {
    text-align: left;
    max-width: 750px;

}
</style>