<template>
  <div class="per_nav_top_bar_bg">
    <div class="per_nav_top_bar">
      <div class="per_nav_select_out">
        <el-button type="text" class="per_nav_select_in" @click="goToMain"
          ><b>首页{{ user }}</b></el-button
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
      <img
        :src="imageUrl"
        @mouseover="mouseOver1"
        @mouseleave="mouseLeave1"
        class="per_nav_top_bar_headpic"
      />
      <el-collapse-transition>
        <div
          v-show="vShow"
          @mouseover="mouseOver1"
          @mouseleave="mouseLeave1"
          class="float_div"
        >
          <el-button type="warning" class="out_button" round @click="logout"
            >登出 <i class="el-icon-right"></i
          ></el-button>
          <el-button
            type="danger"
            class="out_button"
            round
            @click="cancellation"
            >注销 <i class="el-icon-delete"></i
          ></el-button>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
import CollapseTransition from "element-ui/lib/transitions/collapse-transition";
import Vue from "vue";
import bus from "@/utils/bus.js";
import { mapGetters } from "vuex";
export default {
  name: "PerNavTop",
  data() {
    return {
      vShow: false,
      imageUrl: "",
    };
  },
  created() {
    Vue.component(CollapseTransition.name, CollapseTransition);
    bus.$on("emiting", (data) => {
      this.imageUrl = data;
      console.log(this.imageUrl);
    });
  },
  computed: {
    ...mapGetters("user", { user: "user" }),
  },
  methods: {
    mouseLeave1() {
      if (this.vShow == true) {
        this.vShow = false;
      }
    },
    mouseOver1() {
      if (this.vShow == false) {
        this.vShow = true;
      }
    },
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
    //登出
    logout() {},
    //注销
    cancellation() {
      this.$axios
        .get("/userManager/getUserById", {
          params: {
            id: this.id,
          },
        })
        .then((res) => {
          this.user = res.data.data;
          console.log(this.user);
          this.$refs.inforCard.updateTable();
          this.emitUser();
        });
    },
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
  z-index: 2;
  margin-left: 50px;
  margin-right: 70px;
  border-radius: 100%;
  border: 1.75px solid rgb(255, 255, 255);
}
.float_div {
  border: 1px solid rgba(172, 172, 172, 0.418);
  border-radius: 13px;
  height: 200px;
  width: 130px;
  position: absolute;
  top: 55px;
  right: 20px;
  z-index: 1;
  text-align: center;
  line-height: 200px;
  background-color: rgba(255, 255, 255, 0.486);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.out_button {
  margin: 15px;
}
</style>
