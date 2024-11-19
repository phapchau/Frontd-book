<template>
  <div class="form-container">

    <div class="page">
      <h4>Thêm Nhân Viên mới</h4>
      <NhanvienForm :contact="newContact" @submit:contact="createContact" />
      <p>{{ message }}</p>
    </div>
  </div>
</template>
<script>
import NhanvienForm from "../components/NhanvienFrom.vue";
import NhanVienService from "@/services/Nhanvien.service";

export default {
  components: {
    NhanvienForm,
  },
  data() {
    return {
      newContact: {
        "manv": "",
        "hoten": "",
        "chucvu": "",
        "diachi": "",
        "sdt": "",
      },
      message: "",
    };
  },
  methods: {
    async createContact(data) {
      try {
        await NhanVienService.create(data);
        alert("Nhân viên đã được tạo thành công.");
      } catch (error) {
        console.log(error);
        this.message = "Có lỗi xảy ra khi thêm nhân viên.";
      }
    },
  },
};
</script>