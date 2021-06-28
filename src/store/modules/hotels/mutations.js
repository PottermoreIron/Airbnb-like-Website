import { GET_DEFAULT_HOTELS, GET_LABEL_HOTELS } from "./mutation-types";
export default {
  [GET_DEFAULT_HOTELS](state, data) {
    state.hotels = data;
    console.log(state.hotels);
  },
  [GET_LABEL_HOTELS](state, data) {
    state.hotels = data;
    console.log(state.hotels);
  },
};
