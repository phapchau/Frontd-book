<template>
  <div class="form-container">

    <div class="page">
      <h4>Thêm Sách mới</h4>
      <ContactForm :contact="newContact" @submit:contact="createContact" />
      <p>{{ message }}</p>
    </div>
  </div>
</template>
<script>
import ContactForm from "@/components/BookFrom";
import BookService from "@/services/books.service";

export default {
  components: {
    ContactForm,
  },
  data() {
    return {
      newContact: {
        "masach": "",
        "tensach": "",
      },
      message: "",
    };
  },
  methods: {
    async createContact(data) {
      try {
        await BookService.create(data);
        alert("Sách đã được tạo thành công.");
        // this.$router.push({ name: "contactbook" });
      } catch (error) {
        console.log(error);
        this.message = "Có lỗi xảy ra khi thêm sách.";
      }
    },
  },
};
</script>