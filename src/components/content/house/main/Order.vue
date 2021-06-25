<template>
  <div class="order">
    <div class="info_container">
      <div class="price_container">
        <span class="price">￥300</span
        ><span
          style="
            text-decoration: line-through;
            font-size: 1rem;
            margin-left: 4px;
          "
          >￥1000</span
        >
        <span
          style="
            font-size: 0.5rem;
            font-weight: bold;
            color: rgb(72, 72, 72);
            margin-left: 4px;
          "
          >每晚</span
        >
        <span class="help_icon" v-popover:help
          ><svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-help"></use></svg
        ></span>
        <el-popover ref="help" placement="bottom" width="300" trigger="click">
          <div
            style="
              font-size: 0.9rem;
              font-weight: bold;
              color: rgb(72, 72, 72);
              margin-top: 20px;
            "
          >
            划线价格说明
          </div>
          <div style="margin-top: 20px">
            未划线价格：为产品或服务的实时起售价，是在划线价格基础上计算出的优惠金额，具体成交价格根据商品或服务参加活动或您是否使用礼金券等发生变化，最终以订单结算页的价格为准。
          </div>
          <div style="margin-top: 20px">
            划线价格：为参考价，指产品或服务的市场价、服务提供者的建议销售价、零售价或该产品或服务曾经展示过的销售价等，并非原价；由于产品或服务信息实时更新，市场价格波动等可能会与您预订时展示的不一致，该价格仅供您参考。
            （若出现折扣比例）折扣比例说明：为划线价与未划线价作比较后计算出的优惠折扣，仅供参考。
          </div>
        </el-popover>
      </div>
      <div class="label_container">
        <div class="label" v-popover:tonight>
          <span class="label_icon"
            ><svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-confirm"></use></svg></span
          >今夜特价5折
        </div>
        <el-popover
          ref="tonight"
          placement="bottom"
          width="200"
          trigger="hover"
        >
          当天 0:00 后预订并于当晚入住，可享受当日原房费的 5 折优惠。
        </el-popover>
        <div class="label" style="margin-left: 4px" v-popover:summer>
          <span class="label_icon"
            ><svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-rights"></use></svg></span
          >夏季特惠6折
        </div>
        <el-popover ref="summer" placement="bottom" width="200" trigger="hover">
          在 6月1日 – 6月30日 期间入住，可享受原房费的 6 折优惠。
        </el-popover>
        <div class="label" style="margin-left: 4px" v-popover:bird>
          <span class="label_icon"
            ><svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-rights"></use></svg></span
          >早鸟特惠6折
        </div>
        <el-popover ref="bird" placement="bottom" width="200" trigger="hover">
          在入住日期的 1 天前预订，可享受原房费的 6 折优惠。
        </el-popover>
        <div class="label" v-popover:triDay>
          <span class="label_icon"
            ><svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-rights"></use></svg></span
          >连住优惠满3天5.5折
        </div>
        <el-popover ref="triDay" placement="bottom" width="200" trigger="hover">
          入住房源 3 晚或以上，可享受原房费的 5.5 折优惠。
        </el-popover>
        <div class="label" style="margin-left: 4px" v-popover:twoDay>
          <span class="label_icon"
            ><svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-rights"></use></svg></span
          >连住优惠满2天5.8折
        </div>
        <el-popover ref="twoDay" placement="bottom" width="200" trigger="hover">
          入住房源 2 晚或以上，可享受原房费的 5.8 折优惠。
        </el-popover>
        <div class="label" v-popover:weekday>
          <span class="label_icon"
            ><svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-rights"></use></svg></span
          >周初特价6折
        </div>
        <el-popover
          ref="weekday"
          placement="bottom"
          width="200"
          trigger="hover"
        >
          在周一至周三入住 Amor~ 的房源，可享受原房费的 6 折优惠
        </el-popover>
        <div class="label" style="margin-left: 4px" v-popover:weekend>
          <span class="label_icon"
            ><svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-rights"></use></svg></span
          >周末特惠6折
        </div>
        <el-popover
          ref="weekend"
          placement="bottom"
          width="200"
          trigger="hover"
        >
          在周五、周六入住的房源，可享受原房费的 6 折优惠
        </el-popover>
      </div>
      <div class="score">
        <span v-for="item in stars" :key="item.index" class="score_icon"
          ><svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-star"></use></svg
        ></span>
        <span class="comment_num">60条</span>
      </div>
    </div>
    <div style="margin-top: 30px; margin-bottom: 0px">
      <div class="separation"></div>
    </div>
    <div class="order_form_container">
      <div class="date_container">
        <span class="date_title">日期</span>
        <div class="date_picker">
          <el-date-picker
            v-model="date"
            type="daterange"
            range-separator="→"
            start-placeholder="入住日期"
            end-placeholder="退房日期"
            value-format="yyyy-MM-dd"
            :picker-options="pickerOptions"
            @change="sonChangeDate"
            :clearable="false"
          >
          </el-date-picker>
        </div>
      </div>
      <div class="num_container">
        <div class="num_title">人数</div>
        <div class="num_input">
          <el-input
            v-model="totalNum"
            placeholder="请输入内容"
            v-popover:num
          ></el-input>
          <el-popover ref="num" placement="bottom" width="300" trigger="focus">
            <div class="adult">
              <div class="adult_title">成人</div>
              <div class="num_input">
                <el-input-number
                  v-model="adultNum"
                  :min="1"
                  :max="10"
                  label="描述文字"
                ></el-input-number>
              </div>
            </div>
            <div class="children">
              <div class="children_text">
                <div class="children_title">儿童</div>
                <div class="children_desc">2 - 12 岁</div>
              </div>
              <div class="num_input">
                <el-input-number
                  v-model="childrenNum"
                  :min="0"
                  :max="10"
                  label="描述文字"
                ></el-input-number>
              </div>
            </div>
            <div class="babe">
              <div class="babe_text">
                <div class="babe_title">婴儿</div>
                <div class="babe_desc">2岁以下</div>
              </div>
              <div>
                <el-input-number
                  v-model="babeNum"
                  :max="10"
                  label="描述文字"
                ></el-input-number>
              </div>
            </div>
          </el-popover>
        </div>
      </div>
    </div>
    <div class="order_btn_container">
      <button class="order_btn">预订</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
  props: { date: { type: Array, default: () => [] } },
  data() {
    return {
      stars: [],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        },
      },
      adultNum: "",
      childrenNum: "",
      babeNum: "",
    };
  },
  created() {
    let _this = this;
    _this.stars = new Array(Number(3)).join(",").split(",");
  },
  computed: {
    // 计算属性的 getter
    totalNum: function () {
      // `this` 指向 vm 实例
      return this.adultNum + this.childrenNum + this.babeNum + "人";
    },
  },
  methods: {
    sonChangeDate() {
      let dateArr = Array.from(this.date);
      this.$emit("changeDate", dateArr);
    },
  },
};
</script>

