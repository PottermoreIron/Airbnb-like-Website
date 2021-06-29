<template>
  <div class="search_map">
    <baidu-map
      class="map"
      center="成都"
      :dragging="true"
      :double-click-zoom="true"
      :map-click="true"
    >
      <bm-scale anchor="BMAP_ANCHOR_TOP_LEFT" :offset="scaleOffset"></bm-scale>
      <bm-geolocation
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :showAddressBar="true"
        :autoLocation="true"
        @locationSuccess="setLoc"
        @locationError="error"
      ></bm-geolocation>
      <bm-navigation
        anchor="BMAP_ANCHOR_TOP_RIGHT"
        type="BMAP_NAVIGATION_CONTROL_ZOOM"
      ></bm-navigation>
      <bm-label
        v-for="hotel in hotels"
        :key="hotel.hotel.id"
        :content="hotel.hotel.hotelPrice"
        :position="{ lat: hotel.hotel.hotelLat, lng: hotel.hotel.hotelLot }"
        :labelStyle="{ color: 'black', fontSize: '24px' }"
        title="Hover me"
      />
    </baidu-map>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SearchMap",
  data() {
    return {
      scaleOffset: { width: 10, height: 10 },
    };
  },

  methods: {
    setLoc(res) {
      this.$store.dispatch("user/changeUserLat", res.point.lat);
      this.$store.dispatch("user/changeUserLng", res.point.lng);
    },
    error(StatusCode) {
      this.$message({
        message: "出错了阿sir," + StatusCode,
        type: "error",
      });
    },
  },
  computed: {
    ...mapState("hotels", { hotels: "hotels" }),
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
