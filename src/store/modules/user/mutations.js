import { REGISTER_USER, LOGIN_USER } from "./mutation-types";
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
    console.log(state);
  },
};
