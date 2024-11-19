<template>
    <div class="form-container">

        <div class="page">
            <h4>Thêm Đôc giả mới</h4>
            <DocgiaForm :contact="newContact" @submit:contact="createContact" />
            <p>{{ message }}</p>
        </div>
    </div>
</template>
<script>
import DocgiaForm from "../components/DocgiaFrom.vue";
import DocgiaService from "@/services/Docgia.service";

export default {
    components: {
        DocgiaForm,
    },
    data() {
        return {
            newContact: {
                "madocgia": "",
                "holot": "",
                "tendocgia": "",
                "ngaysinh": "",
                "sex": "",
                "diachi": "",
                "sdt": "",
            },
            message: "",
        };
    },
    methods: {
        async createContact(data) {
            try {
                await DocgiaService.create(data);
                alert("Độc giả đã được tạo thành công.");
            } catch (error) {
                console.log(error);
                this.message = "Có lỗi xảy ra khi thêm độc giả.";
            }
        },
    },
};
</script>


<!-- <template>
    <div class="form-container">

        <div class="page">
            <h4>Thêm Đọc giả mới</h4>
            <DocGiaForm :contact="newContact" @submit:contact="createContact" />
            <p>{{ message }}</p>
        </div>
    </div>
</template>
<script>
import DocGiaForm from "@/components/DocgiaFrom.vue";
import DocGiaService from "@/services/Docgia.service";

export default {
    components: {
        DocGiaForm,
    },
    data() {
        return {
            newContact: {
                "madocgia": "",
                "holot": "",
                "tendocgia": "",
                "ngaysinh": "",
                "sex": "",
                "diachi": "",
                "sdt": "",
            },
            message: "",
        };
    },
    methods: {
        async createContact(data) {
            try {
                await DocGiaService.create(data);
                alert("Nhân viên đã được tạo thành công.");
            } catch (error) {
                console.log(error);
                this.message = "Có lỗi xảy ra khi thêm đọc giả.";
            }
        },
    },
};
</script> -->