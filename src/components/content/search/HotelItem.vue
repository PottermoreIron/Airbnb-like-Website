<template>
  <div class="hotel_item_container">
    <div class="img_container">
      <span class="collection_btn_container" @click="collectHouse"
        ><svg
          class="icon"
          aria-hidden="true"
          v-if="!isCollected"
          style="font-size: 2rem"
        >
          <use xlink:href="#icon-notCollected"></use>
        </svg>
        <svg class="icon" aria-hidden="true" v-else style="font-size: 2rem">
          <use xlink:href="#icon-collected"></use></svg
      ></span>
      <el-carousel trigger="click" height="200px" :autoplay="false">
        <el-carousel-item v-for="item in hotelImgs" :key="item">
          <div class="img_item_container">
            <img class="house_img" :src="item" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="other_container">
      <div class="hotel_info_container">
        <div class="hotel_info_title_container">
          <span class="hotel_info_title">{{ name }}</span>
        </div>
        <div class="hotel_desc_container">
          <div class="hotel_desc">
            {{ description }}
          </div>
        </div>
        <div class="hotel_label_container">
          <div class="score_container">
            <span>{{ rating }}分 · {{ comment }}条评论</span>
          </div>
          <div class="label_container" style="margin-left: 3px">
            <span>超赞房东</span>
          </div>
          <div class="label_container" style="margin-left: 3px">
            <span>近地铁站</span>
          </div>
          <div class="label_container"><span>灵活退改</span></div>
          <div class="label_container" style="margin-left: 3px">
            <span>投影/大电视</span>
          </div>
          <div class="label_container" style="margin-left: 3px">
            <span>可以停车</span>
          </div>
        </div>
      </div>
      <div style="margin-left: 15px; margin-right: 15px">
        <div class="separation"></div>
      </div>
      <div class="hotel_price_container">
        <div class="price">￥{{ price }}</div>
        <div class="per">/ 晚</div>
        <div class="discount">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-rights"></use></svg
          >夏季特惠9.5折
        </div>
        <div class="avatar_container">
          <img src="/test_img/avatar.jpg" class="avatar_img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotelItem",
  props: ["hotelImgs", "price", "rating", "name", "comment", "description"],
  data() {
    return {
      isCollected: false,
    };
  },
  methods: {
    collectHouse() {
      let _this = this;
      _this.isCollected = !_this.isCollected;
    },
  },
};
</script>

<style scoped>
.hotel_item_container {
  height: 200px;
  display: flex;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  margin-top: 20px;
}
.hotel_item_container:hover {
  border: 1px solid rgb(235, 235, 235);
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 4px;
  cursor: pointer;
}
.separation {
  border-left: 1px solid #ebebeb;
  height: 100%;
}
.img_container {
  width: 40%;
  position: relative;
}
.img_item_container {
  width: 100%;
  height: 100%;
  position: relative;
}
.house_img {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}
::v-deep .el-carousel__button {
  width: 15px !important;
}
.collection_btn_container {
  position: absolute;
  z-index: 3;
  right: 3%;
  top: 5%;
}

.other_container {
  width: 60%;
  padding: 20px 20px 16px 20px;
  display: flex;
}
.hotel_info_container {
  width: 60%;
  height: 100%;
}
.hotel_info_title {
  color: rgb(118, 118, 118);
  font-size: 0.7rem;
  font-weight: bold;
}
.hotel_desc_container {
  width: 100%;
  margin-top: 6px;
}
.hotel_desc {
  width: 100%;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
  line-height: 1.3rem;
}
.hotel_label_container {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.7rem;
  font-weight: bold;
  margin-top: 5px;
}
.label_container,
.score_container {
  padding: 5.4px 8.8px;
  background-color: rgb(242, 242, 242);
  border-radius: 15px;
  color: #484848;
  margin-top: 5px;
}
.score_container {
  color: #296e00;
  background-color: #eaf7ea;
}
.hotel_price_container {
  height: 100%;
  width: 31%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.price {
  font-weight: bold;
  font-size: 1.1rem;
}
.per {
  margin-top: 5px;
  font-size: 0.8rem;
}
.discount {
  margin-top: 5px;
  font-size: 0.8rem;
}
.avatar_container {
  width: 40px;
  height: 40px;
  margin-top: 60px;
}
.avatar_img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>
