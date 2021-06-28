import { CHANGE_HOTEL } from "./mutation-types";
export default {
  [CHANGE_HOTEL](state, data) {
    state.hotel = data;
  },
};
