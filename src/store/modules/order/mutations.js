import { CHOOSE_DATE } from "./mutation-types";
export default {
  [CHOOSE_DATE](state, data) {
    state.oStartDate = data[0];
    state.oEndDate = data[1];
  },
};
