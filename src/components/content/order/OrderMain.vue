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
          <div class="date_text_bottom">6月27日 – 7月19日</div>
        </div>
        <div class="edit_date_btn_container">
          <div class="edit_date_btn_container">
            <button class="edit_date_btn">编辑</button>
          </div>
        </div>
      </div>
      <div class="trip_num_container">
        <div class="num_text_container">
          <div class="num_text_top">房客人数</div>
          <div class="num_text_bottom">1位房客</div>
        </div>
        <div class="edit_num_btn_container">
          <div class="edit_num_btn_container">
            <button class="edit_num_btn">编辑</button>
          </div>
        </div>
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
        <el-select v-model="value" placeholder="请选择">
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
          <button class="info_desc_btn">添加</button>
        </div>
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
        <button class="order_btn">确认并支付</button>
      </div>
    </div>
  </div>
</template>

<script>
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
      value: "",
    };
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
/* 魔改element ui */
.el-select {
  width: 100%;
  height: 56px !important;
}
::v-deep .el-input__inner {
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
