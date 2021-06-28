import {
  GET_DEFAULT_HOTELS,
  GET_LABEL_HOTELS,
  CHANGE_TOTAL,
} from "./mutation-types";
export default {
  [GET_DEFAULT_HOTELS](state, data) {
    state.hotels = data;
  },
  [GET_LABEL_HOTELS](state, data) {
    state.hotels = data;
  },
  [CHANGE_TOTAL](state, data) {
    state.total = data;
  },
};
