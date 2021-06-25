<template>
  <div class="order_container">
    <div class="nav_container"><nav-top textColor="black" /></div>
    <div style="margin-top: 20px; margin-bottom: 0px">
      <div class="separation"></div>
    </div>
    <div class="title_container">
      <div class="back_container">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </div>
      <div class="title_text_container">
        <div class="title_text">确认并支付</div>
      </div>
    </div>
    <div class="main_container">
      <div class="order_main_container"><order-main /></div>
      <div class="order_card_container"><order-card /></div>
    </div>
  </div>
</template>

<script>
import NavTop from "../components/content/home/header/navTop/NavTop.vue";
import OrderCard from "../components/content/order/OrderCard.vue";
import OrderMain from "../components/content/order/OrderMain.vue";
export default {
  components: { OrderMain, OrderCard, NavTop },
  name: "Order",
};
</script>

<style scoped>
.nav_container {
  margin-top: 20px;
}
.separation {
  border-bottom: 1px solid #ebebeb;
}
.title_container {
  display: flex;
  margin-left: 56px;
  margin-top: 60px;
}
.back_container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
}
.back_container:hover {
  cursor: pointer;
  background-color: rgb(247, 247, 247);
}
.title_text_container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
}
.title_text {
  font-size: 2rem;
  font-weight: bold;
  color: black;
}
.main_container {
  display: flex;
  padding: 34px 80px;
}
.order_main_container {
  width: 60%;
}
.order_card_container {
  width: 40%;
}
</style>
