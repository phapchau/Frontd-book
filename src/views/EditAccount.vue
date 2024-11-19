<template>
    <div v-if="contact" class="page">
        <h4>Hiệu chỉnh Liên hệ</h4>
        <EditForm :contact="contact" @submit:contact="updateContact" @delete:contact="deleteContact" />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import EditForm from "@/components/EditFrom.vue";
import ContactService from "@/services/contact.service";
export default {
    components: {
        EditForm,
    },
    props: {
        id: { type: String, Required: true },
    },
    data() {
        return {
            contact: null,
            message: "",
        };
    },
    methods: {
        async getContact() {
            try {
                const id = this.$route.params.id;
                this.contact = await ContactService.get(id);
                console.log(this.$route.params.id)
            } catch (error) {
                console.log(error);

                console.log(error);

            }
        },
        async updateContact(data) {
            try {
                await ContactService.update(this.contact._id, data);
                alert('Liên hệ được cập nhật thành công.');
                //this.$router.push({ name: "contactbook" });
            } catch (error) {
                console.log(error);
            }
        },
        async deleteContact() {
            if (confirm("Bạn muốn xóa Liên hệ này?")) {
                try {
                    await ContactService.delete(this.contact._id);
                    this.$router.push({ name: "contactbook" });
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },
    created() {
        this.getContact(this.id);
        this.message = "";
    },
};
</script>