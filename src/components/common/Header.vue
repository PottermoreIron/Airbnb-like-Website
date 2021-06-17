<template>
  <div class="nav_bar"><nav-bar /></div>
</template>

<script>
import NavBar from "../content/header/NavBar.vue";
export default {
  name: "Header",
  data() {
    return {};
  },
  components: { NavBar },
};
</script>

<style scoped>
.nav_bar {
  width: 100%;
  height: 100%;
  color: aqua;
}
</style>
