import { REGISTER_USER, LOGIN_USER } from "./mutation-types";
export default {
  registerUser({ commit }, data) {
    // 触发对应的mutations
    commit(REGISTER_USER, data);
  },
  loginUser({ commit }, data) {
    commit(LOGIN_USER, data);
  },
};
