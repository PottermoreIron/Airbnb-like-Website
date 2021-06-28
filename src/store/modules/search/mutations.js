import { CHANGE_TOTAL, CHANGE_KEYWORD } from "./mutation-types";
export default {
  [CHANGE_TOTAL](state, data) {
    state.total = data;
  },
  [CHANGE_KEYWORD](state, data) {
    state.keyword = data;
  },
};
