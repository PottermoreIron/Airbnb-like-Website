import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "@/views/Home.vue";
// import House from "@/views/House.vue";
// import Search from "@/views/Search.vue";
import PersonalInformation from "@/views/PersonalInformation.vue";
// import Order from "@/views/Order.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "PersonalInformation",
    component: PersonalInformation,
  },
  // {
  //   path: "/house",
  //   name: "House",
  //   component: House,
  // },
  // import House from "@/views/House.vue";
  // {
  //   name: "Home",
  //   component: Home,
  // },
  // {
  //   path: "/house",
  //   name: "House",
  //   component: House,
  // },
  //   {
  //     path: "",
  //     redirect: "/house",
  //   },
  // {
  //   path: "/house",
  //   name: "House",
  //   component: House,
  // },
  //   { path: "", redirect: "/search" },
  // {
  //   path: "/search",
  //   name: "Search",
  //   component: Search,
  // },
  //   { path: "", redirect: "/order" },
  //   {
  //     path: "/order",
  //     name: "Order",
  //     component: Order,
  //   },
  // { path: "", redirect: "/search" },
  // {
  //   path: "/search",
  //   name: "Search",
  //   component: Search,
  // },
  // {
  //   path: "",
  //   redirect: "/house",
  // },
  // {
  //   path: "/house",
  //   name: "House",
  //   component: House,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
