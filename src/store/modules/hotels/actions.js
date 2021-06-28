import {
  GET_DEFAULT_HOTELS,
  GET_LABEL_HOTELS,
  CHANGE_TOTAL,
} from "./mutation-types";
export default {
  // 只有keyWord的搜索
  getDefaultHotels({ commit }, data) {
    // 触发对应的mutations
    commit(GET_DEFAULT_HOTELS, data);
  },
  getLabelHotels({ commit }, data) {
    // 触发对应的mutations
    commit(GET_LABEL_HOTELS, data);
  },
  changeTotal({ commit }, data) {
    // 触发对应的mutations
    commit(CHANGE_TOTAL, data);
  },
};
