<template>
    <div class="space">

    </div>
    <div v-if="book">
        <div class="book_details_container">
            <div class="book_details_item">
                <div>
                    <img :src="getAvatarUrl(book.avatar)" alt="Book Image" class="book_img">
                </div>
                <div class="book_details_item2">
                    <div class="title3">
                        <h2>{{ book.tensach }}</h2>
                    </div>
                    <div>
                        by <strong>{{ book.tacgia }}</strong>
                    </div>

                    <div class="star">
                        <span>
                            <img src="../assets/naruto.png" alt="">
                        </span>
                        <span>
                            <img src="../assets/onepie.png" alt="">
                        </span>
                        <span>
                            <img src="../assets/dietquy.png" alt="">
                        </span>
                        <span>
                            <img src="../assets/hero.png" alt="">
                        </span>
                        <span>
                            <img src="../assets/blackcover.png" alt="">
                        </span>
                    </div>
                    <div>
                        <strong> Giá:</strong>
                        {{ book.dongia }}đ
                    </div>
                    <div>
                        <strong>Số quyển:</strong>
                        {{ book.soquyen }}
                    </div>
                    <div>
                        <strong>Năm xuất bản:</strong>
                        {{ book.namxuatban }}
                    </div>
                    <p>Amoral, cunning, ruthless, and instructive, this piercing work distills three thousand years of
                        the history of power in to forty-eight well explicated laws...</p>
                    <button @click="borrowBook" class="btn btn-primary">Mượn Sách</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BookCard from "@/components/BookCard2.vue";
import InputSearch from "@/components/InputSearch.vue";
import BookList from "@/components/BookList2.vue";
import BookService from "@/services/books.service";
import TheodoiService from "../services/Theodoi.service";
import { useTodoStore } from "@/store/todostore";

export default {
    components: {
        BookCard,
        InputSearch,
        BookList,
    },
    data() {
        return {
            book: null,
            baseImageUrl: "http://localhost:3003/",
        };
    },
    methods: {
        async retrieveBook() {
            try {
                const bookId = this.$route.params.id;
                if (bookId) {
                    this.book = await TheodoiService.get(bookId);
                }
            } catch (error) {
                console.log(error);
            }
        },
        getAvatarUrl(avatarPath) {
            return `${this.baseImageUrl}${avatarPath}`;
        },
        async borrowBook() {
            try {
                // Lấy username từ store
                const todoStore = useTodoStore();
                const username = todoStore.username;

                // Kiểm tra nếu không có username hoặc book ID
                if (!username) {
                    alert("Chưa đăng nhập");
                    this.$router.push({ name: "book.login" });
                    return;
                }

                // Check if there are enough copies to borrow
                const newQuantity = parseInt(this.book.soquyen) - 1;
                if (newQuantity < 0) {
                    alert("Không còn sách để mượn");
                    return;
                }

                // Update the book quantity in the database
                const updatedBook = { soquyen: newQuantity };

                // Update the book in the database
                await BookService.update(this.book._id, updatedBook);

                // Update the local value so it reflects immediately in the UI
                this.book.soquyen = newQuantity.toString();

                // Lưu thông tin mượn sách
                const borrowData = {
                    masach: this.$route.params.id,
                    madocgia: username,
                    ngaymuon: new Date(), // Ngày mượn hiện tại
                    ngaytra: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Ngày trả sau 7 ngày
                };

                await TheodoiService.borrow(borrowData); // Gọi service để lưu thông tin

                alert("Mượn sách thành công!");
            } catch (error) {
                console.log("Lỗi khi mượn sách:", error);
            }
        }
    },
    mounted() {
        this.retrieveBook();
    },
};
</script>

<style scoped>
.page {
    text-align: left;
    max-width: 750px;
}
</style>
