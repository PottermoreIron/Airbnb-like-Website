<template>
  <div class="div_out">
    <div class="div_in_left">
      <span class="inform">订单号 : </span>
      <span class="inform">用户ID : </span>
      <span class="inform">酒店ID : </span>
      <span class="inform">房间ID : </span>
      <span class="inform">入住时间 : </span>
      <span class="inform">离店时间 : </span>
      <span class="inform">商家ID : </span>
      <span class="inform">评分 : </span>
      <span class="inform">评论 : </span>
    </div>
    <div class="div_in_right">
      <span class="inform">{{ purchaseId }}</span>
      <span class="inform">{{ userId }}</span>
      <span class="inform">{{ hotel }}</span>
      <span class="inform">{{ room }}</span>
      <span class="inform">{{ startDay }}</span>
      <span class="inform">{{ endDay }}</span>
      <span class="inform">{{ ep }}</span>
      <div class="star_div">
        <el-rate
          v-model="star"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}"
        >
        </el-rate>
      </div>
      <span class="inform">{{ comment }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShowPurInfor",
  data() {
    return {
      // purchaseId: 123124,
      // userId: 123,
      // ep: 231,
      // hotel: 2321,
      // room: 234,
      // startDay: "2020-06-14",
      // endDay: "2020-06-18",
      // star: 4.5,
      // comment: "房间很不错aaaaaaaaaaaaaaaaaaaaasssssssssssssssssssss",
    };
  },
  methods: {
    open(x) {
      console.log(x.ep);
    },
  },
};
</script>
<style scoped>
.div_out {
  margin-left: 30px;
  display: flex;
  justify-content: center;
}
.div_in_left {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  width: 150px;
}
.div_in_right {
  width: 200px;
  display: flex;
  flex-flow: column;
  align-items: center;
}
.inform {
  height: 16px;
  margin: 8px;
}
.star_div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 16px;
  margin: 8px;
}
</style>
