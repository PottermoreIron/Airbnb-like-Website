import Vue from "vue";
import Vuex from "vuex";
import userModule from "./modules/user";
import orderModule from "./modules/order";
import hotelsModule from "./modules/hotels";
import hotelModule from "./modules/hotel";
import searchModule from "./modules/search";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: userModule,
    order: orderModule,
    hotels: hotelsModule,
    hotel: hotelModule,
    search: searchModule,
  },
  //   状态持久化
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      reducer(val) {
        return { user: val.user };
      },
    }),
  ],
});
