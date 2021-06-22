<template>
  <div class="item_container" @click="goHouseDetail">
    <div class="room_img">
      <img src="../../../../static/test_img/room.jpg" alt="房间图片" />
    </div>
    <div class="info">
      <div class="info_top">
        <div class="label">{{ label }}</div>
        <div class="desc">
          {{ description }}
        </div>
      </div>
      <div class="info_bottom">
        <div class="price">￥{{ price }}/晚</div>
        <div class="stars">
          <span v-for="item in stars" :key="item.index">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-star"></use>
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainItem",
  props: ["imgUrl", "label", "description", "price", "score"],
  data() {
    return {
      stars: [],
    };
  },
  created() {
    let _this = this;
    _this.stars = new Array(Number(_this.score)).join(",").split(",");
  },
  methods: {
    //   测试用的
    goHouseDetail() {
      this.$router.push("/house");
    },
  },
};
</script>

<style scoped>
.item_container {
  width: 33%;
  display: flex;
  flex-direction: column;
  padding: 1%;
}
.room_img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.room_img img {
  width: 100%;
  height: 100%;
}
.info {
  display: flex;
  flex-direction: column;
  margin-top: 3%;
}
.info_top {
  margin-bottom: 2%;
}
.info_top:hover {
  cursor: pointer;
}
.label {
  font-size: 0.8rem;
  font-weight: bold;
  color: rgb(57, 87, 106);
  margin-bottom: 1%;
}
.desc {
  font-weight: bold;
  color: rgb(72, 72, 72);
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 1;
  white-space: nowrap;
}
.price {
  font-weight: bold;
  color: rgb(72, 72, 72);
}
</style>
