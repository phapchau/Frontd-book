<template>
    <div class="space"></div>

    <div v-if="account">
        <div class="book_details_container">
            <div class="book_details_item">
                <div class="book_details_item2">
                    <div>
                        <strong>Tên tài khoản:</strong>
                        {{ account.username }}
                    </div>

                    <div>
                        <strong>Họ:</strong>
                        {{ account.holot }}
                    </div>

                    <div>
                        <strong>Tên:</strong>
                        {{ account.ten }}
                    </div>

                    <div>
                        <strong>Ngày sinh:</strong>
                        {{ account.ngaysinh }}
                    </div>

                    <div>
                        <strong>Giới tính:</strong>
                        {{ account.phai }}
                    </div>

                    <div>
                        <strong>Địa chỉ:</strong>
                        {{ account.diachi }}
                    </div>

                    <div>
                        <strong>Số điện thoại:</strong>
                        {{ account.sdt }}
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
import ContactService from "@/services/contact.service";

export default {
    data() {
        return {
            account: [],
            relatedBooks: [],
            baseImageUrl: "http://localhost:3003/",  // Replace with your actual base URL
        };
    },
    methods: {

        async retrieveAccountInfo() {
            try {
                const nxbId = this.$route.params.id;
                this.account = await ContactService.get(nxbId);
                console.log(this.account.username)

            } catch (error) {
                console.log(error);
            }
        },

        getAvatarUrl(avatarPath) {
            return `${this.baseImageUrl}${avatarPath}`;
        }
    },
    mounted() {
        this.retrieveAccountInfo();
    },
};
</script>