<template>
  <div class="main_container">
    <div class="list_container">
      <div class="list">
        <div class="slogan">
          <div class="slogan_top">夏季特惠房源</div>
          <div class="slogan_bottom">品质房源，低至 5 折</div>
        </div>
        <div class="label">
          <el-button class="site_btn">上海</el-button
          ><el-button class="site_btn">成都</el-button
          ><el-button class="site_btn">北京</el-button
          ><el-button class="site_btn">杭州</el-button
          ><el-button class="site_btn">重庆</el-button
          ><el-button class="site_btn">厦门</el-button
          ><el-button class="site_btn">南京</el-button>
        </div>
        <div class="item">
          <main-item
            v-for="house in houses"
            :key="house.id"
            :label="house.label"
            :description="house.description"
            :price="house.price"
            :score="house.score"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainItem from "../content/home/main/MainItem.vue";
export default {
  name: "Main",
  components: { MainItem },
  data() {
    return {
      houses: [
        {
          id: 1,
          imgUrl: "../../../../static/test_img/room.jpg",
          label: "整套公寓 · 2张床",
          description:
            "【悠】一楼，外滩300米/南京路700米。近地铁便于出行,东方明珠/人民广场一站直达。体验上海里弄。",
          price: "253",
          score: "5",
        },
        {
          id: 2,
          imgUrl: "../../../../static/test_img/room.jpg",
          label: "整套公寓 · 1张床",
          description: "建筑空间组合论/长乐路/地暖/高清投影仪/安静弄堂中",
          price: "312",
          score: "4",
        },
        {
          id: 3,
          imgUrl: "../../../../static/test_img/room.jpg",
          label: "整间loft · 1张床",
          description: "北京西路-静安体育馆/南京路/温馨大床303",
          price: "206",
          score: "3",
        },
        {
          id: 4,
          imgUrl: "../../../../static/test_img/room.jpg",
          label: "整套公寓 · 1张床",
          description:
            "相拥而眠-静安寺|迪士尼|百年洋房|投影|温馨一居|2/11地铁站|迪士尼|cozy room",
          price: "301",
          score: "3",
        },
        {
          id: 5,
          imgUrl: "../../../../static/test_img/room.jpg",
          label: "整套公寓 · 1张床",
          description:
            "DEERHAUSx 暖光——新天地暖意榻榻屋 木色环绕:毗邻豫园,外滩,地铁8&10号线步行2分钟",
          price: "208",
          score: "2",
        },
        {
          id: 6,
          imgUrl: "../../../../static/test_img/room.jpg",
          label: "整套公寓 · 4张床",
          description:
            "{光影}近交通大学带投影仪的独立LOFT一居|武康路上海图书馆|直达迪士尼虹桥可长租",
          price: "388",
          score: "1",
        },
        {
          id: 7,
          imgUrl: "../../../../static/test_img/room.jpg",
          label: "整套公寓 · 10张床",
          description:
            "{光影}近交通大学带投影仪的独立LOFT一居|武康路上海图书馆|直达迪士尼虹桥可长租",
          price: "321",
          score: "5",
        },
      ],
    };
  },
};
</script>

<style scoped>
.main_container {
  width: 100%;
  padding: 3%;
}
.list_container {
  width: 100%;
}
.slogan_top {
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 1%;
}
.slogan_bottom {
  color: black;
  margin-bottom: 4%;
}

.item {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
/* 魔改element ui样式 */
.el-button {
  width: 10%;
  height: 10%;
  border: solid 0.5px #d8d8d8 !important;
  border-radius: 3px !important;
  background: #ffffff !important;
  box-shadow: 0px 1px 2px rgb(0 0 0 / 15%) !important;
  font-size: 1.1rem !important;
  color: #484848 !important;
  font-weight: bold;
  transition: box-shadow 0.5s !important;
}
.el-button:hover {
  box-shadow: 0px 3px 6px rgb(0 0 0 / 15%) !important;
}
.el-button:focus {
  background: #00848a !important;
  color: #ffffff !important;
  border: solid 0.5px #00848a !important;
  box-shadow: 0px 7px 14px rgb(0 132 138 / 15%) !important;
}
.el-button + .el-button {
  margin-left: 1%;
}
</style>
