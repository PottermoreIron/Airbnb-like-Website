<template>
  <div class="nav_container">
    <div class="slogan">
      <span class="slogan_top">暑期酒店，低至5折起</span
      ><span class="slogan_bottom">浪迹夏天</span>
    </div>
    <img class="home_bkg" src="test_img/home_bkg.jpg" />
    <nav-top class="nav_top" /><nav-bottom class="nav_bottom" />
  </div>
</template>

<script>
import NavBottom from "../content/home/header/navBottom/NavBottom.vue";
import NavTop from "../content/home/header/navTop/NavTop.vue";

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
  position: relative;
}
.slogan {
  position: absolute;
  z-index: 9999;
  left: 10%;
  top: 40%;
  display: flex;
  flex-direction: column;
}
.slogan_top {
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 10%;
}
.slogan_bottom {
  color: white;
  font-size: 2rem;
  font-weight: bold;
}
.home_bkg {
  width: 100%;
  height: 529px;
  position: absolute;
}
.nav_top {
  height: 81px !important;
  align-self: flex-start;
}
.nav_bottom {
  width: 80%;
  margin-top: 360px !important;
  height: 72px !important;
}
</style>
