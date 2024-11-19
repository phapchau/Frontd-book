import { createWebHistory, createRouter } from "vue-router";
// import ContactBook from "@/views/ContactBook.vue";

//route cho trang chủ
import BookHome from "@/views/Book_Home.vue";
import Login from "@/views/LogIn.vue";
import SignUp from "@/views/SignUp.vue";
import AdminSignUp from "@/views/AdminSignUp.vue";
import AccountDetails from "@/views/AccountDetails.vue";
// import AdminSignUp from "@/components/AdminSignUp.vue";

//route cho Book
import AddBook from "@/views/AddBook.vue";
import ListBook from "@/views/ListBook.vue";
import BookDetails from "@/views/BookDetails.vue";
import BookEdit from "@/views/BookEdit.vue";

//route cho Nhà Xuất Bản
import AddNXB from "@/views/AddNXB.vue";
import ListNXB from "@/views/ListNXB.vue";


//route cho Nhân Viên
import ListNhanVien from "@/views/ListNhanVien.vue";
import AddNhanVien from "@/views/AddNhanvien.vue";
import ListAccount from "@/views/ListAccount.vue";
import EditAccount from "@/views/EditAccount.vue";

//route cho đọc giả
import AddDocGia from "@/views/AddDocGia.vue";
import ListDocGia from "@/views/ListDocGia.vue";

//rounte cho theo doi
import AddTheodoi from "@/views/AddTheodoi.vue";
import ListTheodoi from "@/views/ListTheoDoi.vue";
const routes = [
{
    path: "/",
    name: "contactbook",
    component: BookHome,
    },

    {
    path: "/login",
    name: "book.login",
    component: Login,
    },

    {
    path: "/signup",
    name: "book.signup",
    component: SignUp,
    },

    {
        path: "/admin/sigup",
        name: "admin.signup",
        component: AdminSignUp,
    },

    {
    path: "/addbook",
    name: "book.add",
    component: AddBook,
    },

    {
    path: "/books/edit/:id",
    name : "book.edit",
    component: BookEdit,
    },

    {
    path: "/listbook",
    name: "book.list",
    component: ListBook,
    },

    {
    path: "/listaccount",
    name: "account.list",
    component: ListAccount,
    },

    {
    path: "/edit/account/:id",
    name: "account.edit",
    component:EditAccount,
    },

    {
    path: "/listnxb",
    name: "nxb.list",
    component: ListNXB,
    },

    {
    path: "/Addnxb",
    name: "nxb.add",
    component: AddNXB,
    },

    {
    path: "/listnhanvien ",
    name: "nhanvien.list",
    component: ListNhanVien,
    },

    {
    path: "/addnhanvien",
    name: "nhanvien.add",
    component: AddNhanVien,
    },
    {
    path: "/books/:id",
    name: "book.details",
    component: BookDetails,
    props: true
    },

    {
    path: "/account/:id",
    name : "account.details",
    component: AccountDetails,
    props:true,
    },

     {

    path: "/listdocgia ",
    name: "docgia.list",
    component: ListDocGia,
    },
    {
    path: "/adddocgia",
    name: "docgia.add",
    component: AddDocGia,
    },

    {
    path: "/listtheodoi ",
    name: "theodoi.list",
    component: ListTheodoi,
    },
    
    {
    path: "/addthedoi",
    name: "theodoi.add",
    component: AddTheodoi,
    },

//     {
//         path: "/:pathMatch(.*)*",
//         name: "notfound",
//         component: () =>import("@/views/NotFound.vue"),
//     },

//     {
//         path: "/contacts/:id",
//         name: "contact.edit",
//         component: () => import("@/views/ContactEdit.vue"),
//         props: true // Truyền các biến trong $route.params vào làm props
// },
// {
//     path: "/contactAdd",
//     name: "contact.add",
//     component: () => import("../views/ContactAdd.vue"),
//     props: true,
//   },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;