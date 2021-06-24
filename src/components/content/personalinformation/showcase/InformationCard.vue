<template>
  <!-----------左边展示栏------------>
  <div class="per_left_bar_out">
    <div class="per_left_bar_in">
      <img src="@/static/test_img/assistant.jpg" class="head_pic" />
      <b class="user_name">{{ userName }}</b>
      <el-divider class="divider"></el-divider>
      <div class="information_show">
        <span class="information_zoon">ID : {{ userId }}</span>
        <span class="information_zoon"
          ><i class="el-icon-phone" /> : {{ userPhone }}</span
        >
        <span class="information_zoon"
          ><i class="el-icon-user" /> : {{ userIdCard }}</span
        >
      </div>
      <el-divider class="divider"></el-divider>
      <el-button
        type="danger"
        size="small"
        round
        style="margin-top: 20px"
        @click="changeMes"
        >修改信息</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "InformationCard",
  data() {
    return {
      userName: "Cherry",
      userId: 1234,
      userPhone: 16674569555,
      userIdCard: 630121200005053613,
    };
  },
  methods: {
    changeMes() {
      this.$emit("changmes");
    },
  },
};
</script>

<style scoped>
/*--------------------左边展示栏----------------------*/
.per_left_bar_out {
  height: 100%;
  width: 350px;
  display: flex;
  justify-content: center;
}
.per_left_bar_in {
  height: 600px;
  width: 300px;
  border-radius: 10px;
  border: 1px solid #dddddd;
  margin: 24px;
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: rgba(172, 172, 172, 0.1);
}
.head_pic {
  height: 115px;
  width: 115px;
  border-radius: 100%;
  margin-top: 60px;
}
.user_name {
  height: 40px;
  margin-top: 30px;
  color: black;
  font-size: 1.3rem;
}
.divider {
  width: 225px;
}
.information_show {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
}
.information_zoon {
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
