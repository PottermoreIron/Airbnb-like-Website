<template>
  <div class="base">
    <el-container>
      <el-header><Header class="header" /></el-header>
      <el-main class="main"><Main /></el-main>
      <el-footer>Footer{{ user }}</el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "../components/common/Header.vue";
import Main from "../components/common/Main.vue";
import { mapGetters } from "vuex";
export default {
  components: { Header, Main },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(
      "user",
      { user: "userName" }
      // ...
    ),
  },
};
</script>

<style scoped>
.el-container,
.el-main,
.el-header,
.el-footer {
  display: flex;
  width: 100%;
}

.el-header {
  height: 529px !important;
  padding: 0px;
}
.el-main {
  height: 5162px !important;
}
</style>
