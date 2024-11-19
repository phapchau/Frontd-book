<template>
    <div class="form-container">

        <div class="page">
            <h4>Thêm theo dõi mượn sách</h4>
            <TheodoiForm :contact="newContact" @submit:contact="createContact" />
            <p>{{ message }}</p>
        </div>
    </div>
</template>
<script>
import TheodoiForm from "../components/TheodoiFrom.vue";
import TheodoiService from "@/services/Theodoi.service";

export default {
    components: {
        TheodoiForm,
    },
    data() {
        return {
            newContact: {
                "madocgia": "",
                "masach": "",

                "ngaymuon": "",
                "ngaytra": "",
            },
            message: "",
        };
    },
    methods: {
        async createContact(data) {
            try {
                await TheodoiService.create(data);
                alert("Theo dõi đã được tạo thành công.");
            } catch (error) {
                console.log(error);
                this.message = "Có lỗi xảy ra khi thêm theo dõi.";
            }
        },
    },
};
</script>