<template>
  <div class="map">
    <baidu-map
      class="popover_map"
      :scroll-wheel-zoom="true"
      :center="center"
      :zoom="zoom"
      @moving="syncCenterAndZoom"
      @moveend="syncCenterAndZoom"
      @zoomend="syncCenterAndZoom"
    >
      >
      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
      <bm-marker
        :position="{ lng: 116.404, lat: 39.915 }"
        animation="BMAP_ANIMATION_BOUNCE"
        :icon="{
          url: require('../../../assets/img/home-fill.svg'),
          opts: { imageSize: { width: 30, height: 30 } },
          size: { width: 30, height: 30 },
        }"
      ></bm-marker>
      <bm-control class="check_postion">
        <button @click="ReturnToOrigin" class="check_position_btn">
          查看房源位置
        </button>
      </bm-control>
    </baidu-map>
  </div>
</template>

<script>
export default {
  name: "PopoverMap",
  data() {
    return {
      center: {
        lat: 39.915,
        lng: 116.404,
      },
      zoom: 15,
    };
  },
  methods: {
    syncCenterAndZoom(e) {
      const { lng, lat } = e.target.getCenter();
      this.center.lng = lng;
      this.center.lat = lat;
      this.zoom = e.target.getZoom();
    },
    ReturnToOrigin() {
      let _this = this;
      _this.center.lat = 39.915;
      _this.center.lng = 116.404;
    },
  },
};
</script>

<style scoped>
.map {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
}
.popover_map {
  width: 57%;
  height: 500px;
}
.check_postion {
  left: 20px !important;
  top: 20px !important;
}

.check_position_btn {
  width: 90px;
  height: 36px;
  background-color: #008489;
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
</style>
