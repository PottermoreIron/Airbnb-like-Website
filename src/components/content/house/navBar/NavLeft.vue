<template>
  <div class="nav_left_container">
    <div class="nav_left_input">
      <el-input
        prefix-icon="el-icon-search"
        placeholder="搜索"
        v-model="keyWord"
      ></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavLeft",

  data() {
    return {
      keyWord: "",
    };
  },
};
</script>

<style scoped>
.nav_left_container {
  width: 600px;
}
.nav_left_input {
  width: 460px;
  height: 48px;
  border-radius: 4px !important;
}
.nav_left_input ::v-deep .el-input__inner {
  width: 460px;
  height: 48px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%) !important;
  transition: all ease 1s;
}
.nav_left_input ::v-deep .el-input__inner:hover {
  color: black;
  font-size: 1.1rem;
  font-weight: bold;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 4px 12px rgb(26 26 29 / 8%) !important;
  transition: all ease 1s;
}
.nav_left_input ::v-deep .el-input__inner:focus {
  width: 600px;
  transition: all ease 1s;
  border-color: black;
}
.nav_left_input ::v-deep .el-input__inner::placeholder {
  color: #757575;
  font-size: 1.1rem;
  font-weight: bold;
}
</style>
