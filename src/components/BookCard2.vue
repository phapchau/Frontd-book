<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true
        },
    },
    computed: {
        //Đảm bảo không cần khai báo lại avataerUrl
        imageUrl() {
            return `http://localhost:3003/${this.contact.avatar}`;
        }
    }
};
</script>

<template>
    <div>
        <div class="p-1">
            <strong>Mã sách:</strong>
            {{ contact.masach }}
        </div>
        <div class="p-1">
            <strong>Tên sách:</strong>
            {{ contact.tensach }}
        </div>
        <div class="p-1">
            <strong>Đơn giá sách:</strong>
            {{ contact.dongia }}
        </div>
        <div class="p-1">
            <strong>Số quyển:</strong>
            {{ contact.soquyen }}
        </div>
        <div class="p-1">
            <strong>Năm xuất bản:</strong>
            {{ contact.namxuatban }}
        </div>
        <div class="p-1">
            <strong>Ảnh:</strong>
            <!-- Sử dụng computed property imageUrl -->
            <img :src="imageUrl" alt="Book Image">
        </div>
        <!-- <div class="p-1">
            <strong>Số quyển:</strong>
            {{ contact.soquyen }}
        </div> -->
        <!-- <div class="p-1">
            <strong>Liên hệ yêu thích:&nbsp;</strong>
            <i v-if="contact.favorite" class="fas fa-check"></i>
            <i v-else class="fas fa-times"></i>
        </div> -->
    </div>
</template>