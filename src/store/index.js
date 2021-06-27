import Vue from "vue";
import Vuex from "vuex";
import userModule from "./modules/user";
import orderModule from "./modules/order";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: userModule,
    order: orderModule,
  },
});
