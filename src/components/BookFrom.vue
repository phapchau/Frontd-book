<template>
    <Form @submit="submitContact" :validation-schema="contactFormSchema">
        <div class="form-group">
            <label for="masach">Mã sách</label>
            <Field name="masach" type="text" class="form-control" v-model="contactLocal.masach" />
            <ErrorMessage name="masach" class="error-feedback" />
        </div>

        <div class="form-group">
            <label>Tên sách</label>
            <Field name="tensach" class="form-control" v-model="contactLocal.tensach" />
            <ErrorMessage name="tensach" class="error-feedback" />
        </div>

        <div class="form-group">
            <label>Đơn giá (VNG)</label>
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
            <Field name="namxb" type="year" class="form-control" v-model="contactLocal.namxuatban" />
            <ErrorMessage name="namxb" class="error-feedback" />
        </div>

        <div class="form-group">
            <label>Tác giả</label>
            <Field name="tacgia" type="tacgia" class="form-control" v-model="contactLocal.tacgia" />
            <ErrorMessage name="namxb" class="error-feedback" />
        </div>

        <div class="form-group">
            <button @click.prevent="submitContact" class="btn btn-primary">Lưu</button>
            <button v-if="contactLocal._id" type="button" class="ml-2 btn btn-danger" @click="deleteContact">
                Lưu
            </button>
            <button type="button" class="ml-2 btn btn-danger" @click="Cancel">
                Thoát
            </button>
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
        contact: { type: Object, required: true }
    },
    data() {
        const contactFormSchema = yup.object().shape({
            masach: yup
                .string()
                .required("Mã sách là bắt buộc.")
                .min(2, "Mã sách phải ít nhất 2 ký tự.")
                .max(50, "Mã sách không được quá 50 ký tự."),
            tensach: yup
                .string()
                .required("Tên sách là bắt buộc."),
            dongia: yup
                .number()
                .required("Đơn giá là bắt buộc."),
            soquyen: yup
                .number()
                .required("Số quyển là bắt buộc."),
            namxuatban: yup
                .number()
                .required("Năm xuất bản là bắt buộc."),
        });

        return {
            contactLocal: this.contact,
            contactFormSchema,
        };
    },
    methods: {
        submitContact() {
            console.log("Submit Contact được gọi");
            this.$emit("submit:contact", this.contactLocal);
        },
        deleteContact() {
            this.$emit("delete:contact", this.contactLocal.id);
        },
        Cancel() {
            const reply = window.confirm('You have unsaved changes! Do you want to leave?');
            if (!reply) {
                return false;
            } else {
                this.$router.push({ name: "contactbook" });
            }
        }
    },
};
</script>

<style scoped>
@import "@/assets/form.css";
</style>
