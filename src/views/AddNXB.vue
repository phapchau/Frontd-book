<template>
  <div class="form-container">

    <div class="page">
      <h4>Thêm nhà xuất bản mới</h4>
      <NXBForm :contact="newContact" @submit:contact="createContact" />
      <p>{{ message }}</p>
    </div>
  </div>
</template>
<script>
import NXBForm from "@/components/NhaxuatbanForm.vue";
import NXBService from "@/services/Nhaxuatban.service";

export default {
  components: {
    NXBForm,
  },
  data() {
    return {
      newContact: {
        "manxb": "",
        "tennxb": "",
        "diachi": "",
      },
      message: "",
    };
  },
  methods: {
    async createContact(data) {
      try {
        await NXBService.create(data);
        alert("NXB đã được tạo thành công.");
      } catch (error) {
        console.log(error);
        this.message = "Có lỗi xảy ra khi thêm nxb.";
      }
    },
  },
};
</script>