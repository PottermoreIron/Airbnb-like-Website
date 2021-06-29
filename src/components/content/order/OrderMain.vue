<template>
  <div class="order_main">
    <div class="order_main_title_container">
      <div class="title_text_container">
        <div class="title_text_top">享受 5月6日 – 7月1日 期间的 8.5 折优惠</div>
        <div class="title_text_bottom">在 6 天内完成预订，锁定限时好价</div>
      </div>
      <div class="clock_container">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-clock"></use>
        </svg>
      </div>
    </div>
    <div class="order_main_trip_container">
      <div class="trip_title_container">
        <div class="trip_title">您的行程</div>
      </div>
      <div class="trip_date_container">
        <div class="date_text_container">
          <div class="date_text_top">日期</div>
          <div class="date_text_bottom">{{ startDate }} – {{ endDate }}</div>
        </div>
        <div class="edit_date_btn_container">
          <div class="edit_date_btn_container">
            <button class="edit_date_btn" @click="chooseDate">编辑</button>
          </div>
        </div>
        <el-dialog :visible.sync="datePickerVisible" width="661px">
          <div class="date_picker_container">
            <div class="nignt">{{ day }}</div>
            <div class="picker_container">
              <el-date-picker
                v-model="date"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                style="width: 100%"
                value-format="yyyy-MM-dd"
                :picker-options="pickerOptions"
                @change="dateChange"
              >
              </el-date-picker>
            </div>
          </div>
        </el-dialog>
      </div>
      <div class="trip_num_container">
        <div class="num_text_container">
          <div class="num_text_top">房客人数</div>
          <div class="num_text_bottom">{{ numForm.totalNum }}位房客</div>
        </div>
        <div class="edit_num_btn_container">
          <div class="edit_num_btn_container">
            <button class="edit_num_btn" @click="chooseNum">编辑</button>
          </div>
        </div>
        <el-dialog
          :visible.sync="numPickerVisible"
          width="30%"
          @close="closeNumDialogue"
        >
          <el-form :model="numForm" ref="numForm">
            <div class="num_picker_container">
              <div class="num_picker_title_container">
                <div class="num_picker_title">房客人数</div>
                <div class="num_container">
                  <div class="adult_container">
                    <div class="adult">成人</div>
                    <div class="choose_num">
                      <el-form-item prop="adultNum">
                        <el-input-number
                          v-model="numForm.adultNum"
                          :min="1"
                          :max="10"
                          label="描述文字"
                          size="small"
                        ></el-input-number>
                      </el-form-item>
                    </div>
                  </div>
                  <div class="children_container">
                    <div class="children_text_container">
                      <div class="children_text_top">儿童</div>
                      <div class="children_text_bottom">2-12岁</div>
                    </div>
                    <div class="choose_num">
                      <el-form-item prop="childrenNum">
                        <el-input-number
                          v-model="numForm.childrenNum"
                          :min="0"
                          :max="10"
                          label="描述文字"
                          size="small"
                        ></el-input-number>
                      </el-form-item>
                    </div>
                  </div>
                  <div class="babe_container">
                    <div class="babe_text_container">
                      <div class="babe_text_top">婴儿</div>
                      <div class="babe_text_bottom">两岁以下</div>
                    </div>
                    <div class="choose_num">
                      <el-form-item prop="babeNum">
                        <el-input-number
                          v-model="numForm.babeNum"
                          :min="0"
                          :max="10"
                          label="描述文字"
                          size="small"
                        ></el-input-number>
                      </el-form-item>
                    </div>
                  </div>
                </div>
              </div>
              <div style="margin-top: 25px; margin-bottom: 0px">
                <div class="separation"></div>
              </div>
              <div class="num_btn_container">
                <button class="num_cancel_btn" type="button" @click="numCancel">
                  取消
                </button>
                <button class="num_save_btn" type="button" @click="numSave">
                  保存
                </button>
              </div>
            </div>
          </el-form>
        </el-dialog>
      </div>
      <div class="trip_other_container">
        <div class="other_text_container">
          <div class="other_text_top">请联系房东开具发票</div>
          <div class="other_text_bottom">请联系房东确认开票事宜后再预订。</div>
        </div>
      </div>
    </div>
    <div style="margin-top: 25px; margin-bottom: 0px; width: 82%">
      <div class="separation"></div>
    </div>
    <div class="pay_container">
      <div class="pay_title_contianer">
        <div class="pay_title">付款方式：</div>
      </div>
      <div class="pay_select_container">
        <el-select v-model="payWay" placeholder="请选择">
          <el-option
            v-for="item in payWays"
            :key="item.value"
            :icon="item.icon"
            :value="item.value"
          >
            <div class="pay_ways_container">
              <div class="pay_way_container">
                <div class="pay_way_icon_container">
                  <img :src="item.icon" class="pay_way_icon" />
                </div>
                <div class="pay_way_value">{{ item.value }}</div>
              </div>
            </div>
          </el-option>
        </el-select>
      </div>
    </div>
    <div style="margin-top: 40px; margin-bottom: 0px; width: 82%">
      <div class="separation"></div>
    </div>
    <div class="info_required_container">
      <div class="info_title_contianer">
        <div class="info_title">出行必填信息</div>
      </div>
      <div class="info_desc_container">
        <div class="info_desc_text">
          <div class="info_desc_top">房客信息</div>
          <div class="info_desc_bottom">中国政府要求所有旅行者提供此信息。</div>
        </div>
        <div class="info_desc_btn_container">
          <button class="info_desc_btn" @click="chooseInfo">添加</button>
        </div>
        <el-dialog
          :visible.sync="infoPickerVisible"
          width="568px"
          @close="closeRoomerDialogue"
        >
          <div class="roomer_info_container">
            <div class="roomer_info_title_container">
              <div class="roomer_info">添加房客信息</div>
            </div>
            <div style="margin-top: 25px; margin-bottom: 0px">
              <div class="separation"></div>
            </div>
            <el-form :model="roomerForm" :rules="roomerRules" ref="roomerForm">
              <div class="roomer_info_tips_container">
                <div class="roomer_info_tips_top">
                  根据有关部门规定，所有在中国预订住宿的旅客都必须提供以下信息。作为中国居民，您的信息将由我们存储并处理。完成本次预订，您同意我们向中国政府披露您的信息而不向您提供进一步通知。
                </div>
                <div class="roomer_info_tips_bottom">
                  您所填的信息将不会与房东分享。房客信息将由我们妥善保管，以便下次预订时使用。
                </div>
              </div>
              <div class="roomer_info_choice_container">
                <div class="rommer_info_choice_title">您的信息</div>
                <div class="roomer_name_container">
                  <el-form-item prop="roomerName">
                    <el-input
                      v-model="roomerForm.roomerName"
                      placeholder="姓名"
                    ></el-input>
                  </el-form-item>
                  <div
                    style="
                      font-size: 0.7rem;
                      font-weight: normal;
                      margin-top: 4px;
                      color: rgb(113, 113, 113);
                    "
                  >
                    请确保与政府签发的身份证件上的姓名一致。
                  </div>
                </div>
                <div class="roomer_country_container">
                  <el-form-item prop="country">
                    <el-select
                      v-model="roomerForm.country"
                      placeholder="国家/地区"
                    >
                      <el-option value="中国"> </el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div class="roomer_idc_type_container">
                  <el-form-item prop="idcType">
                    <el-select
                      v-model="roomerForm.idcType"
                      placeholder="身份证件类型"
                    >
                      <el-option value="身份证"> </el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div class="roomer_idc_container">
                  <el-form-item prop="roomerIdCard">
                    <el-input
                      v-model="roomerForm.roomerIdCard"
                      placeholder="身份证件号码"
                    ></el-input>
                  </el-form-item>
                </div>
              </div>
              <div style="margin-top: 25px; margin-bottom: 0px">
                <div class="separation"></div>
              </div>
              <el-form-item>
                <div class="roomer_save_btn_container">
                  <el-button
                    type="primary"
                    class="roomer_save_btn"
                    @click="submitRoomerForm('roomerForm')"
                  >
                    保存
                  </el-button>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </el-dialog>
      </div>
    </div>
    <div style="margin-top: 40px; margin-bottom: 0px; width: 82%">
      <div class="separation"></div>
    </div>
    <div class="cancel_policy_container">
      <div class="cancel_policy_title_container">
        <div class="cancel_policy_title">取消政策</div>
      </div>
      <div class="cancel_policy_info_container">
        <div class="policy_info_top_container">
          <div class="policy_info_top">
            入住日期下午3点前取消，扣除首晚房费后，退还剩余房费和全部清洁费。
          </div>
        </div>
        <div class="policy_info_bottom_container">
          <div class="policy_info_bottom">
            <strong style="color: rgb(34, 34, 34)"
              >请确保此酒店的的取消政策适合您。</strong
            >
            我们的特殊情况政策可能不适用于由新冠肺炎疫情等已知事件或常见恶劣天气等可预见事件造成的旅行中断。
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top: 40px; margin-bottom: 0px; width: 82%">
      <div class="separation"></div>
    </div>
    <div class="order_op_container">
      <div class="order_op_title_container">
        <div class="order_op_title">
          选择以下按钮即代表我同意<u
            style="font-weight: bold; color: #00848a; cursor: pointer"
            >房屋守则</u
          >, 安全披露,
          <u style="font-weight: bold; color: #00848a; cursor: pointer"
            >取消政策</u
          >,
          <u style="font-weight: bold; color: #00848a; cursor: pointer"
            >我们的社交距离准则和其他新冠肺炎疫情相关准则</u
          >,和<u style="font-weight: bold; color: #00848a; cursor: pointer"
            >房客退款政策</u
          >。 我也同意支付以下所示的总金额（含服务费）。
        </div>
      </div>
      <div class="order_btn_container">
        <button class="order_btn" @click="createUserOrder">确认并支付</button>
      </div>
    </div>
  </div>
