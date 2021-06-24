<template>
  <div class="div_out">
    <span class="inform">订单号 : {{ purchaseId }}</span>
    <span class="inform">用户ID : {{ userId }}</span>
    <span class="inform">酒店ID : {{ hotel }}</span>
    <span class="inform">房间ID : {{ room }}</span>
    <span class="inform">入住时间 : {{ startDay }}</span>
    <span class="inform">离店时间 : {{ endDay }}</span>
    <div class="star_div">
      <span class="inform">评分 : </span>
      <el-rate
        v-model="star"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value}"
      >
      </el-rate>
    </div>

    <span class="inform">评论 : {{ userId }}</span>
    <span class="inform">商家ID : {{ ep }}</span>
  </div>
</template>
<script>
export default {
  name: "ShowPurInfor",
  data() {
    return {
      purchaseId: 0,
      userId: 0,
      ep: 0,
      hotel: 0,
      room: 0,
      startDay: "",
      endDay: "",
      star: 4.5,
      comment: "",
    };
  },
  methods: {},
};
</script>
<style scoped>
.div_out {
  margin-left: 30px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
}
.inform {
  margin: 10px;
}
.star_div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
