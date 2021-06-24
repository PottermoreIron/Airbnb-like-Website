<template>
  <div class="per_show_bar">
    <!-----------左边展示栏------------>
    <div class="per_left_bar_out">
      <div class="per_left_bar_in">
        <img src="../../../static/test_img/assistant.jpg" class="head_pic" />
        <a href="" class="change_headpic">更新照片</a>
        <b class="user_name">{{ userName }}</b>
      </div>
    </div>
    <!-----------左边展示栏------------>
    <div class="per_right_bar_out">
      <div class="headline"><b>个人中心</b></div>
      <div class="splitline"></div>
      <div class="information_bar">
        用户名:<br />
        <input type="text" v-model="changeName" class="text_bar" />
      </div>
      <div class="information_bar">
        手机号码:<br />
        <input type="text" v-model="changePhoneNumber" class="text_bar" />
      </div>
      <div class="information_bar">
        身份证号码:<br />
        <input type="text" v-model="changeIdCardNumber" class="text_bar" />
      </div>
      <div class="splitline"></div>
      <div class="information_bar">
        当前密码:<br />
        <input type="password" v-model="corPwd" class="text_bar" />
      </div>
      <div class="information_bar_half_out">
        <div class="information_bar_half">
          修改密码:<br />
          <input type="password" v-model="changePwd1" class="text_bar" />
        </div>
        <div class="information_bar_half">
          确认密码:<br />
          <input type="password" v-model="changePwd2" class="text_bar" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PerInformationBar",
  data() {
    return {
      userName: "啦啦啦",
      changeName: "啦啦啦",
      changePhoneNumber: "111111",
      changeIdCardNumber: "123145",
      corPwd: "",
      changePwd1: "",
      changePwd2: "",
    };
  },
};
</script>

<style scoped>
.per_show_bar {
  margin-top: 50px;
  height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
/*--------------------左边展示栏----------------------*/
.per_left_bar_out {
  height: 100%;
  width: 350px;
  display: flex;
  justify-content: center;
}
.per_left_bar_in {
  height: 500px;
  width: 300px;
  border-radius: 10px;
  border: 1px solid #dddddd;
  margin: 24px;
  display: flex;
  flex-flow: column;
  align-items: center;
}
.head_pic {
  height: 150px;
  width: 150px;
  border-radius: 100%;
  margin-top: 100px;
}
.change_headpic {
  margin-top: 10px;
  color: black;
  font-size: 1rem;
  height: 25px;
}
.user_name {
  height: 40px;
  margin-top: 30px;
  color: black;
  font-size: 1.3rem;
}
/*--------------------右边展示栏----------------------*/
.per_right_bar_out {
  height: 100%;
  width: 700px;
  display: flex;
  flex-flow: column;
  align-items: center;
}
.headline {
  margin-top: 30px;
  font-size: 2rem;
  color: black;
  width: 630px;
}
.splitline {
  border-bottom: 1px solid #dddddd;
  height: 0px;
  width: 630px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #dddddd;
}
.information_bar {
  width: 630px;
  margin-left: 50px;
  margin-bottom: 20px;
  text-align: left;
}
.information_bar_half_out {
  width: 630px;
  margin-left: 50px;
  margin-bottom: 20px;
  display: flex;
}
.information_bar_half {
  width: 315px;
  text-align: left;
}
.text_bar {
  width: 220px;
  height: 30px;
  font-size: 1.1rem;
  border-radius: 4px;
  border: 2px solid rgb(176 176 176);
}
</style>
