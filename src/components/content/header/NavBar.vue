<template>
  <div class="nav_bar_container">
    <nav-bar-left /><nav-bar-center /><nav-bar-right />
  </div>
</template>

<script>
import NavBarCenter from "./NavBarCenter.vue";
import NavBarLeft from "./NavBarLeft.vue";
import NavBarRight from "./NavBarRight.vue";
export default {
  components: { NavBarLeft, NavBarCenter, NavBarRight },
  name: "NavBar",
  data() {
    return {};
  },
};
</script>

<style scoped>
.nav_bar_container {
  height: 100%;
  display: flex;
  justify-content: space-around;
  color: blue;
}
</style>
