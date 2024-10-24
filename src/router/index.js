import { createWebHistory, createRouter } from "vue-router";
// import ContactBook from "@/views/ContactBook.vue";

//route cho trang chủ
import BookHome from "@/views/Book_Home.vue";
import Login from "@/views/LogIn.vue";
import SignUp from "@/views/SignUp.vue";

//route cho Book
import AddBook from "@/views/AddBook.vue";
import ListBook from "@/views/ListBook.vue";

//route cho Nhà Xuất Bản
import AddNXB from "@/views/AddNXB.vue";
import ListNXB from "@/views/ListNXB.vue";

//route cho Nhân Viên
import ListNhanVien from "@/views/ListNhanVien.vue";
import AddNhanVien from "@/views/AddNhanvien.vue";
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
    path: "/addbook",
    name: "book.add",
    component: AddBook,
    },

    {
    path: "/listbook",
    name: "book.list",
    component: ListBook,
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