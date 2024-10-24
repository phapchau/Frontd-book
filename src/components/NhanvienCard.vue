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
            <strong>Mã nhân viên:</strong>
            {{ contact.manv }}
        </div>
        <div class="p-1">
            <strong>Họ & tên :</strong>
            {{ contact.hoten }}
        </div>
        <div class="p-1">
            <strong>Chức vụ nhân viên:</strong>
            {{ contact.chucvu }}
        </div>
        <div class="p-1">
            <strong>Địa chỉ:</strong>
            {{ contact.diachi }}
        </div>
        <div class="p-1">
            <strong>Số điện thoai:</strong>
            {{ contact.sdt }}
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