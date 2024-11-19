<template>
    <Form @submit="submitContact" :validation-schema="contactFormSchema">
        <div class="form-group">
            <label>Tên sách</label>
            <Field name="tensach" class="form-control" v-model="contactLocal.tensach" />
            <ErrorMessage name="tensach" class="error-feedback" />
        </div>

        <div class="form-group">
            <label>Tác giả</label>
            <Field name="tacgia" class="form-control" v-model="contactLocal.tacgia" />
            <ErrorMessage name="tacgia" class="error-feedback" />
        </div>

        <div class="form-group">
            <label>Đơn giá</label>
            <Field name="dongia" type="number" class="form-control" v-model="contactLocal.dongia" />
            <ErrorMessage name="dongia" class="error-feedback" />
        </div>

        <div class="form-group">
            <label>Số quyển</label>
            <Field name="soquyen" type="number" class="form-control" v-model="contactLocal.soquyen" />
            <ErrorMessage name="soquyen" class="error-feedback" />
        </div>

        <div class="form-group">
            <label>Năm xuất bản</label>
            <Field name="namxb" type="number" class="form-control" v-model="contactLocal.namxuatban" />
            <ErrorMessage name="namxb" class="error-feedback" />
        </div>

        <div class="form-group">
            <label>Mã nxb xuất bản</label>
            <Field name="manxb" class="form-control" v-model="contactLocal.manxb" />
            <ErrorMessage name="manxb" class="error-feedback" />
        </div>

        <div class="form-group">
            <label>Mã loại</label>
            <Field name="maloai" class="form-control" v-model="contactLocal.maloai" />
            <ErrorMessage name="maloai" class="error-feedback" />
        </div>

        <div class="form-group">
            <label>Mô tả</label>
            <Field name="mota" class="form-control" v-model="contactLocal.mota" />
            <ErrorMessage name="mota" class="error-feedback" />
        </div>

        <div class="form-group">
            <label for="avatar">Hình ảnh</label>
            <input type="file" class="form-control" @change="handleImageUpload" />
            <ErrorMessage name="avatar" class="error-feedback" />
        </div>

        <div class="form-group">
            <button @click.prevent="submitContact" class="btn btn-primary">Lưu</button>
            <button v-if="contactLocal._id" type="button" class="ml-2 btn btn-danger" @click="deleteContact">
                Xóa
            </button>
            <button type="button" class="ml-2 btn btn-danger" @click="Cancel">Thoát</button>
        </div>
    </Form>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:contact", "delete:contact"],
    props: {
        contact: { type: Object, required: true },
    },
    data() {
        const contactFormSchema = yup.object().shape({
            tensach: yup.string().required("Tên sách là bắt buộc."),
            dongia: yup.number().required("Đơn giá là bắt buộc."),
            soquyen: yup.number().required("Số quyển là bắt buộc."),
            namxuatban: yup.number().required("Năm xuất bản là bắt buộc."),
        });

        return {
            contactLocal: this.contact,
            contactFormSchema,
            selectedImage: null, // Dùng để lưu file ảnh đã chọn
        };
    },
    methods: {
        async handleImageUpload(event) {
            const file = event.target.files[0];
            if (file) {
                this.selectedImage = file;

                // Tải ảnh lên server
                const formData = new FormData();
                formData.append("avatar", file);

                try {
                    const response = await this.$axios.post("http://localhost:3003/api/books/uploadCover", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    });
                    // Lưu đường dẫn ảnh vào contactLocal
                    this.contactLocal.avatar = response.data.imageUrl;
                } catch (error) {
                    console.error("Lỗi tải ảnh lên:", error);
                    alert("Không thể tải ảnh lên. Vui lòng thử lại.");
                }
            }
        },

        submitContact() {
            this.$emit("submit:contact", this.contactLocal);
        },

        deleteContact() {
            this.$emit("delete:contact", this.contactLocal._id);
        },

        Cancel() {
            const reply = window.confirm("Bạn có thay đổi chưa lưu! Bạn có muốn rời khỏi?");
            if (!reply) {
                return false;
            } else {
                this.$router.push({ name: "contactbook" });
            }
        },
    },
};
</script>

<style scoped>
@import "@/assets/form.css";
</style>
