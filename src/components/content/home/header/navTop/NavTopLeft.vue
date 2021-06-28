<template>
  <div class="nav_bar_left_container">
    <el-autocomplete
      popper-class="my-autocomplete"
      v-model="keyWord"
      :fetch-suggestions="querySearch"
      placeholder="按城市,地址,地标搜索"
      @select="handleSelect"
      @keyup.enter.native="searchKeyword"
    >
      <i class="el-icon-search el-input__icon" slot="prefix"> </i>
      <template slot-scope="{ item }">
        <div class="keyWord_wrapper">
          <i class="el-icon-location el-input__icon" slot="prefix"></i>
          <div class="name">{{ item.site }}</div>
        </div>
        <span class="addr">{{ item.address }}</span>
      </template>
    </el-autocomplete>
  </div>
</template>

<script>
import { getDefaultHotelList } from "@/api/hotel.js";
import { mapState } from "vuex";
const PAGE_SIZE = 5;
export default {
  name: "NavBarLeft",
  data() {
    return {
      keyWord: "",
      locations: [],
    };
  },
  mounted() {
    this.locations = this.loadLocationsData();
  },
  methods: {
    //  对输入关键词进行建议
    querySearch(queryString, cb) {
      let locations = this.locations;
      let results = queryString
        ? locations.filter(this.createFilter(queryString))
        : locations;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    // 创建搜索建议的过滤器
    createFilter(queryString) {
      return (locations) => {
        return (
          locations.site.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    // 请求Location数据,后面网络请求应该要放在created
    loadLocationsData() {
      return [
        { site: "成都", address: "四川省" },
        { site: "重庆", address: "重庆市" },
        { site: "东京", address: "日本" },
      ];
    },
    // 处理选中后的事件
    async handleSelect() {
      let _this = this;
      _this.keyWord = "成都";
      this.$store.commit("search/changeKeyword", _this.keyWord);
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
    handleIconClick(ev) {
      console.log(ev);
    },
    // enter键
    async searchKeyword() {
      this.$store.commit("search/changeKeyword", this.keyWord);
      const { status, data } = await getDefaultHotelList({
        currentPage: 1,
        inDay: this.dateOne,
        order: "desc",
        outDay: this.dateTwo,
        pageSize: PAGE_SIZE,
        searchCondition: this.keyWord,
        typeBath: false,
        typeBed: 0,
        typeCd: false,
        typeWd: false,
        typeWifi: false,
        userLat: this.uLat,
        userLot: this.uLng,
      });
      if (status) {
        this.$store.dispatch("hotels/getDefaultHotels", data.hotelAndPurchase);
        this.$store.dispatch("hotels/changeTotal", data.total);
        this.$router.push("/search");
      }
    },
  },
  computed: {
    ...mapState("order", { dateOne: "oStartDate", dateTwo: "oEndDate" }),
    ...mapState("user", { uLng: "uLng", uLat: "uLat" }),
  },
};
</script>

<style lang="scss" scoped>
.nav_bar_left_container {
  width: 400px;
  display: flex;
  align-items: center;
}
.el-autocomplete {
  width: 100%;
}
.el-autocomplete ::v-deep .el-input__inner::placeholder {
  color: #858585;
}
.el-autocomplete ::v-deep .el-input__inner:focus {
  border-color: darkorange;
}
.my-autocomplete {
  .keyWord_wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  li {
    line-height: normal;
    padding: 7px;
    .name {
      text-overflow: ellipsis;
      overflow: hidden;
      color: #494949;
      font-weight: bold;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #777;
    }
  }
}
::v-deep .el-input__inner {
  color: #0d0d0d;
  font-weight: bold;
  border-radius: 20px;
  font-size: 1rem;
}
</style>
