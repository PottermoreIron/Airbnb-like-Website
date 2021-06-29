import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import House from "@/views/House.vue";
import Search from "@/views/Search.vue";
import PersonalInformation from "@/views/PersonalInformation.vue";
import Order from "@/views/Order.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "PersonalInformation",
    component: PersonalInformation,
  },

  {
    path: "/house",
    name: "House",
    component: House,
  },

  {
    path: "/search",
    name: "Search",
    component: Search,
  },

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
router.afterEach(() => {
  window.scrollTo(0, 0);
});
export default router;
