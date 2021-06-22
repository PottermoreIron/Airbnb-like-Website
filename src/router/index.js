import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "@/views/Home.vue";
import House from "@/views/House.vue";
Vue.use(VueRouter);

const routes = [
  //   {
  //     path: "/",
  //     name: "Home",
  //     component: Home,
  //   },
  //   {
  //     path: "/house",
  //     name: "House",
  //     component: House,
  //   },
  {
    path: "",
    redirect: "/house",
  },
  {
    path: "/house",
    name: "House",
    component: House,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
