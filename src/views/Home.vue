<template>
  <div class="base">
    <el-container>
      <el-header><Header class="header" /></el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "../components/common/Header.vue";

export default {
  components: { Header },
  data() {
    return {};
  },
};
</script>

<style scoped>
.el-container,
.el-main,
.el-header,
.el-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.base,
.el-container {
  height: 100%;
}
.el-header {
  height: 529px !important;
}
</style>
