<template>
  <div class="nav_bottom_container">
    <div class="rTable" v-if="showSuggestion">
      <div class="rTable_tip_container">
        <div>祝您拥有一趟愉快的旅程</div>
      </div>
      <div class="separation_container"><div class="separation"></div></div>
      <div class="rTable_info_container">
        <div class="national_choice_container">
          <span class="national_title">国内热门城市</span>
          <div class="national_choice" @click="clickSuggestion">
            <div class="r_table_info_container">
              <span class="r_table_info">北京</span>
            </div>
            <div class="r_table_info_container">
              <span class="r_table_info">上海</span>
            </div>
            <div class="r_table_info_container">
              <span class="r_table_info">成都</span>
            </div>
            <div class="r_table_info_container">
              <span class="r_table_info">重庆</span>
            </div>
            <div class="r_table_info_container">
              <span class="r_table_info">杭州</span>
            </div>
            <div class="r_table_info_container">
              <span class="r_table_info">厦门</span>
            </div>
            <div class="r_table_info_container">
              <span class="r_table_info">广州</span>
            </div>
            <div class="r_table_info_container">
              <span class="r_table_info">西安</span>
            </div>
          </div>
        </div>
        <div class="inter_choice_container">
          <span class="inter_title">国际/港澳台热门城市</span>
          <div class="inter_choice" @click="clickSuggestion">
            <div class="r_table_info_container">
              <span class="r_table_info">大阪</span>
            </div>
            <div class="r_table_info_container">
              <span class="r_table_info">东京</span>
            </div>
            <div class="r_table_info_container">
              <span class="r_table_info">台北</span>
            </div>
            <div class="r_table_info_container">
              <span class="r_table_info">中国香港</span>
            </div>
            <div class="r_table_info_container">
              <span class="r_table_info">京都</span>
            </div>
            <div class="r_table_info_container">
              <span class="r_table_info">曼谷</span>
            </div>
            <div class="r_table_info_container">
              <span class="r_table_info">首尔</span>
            </div>
            <div class="r_table_info_container">
              <span class="r_table_info">清迈</span>
            </div>
          </div>
        </div>
        <div class="summer_choice_container">
          <span class="summer_title">夏季好去处</span>
          <div class="summer_choice" @click="clickSuggestion">
            <div class="r_table_info_container">
              <span class="r_table_info">深圳</span>
            </div>
            <div class="r_table_info_container">
              <span class="r_table_info">南京</span>
            </div>
            <div class="r_table_info_container">
              <span class="r_table_info">武汉</span>
            </div>
            <div class="r_table_info_container">
              <span class="r_table_info">长沙</span>
            </div>
            <div class="r_table_info_container">
              <span class="r_table_info">苏州</span>
            </div>
            <div class="r_table_info_container">
              <span class="r_table_info">吉隆坡</span>
            </div>
            <div class="r_table_info_container">
              <span class="r_table_info">宁波</span>
            </div>
            <div class="r_table_info_container">
              <span class="r_table_info">福州</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="site_input">
      <div>
        <el-input
          v-model="site"
          placeholder="输入目的地、城市或景点"
          prefix-icon="el-icon-location"
          @focus="inputFocus"
          @blur="inputBlur"
        ></el-input>
      </div>
    </div>
    <div class="block">
      <el-date-picker
        v-model="period"
        type="daterange"
        range-separator="-"
        start-placeholder="入住日期"
        end-placeholder="退房日期"
        value-format="yyyy-MM-dd"
        @change="change"
        popper-class="custom_date_picker"
        :picker-options="pickerOptions"
      >
      </el-date-picker>
    </div>
    <el-button
      icon="el-icon-search"
      circle
      class="search_button"
      @click="goSearchDetail"
    ></el-button>
  </div>
</template>

<script>
export default {
  name: "NavBottom",
  data() {
    return {
      period: [],
      site: "",
      showSuggestion: false,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        },
      },
    };
  },
  methods: {
    change() {
      this.$store.commit("order/chooseDate", this.period);
    },
    // 事件委托
    clickSuggestion(event) {
      // 判断是不是span标签
      if (event.target.nodeName == "SPAN") {
        this.site = event.target.innerHTML;
      }
      this.showSuggestion = false;
    },
    inputFocus() {
      this.showSuggestion = true;
    },
    inputBlur() {
      let _this = this;
      setTimeout(function () {
        _this.showSuggestion = false;
      }, 200);
    },
    goSearchDetail() {
      this.$router.push("/search");
    },
  },
};
</script>

<style scoped>
.nav_bottom_container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.rTable {
  position: absolute;
  width: 100%;
  height: 250px;
  background-color: white;
  left: 5%;
  top: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgb(26 26 29 / 30%) 0px 15px 46px -10px !important;
}
.rTable_tip_container {
  font-size: 0.5rem;
  margin-top: 20px;
  margin-left: 20px;
  color: #7d7d7d;
  align-self: flex-start;
}
.separation_container {
  width: 100%;
  height: 1px !important;
  background: rgb(255, 255, 255) !important;
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.separation {
  width: 94%;
  height: 1px !important;
  background: rgb(235, 235, 235) !important;
}
.rTable_info_container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  padding: 20px;
}
.national_title,
.inter_title,
.summer_title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #484848;
}
.national_choice_container,
.inter_choice_container,
.summer_choice_container {
  width: 33%;
  display: flex;
  flex-direction: column;
}
.national_choice,
.inter_choice,
.summer_choice {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
}
.r_table_info_container {
  height: 40px;
  display: flex;
  justify-content: center;
  margin-right: 20px;
  margin-top: 5px;
}
.r_table_info_container:hover {
  background-color: #cceeeb;
}
.r_table_info {
  margin-top: 10px;
  color: #575757;
}
.r_table_info:hover {
  cursor: pointer;
}
.site_input {
  margin-right: 2%;
  width: 49%;
}
::v-deep .el-input__inner {
  height: 70px;
  font-weight: bold;
  font-size: 1.2rem;
}
::v-deep .el-input__inner::placeholder {
  color: #b0b3b8;
}
.search_button {
  margin-left: 2% !important;
}
.el-button {
  background-color: #2a9d8f;
  color: white;
  border: 1px solid #f1faee;
}
.el-button:active,
.el-button:focus {
  background-color: #2a9d8f;
  color: white;
  border-color: #c6e2ff;
  /* outline: 0; */
}
.el-button:hover {
  color: #2a9d8f;
  border-color: #2a9d8f;
  background-color: #ecf5ff;
}
</style>

<style lang="scss">
/* 魔改datePicker样式 */
// 危险!没加scoped
.el-date-table td {
  color: rgb(100, 100, 100) !important;
}
.el-date-table td.today span {
  color: #4ecdc4 !important;
}
.el-date-table td.end-date span,
.el-date-table td.start-date span {
  background-color: mediumaquamarine !important;
  color: white !important;
}
.el-range-input {
  color: #00423b !important;
  font-size: 1.1rem !important;
}
.el-range-input::placeholder {
  color: #b0b3b8 !important;
  font-size: 1.1rem;
}
.el-date-editor .el-range-separator {
  width: 20% !important;
}
.el-range-separator {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
</style>
