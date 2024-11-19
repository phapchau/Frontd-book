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
            <strong>Mã sách :</strong>
            {{ contact.masach }}
        </div>

        <div class="p-1">
            <strong>Ngày mượn:</strong>
            {{ contact.ngaymuon }}
        </div>
        <div class="p-1">
            <strong>Ngày trả:</strong>
            {{ contact.ngaytra }}
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