import {
  REGISTER_USER,
  LOGIN_USER,
  CHANGE_USER_LAT,
  CHANGE_USER_LNG,
} from "./mutation-types";
export default {
  registerUser({ commit }, data) {
    // 触发对应的mutations
    commit(REGISTER_USER, data);
  },
  loginUser({ commit }, data) {
    commit(LOGIN_USER, data);
  },
  changeUserLat({ commit }, data) {
    commit(CHANGE_USER_LAT, data);
  },
  changeUserLng({ commit }, data) {
    commit(CHANGE_USER_LNG, data);
  },
};