</template>

<script>
import { createOrder } from "@/api/order.js";
import { mapState } from "vuex";
export default {
  name: "OrderMain",
  data() {
    return {
      payWays: [
        { value: "支付宝", icon: require("../../../assets/img/ali-pay.svg") },
        {
          value: "微信支付",
          icon: require("../../../assets/img/weixin-pay.svg"),
        },
      ],
      payWay: "",
      roomerForm: {
        country: "中国",
        idcType: "身份证",
        roomerName: "",
        roomerIdCard: "",
      },
      roomerRules: {
        roomerName: [{ required: true, message: "此栏为必填项" }],
        roomerIdCard: [{ required: true, message: "此栏为必填项" }],
      },
      datePickerVisible: false,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        },
      },
      numPickerVisible: false,
      infoPickerVisible: false,
      numForm: {
        adultNum: 1,
        childrenNum: 0,
        babeNum: 0,
        totalNum: 1,
      },
      roomLabel: {
        bigBed: false,
        bath: false,
        con: false,
        wifi: false,
        window: false,
      },
    };
  },
  methods: {
    numCancel() {
      let _this = this;
      _this.numPickerVisible = false;
    },
    numSave() {
      let _this = this;
      _this.numForm.totalNum =
        _this.numForm.childrenNum +
        _this.numForm.babeNum +
        _this.numForm.adultNum;
      _this.numPickerVisible = false;
    },
    chooseDate() {
      let _this = this;
      _this.datePickerVisible = true;
    },
    chooseNum() {
      let _this = this;
      _this.numPickerVisible = true;
    },
    chooseInfo() {
      let _this = this;
      _this.infoPickerVisible = true;
    },
    submitRoomerForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          this.$message({
            message: "信息錯誤",
            type: "error",
          });
          return false;
        }
      });
    },
    closeNumDialogue() {
      this.$refs.numForm.resetFields();
    },
    closeRoomerDialogue() {
      this.$refs.roomerForm.resetFields();
    },
    dateChange() {
      let resDay = this.day.substr(0, this.day.length - 1);
      this.$emit("sonDateChange", resDay);
    },
    async createUserOrder() {
      let _this = this;
      const { status, data } = await createOrder({
        enddate: _this.oEdate,
        rid: _this.rid,
        startdate: _this.oSdate,
        uid: _this.uid,
      });
      if (status == false) {
        this.$message({
          message: "无法选择此日期,请重新选择",
          type: "error",
        });
      } else {
        document.querySelector("body").innerHTML = data;
        const div = document.createElement("div"); // 创建div
        div.innerHTML = data; // 将返回的form 放入div
        document.body.appendChild(div);
        document.forms[0].submit();
      }
    },
  },
  computed: {
    day: function () {
      let res = "选择日期";

      //   let dateArr = Array.from(this.date);
      //   if (dateArr.length !== 0) {
      //     let startDate = Date.parse(dateArr[0]);
      //     let endDate = Date.parse(dateArr[1]);
      //     res = (endDate - startDate) / (1 * 24 * 60 * 60 * 1000);
      //     res += "晚";
      //   }
      if (this.oSdate.length != 0 && this.oEdate.length != 0) {
        let startDate = Date.parse(this.oSdate);
        let endDate = Date.parse(this.oEdate);
        res = (endDate - startDate) / (1 * 24 * 60 * 60 * 1000);
        res += "晚";
      }
      return res;
    },
    startDate: function () {
      let res = "入住日期";
      //   let dateArr = Array.from(this.date);
      //   if (dateArr.length !== 0) {
      //     res = dateArr[0].substr(5);
      //   }
      if (this.oSdate.length != 0) {
        res = this.oSdate.substr(5);
      }
      return res;
    },
    endDate: function () {
      let res = "退房日期";
      //   let dateArr = Array.from(this.date);
      //   if (dateArr.length !== 0) {
      //     res = dateArr[1].substr(5);
      //   }
      if (this.oEdate.length != 0) {
        res = this.oEdate.substr(5);
      }
      return res;
    },
    oSdate: {
      get() {
        return this.$store.state.order.oStartDate;
      },
      set(v) {
        this.$store.commit("change/chooseDateOne", v);
      },
    },
    oEdate: {
      get() {
        return this.$store.state.order.oEndDate;
      },
      set(v) {
        this.$store.commit("change/chooseDateTwo", v);
      },
    },
    date: {
      get() {
        let startDate = this.$store.state.order.oStartDate;
        let endDate = this.$store.state.order.oEndDate;
        let res = [];
        res.push(startDate);
        res.push(endDate);
        return Array.from(res);
      },
      set(v) {
        this.$store.commit("order/chooseDateOne", v[0]);
        this.$store.commit("order/chooseDateTwo", v[1]);
      },
    },
    ...mapState("order", { rid: "oRoomId" }),
    ...mapState("user", { uid: "uId" }),
  },
};
</script>

