<template>
  <div class="popover_container"></div>
</template>

<script>
export default {
  name: "Form",
  props: ["formShow", "op"],
  data() {
    return {
      form: {
        phone: "",
        region: "",
        password: "",
        name: "",
      },
      akPwd: "",
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    onSubmit() {
      console.log(this.form);
      if (this.form.password != this.akPwd) {
        console.log("fuck");
        this.$message({
          message: "密码错误",
          type: "error",
        });
      } else {
        console.log("yes");
      }
    },
  },
};
</script>

<style scoped>
.popover_container {
  width: 550px;
  height: 580px;
  padding: 30px;
}
::v-deep .el-dialog {
  background-color: cadetblue !important;
}
.top_info {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: space-between;
}
.tips_op {
  font-size: 25px;
  color: #484848;
  font-weight: bold;
}
.tips_info {
  margin-top: 10px;
  font-size: 10px;
  color: #6f6f6f;
}
.close {
  color: #6f6f6f;
  cursor: pointer;
}
::v-deep .el-form-item__content {
  margin-left: 0px !important;
  margin-right: 0px !important;
}
::v-deep .el-button {
  width: 490px;
}
.or_container,
.other_container {
  overflow: hidden !important;
  text-align: center !important;
}
.or,
.other {
  position: relative !important;
}

.or::before,
.or::after,
.other::before,
.other::after {
  content: "" !important;
  position: absolute !important;
  border-bottom: 1px solid rgb(228, 228, 228) !important;
  top: 50% !important;

  width: 5000px !important;
}
.or::before,
.other::before {
  right: 100% !important;
}
.or::after,
.other::after {
  left: 100% !important;
}
.or_text {
  font-weight: 600 !important;
  line-height: 1.28571em !important;
  color: rgb(118, 118, 118) !important;
}
.other_text {
  font-size: 14px;
  color: rgb(72, 72, 72) !important;
}
.bottom_container {
  margin-top: 24px;
}
.other_login_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
}
.account_login,
.weibo_login {
  display: flex;
  align-items: center;
  height: 100%;
  border-bottom: 2px solid transparent !important;
  font-weight: bold;
  color: #484848;
}
.account_login:hover,
.weibo_login:hover {
  border-bottom: 2px solid black !important;
  cursor: pointer;
}
.bottom_info {
  font-size: 13px;
  color: rgb(83, 83, 83);
}
</style>
