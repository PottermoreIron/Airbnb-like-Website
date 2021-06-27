<template>
  <div class="search_container">
    <div class="navTop"><nav-top textColor="black" /></div>
    <div style="margin-top: 20px; margin-bottom: 0px">
      <div class="separation"></div>
    </div>
    <div class="label_container">
      <div class="hotel_label_container">
        <div class="label">
          <button class="label_btn">日期</button>
        </div>
        <div class="label"><button class="label_btn">智能排序</button></div>
        <div class="label"><button class="label_btn">价格</button></div>
        <div class="label"><button class="label_btn">评分</button></div>
        <div class="label"><button class="label_btn">距离</button></div>
        <div class="label"><button class="label_btn">订单量</button></div>
        <div class="order_label_container">
          <el-select v-model="order" placeholder="排序">
            <el-option value="降序"> </el-option>
            <el-option value="升序"> </el-option>
          </el-select>
        </div>
      </div>
      <div style="margin-top: 10px; margin-bottom: 0px">
        <div class="separation"></div>
      </div>
      <div class="room_label_container">
        <div
          :class="{
            bigBed_label: true,
            room_label_focus: roomLabel.bigBed == 2,
          }"
          @click="chooseBigBed"
        >
          大床房
        </div>
        <div
          :class="{ bath_label: true, room_label_focus: roomLabel.bath }"
          @click="chooseBath"
        >
          淋浴
        </div>
        <div
          :class="{ con_label: true, room_label_focus: roomLabel.con }"
          @click="chooseCon"
        >
          空调
        </div>
        <div
          :class="{ wifi_label: true, room_label_focus: roomLabel.wifi }"
          @click="chooseWiFi"
        >
          WiFi
        </div>
        <div
          :class="{ window_label: true, room_label_focus: roomLabel.window }"
          @click="chooseWindow"
        >
          窗户
        </div>
      </div>
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
    return {
      order: "",
      roomLabel: {
        bigBed: 1,
        bath: false,
        con: false,
        wifi: false,
        window: false,
      },
    };
  },
  methods: {
    descOrder() {
      let _this = this;
      _this.orderPop = !_this.orderPop;
      console.log(_this.orderPop);
    },
    asceOrder() {
      let _this = this;
      console.log(_this.orderPop);
      _this.orderPop = false;
      console.log(_this.orderPop);
    },
    chooseBigBed() {
      let _this = this;
      if (_this.roomLabel.bigBed == 1) {
        _this.roomLabel.bigBed = 2;
      } else {
        _this.roomLabel.bigBed = 1;
      }
    },
    chooseBath() {
      let _this = this;
      _this.roomLabel.bath = !_this.roomLabel.bath;
    },
    chooseCon() {
      let _this = this;
      _this.roomLabel.con = !_this.roomLabel.con;
    },
    chooseWiFi() {
      let _this = this;
      _this.roomLabel.wifi = !_this.roomLabel.wifi;
    },
    chooseWindow() {
      let _this = this;
      _this.roomLabel.window = !_this.roomLabel.window;
    },
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
.hotel_label_container {
  width: 60%;
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
  align-items: center;
}
.room_label_container {
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
.room_label_container {
  display: flex;
  margin-top: 10px;
}
.bigBed_label,
.con_label,
.wifi_label,
.window_label,
.bath_label {
  font-size: 0.7rem;
  font-weight: bold;
  border-radius: 15px;
  padding: 6.4px 9.8px;
  background-color: rgb(243, 243, 243);
  margin-right: 10px;
}
.bigBed_label:hover,
.con_label:hover,
.wifi_label:hover,
.window_label:hover,
.bath_label:hover {
  cursor: pointer;
}
.room_label_focus {
  background-color: rgb(234, 247, 234);
  color: rgb(42, 110, 0);
}
.order_label_container {
  margin-left: 10%;
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
/* element ui m魔改样式 */
.order_label_container ::v-deep .el-select {
  width: 36%;
}
.order_label_container ::v-deep .el-select,
.order_label_container ::v-deep .el-input.is-focus,
.order_label_container ::v-deep .el-input__inner {
  border-color: black !important;
}
</style>
