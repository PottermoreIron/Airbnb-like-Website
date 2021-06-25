<template>
  <div class="map">
    <baidu-map
      class="normal_map"
      center="北京"
      :dragging="false"
      :double-click-zoom="false"
      :map-click="false"
    >
      <bm-marker
        :position="{ lng: 116.404, lat: 39.915 }"
        animation="BMAP_ANIMATION_BOUNCE"
        :icon="{
          url: require('../../../assets/img/home-fill.svg'),
          opts: { imageSize: { width: 30, height: 30 } },
          size: { width: 30, height: 30 },
        }"
        @click="showPopover"
      ></bm-marker>
    </baidu-map>
    <button class="zoom_in_btn" @click="showPopover">放大地图</button>
    <el-dialog :visible.sync="popoverMapVisible"
      ><span
        style="font-size: 1.2rem; font-weight: bold; color: rgb(72, 72, 72)"
        >畅游吧,旅人！</span
      ><popover-map style="margin-top: 20px"
    /></el-dialog>
    <div class="more_loc_info_container">
      <button class="more_loc_info_btn" @click="showPopover">
        查看更多周边信息
      </button>
    </div>
  </div>
</template>

<script>
import PopoverMap from "./PopoverMap.vue";
export default {
  components: { PopoverMap },
  name: "Map",
  data() {
    return {
      popoverMapVisible: false,
    };
  },
  methods: {
    showPopover() {
      let _this = this;
      _this.popoverMapVisible = true;
    },
  },
  watch: {},
};
</script>

<style scoped>
.map {
  position: relative;
}
.normal_map {
  width: 100%;
  height: 400px;
}
::v-deep .BMap_cpyCtrl {
  display: none;
}
::v-deep .anchorBL {
  display: none;
}
/* zoom in button */
.zoom_in_btn {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 90px;
  height: 36px;
  background-color: white;
  border: 1px solid rgb(72, 72, 72);
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: bold;
  color: rgb(72, 72, 72);
  cursor: pointer;
}
/* button */
.more_loc_info_container {
  margin-top: 30px;
}
.more_loc_info_btn {
  background-color: transparent;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  color: rgb(0, 132, 137);
}
.more_loc_info_btn:hover {
  text-decoration: underline;
  cursor: pointer;
}
.more_loc_info_btn:active {
  color: rgb(0, 108, 112);
}
/* Popover */
::v-deep .el-dialog {
  width: 85%;
  padding: 80px;
  height: 670px;
}
::v-deep .el-dialog__header,
::v-deep .el-dialog__body {
  padding: 0px;
}
</style>
