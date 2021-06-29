import {
  REGISTER_USER,
  LOGIN_USER,
  CHANGE_USER_LAT,
  CHANGE_USER_LNG,
} from "./mutation-types";
export default {
  [REGISTER_USER](state, data) {
    state.uId = data.id;
    state.uIdCard = data.userIdc;
    state.uPhone = data.userPhone;
    state.uPassword = data.userPw;
    state.uName = data.userName;
    state.uPic = data.userPic;
    state.uDelete = data.userDelete;
  },
  [LOGIN_USER](state, data) {
    state.uId = data.id;
    state.uIdCard = data.userIdc;
    state.uPhone = data.userPhone;
    state.uPassword = data.userPw;
    state.uName = data.userName;
    state.uPic = data.userPic;
    state.uDelete = data.userDelete;
  },
  [CHANGE_USER_LAT](state, data) {
    state.uLat = data;
  },
  [CHANGE_USER_LNG](state, data) {
    state.uLng = data;
  },
};
