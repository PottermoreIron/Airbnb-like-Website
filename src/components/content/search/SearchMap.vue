<template>
  <div class="search_map">
    <baidu-map
      class="map"
      center="北京"
      :dragging="true"
      :double-click-zoom="true"
      :map-click="true"
    >
      <bm-scale anchor="BMAP_ANCHOR_TOP_LEFT" :offset="scaleOffset"></bm-scale>
      <bm-navigation
        anchor="BMAP_ANCHOR_TOP_RIGHT"
        type="BMAP_NAVIGATION_CONTROL_ZOOM"
      ></bm-navigation>
      <bm-label
        v-for="hotel in hotels"
        :key="hotel.id"
        :content="hotel.price"
        :position="hotel.loc"
        :labelStyle="{ color: 'red', fontSize: '24px' }"
        title="Hover me"
      />
    </baidu-map>
  </div>
</template>

<script>
export default {
  name: "SearchMap",
  data() {
    return {
      scaleOffset: { width: 10, height: 10 },
      hotels: [
        { id: 1, loc: { lng: 116.404, lat: 39.915 }, price: 200 },
        { id: 2, loc: { lng: 118, lat: 39.915 }, price: 300 },
        { id: 3, loc: { lng: 119, lat: 39.915 }, price: 400 },
      ],
    };
  },
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 400px;
}
::v-deep .BMap_cpyCtrl {
  display: none;
}
::v-deep .anchorBL {
  display: none;
}
</style>
