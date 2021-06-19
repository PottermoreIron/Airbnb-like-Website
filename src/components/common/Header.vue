<template>
  <div class="nav_container">
    <nav-top class="nav_top" /><nav-bottom class="nav_bottom" />
  </div>
</template>

<script>
import NavBottom from "../content/header/navBottom/NavBottom.vue";
import NavTop from "../content/header/navTop/NavTop.vue";

export default {
  name: "Header",
  data() {
    return {};
  },
  components: { NavTop, NavBottom },
};
</script>

<style scoped>
.nav_container {
  width: 100%;
  height: 529px !important;
  color: aqua;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav_top {
  height: 81px !important;
  align-self: flex-start;
}
.nav_bottom {
  width: 80%;
  margin-top: 400px !important;
  height: 72px !important;
}
</style>
