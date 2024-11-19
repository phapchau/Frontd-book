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
            <strong>Mã đôc giả:</strong>
            {{ contact.madocgia }}
        </div>
        <div class="p-1">
            <strong>Họ lót :</strong>
            {{ contact.holot }}
        </div>

        <div class="p-1">
            <strong>Tên đọc giả:</strong>
            {{ contact.tendocgia }}
        </div>

        <div class="p-1">
            <strong>Ngày sinh:</strong>
            {{ contact.ngaysinh }}
        </div>

        <div class="p-1">
            <strong>Sex:</strong>
            {{ contact.sex }}
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