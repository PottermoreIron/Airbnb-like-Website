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
        <el-input
          v-model="corPwd"
          show-password
          prefix-icon="el-icon-key"
          class="text_bar"
        ></el-input>
      </div>
      <div class="information_bar_half_out">
        <div class="information_bar_half">
          修改密码:<br />
          <el-input
            placeholder="不修改密码请勿填写"
            v-model="changePwd1"
            type="password"
            prefix-icon="el-icon-key"
            class="text_bar"
          ></el-input>
        </div>
        <div class="information_bar_half">
          确认密码:<br />
          <el-input
            v-model="changePwd2"
            type="password"
            prefix-icon="el-icon-key"
            class="text_bar"
          ></el-input>
        </div>
      </div>
      <div class="submit_button_bar">
        <el-button
          size="middle"
          type="danger"
          icon="el-icon-close"
          round
          @click="cansel"
        >
        </el-button>
        <div style="width: 20px"></div>
        <el-button
          size="middle"
          type="success"
          icon="el-icon-check"
          round
          @click="open"
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
  methods: {
    cansel() {
      this.$emit("exitchangebar");
    },
    open() {
      console.log("jaaj");
      this.$msgbox
        .confirm("是否确定修改信息", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
        .then(() => {
          this.$message({
            type: "success",
            message: "修改成功!",
          });
          this.$emit("exitchangebar");
        })
        .catch(() => {});
    },
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
