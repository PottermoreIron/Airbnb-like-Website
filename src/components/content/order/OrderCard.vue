<template>
  <div class="order_card">
    <div class="item_container">
      <div class="item_img_container">
        <img src="test_img/house/house1.jpeg" class="item_img" />
      </div>
      <div class="item_desc_container">
        <div class="item_desc_top_container">
          <div class="item_desc_top">{{ hotel.hotel.hotelName }}</div>
        </div>
        <div class="item_desc_center_container">
          <div class="item_desc_center_top">
            {{ hotel.hotel.hotelWord }}
          </div>
          <div class="item_desc_center_bottom">1张床 · 1个卫生间</div>
        </div>
        <div class="item_desc_bottom_container">
          <div class="item_desc_bottom">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-star"></use></svg
            ><span style="color: rgb(34, 34, 34); font-weight: bold"
              >{{ hotel.hotel.hotelStar }}
            </span>
            <span style="color: rgb(113, 113, 113)"
              >({{ hotel.purchaseNum }}条评价)</span
            >
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top: 25px; margin-bottom: 0px; width: 82%">
      <div class="separation"></div>
    </div>
    <div class="item_price_contianer">
      <div class="item_price_title_container">
        <div class="item_price_title">价格详情</div>
      </div>
      <div class="item_price_per_container">
        <div class="item_price_per">￥{{ price }} x {{ day }}晚</div>

        <div class="item_price_per_num"></div>
        ￥{{ price }}
      </div>
      <div class="item_price_total_container">
        <div class="item_price_total">总价 (<u>CNY</u>)</div>
        <div class="item_price_total_num">￥{{ totalPrice }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "OrderCard",
  props: ["day"],
  computed: {
    totalPrice: function () {
      let res = this.day * this.price;
      return res.toFixed(2);
    },
    price: function () {
      let res = this.$store.state.hotel.hotel.hotel.hotelPrice;
      return res;
    },
    ...mapState("hotel", { hotel: "hotel" }),
  },
};
</script>

<style scoped>
.order_card {
  padding: 24px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
}
.separation {
  border-bottom: 1px solid #ebebeb;
}
.item_container {
  display: flex;
  width: 100%;
}
.item_img_container {
  width: 124px;
  height: 106px;
}
.item_img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.item_desc_container {
  margin-left: 10px;
  width: 66%;
}
.item_desc_top_container {
  font-size: 0.7rem;
  color: rgb(34, 34, 34);
}
.item_desc_center_container {
  margin-top: 7px;
}
.item_desc_center_top {
  font-size: 0.9rem;
}
.item_desc_center_bottom {
  margin-top: 4px;
  color: rgb(113, 113, 113);
  font-size: 0.6rem;
}
.item_desc_bottom_container {
  margin-top: 13px;
  font-size: 0.9rem;
}
.item_price_contianer {
  margin-top: 20px;
}
.item_price_title {
  font-size: 1.4rem;
  font-weight: bold;
  color: #222222;
}
.item_price_per_container,
.item_price_total_container {
  display: table;
  width: 100%;
  margin-top: 20px;
}
.item_price_per_container {
  font-weight: lighter;
  color: rgb(34, 34, 34);
}
.item_price_total_container {
  font-weight: bold;
  color: rgb(34, 34, 34);
}
.item_price_per,
.item_price_total {
  display: table-cell;
  width: 100%;
  vertical-align: middle;
}
</style>
