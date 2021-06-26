<template>
  <div class="search_container">
    <div class="navTop"><nav-top textColor="black" /></div>
    <div style="margin-top: 20px; margin-bottom: 0px">
      <div class="separation"></div>
    </div>
    <div class="label_container">
      <div class="label">
        <button class="label_btn">日期</button>
      </div>
      <div class="label"><button class="label_btn">智能排序</button></div>
      <div class="label"><button class="label_btn">价格</button></div>
      <div class="label"><button class="label_btn">评分</button></div>
      <div class="label"><button class="label_btn">距离</button></div>
      <div class="label"><button class="label_btn">订单量</button></div>
    </div>
    <div style="margin-top: 10px; margin-bottom: 0px">
      <div class="separation"></div>
    </div>
    <div class="main_container">
      <div class="hotel_list_container">
        <span class="hotel_list_title">300多处住宿</span>
        <div class="hotel_list">
          <div class="hotel_list_item_container">
            <hotel-item />
          </div>
        </div>
      </div>
      <div class="search_map_container">
        <search-map />
      </div>
    </div>
  </div>
</template>

<script>
import NavTop from "../components/content/home/header/navTop/NavTop.vue";
import HotelItem from "../components/content/search/HotelItem.vue";
import SearchMap from "../components/content/search/SearchMap.vue";
export default {
  components: { NavTop, HotelItem, SearchMap },
  name: "Search",
  data() {
    return {};
  },
};
</script>

<style scoped>
.search_container {
  margin-top: 20px;
}
.separation {
  border-bottom: 1px solid #ebebeb;
}
/* label */
.label_container {
  width: 60%;
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
}
.label {
  margin-left: 13px;
}
.label_btn {
  padding: 6px 12px;
  background-color: transparent;
  font-size: 0.9rem;
  border: 1px solid #dce0e0;
  border-radius: 4px;
  color: #484848;
}
.label_btn:hover {
  background-color: #f2f2f2;
  cursor: pointer;
}
.label_btn:focus {
  background: rgb(0, 132, 137);
  border: 1px solid rgb(0, 132, 137);
  color: white;
}
.main_container {
  width: 100%;
  display: flex;
}
/* hotel list */
.hotel_list_container {
  width: 60%;
  margin-left: 23px;
  margin-top: 10px;
}
.hotel_list_title {
  font-size: 1.4rem;
  font-weight: bold;
  color: rgb(34, 34, 34);
}
/* hotel item */
.hotel_list_item_container {
  margin-top: 13px;
}
/* search map */
.search_map_container {
  margin-left: 2%;
  width: 36%;
}
</style>
