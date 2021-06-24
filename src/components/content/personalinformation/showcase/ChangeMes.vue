<template>
  <!-----------右边展示栏------------>
  <div class="per_right_bar_out">
    <div class="per_right_bar_in">
      <div class="headline"><b>修改信息</b></div>
      <el-divider class="splitline"></el-divider>
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
      <el-divider class="splitline"></el-divider>
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
      <div class="submit_button_bar">
        <el-button
          size="middle"
          type="danger"
          icon="el-icon-close"
          round
          @click="submitInformation"
        >
        </el-button>
        <div style="width: 20px"></div>
        <el-button
          size="middle"
          type="success"
          icon="el-icon-check"
          round
          @click="submitInformation"
        ></el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ChangeMes",
  data() {
    return {
      changeName: "Cherry",
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
/*--------------------右边展示栏----------------------*/
.per_right_bar_out {
  height: 100%;
  width: 650px;
  display: flex;
  flex-flow: column;
  align-items: center;
}
.per_right_bar_in {
  height: 600px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #dddddd;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 24px;
  background-color: rgba(172, 172, 172, 0.1);
}
.headline {
  margin-top: 30px;
  margin-left: 20px;
  font-size: 2rem;
  color: black;
  width: 630px;
}
.splitline {
  border-bottom: 1px solid #dddddd;
  height: 0px;
  width: 600px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #dddddd;
}
.information_bar {
  width: 630px;
  margin-left: 70px;
  margin-bottom: 20px;
  text-align: left;
}
.information_bar_half_out {
  width: 630px;
  margin-left: 70px;
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
  margin-top: 10px;
}
.submit_button_bar {
  margin-top: 5px;
  width: 630px;
  display: flex;
  justify-content: flex-end;
  margin-right: 130px;
}
</style>
