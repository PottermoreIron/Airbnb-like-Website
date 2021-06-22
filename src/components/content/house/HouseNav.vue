<template>
  <div class="house_nav">
    <nav-left /><nav-top textColor="black" :showLeft="false" class="nav_top" />
  </div>
</template>

<script>
import NavTop from "../home/header/navTop/NavTop.vue";
import NavLeft from "./navBar/NavLeft.vue";
export default {
  name: "HouseNav",
  components: { NavLeft, NavTop },
  data() {
    return {};
  },
};
</script>

<style scoped>
.house_nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.nav_top {
  margin-left: 30%;
}
</style>
