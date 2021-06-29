<template>
  <div class="search_container" ref="hotelList">
    <div class="house_nav">
      <div class="nav_left_container">
        <div class="nav_left_input">
          <el-input
            prefix-icon="el-icon-search"
            placeholder="搜索"
            v-model="keyword"
            @keyup.enter.native="searchKeyword"
          ></el-input>
        </div>
      </div>
      <nav-top textColor="black" :showLeft="false" class="nav_top" />
    </div>
    <div style="margin-top: 20px; margin-bottom: 0px">
      <div class="separation"></div>
    </div>
    <div class="label_container">
      <div class="hotel_label_container">
        <div class="label">
          <button
            type="text"
            placeholder="Select dates"
            id="datepicker-trigger"
            :class="{
              label_btn: true,
              hotel_label_focus: true,
            }"
          >
            <span>{{ formatDates }}</span>
          </button>
          <AirbnbStyleDatepicker
            class="airbnb_date"
            :trigger-element-id="'datepicker-trigger'"
            :mode="'range'"
            :minDate="today"
            :date-one="dateOne"
            :date-two="dateTwo"
            @date-one-selected="changeDateOne"
            @date-two-selected="changeDateTwo"
            @closed="closeDataPicker"
          />
        </div>
        <div class="label">
          <button
            type="button"
            :class="{
              label_btn: true,
              hotel_label_focus: hotelLabel.smartSort,
            }"
            @click="chooseSmart"
          >
            智能排序
          </button>
        </div>
        <div class="label">
          <button
            type="button"
            :class="{
              label_btn: true,
              hotel_label_focus: hotelLabel.price,
            }"
            @click="choosePrice"
          >
            价格
          </button>
        </div>
        <div class="label">
          <button
            type="button"
            :class="{
              label_btn: true,
              hotel_label_focus: hotelLabel.rating,
            }"
            @click="chooseRating"
          >
            评分
          </button>
        </div>
        <div class="label">
          <button
            type="button"
            :class="{
              label_btn: true,
              hotel_label_focus: hotelLabel.distance,
            }"
            @click="chooseDistance"
          >
            距离
          </button>
        </div>
        <div class="label">
          <button
            type="button"
            :class="{
              label_btn: true,
              hotel_label_focus: hotelLabel.turnover,
            }"
            @click="chooseTurnover"
          >
            订单量
          </button>
        </div>
        <div class="order_label_container">
          <el-select v-model="order" placeholder="排序" @change="orderChange">
            <el-option value="desc" label="降序"> </el-option>
            <el-option value="asce" label="升序"> </el-option>
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
            room_label_focus: roomLabel.bigBed == 1,
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
        <span class="hotel_list_title">{{ total }}处住宿</span>
        <div class="hotel_list">
          <div class="hotel_list_item_container">
            <hotel-item
              v-for="hotel in hotels"
              :key="hotel.hotel.id"
              :price="hotel.hotel.hotelPrice"
              :rating="hotel.hotel.hotelStar"
              :name="hotel.hotel.hotelName"
              :comment="hotel.purchaseNum"
              :description="hotel.hotel.hotelWord"
              :hotelImgs="hotel.pics"
              @click.native="goHouseDetail(hotel)"
            />
          </div>
        </div>
      </div>
      <div class="search_map_container">
        <search-map />
      </div>
    </div>
    <div class="pagination_container">
      <Pagination
        :current-page.sync="currentPage"
        :page-size="PAGE_SIZE"
        :total="total"
        @current-change="onPageChange"
        class="pagination"
      ></Pagination>
    </div>
    <div class="space_occupy"></div>
  </div>
</template>

<script>
import NavTop from "../components/content/home/header/navTop/NavTop.vue";
import HotelItem from "../components/content/search/HotelItem.vue";
import SearchMap from "../components/content/search/SearchMap.vue";
import Pagination from "../components/common/Pagination.vue";
import { mapState } from "vuex";
import { scrollInto } from "@/utils/dom.js";
import { getLabelHotelList } from "@/api/hotel.js";