<style scoped>
.order {
  width: 100%;
  height: 100%;
  border: 1px solid #e4e4e4;
  padding-left: 24px;
  padding-right: 24px;
  color: rgb(118, 118, 118);
}
.separation {
  border-bottom: 1px solid #ebebeb;
}
.info_container {
  margin-top: 20px;
}
.label_container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 0.6rem;
  margin-top: 10px;
}
.label {
  margin-bottom: 10px;
}
.help_icon {
  margin-left: 4px;
  font-size: 0.9rem;
  cursor: pointer;
}
.label_icon {
  margin-right: 3px;
  font-size: 0.8rem;
}
.price {
  font-size: 1.4rem;
  font-weight: bold;
  color: rgb(0, 132, 137);
}
.score_icon {
  font-size: 0.7rem;
}
.comment_num {
  font-size: 0.8rem;
  margin-left: 10px;
  font-weight: bold;
  color: rgb(72, 72, 72);
}
.order_form_container {
  margin-top: 20px;
  color: rgb(72, 72, 72);
}
.date_title,
.num_title {
  font-weight: bold;
  font-size: 0.8rem;
}
.date_picker {
  margin-top: 10px;
}
.num_container {
  margin-top: 10px;
}
.num_input {
  margin-top: 10px;
}
>>> .el-input,
>>> .el-input__inner {
  border-color: rgb(0, 0, 0) !important;
}
>>> .el-input__inner:focus {
  border-color: rgb(0, 132, 137) !important;
}
.adult,
.children,
.babe {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  color: rgb(72, 72, 72);
}
.adult_title,
.children_title,
.babe_title {
  font-weight: bold;
  font-size: 0.9rem;
}
.children_desc,
.babe_desc {
  font-size: 0.6rem;
}
.order_btn_container {
  width: 100%;
  margin-top: 20px;
}
.order_btn {
  width: 100%;
  height: 46px;
  background-color: #ff5a5f;
  border: none;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
}
</style>
<style>
/* 魔改elementUI */

.el-range-editor,
.el-range-editor.is-active,
.el-range-editor.is-active:hover {
  width: 100% !important;
}
.el-range-editor.is-active,
.el-range-editor.is-active:hover {
  border-color: rgb(0, 132, 137) !important;
}
.el-range-separator {
  width: 20px !important;
}
.el-date-table td.today span {
  color: rgb(71, 117, 119) !important;
}
.el-date-table td.today.end-date span,
.el-date-table td.today.start-date span {
  color: white !important;
}
.el-date-table td.end-date span,
.el-date-table td.start-date span {
  background-color: teal !important;
}
.el-date-table td:hover {
  color: teal !important;
}
</style>
