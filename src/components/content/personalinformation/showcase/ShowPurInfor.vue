<template>
  <div class="div_out">
    <div class="div_in_left">
      <span class="inform">订单号 : </span>
      <span class="inform">用户ID : </span>
      <span class="inform">酒店ID : </span>
      <span class="inform">房间ID : </span>
      <span class="inform">价格 : </span>
      <span class="inform">入住时间 : </span>
      <span class="inform">离店时间 : </span>
      <span class="inform">商家ID : </span>
      <span class="inform">评分 : </span>
      <span class="inform">评论 : </span>
    </div>
    <div class="div_in_right">
      <span class="inform">{{ purchase.id }}</span>
      <span class="inform">{{ purchase.purchaseUser }}</span>
      <span class="inform">{{ purchase.purchaseHotel }}</span>
      <span class="inform">{{ purchase.purchaseRoom }}</span>
      <span class="inform">{{ purchase.purchasePrice }}</span>
      <span class="inform">{{ purchase.purchaseStart }}</span>
      <span class="inform">{{ purchase.purchaseOver }}</span>
      <span class="inform">{{ purchase.purchaseEp }}</span>
      <div class="star_div">
        <el-rate
          v-model="purchase.purchaseStar"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}"
        >
        </el-rate>
      </div>
      <span class="inform">{{ purchase.purchaseComment }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShowPurInfor",
  data() {
    return {
      purchase: [],
    };
  },
  methods: {
    open(x) {
      this.purchase = x;
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
  justify-content: center;
}
.inform {
  height: 16px;
  margin: 8px;
}
.star_div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  margin: 8px;
}
</style>