const PAGE_SIZE = 5;
export default {
  components: { NavTop, HotelItem, SearchMap, Pagination },
  name: "Search",
  data() {
    return {
      order: "desc",
      hotelLabel: {
        smartSort: true,
        price: false,
        rating: false,
        distance: false,
        label: "",
      },
      roomLabel: {
        bigBed: 0,
        bath: false,
        con: false,
        wifi: false,
        window: false,
      },
      currentPage: 1,
      today: "",
    };
  },
  async created() {
    let _this = this;
    _this.PAGE_SIZE = PAGE_SIZE;
    _this.initData();
    let day = new Date();
    day.setTime(day.getTime());
    _this.today =
      day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate();
  },
  methods: {
    async searchKeyword() {
      let _this = this;
      _this.currentPage = 1;
      const { status, data } = await getLabelHotelList({
        currentPage: _this.currentPage,
        inDay: _this.dateOne,
        order: _this.order,
        outDay: _this.dateTwo,
        pageSize: PAGE_SIZE,
        searchCondition: _this.keyword,
        standard: _this.hotelLabel.label,
        typeBath: _this.roomLabel.bath,
        typeBed: _this.roomLabel.bigBed,
        typeCd: _this.roomLabel.con,
        typeWd: _this.roomLabel.window,
        typeWifi: _this.roomLabel.wifi,
        userLat: _this.uLat,
        userLot: _this.uLng,
      });
      if (status) {
        _this.$store.dispatch("hotels/getLabelHotels", data.hotelAndPurchase);
        _this.$store.dispatch("hotels/changeTotal", data.total);
        // this.$router.push("/search");
      }
    },
    async orderChange(val) {
      let _this = this;
      _this.order = val;
      _this.currentPage = 1;
      const { status, data } = await getLabelHotelList({
        currentPage: _this.currentPage,
        inDay: _this.dateOne,
        order: _this.order,
        outDay: _this.dateTwo,
        pageSize: PAGE_SIZE,
        searchCondition: _this.keyword,
        standard: _this.hotelLabel.label,
        typeBath: _this.roomLabel.bath,
        typeBed: _this.roomLabel.bigBed,
        typeCd: _this.roomLabel.con,
        typeWd: _this.roomLabel.window,
        typeWifi: _this.roomLabel.wifi,
        userLat: _this.uLat,
        userLot: _this.uLng,
      });
      if (status) {
        _this.$store.dispatch("hotels/getLabelHotels", data.hotelAndPurchase);
        _this.$store.dispatch("hotels/changeTotal", data.total);
        // this.$router.push("/search");
      }
    },
    // hotel label
    async chooseSmart() {
      let _this = this;
      _this.hotelLabel.smartSort = true;
      _this.hotelLabel.price = false;
      _this.hotelLabel.distance = false;
      _this.hotelLabel.rating = false;
      _this.hotelLabel.turnover = false;
      _this.hotelLabel.label = "smart";
      _this.order = "desc";
      _this.currentPage = 1;
      const { status, data } = await getLabelHotelList({
        currentPage: _this.currentPage,
        inDay: _this.dateOne,
        order: _this.order,
        outDay: _this.dateTwo,
        pageSize: PAGE_SIZE,
        searchCondition: _this.keyword,
        standard: _this.hotelLabel.label,
        typeBath: _this.roomLabel.bath,
        typeBed: _this.roomLabel.bigBed,
        typeCd: _this.roomLabel.con,
        typeWd: _this.roomLabel.window,
        typeWifi: _this.roomLabel.wifi,
        userLat: _this.uLat,
        userLot: _this.uLng,
      });
      if (status) {
        _this.$store.dispatch("hotels/getLabelHotels", data.hotelAndPurchase);
        _this.$store.dispatch("hotels/changeTotal", data.total);
        // this.$router.push("/search");
      }
    },
    async choosePrice() {
      let _this = this;
      _this.hotelLabel.smartSort = false;
      _this.hotelLabel.price = true;
      _this.hotelLabel.distance = false;
      _this.hotelLabel.rating = false;
      _this.hotelLabel.turnover = false;
      _this.hotelLabel.label = "price";
      _this.order = "asce";
      _this.currentPage = 1;
      //   发送请求
      const { status, data } = await getLabelHotelList({
        currentPage: _this.currentPage,
        inDay: _this.dateOne,
        order: _this.order,
        outDay: _this.dateTwo,
        pageSize: PAGE_SIZE,
        searchCondition: _this.keyword,
        standard: _this.hotelLabel.label,
        typeBath: _this.roomLabel.bath,
        typeBed: _this.roomLabel.bigBed,
        typeCd: _this.roomLabel.con,
        typeWd: _this.roomLabel.window,
        typeWifi: _this.roomLabel.wifi,
        userLat: _this.uLat,
        userLot: _this.uLng,
      });
      if (status) {
        _this.$store.dispatch("hotels/getLabelHotels", data.hotelAndPurchase);
        _this.$store.dispatch("hotels/changeTotal", data.total);
        // this.$router.push("/search");
      }
    },
    async chooseRating() {
      let _this = this;
      _this.hotelLabel.smartSort = false;
      _this.hotelLabel.price = false;
      _this.hotelLabel.distance = false;
      _this.hotelLabel.rating = true;
      _this.hotelLabel.turnover = false;
      _this.hotelLabel.label = "rating";
      _this.order = "desc";
      _this.currentPage = 1;
      const { status, data } = await getLabelHotelList({
        currentPage: _this.currentPage,
        inDay: _this.dateOne,
        order: _this.order,
        outDay: _this.dateTwo,
        pageSize: PAGE_SIZE,
        searchCondition: _this.keyword,
        standard: _this.hotelLabel.label,
        typeBath: _this.roomLabel.bath,
        typeBed: _this.roomLabel.bigBed,
        typeCd: _this.roomLabel.con,
        typeWd: _this.roomLabel.window,
        typeWifi: _this.roomLabel.wifi,
        userLat: _this.uLat,
        userLot: _this.uLng,
      });
      if (status) {
        _this.$store.dispatch("hotels/getLabelHotels", data.hotelAndPurchase);
        _this.$store.dispatch("hotels/changeTotal", data.total);
        // this.$router.push("/search");
      }
    },
    async chooseDistance() {
      let _this = this;
      _this.hotelLabel.smartSort = false;
      _this.hotelLabel.price = false;
      _this.hotelLabel.distance = true;
      _this.hotelLabel.rating = false;
      _this.hotelLabel.turnover = false;
      _this.hotelLabel.label = "distance";
      _this.order = "desc";
      _this.currentPage = 1;
      const { status, data } = await getLabelHotelList({
        currentPage: _this.currentPage,
        inDay: _this.dateOne,
        order: _this.order,
        outDay: _this.dateTwo,
        pageSize: PAGE_SIZE,
        searchCondition: _this.keyword,
        standard: _this.hotelLabel.label,
        typeBath: _this.roomLabel.bath,
        typeBed: _this.roomLabel.bigBed,
        typeCd: _this.roomLabel.con,
        typeWd: _this.roomLabel.window,
        typeWifi: _this.roomLabel.wifi,
        userLat: _this.uLat,
        userLot: _this.uLng,
      });
      if (status) {
        _this.$store.dispatch("hotels/getLabelHotels", data.hotelAndPurchase);
        _this.$store.dispatch("hotels/changeTotal", data.total);
        // this.$router.push("/search");
      }
    },
    async chooseTurnover() {
      let _this = this;
      _this.hotelLabel.smartSort = false;
      _this.hotelLabel.price = false;
      _this.hotelLabel.distance = false;
      _this.hotelLabel.rating = false;
      _this.hotelLabel.turnover = true;
      _this.hotelLabel.label = "turnover";
      _this.order = "desc";
      _this.currentPage = 1;
      const { status, data } = await getLabelHotelList({
        currentPage: _this.currentPage,
        inDay: _this.dateOne,
        order: _this.order,
        outDay: _this.dateTwo,
        pageSize: PAGE_SIZE,
        searchCondition: _this.keyword,
        standard: _this.hotelLabel.label,
        typeBath: _this.roomLabel.bath,
        typeBed: _this.roomLabel.bigBed,
        typeCd: _this.roomLabel.con,
        typeWd: _this.roomLabel.window,
        typeWifi: _this.roomLabel.wifi,
        userLat: _this.uLat,
        userLot: _this.uLng,
      });
      if (status) {
        _this.$store.dispatch("hotels/getLabelHotels", data.hotelAndPurchase);
        _this.$store.dispatch("hotels/changeTotal", data.total);
        // this.$router.push("/search");
      }
    },
    // room label
    async chooseBigBed() {
      let _this = this;
      if (_this.roomLabel.bigBed == 0) {
        _this.roomLabel.bigBed = 1;
      } else {
        _this.roomLabel.bigBed = 0;
      }
      _this.currentPage = 1;
      const { status, data } = await getLabelHotelList({
        currentPage: _this.currentPage,
        inDay: _this.dateOne,
        order: _this.order,
        outDay: _this.dateTwo,
        pageSize: PAGE_SIZE,
        searchCondition: _this.keyword,
        standard: _this.hotelLabel.label,
        typeBath: _this.roomLabel.bath,
        typeBed: _this.roomLabel.bigBed,
        typeCd: _this.roomLabel.con,
        typeWd: _this.roomLabel.window,
        typeWifi: _this.roomLabel.wifi,
        userLat: _this.uLat,
        userLot: _this.uLng,
      });
      if (status) {
        _this.$store.dispatch("hotels/getLabelHotels", data.hotelAndPurchase);
        _this.$store.dispatch("hotels/changeTotal", data.total);
        // this.$router.push("/search");
      }
    },
    async chooseBath() {
      let _this = this;
      _this.roomLabel.bath = !_this.roomLabel.bath;
      _this.currentPage = 1;
      const { status, data } = await getLabelHotelList({
        currentPage: _this.currentPage,
        inDay: _this.dateOne,
        order: _this.order,
        outDay: _this.dateTwo,
        pageSize: PAGE_SIZE,
        searchCondition: _this.keyword,
        standard: _this.hotelLabel.label,
        typeBath: _this.roomLabel.bath,
        typeBed: _this.roomLabel.bigBed,
        typeCd: _this.roomLabel.con,
        typeWd: _this.roomLabel.window,
        typeWifi: _this.roomLabel.wifi,
        userLat: _this.uLat,
        userLot: _this.uLng,
      });
      if (status) {
        _this.$store.dispatch("hotels/getLabelHotels", data.hotelAndPurchase);
        _this.$store.dispatch("hotels/changeTotal", data.total);
        // this.$router.push("/search");
      }
    },
    async chooseCon() {
      let _this = this;
      _this.roomLabel.con = !_this.roomLabel.con;
      _this.currentPage = 1;
      const { status, data } = await getLabelHotelList({
        currentPage: _this.currentPage,
        inDay: _this.dateOne,
        order: _this.order,
        outDay: _this.dateTwo,
        pageSize: PAGE_SIZE,
        searchCondition: _this.keyword,
        standard: _this.hotelLabel.label,
        typeBath: _this.roomLabel.bath,
        typeBed: _this.roomLabel.bigBed,
        typeCd: _this.roomLabel.con,
        typeWd: _this.roomLabel.window,
        typeWifi: _this.roomLabel.wifi,
        userLat: _this.uLat,
        userLot: _this.uLng,
      });
      if (status) {
        _this.$store.dispatch("hotels/getLabelHotels", data.hotelAndPurchase);
        _this.$store.dispatch("hotels/changeTotal", data.total);
        // this.$router.push("/search");
      }
    },
    async chooseWiFi() {
      let _this = this;
      _this.roomLabel.wifi = !_this.roomLabel.wifi;
      _this.currentPage = 1;
      const { status, data } = await getLabelHotelList({
        currentPage: _this.currentPage,
        inDay: _this.dateOne,
        order: _this.order,
        outDay: _this.dateTwo,
        pageSize: PAGE_SIZE,
        searchCondition: _this.keyword,
        standard: _this.hotelLabel.label,
        typeBath: _this.roomLabel.bath,
        typeBed: _this.roomLabel.bigBed,
        typeCd: _this.roomLabel.con,
        typeWd: _this.roomLabel.window,
        typeWifi: _this.roomLabel.wifi,
        userLat: _this.uLat,
        userLot: _this.uLng,
      });
      if (status) {
        _this.$store.dispatch("hotels/getLabelHotels", data.hotelAndPurchase);
        _this.$store.dispatch("hotels/changeTotal", data.total);
        // this.$router.push("/search");
      }
    },
    async chooseWindow() {
      let _this = this;
      _this.roomLabel.window = !_this.roomLabel.window;
      _this.currentPage = 1;
      const { status, data } = await getLabelHotelList({
        currentPage: _this.currentPage,
        inDay: _this.dateOne,
        order: _this.order,
        outDay: _this.dateTwo,
        pageSize: PAGE_SIZE,
        searchCondition: _this.keyword,
        standard: _this.hotelLabel.label,
        typeBath: _this.roomLabel.bath,
        typeBed: _this.roomLabel.bigBed,
        typeCd: _this.roomLabel.con,
        typeWd: _this.roomLabel.window,
        typeWifi: _this.roomLabel.wifi,
        userLat: _this.uLat,
        userLot: _this.uLng,
      });
      if (status) {
        _this.$store.dispatch("hotels/getLabelHotels", data.hotelAndPurchase);
        _this.$store.dispatch("hotels/changeTotal", data.total);
        // this.$router.push("/search");
      }
    },
    async onPageChange(page) {
      let _this = this;
      _this.currentPage = page;
      const { status, data } = await getLabelHotelList({
        currentPage: _this.currentPage,
        inDay: _this.dateOne,
        order: _this.order,
        outDay: _this.dateTwo,
        pageSize: PAGE_SIZE,
        searchCondition: _this.keyword,
        standard: _this.hotelLabel.label,
        typeBath: _this.roomLabel.bath,
        typeBed: _this.roomLabel.bigBed,
        typeCd: _this.roomLabel.con,
        typeWd: _this.roomLabel.window,
        typeWifi: _this.roomLabel.wifi,
        userLat: _this.uLat,
        userLot: _this.uLng,
      });
      if (status) {
        _this.$store.dispatch("hotels/getLabelHotels", data.hotelAndPurchase);
        _this.$store.dispatch("hotels/changeTotal", data.total);
        scrollInto(this.$refs.hotelList);
        // this.$router.push("/search");
      }
    },
    async getHotels() {},
    async initData() {
      //   const { status, data } = await getDefaultHotelList({
      //     currentPage: 1,
      //     inDay: this.dateOne,
      //     order: "asce",
      //     outDay: this.dateTwo,
      //     pageSize: 3,
      //     searchCondition: "成都",
      //     typeBath: false,
      //     typeBed: 0,
      //     typeCd: false,
      //     typeWd: false,
      //     typeWifi: false,
      //     userLat: this.uLat,
      //     userLot: this.uLng,
      //   });
      //   if (status) {
      //     this.$store.dispatch("hotels/getDefaultHotels", data);
      //     this.$router.push("/search");
      //   }
    },
    closeDataPicker() {
      this.hotelLabel.dateChosen = true;
    },
    // change Date
    changeDateOne(val) {
      this.dateOne = val;
    },
    changeDateTwo(val) {
      this.dateTwo = val;
    },
    goHouseDetail(item) {
      this.$store.commit("hotel/changeHotel", item);
      this.$router.push("/house");
    },
  },
  computed: {
    dateOne: {
      get() {
        return this.$store.state.order.oStartDate;
      },
      set(v) {
        this.$store.commit("order/chooseDateOne", v);
      },
    },
    dateTwo: {
      get() {
        return this.$store.state.order.oEndDate;
      },
      set(v) {
        this.$store.commit("order/chooseDateTwo", v);
      },
    },
    formatDates: function () {
      if (this.dateOne != "" && this.dateTwo != "") {
        let formatDateOne = this.dateOne.replace(/-/g, "/").substr(5);
        let formatDateTwo = this.dateTwo.replace(/-/g, "/").substr(5);
        return formatDateOne + " - " + formatDateTwo;
      } else {
        return "日期";
      }
    },
    orderDate: function () {
      let dateArr = new Array();
      if (this.dateOne != "" && this.dateTwo != "") {
        dateArr.push(this.dateOne);
        dateArr.push(this.dateTwo);
      }
      return dateArr;
    },
    ...mapState("hotels", { hotels: "hotels" }),
    ...mapState("hotels", { total: "total" }),
    ...mapState("user", { uLng: "uLng", uLat: "uLat" }),
    keyword: {
      get() {
        return this.$store.state.search.keyword;
      },
      set(v) {
        this.$store.commit("search/changeKeyword", v);
      },
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
  width: 70%;
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
  align-items: center;
}
.room_label_container {
  width: 60%;
  display: flex;
  margin-top: 10px;
  margin-left: 25px;
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
.hotel_label_focus {
  background: rgb(0, 132, 137);
  border: 1px solid rgb(0, 132, 137);
  color: white;
}
.hotel_label_focus:hover {
  background: rgb(0, 132, 137);
  border: 1px solid rgb(0, 132, 137);
  color: white;
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
/* top */
.house_nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.nav_top {
  margin-left: 30%;
}
/* search 框 */
.nav_left_container {
  width: 600px;
  margin-left: 25px;
}
.nav_left_input {
  width: 460px;
  height: 48px;
  border-radius: 4px !important;
}
.nav_left_input ::v-deep .el-input__inner {
  width: 460px;
  height: 48px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%) !important;
  transition: all ease 1s;
}
.nav_left_input ::v-deep .el-input__inner:hover {
  color: black;
  font-size: 1.1rem;
  font-weight: bold;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 4px 12px rgb(26 26 29 / 8%) !important;
  transition: all ease 1s;
}
.nav_left_input ::v-deep .el-input__inner:focus {
  width: 600px;
  transition: all ease 1s;
  border-color: black;
}
.nav_left_input ::v-deep .el-input__inner::placeholder {
  color: #757575;
  font-size: 1.1rem;
  font-weight: bold;
}
/* pagination */
.pagination_container {
  margin-top: 25px;
}
/* space */
.space_occupy {
  height: 30px;
}
</style>
