<template>
  <div class="nav_bar_right_container">
    <div class="register" @click="userRegister">注册</div>
    <div class="login" @click="userLogin">登录</div>
  </div>
</template>

<script>
export default {
  name: "NavRight",
  props: ["formShow"],
  data() {
    return {};
  },
  methods: {
    userRegister() {
      this.$emit("rShow");
    },
    userLogin() {
      this.$emit("lShow");
    },
  },
};
</script>

<style scoped>
.nav_bar_right_container {
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  z-index: 999;
}
.register,
.login {
  display: flex;
  align-items: center;
  height: 100%;
  border-bottom: 2px solid transparent !important;
  font-weight: bold;
}
.register:hover,
.login:hover {
  border-bottom: 2px solid black !important;
  cursor: pointer;
}
</style>
