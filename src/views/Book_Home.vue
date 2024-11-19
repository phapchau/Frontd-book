<template>
    <!-- <div class="page row"> -->
    <!-- <div class="col-md-10">
            <InputSearch v-model="searchText" />
        </div> -->
    <!-- <div class="mt-3 col-md-6">
            <h4>
                Danh bạ
                <i class="fas fa-address-book"></i>
            </h4>
            <ContactList v-if="filteredContactsCount > 0" :contacts="filteredContacts"
                v-model:activeIndex="activeIndex" />
            <p v-else>Không có liên hệ nào.</p>
            <div class="mt-3 row justify-content-around align-items-center">
                <button class="btn btn-sm btn-primary" @click="refreshList()">
                    <i class="fas fa-redo"></i> Làm mới
                </button> -->
    <!-- <button class="btn btn-sm btn-success" @click="goToAddContact">
                    <i class="fas fa-plus"></i> đăng ký
                </button>
                <button class="btn btn-sm btn-success" @click="goToLogIn">
                    <i class="fas fa-plus"></i> đăng nhập
                </button>

                <button class="btn btn-sm btn-success" @click="goToAddBook">
                    <i class="fas fa-plus"></i> thêm sách
                </button> -->

    <!-- <button class="btn btn-sm btn-danger" @click="removeAllContacts">
                    <i class="fas fa-trash"></i> Xóa tất cả
                </button>
            </div> -->



    <!-- </div> -->



    <!-- <div class="mt-3 col-md-6">
            <div v-if="activeContact">
                <h4>
                    Chi tiết Liên hệ
                    <i class="fas fa-address-card"></i>
                </h4>
                <ContactCard :contact="activeContact" />
            </div>
        </div> -->





    <!-- <div class="container">
        <div class="card">
            <img class="img" src="../assets/naruto1.png" alt="Image 1">
            <div class="card-content">
                <h3 class="title">Naruto</h3>
            </div>
        </div>
        <div class="card">
            <img class="img" src="../assets/blackcover.png" alt="Image 2">
        </div>
        <div class="card">
            <img class="img" src="../assets/dietquy.png" alt="Image 3">
        </div>
        <div class="card">
            <img class="img" src="../assets/onepie.png" alt="Image 4">
        </div>
        <div class="card">
            <img class="img" src="../assets/hero.png" alt="Image 5">
        </div>
    </div>



    <div v-if="contacts.length >5 " class ="book_trending_container">
        <div class="title2">
            <h2>Trending Books Of The Week</h2>
        </div>
        <div class="book_trending_container">

            <div v-for="contact in contacts.slice(4, 7)" :key="contact.id" class="book_trending_item"
                @click="goToBookDetails(contact._id)">
                <div>
                    <img :src="getAvatarUrl(contact.avatar)" alt="Book Image" class="book_img">
                </div>
                <div class="star">
                    <span>
                        <img src="../assets/dietquy.png" alt="">
                    </span>
                    <span>
                        <img src="../assets/onepie.png" alt="">
                    </span>
                    <span>
                        <img src="../assets/blackcover.png" alt="">
                    </span>
                    <span>
                        <img src="../assets/naruto.png" alt="">
                    </span>
                    <span>
                        <img src="../assets/hero.png" alt="">
                    </span>


                </div>

                <div class="name_book">
                    {{ contact.tensach }}
                </div>
                <div class="dongia_book">
                    {{ contact.dongia }}
                </div>
            </div>
        </div>
    </div> -->
    <!--  -->
    <!-- <div class="gallery">
        <div class="img">
            <img src="../assets/dietquy.png" alt="Image 1">
        </div>
        <div class="img">
            <img src="../assets/naruto1.png" alt="Image 2">
        </div>
        <div class="img">
            <img src="../assets/blackcover.png" alt="Image 3">
        </div>
        <div class="img">
            <img src="../assets/hero.png" alt="Image 4">
        </div>
        <div class="img">
            <img src="../assets/onepie.png" alt="Image 5">
        </div>
    </div> -->

    <!--  -->
    <!-- <div class="container">
        <div class="scrollable-container">
            <div class="card">
                <img class="img" src="../assets/naruto1.png" alt="Image 1">
                <div class="card-content">
                    <h3 class="title">Naruto</h3>
                </div>
            </div>
            <div class="card">
                <img class="img" src="../assets/blackcover.png" alt="Image 2">
            </div>
            <div class="card">
                <img class="img" src="../assets/dietquy.png" alt="Image 3">
            </div>
            <div class="card">
                <img class="img" src="../assets/onepie.png" alt="Image 4">
            </div>
            <div class="card">
                <img class="img" src="../assets/hero.png" alt="Image 5">
            </div>
        </div>


    </div> -->
    <!-- Phần nội dung hiển thị sau khi cuộn hết 5 ảnh -->
    <!-- <div class="book_trending_container">
        <div class="title2">
            <h2>Trending Books Of The Week</h2>
        </div>
        <div class="book_trending_item">
            <img src="../assets/dietquy.png" alt="Book 1">
            <div class="name_book">Demon Slayer</div>
            <div class="dongia_book">$20</div>
        </div>
        <div class="book_trending_item">
            <img src="../assets/onepie.png" alt="Book 2">
            <div class="name_book">One Piece</div>
            <div class="dongia_book">$25</div>
        </div>
        <div class="book_trending_item">
            <img src="../assets/blackcover.png" alt="Book 3">
            <div class="name_book">Black Clover</div>
            <div class="dongia_book">$18</div>
        </div>
    </div> -->



    <div class="gallery">

        <div class="img">
            <img src="../assets/dietquy.png" alt="Image 1">
        </div>
        <div class="img">
            <img src="../assets/naruto2.png" alt="Image 2">
        </div>
        <div class="img">
            <img src="../assets/blackcover.png" alt="Image 3">
        </div>
        <div class="img">
            <img src="../assets/hero.png" alt="Image 4">
        </div>
        <div class="img">
            <img src="../assets/onepie.png" alt="Image 5">
        </div>
        <div class="img">
            <img src="../assets/goku.png" alt="Image 6">
        </div>
        <div class="img">
            <img src="../assets/saitama.png" alt="Image 7">
        </div>
    </div>

    <div class="spacer"></div>

    <!-- <div class="hidden-section">
        <div class="book_trending_container">
            <div class="title2">
                <h2>Trending Books Of The Week</h2>
            </div>
            <div class="book_trending_item">
                <img src="../assets/dietquy.png" alt="Book 1">
                <div class="name_book">Demon Slayer</div>
                <div class="dongia_book">Giá:50.000VND</div>
                <div class="soquyen_book">Số quyển:50</div>
                <div class="namxuatban_book">Năm xuất bản: 2016</div>
            </div>
            <div class="book_trending_item">
                <img src="../assets/onepie.png" alt="Book 2">
                <div class="name_book">One Piece</div>
                <div class="dongia_book">Giá:100.000VND</div>
                <div class="soquyen_book">Số quyển:75</div>
                <div class="namxuatban_book">Năm xuất bản: 1997</div>

            </div>
            <div class="book_trending_item">
                <img src="../assets/blackcover.png" alt="Book 3">
                <div class="name_book">Black Clover</div>
                <div class="dongia_book">Giá:75.000VND</div>
                <div class="soquyen_book">Số quyển:120</div>
                <div class="namxuatban_book">Năm xuất bản: 2017</div>
            </div>
            <div class="book_trending_item">
                <img src="../assets/naruto2.png" alt="Book 3">
                <div class="name_book">Naruto</div>
                <div class="dongia_book">Giá:45.000VND</div>
                <div class="soquyen_book">Số quyển:90</div>
                <div class="namxuatban_book">Năm xuất bản: 1999</div>
            </div>
            <div class="book_trending_item">
                <img src="../assets/goku.png" alt="Book 3">
                <div class="name_book">7 viên ngọc rồng</div>
                <div class="dongia_book">Giá:45.000VND</div>
                <div class="soquyen_book">Số quyển:90</div>
                <div class="namxuatban_book">Năm xuất bản: 1984</div>
            </div>
            <div class="book_trending_item">
                <img src="../assets/hero.png" alt="Book 3">
                <div class="name_book">Học viện anh hùng</div>
                <div class="dongia_book">Giá:45.000VND</div>
                <div class="soquyen_book">Số quyển:90</div>
                <div class="namxuatban_book">Năm xuất bản: 2014</div>
            </div>
        </div>
    </div> -->

    <div class="title2">
        <h2>Sách Xu Hướng</h2>
    </div>
    <div class="book_trending_container">

        <div v-for="contact in contacts.slice(0, 3)" :key="contact.id" class="book_trending_item"
            @click="goToBookDetails(contact._id)">
            <div>
                <img :src="getAvatarUrl(contact.avatar)" alt="Book Image" class="book_img">
            </div>
            <div class="star">
                <span>
                    <img src="../assets/star.png" alt="">
                </span>
                <span>
                    <img src="../assets/star.png" alt="">
                </span>
                <span>
                    <img src="../assets/star.png" alt="">
                </span>
                <span>
                    <img src="../assets/star.png" alt="">
                </span>
                <span>
                    <img src="../assets/star.png" alt="">
                </span>


            </div>

            <div class="name_book">
                {{ contact.tensach }}
            </div>
            <div class="dongia_book">
                {{ formatPrice(contact.dongia) }}đ
            </div>
        </div>
    </div>







