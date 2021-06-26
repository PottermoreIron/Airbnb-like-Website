import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import House from "@/views/House.vue";
import Search from "@/views/Search.vue";
import Order from "@/views/Order.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/house",
    name: "House",
    component: House,
  },
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
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  //   { path: "", redirect: "/order" },
  {
    path: "/order",
    name: "Order",
    component: Order,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
