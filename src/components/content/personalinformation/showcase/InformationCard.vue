<template>
  <!-----------左边展示栏------------>
  <div class="per_left_bar_out">
    <div class="per_left_bar_in">
      <img :src="imageUrl" class="head_pic" @click="changeHeadPic" />
      <b class="user_name">{{ this.$parent.user.userName }}</b>
      <el-divider class="divider"></el-divider>
      <div class="information_show">
        <span class="information_zoon">ID : {{ this.$parent.user.id }}</span>
        <span class="information_zoon"
          ><i class="el-icon-phone" /> : {{ this.$parent.user.userPhone }}</span
        >
        <span class="information_zoon"
          ><i class="el-icon-user" /> : {{ this.$parent.user.userIdc }}</span
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
    <el-dialog
      title="更换头像"
      :visible.sync="centerDialogVisible"
      width="550px"
      center
      @opened="opened"
      destroy-on-close="true"
    >
      <!-- <ChangeHeadPic ref="changeHeadPic" /> -->
      <input type="file" class="file" />
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import ChangeHeadPic from "./ChangeHeadPic.vue";
export default {
  name: "InformationCard",
  // components: { ChangeHeadPic },
  data() {
    return {
      centerDialogVisible: false,
      formData: "",
      imageUrl: "http://localhost:8080/" + this.$parent.user.userPic,
      //用户信息
    };
  },
  created() {},
  methods: {
    updateTable() {
      this.imageUrl = "http://localhost:8080/" + this.$parent.user.userPic;
    },
    submit() {
      var formData = new window.FormData();
      formData.append(
        "userPic",
        document.querySelector("input[type=file]").files[0]
      );
      formData.append("id", this.$parent.id);
      var options = {
        // 设置axios的参数
        url: "/userManager/userUpdateByPic",
        data: formData,
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      this.$axios(options).then(() => {
        this.$message({
          type: "success",
          message: "修改成功！",
        });
        this.centerDialogVisible = false;
      }); // 发送请求
    },
    changeMes() {
      this.$emit("changmes");
    },
    changeHeadPic() {
      this.centerDialogVisible = true;
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
  cursor: pointer;
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
