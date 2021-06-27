<template>
  <div class="u_nav_top_right">
    <div class="avatar_img_container" @click="goProfile">
      <img class="avatar_img" :src="uPic" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "UnavTopRight",
  computed: {
    ...mapState("user", ["uPic"]),
  },
  methods: {
    goProfile() {
      this.$router.push("/profile");
    },
  },
};
</script>

<style scoped>
.u_nav_top_right {
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  z-index: 999;
}
.avatar_img_container {
  width: 44px;
  height: 44px;
}
.avatar_img {
  width: 100%;
  height: 100%;
  background-color: rgb(242, 242, 242);
  box-shadow: rgb(235 235 235) 0px 0px 0px 2px;
  border-radius: 50%;
}
.avatar_img_container:hover {
  cursor: pointer;
}
</style>
