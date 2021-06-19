<template>
  <div class="nav_bottom_container">
    <div class="rTable">
      <div class="rTable_tip_container">
        <div>祝您拥有一趟愉快的旅程</div>
      </div>
      <div class="rTable_info_container">
        <div class="national_choice_container">
          <span class="national_title">国内热门城市</span>
          <div class="national_choice" @click="clickSuggestion">
            <span class="r_table_info">北京</span
            ><span class="r_table_info">上海</span
            ><span class="r_table_info">成都</span
            ><span class="r_table_info">重庆</span
            ><span class="r_table_info">杭州</span
            ><span class="r_table_info">厦门</span
            ><span class="r_table_info">广州</span
            ><span class="r_table_info">西安</span>
          </div>
        </div>
        <div class="inter_choice_container">
          <span class="inter_title">国际/港澳台热门城市</span>
          <div class="inter_choice" @click="clickSuggestion">
            <span class="r_table_info">大阪</span
            ><span class="r_table_info">东京</span
            ><span class="r_table_info">台北</span
            ><span class="r_table_info">中国香港</span
            ><span class="r_table_info">京都</span
            ><span class="r_table_info">曼谷</span
            ><span class="r_table_info">首尔</span
            ><span class="r_table_info">清迈</span>
          </div>
        </div>
        <div class="summer_choice_container">
          <span class="summer_title">夏季好去处</span>
          <div class="summer_choice" @click="clickSuggestion">
            <span class="r_table_info">深圳</span
            ><span class="r_table_info">南京</span
            ><span class="r_table_info">武汉</span
            ><span class="r_table_info">长沙</span
            ><span class="r_table_info">苏州</span
            ><span class="r_table_info">吉隆坡</span
            ><span class="r_table_info">宁波</span
            ><span class="r_table_info">福州</span>
          </div>
        </div>
      </div>
    </div>
    <div class="t">
      <div>
        <el-input
          v-model="location"
          placeholder="输入目的地、城市或景点"
        ></el-input>
      </div>
    </div>
    <div class="block">
      <el-date-picker
        v-model="period"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="yyyy-MM-dd"
        @change="change"
      >
      </el-date-picker>
    </div>
    <el-button icon="el-icon-search" circle></el-button>
  </div>
</template>

<script>
export default {
  name: "NavBottom",
  data() {
    return {
      period: "",
      location: "",
    };
  },
  methods: {
    change() {
      console.log(this.period);
    },
    // 事件委托
    clickSuggestion(event) {
      // 判断是不是span标签
      if (event.target.nodeName == "SPAN") {
        console.log(event.target.innerHTML);
      }
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
  height: 200px;
  background-color: black;
  left: 5%;
  top: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.rTable_tip_container {
  margin-top: 10px;
}
.rTable_info_container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  margin-top: 20px;
}
.national_title,
.inter_title,
.summer_title {
  font-size: 1.2rem;
  font-weight: bold;
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
.r_table_info {
  margin-right: 20px;
  margin-top: 10px;
}
.r_table_info:hover {
  background-color: blue;
  cursor: pointer;
}
</style>
