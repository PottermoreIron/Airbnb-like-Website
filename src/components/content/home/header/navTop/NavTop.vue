<template>
  <div class="nav_top_container">
    <nav-top-left class="nav_top_left" v-if="showLeft" /><nav-top-right
      :formShow="formShow"
      @rShow="rShowForm"
      @lShow="lShowForm"
      :style="{ color: textColor }"
    />
    <el-dialog
      :visible.sync="formShow"
      :modal-append-to-body="false"
      width="550px"
      @close="closeDialogue"
    >
      <div v-if="op == 1">
        <div class="top_info">
          <div class="tips">
            <div class="tips_op">注册</div>
            <div class="tips_info">
              未注册的手机号或微信号验证后将自动创建新账号
            </div>
          </div>
        </div>
        <!-- 记住绑定key,不然Vue要复用,鬼鬼的 -->
        <el-form
          ref="rForm"
          :model="rForm"
          label-width="80px"
          :rules="rRules"
          key="rForm"
        >
          <el-form-item>
            <el-col :span="7">
              <el-form-item prop="region">
                <el-select v-model="rForm.region"
                  ><el-option label="+86" value="中国"></el-option>
                  <el-option label="+1" value="牙买加"></el-option
                ></el-select>
              </el-form-item>
            </el-col>
            <el-col :span="1" style="opacity: 0">-</el-col>
            <el-col :span="16">
              <el-form-item prop="phone">
                <el-input v-model="rForm.phone" placeholder="手机号"></el-input>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item prop="email">
            <el-input v-model="rForm.email" placeholder="邮箱"></el-input>
          </el-form-item>
          <el-form-item prop="name">
            <el-input v-model="rForm.name" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="rForm.password"
              placeholder="密码"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item prop="akPwd">
            <el-input
              v-model="rForm.akPwd"
              placeholder="确认密码"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="rSubmitForm('rForm')"
              >注册</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div v-if="op == 2">
        <div class="top_info">
          <div class="tips">
            <div class="tips_op">登录</div>
            <div class="tips_info">
              未注册的手机号或微信号验证后将自动创建新账号
            </div>
          </div>
        </div>
        <el-form
          ref="lForm"
          :model="lForm"
          label-width="80px"
          :rules="lRules"
          key="lForm"
        >
          <el-form-item>
            <el-col :span="7">
              <el-form-item prop="region">
                <el-select v-model="lForm.region"
                  ><el-option label="+86" value="中国"></el-option>
                  <el-option label="+1" value="牙买加"></el-option
                ></el-select>
              </el-form-item>
            </el-col>
            <el-col :span="1" style="opacity: 0">-</el-col>
            <el-col :span="16">
              <el-form-item prop="phone">
                <el-input v-model="lForm.phone" placeholder="手机号"></el-input>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="lForm.password"
              placeholder="密码"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="lSubmitForm('lForm')"
              >登录</el-button
            >
          </el-form-item>
          <el-form-item>
            <div class="or_container">
              <span class="or"><span class="or_text">或</span></span>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button @click="wechatLogin">微信扫码登录</el-button>
          </el-form-item>
        </el-form>
        <div class="bottom_container">
          <div class="other_container">
            <span class="other"
              ><span class="other_text">使用其他方式</span></span
            >
          </div>
          <div class="other_login_container">
            <div class="account_login">
              <i class="el-icon-message"></i>账号密码登录
            </div>
            <div class="weibo_login">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weibo"></use></svg
              >微博
            </div>
          </div>
          <div class="bottom_info">
            注册/登录即代表您年满 18
            岁，已认真阅读并同意接受爱彼迎《服务条款》、《隐私政策》，并同意订阅爱彼迎特惠信息和政策更新，您可在设置中随时退订。
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import NavTopLeft from "./NavTopLeft.vue";
import NavTopRight from "./NavTopRight.vue";
import { userLogin } from "@/api/user.js";
import { userRegister } from "@/api/user.js";

