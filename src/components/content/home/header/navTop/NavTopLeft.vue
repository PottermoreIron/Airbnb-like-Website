<template>
  <div class="nav_bar_left_container">
    <el-autocomplete
      popper-class="my-autocomplete"
      v-model="keyWord"
      :fetch-suggestions="querySearch"
      placeholder="按城市,地址,地标搜索"
      @select="handleSelect"
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
    handleSelect(item) {
      console.log(item);
    },
    handleIconClick(ev) {
      console.log(ev);
    },
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
