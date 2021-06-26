<template>
  <div class="per_nav_top_bar_bg">
    <div class="per_nav_top_bar">
      <div class="per_nav_select_out">
        <el-button type="text" class="per_nav_select_in" @click="goToMain"
          ><b>首页</b></el-button
        >
      </div>
      <el-divider direction="vertical" content-position="center"></el-divider>
      <div class="per_nav_select_out">
        <el-button
          type="text"
          class="per_nav_select_in"
          @click="goToCompletedPur"
          ><b>已完成订单</b></el-button
        >
      </div>
      <el-divider direction="vertical" content-position="center"></el-divider>
      <div class="per_nav_select_out">
        <el-button
          type="text"
          class="per_nav_select_in"
          @click="goToUntreatedPur"
          ><b>未完成订单</b></el-button
        >
      </div>
      <el-divider direction="vertical" content-position="center"></el-divider>
      <div class="per_nav_select_out">
        <el-button type="text" class="per_nav_select_in" @click="goToPer"
          ><b>个人中心</b></el-button
        >
      </div>
      <img :src="imageUrl" class="per_nav_top_bar_headpic" />
    </div>
  </div>
</template>

<script>
import bus from "@/utils/bus.js";
export default {
  name: "PerNavTop",
  data() {
    return {
      imageUrl: "",
    };
  },
  created() {
    bus.$on("emiting", (data) => {
      this.imageUrl = data;
      console.log(this.imageUrl);
    });
  },
  methods: {
    update() {
      this.imageUrl =
        "http://localhost:8080/" + this.$parent.$refs.perInf.user.userPic;
    },
    // 前往个人页面
    goToPer() {
      this.$emit("gotoper");
    },
    // 前往已完成页面
    goToCompletedPur() {
      this.$emit("gotocompletedpur");
    },
    // 前往未完成页面
    goToUntreatedPur() {
      this.$emit("gotountreatedpur");
    },
    // 前往主页面
    goToMain() {},
  },
};
</script>

<style scoped>
.per_nav_top_bar {
  height: 100px;
  width: 100%;
  border: 2px solid rgba(175, 175, 175, 0.404);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);
}
.per_nav_top_bar_bg {
  background-image: url(../../../assets/NavBack.jpg);
  background-size: 100%;
  background-position-y: 275px;
}
.per_nav_select_out {
  display: flex;
  justify-content: center;
}
.per_nav_select_in {
  padding: 20px;
  color: rgb(72, 72, 72);
}
.per_nav_top_bar_headpic {
  height: 35px;
  width: 35px;
  margin: 10px;
  margin-right: 40px;
  border-radius: 100%;
  border: 1.75px solid rgb(255, 255, 255);
}
</style>