export default {
  components: { NavTopLeft, NavTopRight },
  props: {
    textColor: { type: String, default: "white" },
    showLeft: { type: Boolean, default: true },
  },
  name: "NavBar",
  data() {
    //   电话验证规则
    let validPhone = (rule, value, callback) => {
      if (value == "" || value == undefined) {
        callback(new Error("请输入手机号"));
      } else {
        let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
        if (!reg.test(value)) {
          callback(new Error("手机号格式错误"));
        } else {
          callback();
        }
      }
    };
    // 用户名验证规则
    let validName = (rule, value, callback) => {
      if (value == "" || value == undefined) {
        callback(new Error("请输入用户名"));
      } else {
        let reg = /^[\u4E00-\u9FA5A-Za-z0-9]{3,16}$/;
        if (!reg.test(value)) {
          callback(new Error("用户名由字母,数字,中文组成,且字符长度4-16"));
        } else {
          callback();
        }
      }
    };
    // 注册密码验证规则
    let validPassword = (rule, value, callback) => {
      if (value == "" || value == undefined) {
        callback(new Error("请设置密码"));
      } else {
        let reg = /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,16}/;
        if (!reg.test(value)) {
          callback(new Error("密码8-16位,且由大小写字母,数字,特殊符号组成"));
        } else {
          callback();
        }
      }
    };
    // 确认密码验证规则
    let validAkPassword = (rule, value, callback) => {
      if (value == "" || value == undefined) {
        callback(new Error("请确认密码"));
      } else {
        if (value != this.rForm.password) {
          callback(new Error("密码不正确！"));
        } else {
          callback();
        }
      }
    };
    // 邮箱验证规则
    let validEmail = (rule, value, callback) => {
      if (value == "" || value == undefined) {
        callback(new Error("请输入邮箱"));
      } else {
        let reg = /^([a-zA-Z\d])(\w|_)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/;
        if (!reg.test(value)) {
          callback(new Error("邮箱格式错误"));
        } else {
          callback();
        }
      }
    };
    return {
      formShow: false,
      op: 1,
      rForm: {
        phone: "",
        region: "",
        password: "",
        name: "",
        akPwd: "",
        email: "",
      },
      lForm: {
        phone: "",
        region: "",
        password: "",
      },
      rRules: {
        region: [{ required: true, message: "选择国家" }],
        phone: [{ validator: validPhone }],
        name: [{ validator: validName }],
        password: [{ validator: validPassword }],
        akPwd: [{ validator: validAkPassword }],
        email: [{ validator: validEmail }],
      },
      lRules: {
        region: [{ required: true, message: "选择国家" }],
        phone: [{ required: true, message: "请输入手机号码" }],
        password: [{ required: true, message: "请输入密码" }],
      },
    };
  },
  methods: {
    rShowForm() {
      this.formShow = true;
      this.op = 1;
    },
    lShowForm() {
      this.formShow = true;
      this.op = 2;
    },
    rSubmitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        const { status, data } = await userRegister({
          idCard: 11,
          password: this.rForm.password,
          userName: this.rForm.name,
          userPhone: this.rForm.phone,
        });
        if (valid && status) {
          this.$message({
            message: "注册成功",
            type: "success",
          });
          this.formShow = false;
          //   调用actions,函数里没有办法用辅助函数
          this.$store.dispatch("user/registerUser", data);
          this.closeDialogue();
        } else if (valid) {
          this.$message({ message: "手机号已被注册", type: "error" });
        } else {
          return false;
        }
      });
    },

    lSubmitForm(formName) {
      // 检查密码与电话
      this.$refs[formName].validate(async (valid) => {
        const { status, data } = await userLogin({
          password: this.lForm.password,
          userPhone: this.lForm.phone,
        });
        if (status && valid) {
          this.$message({
            message: "登录成功",
            type: "success",
          });
          this.$store.dispatch("user/loginUser", data);
          this.formShow = false;
          this.closeDialogue();
        } else if (valid) {
          this.$message({ message: "密码或手机号码错误", type: "error" });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    wechatLogin() {
      console.log("微信的登录");
    },
    closeDialogue() {
      if (this.op == 1) {
        this.$refs.rForm.resetFields();
      } else if (this.op == 2) {
        this.$refs.lForm.resetFields();
      }
    },
  },
};
</script>

<style scoped>
.nav_top_container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between !important;
  color: blue;
}
.nav_top_left {
  margin-left: 5%;
}
.form {
  position: fixed;
}
/* 表单 */
.popover_container {
  width: 550px;
  height: 580px;
  padding: 30px;
}
::v-deep .el-dialog {
  background-color: cadetblue !important;
}
.top_info {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: space-between;
}
.tips_op {
  font-size: 25px;
  color: #484848;
  font-weight: bold;
}
.tips_info {
  margin-top: 10px;
  font-size: 10px;
  color: #6f6f6f;
}
.close {
  color: #6f6f6f;
  cursor: pointer;
}
::v-deep .el-form-item__content {
  margin-left: 0px !important;
  margin-right: 0px !important;
}
::v-deep .el-button {
  width: 490px;
}
.or_container,
.other_container {
  overflow: hidden !important;
  text-align: center !important;
}
.or,
.other {
  position: relative !important;
}

.or::before,
.or::after,
.other::before,
.other::after {
  content: "" !important;
  position: absolute !important;
  border-bottom: 1px solid rgb(228, 228, 228) !important;
  top: 50% !important;

  width: 5000px !important;
}
.or::before,
.other::before {
  right: 100% !important;
}
.or::after,
.other::after {
  left: 100% !important;
}
.or_text {
  font-weight: 600 !important;
  line-height: 1.28571em !important;
  color: rgb(118, 118, 118) !important;
}
.other_text {
  font-size: 14px;
  color: rgb(72, 72, 72) !important;
}
.bottom_container {
  margin-top: 24px;
}
.other_login_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
}
.account_login,
.weibo_login {
  display: flex;
  align-items: center;
  height: 100%;
  border-bottom: 2px solid transparent !important;
  font-weight: bold;
  color: #484848;
}
.account_login:hover,
.weibo_login:hover {
  border-bottom: 2px solid black !important;
  cursor: pointer;
}
.bottom_info {
  font-size: 13px;
  color: rgb(83, 83, 83);
}
</style>
