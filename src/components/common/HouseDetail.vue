<template>
  <div class="house_detail_container">
    <house-nav class="house_nav" /><house-img-show
      class="house_img_show"
      :hotelImgs="hotel.pics"
    /><house-main class="house_main" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import HouseImgShow from "../content/house/HouseImgShow.vue";
import HouseMain from "../content/house/HouseMain.vue";
import HouseNav from "../content/house/HouseNav.vue";
export default {
  name: "HouseDetail",
  components: { HouseNav, HouseImgShow, HouseMain },
  data() {
    return {};
  },

  computed: {
    ...mapState("hotel", { hotel: "hotel" }),
  },
};
</script>

<style scoped>
.house_nav {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
}
.house_main {
  margin-top: 25px;
  padding-left: 6%;
  padding-right: 6%;
}
</style>