<style scoped>
.order_main {
  color: rgb(34, 34, 34);
}
.order_main_title_container {
  overflow: hidden;
}
.title_text_container {
  width: 75%;
  float: left;
}
.title_text_top {
  font-weight: bold;
}
.title_text_bottom {
  color: rgb(113, 113, 113);
  margin-top: 10px;
}
.clock_container {
  width: 25%;
  float: left;
  font-size: 2rem;
}
.order_main_trip_container {
  display: flex;
  flex-direction: column;
  margin-top: 25px;
}
.trip_title {
  font-size: 1.38rem;
  font-weight: bold;
}
.trip_date_container,
.trip_num_container {
  overflow: hidden;
  margin-top: 25px;
}
.date_text_top,
.num_text_top {
  font-weight: bold;
}
.date_text_bottom,
.num_text_bottom {
  color: rgb(113, 113, 113);
  margin-top: 10px;
}
.date_text_container,
.num_text_container {
  width: 76%;
  float: left;
}
.edit_num_btn_container,
.edit_date_btn_container {
  width: 24%;
  float: left;
}
.edit_date_btn,
.edit_num_btn {
  background-color: transparent;
  border: none;
  color: rgb(34, 34, 34);
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.edit_date_btn:active,
.edit_num_btn:active {
  color: rgb(113, 113, 113);
}
.trip_other_container {
  margin-top: 25px;
}
.other_text_top {
  font-weight: bold;
}
.other_text_bottom {
  color: rgb(113, 113, 113);
  margin-top: 25px;
}
.separation {
  border-bottom: 1px solid #ebebeb;
}
/* pay */
.pay_container {
  width: 82%;
  margin-top: 25px;
}
.pay_title {
  font-weight: bold;
  font-size: 1.4rem;
}
.pay_select_container {
  margin-top: 20px;
}
.pay_way_container {
  display: flex;
  align-items: center;
  /* height: 200px; */
}
.pay_way_icon_container {
  width: 48px;
  height: 48px;
}
.pay_way_icon {
  width: 100%;
  height: 100%;
}
/* info required */
.info_required_container {
  margin-top: 25px;
  width: 82%;
}
.info_title {
  font-size: 1.4rem;
  font-weight: bold;
}
.info_desc_container {
  overflow: hidden;
  margin-top: 35px;
}
.info_desc_text {
  float: left;
  width: 88%;
}
.info_desc_btn_container {
  float: left;
  width: 12%;
}
.info_desc_top {
  font-weight: bold;
}
.info_desc_bottom {
  color: rgb(113, 113, 113);
  margin-top: 7px;
  font-size: 0.9rem;
}
.info_desc_btn {
  padding: 7px 15px;
  background-color: transparent;
  border: 1px solid rgb(34, 34, 34);
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  transition: box-shadow 0.2s ease 0s, transform 0.1s ease 0s;
}
.info_desc_btn:hover {
  background: rgb(247, 247, 247);
}
.info_desc_btn:active {
  transform: scale(0.96);
  border-color: rgb(0, 0, 0);
  background: rgb(247, 247, 247);
  color: rgb(34, 34, 34);
}
/* cancel policy */
.cancel_policy_container {
  width: 80%;
  margin-top: 20px;
}
.cancel_policy_title {
  font-size: 1.4rem;
  font-weight: bold;
}
.cancel_policy_info_container {
  margin-top: 25px;
  color: rgb(113, 113, 113);
}
.policy_info_bottom_container {
  margin-top: 25px;
  line-height: 1.3rem;
}
/* order op */
.order_op_container {
  margin-top: 40px;
  width: 82%;
}
.order_op_title {
  font-size: 0.5rem;
  line-height: 1rem;
}
.order_btn_container {
  margin-top: 30px;
}
.order_btn {
  padding: 14px 24px;
  background: linear-gradient(
    to right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  );
  color: rgb(255, 255, 255);
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
/* 对话框 */
/* num */
.num_picker_title {
  font-size: 1.4rem;
  font-weight: bold;
  color: #484848;
}
.num_container {
  margin-top: 20px;
}
.adult_container,
.children_container,
.babe_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.adult,
.children_text_top,
.babe_text_top {
  font-size: 1rem;
  color: #484848;
  font-weight: bold;
}
.children_text_bottom,
.babe_text_bottom {
  margin-top: 10px;
}
.num_btn_container {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
.num_cancel_btn {
  color: rgb(34, 34, 34);
  font-size: 1rem;
  font-weight: bold;
  background: transparent;
  border: none;
  text-decoration: underline;
  cursor: pointer;
}
.num_cancel_btn:active {
  color: rgb(113, 113, 113);
}
.num_save_btn {
  padding: 14px 24px;
  border-radius: 8px;
  background: rgb(34, 34, 34);
  color: rgb(255, 255, 255);
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: box-shadow 0.2s ease 0s, transform 0.1s ease 0s;
}
.num_save_btn:active {
  transform: scale(0.95, 0.95);
}
/* room type */
.room_label_container {
  display: flex;
  margin-top: 20px;
}
.bigBed_label,
.con_label,
.wifi_label,
.window_label,
.bath_label {
  font-size: 0.7rem;
  font-weight: bold;
  border-radius: 15px;
  padding: 6.4px 9.8px;
  background-color: rgb(243, 243, 243);
  margin-right: 10px;
}
.bigBed_label:hover,
.con_label:hover,
.wifi_label:hover,
.window_label:hover,
.bath_label:hover {
  cursor: pointer;
}
.room_label_focus {
  background-color: rgb(234, 247, 234);
  color: rgb(42, 110, 0);
}
/* roomer */
.roomer_info_container {
  color: #484848;
}
.roomer_info_title_container {
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  color: rgb(34, 34, 34);
}
.roomer_info_tips_container {
  font-size: 1rem;
}
.roomer_info_tips_container {
  margin-top: 20px;
}
.roomer_info_tips_bottom {
  margin-top: 20px;
}
.roomer_info_choice_container {
  margin-top: 30px;
  font-size: 1rem;
  font-weight: bold;
}
.roomer_name_container,
.roomer_country_container,
.roomer_idc_type_container,
.roomer_idc_container {
  margin-top: 20px;
}
.roomer_name_container ::v-deep .el-input__inner,
.roomer_idc_container ::v-deep .el-input__inner,
.roomer_country_container ::v-deep .el-input__inner,
.roomer_idc_type_container ::v-deep .el-input__inner {
  height: 56px !important;
  border-radius: 10px !important;
}
.el-select-dropdown__item {
  line-height: 56px !important;
}
.roomer_save_btn_container {
  margin-top: 20px;
  width: 100%;
}
.roomer_save_btn_container ::v-deep .el-button--primary {
  background-color: rgb(34, 34, 34) !important;
}
.roomer_save_btn_container ::v-deep .el-button--primary:active {
  background-color: rgb(34, 34, 34) !important;
}
.roomer_save_btn_container ::v-deep .el-button--primary:hover {
  background-color: rgb(34, 34, 34) !important;
}
.roomer_save_btn {
  width: 100%;
  padding: 14px 24px !important;
  border-radius: 8px;
  background: rgb(34, 34, 34);
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  cursor: pointer;
}
.roomer_save_btn:active {
  transform: scale(0.95, 0.95);
  transition: transform ease 0.4s;
}
/* 日期 */
.date_picker_container {
  width: 100%;
}
.picker_container {
  width: 100%;
  margin-top: 20px;
}
.nignt {
  font-size: 1.4rem;
  font-weight: bold;
  color: rgb(34, 34, 34);
}
/* 魔改element ui */
.el-select {
  width: 100%;
  height: 56px !important;
}
.el-select::v-deep .el-input__inner {
  height: 56px !important;
  border-radius: 8px !important;
}
::v-deep .el-input__inner:active {
  border-color: black !important;
}
::v-deep .el-input__inner:focus {
  border-color: black !important;
}
</style>
<style>
.el-select .el-input.is-focus .el-input__inner {
  border-color: black !important;
}
.el-select-dropdown__item {
  height: 50px !important;
}
.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background-color: #f2f2f2 !important;
}
.el-select-dropdown__item.selected {
  color: rgb(34, 34, 34) !important;
  font-weight: bold !important;
}
</style>
