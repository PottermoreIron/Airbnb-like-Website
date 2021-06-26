<template>
  <div class="order_card">
    <div class="item_container">
      <div class="item_img_container"></div>
      <div class="item_desc_container">
        <div class="item_desc_top_container">
          <div class="item_desc_top">成都的整套公寓型住宅</div>
        </div>
        <div class="item_desc_center_container">
          <div class="item_desc_center">
            每客消毒【轻奢】超清投影&人民北路地铁站&文殊院&舒适一居室&可住2人
            1张床 · 1个卫生间
          </div>
        </div>
        <div class="item_desc_bottom_container">
          <div class="item_desc_bottom">4.96 (317条评价)</div>
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
        <div class="item_price_per">￥258.00 x 1晚</div>

        <div class="item_price_per_num"></div>
        ￥258.00
      </div>
      <div class="item_price_total_container">
        <div class="item_price_total">总价 (CNY)</div>
        <div class="item_price_total_num">￥219.30</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderCard",
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
</style>
