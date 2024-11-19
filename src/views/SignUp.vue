<template>
  <div class="form-container">

    <div class="page">
      <h4>Đăng nhập đọc giả</h4>
      <SignUpForm :contact="newContact" @submit:contact="createContact" />
      <p>{{ message }}</p>
    </div>
  </div>
</template>
<script>
import SignUpForm from "@/components/SignUpFrom.vue";
import ContactService from "@/services/contact.service";

export default {
  components: {
    SignUpForm,
  },
  data() {
    return {
      newContact: {
        username: "",
        password: "",
      },
      message: "",
    };
  },
  methods: {
    async createContact(data) {
      try {

        await ContactService.create(data);
        alert("Liên hệ đã được tạo thành công.");
        //this.$router.push({ name: "contactbook" });
      } catch (error) {
        console.log(error);
        this.message = "Có lỗi xảy ra khi tạo liên hệ.";
      }
    },
  },
};
</script>