</template>
<script>
import BookCard from "@/components/BookCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import BookList from "@/components/BookList.vue";
import BookService from "@/services/books.service";
export default {
    components: {
        BookCard,
        InputSearch,
        BookList,
    },
    // Đoạn mã xử lý đầy đủ sẽ trình bày bên dưới
    data() {
        return {
            contacts: [],
            activeIndex: -1,
            searchText: "",
            baseImageUrl: "http://localhost:3003",
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
        // Lọc danh sách sách dựa trên từ khóa tìm kiếm
        filteredContacts() {
            if (!this.searchText.trim()) {
                return this.contacts; // Nếu không nhập tìm kiếm, trả về toàn bộ danh sách
            }

            const lowerSearchText = this.searchText.toLowerCase();

            return this.contacts.filter((contact) => {
                return (
                    (contact.tensach && contact.tensach.toLowerCase().includes(lowerSearchText)) ||
                    (contact.tacgia && contact.tacgia.toLowerCase().includes(lowerSearchText))
                );
            });
        },
    },
    methods: {
        // Lấy danh sách sách từ API
        async retrieveContacts() {
            try {
                this.contacts = await BookService.getAll();
                console.log("Danh sách sách:", this.contacts); // Kiểm tra dữ liệu
            } catch (error) {
                console.error("Lỗi khi tải danh sách sách:", error);
            }
        },
        // Tạo URL đầy đủ cho hình ảnh
        getAvatarUrl(avatarPath) {
            return `${this.baseImageUrl}${avatarPath}`;
        },
        refreshList() {
            this.retrieveContacts();
            this.activeIndex = -1;
        },
        goToBookDetails(bookId) {
            // Navigate to the book details page with the given bookId
            this.$router.push({ name: "book.details", params: { id: bookId } });
        },
        async removeAllContacts() {

            if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
                try {
                    await ContactService.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },


        goToAddContact() {
            this.$router.push({ name: "book.signup" });
        },
        goToAddBook() {
            this.$router.push({ name: "book.add" });
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