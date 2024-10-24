<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true
        },
    },
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