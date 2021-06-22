<template>
  <div class="house_img_container">
    <div class="main_img_container">
      <img class="zoom_img" src="../../../static/test_img/house/zoom.jpeg" />
      <img class="main_img" src="../../../static/test_img/house/house1.jpeg" />
    </div>
    <div class="sub_img_container">
      <div class="sub_img_item">
        <img class="zoom_img" src="../../../static/test_img/house/zoom.jpeg" />
        <img class="sub_img" src="../../../static/test_img/house/house2.jpeg" />
      </div>
      <div class="sub_img_item">
        <img class="zoom_img" src="../../../static/test_img/house/zoom.jpeg" />
        <img class="sub_img" src="../../../static/test_img/house/house3.jpeg" />
      </div>
    </div>
    <div class="sub_img_container">
      <div class="sub_img_item">
        <img class="zoom_img" src="../../../static/test_img/house/zoom.jpeg" />
        <img class="sub_img" src="../../../static/test_img/house/house4.jpeg" />
      </div>
      <div class="sub_img_item">
        <img class="zoom_img" src="../../../static/test_img/house/zoom.jpeg" />
        <img class="sub_img" src="../../../static/test_img/house/house5.jpeg" />
      </div>
    </div>
    <div class="collection_btn" @click="collectHouse">
      <button v-if="isCollected">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-notCollected"></use></svg
        >未收藏
      </button>
      <button v-else>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-collected"></use></svg
        >已收藏
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HouseImgShow",
  data() {
    return {
      isCollected: true,
    };
  },
  methods: {
    collectHouse() {
      let _this = this;
      if (!_this.isCollected) {
        //   收藏
        _this.isCollected = !_this.isCollected;
      } else if (_this.isCollected) {
        //   取消收藏
        _this.isCollected = !_this.isCollected;
      }
    },
  },
};
</script>

<style scoped>
.house_img_container {
  width: 100%;
  height: 294px !important;
  display: flex;
  flex-direction: row;
  background: black !important;
  position: relative;
}
.main_img_container,
.sub_img_item {
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  background-color: black;
  position: relative;
  border: black solid 1px;
}
.main_img_container {
  width: 100%;
  height: 100%;
}
.sub_img_item {
  height: 50%;
  transition: all ease-in 0.4s;
}
.zoom_img {
  display: inline-block;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 2s ease 0s;
}
.main_img {
  width: 100%;
  height: 100%;
  display: inline-block;
  left: 0%;
  position: absolute;
  transform: scale(1);
  opacity: 1;
  transition: transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
}
.sub_img_container {
  position: relative;
  overflow: hidden;
  width: 50%;
  height: 100%;
  transition: all ease-in 0.4s;
}
.sub_img {
  width: 100%;
  display: inline-block;
  left: 0%;
  position: absolute;
  transform: scale(1);
  opacity: 1;
  transition: transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
}
.main_img:hover,
.sub_img:hover {
  transition: transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  transform: scale(1.05) !important;
  cursor: pointer;
}
.main_img:not(:hover),
.sub_img:not(:hover) {
  opacity: 0.87;
  filter: alpha(opacity=70);
  transition: all ease-in 0.4s;
}
.collection_btn {
  position: absolute;
  right: 24px;
  top: 45px;
}
.collection_btn button {
  width: 84px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  border-radius: 8px;
}
.collection_btn button:active {
  transform: scale(0.96) !important;
}
</style>
