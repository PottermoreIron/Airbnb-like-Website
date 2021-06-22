<template>
  <div class="house_main_container">
    <div class="house_info_container">
      <div class="house_info_label">
        <div class="label_container label_container_focus">
          <button class="label_btn label_btn_focus" @click="jump(0)">
            详情
          </button>
        </div>
        <span class="label_sep"> · </span>
        <div class="label_container">
          <button @click="jump(1)" class="label_btn">评价</button>
        </div>
        <span class="label_sep"> · </span>
        <div class="label_container">
          <button @click="jump(2)" class="label_btn">可订日期</button>
        </div>
        <span class="label_sep"> · </span>
        <div class="label_container">
          <button @click="jump(3)" class="label_btn">位置</button>
        </div>
        <span class="label_sep"> · </span>
        <div class="label_container">
          <button @click="jump(4)" class="label_btn">须知</button>
        </div>
      </div>
      <div style="margin-top: 0px; margin-bottom: 0px">
        <div class="separation"></div>
      </div>
      <div class="house_info">
        <div id="detail" class="section house_detail">
          <div class="house_detail_top">
            <span class="house_detail_sketch">上海市 · 整套公寓</span>
            <div class="house_detail_title">
              【悠悠小居】南京路步行街／人民广场／外滩／豫园／地铁1/2/8/10号线／温暖静谧干净舒适的休憩小站
            </div>
            <div class="house_detail_label">
              <div class="house_detail_label_container house_score">
                4.7分 · 69条评论
              </div>
              <div class="house_detail_label_container">自助入住</div>
              <div class="house_detail_label_container">近地铁站</div>
              <div class="house_detail_label_container">灵活退改</div>
            </div>
          </div>
          <div style="margin-top: 40px; margin-bottom: 0px">
            <div class="separation"></div>
          </div>
          <div class="house_detail_center">
            <div class="center_top_container">
              <div class="center_top_img_container">
                <img src="../../../static/test_img/assistant.jpg" />
              </div>
              <span
                style="
                  margin-left: 10px;
                  font-weight: bold;
                  color: rgb(72, 72, 72);
                "
                >酒店小助手</span
              >
            </div>
            <div class="center_bottom_container">
              <span class="deco_tri" />
              <div class="house_desc">
                位置得天独厚，坐拥上海最繁华闹市区，离地铁1、2、8号线人民广场站仅300米，10号线南京东路站仅500米。南京路步行街、人民广场近在咫尺，外滩、豫园，大世界、上海博物馆仅举步之遥。<br />
                周围百米内有杏花楼、沈大成、洪长兴等诸多上海特色小吃，咖啡馆、酒吧林立，娱乐购物配套设施齐全。房源所处的正门对面是百年历史老店永安百货，走几十米就是繁华的南京路步行街。房源所处的后门是非常接地气的小吃一条街，网红饮品店、便利店、上海老字号蛋糕店红宝石的奶油小方、掼奶油。
              </div>
              <div class="house_detail_more">
                <div
                  class="house_detail_more_text"
                  @click="descriptionVisible = true"
                >
                  查看更多
                </div>
                <el-dialog :visible.sync="descriptionVisible">
                  <div class="house_detail_more_container">
                    <div
                      style="
                        font-size: 1.5rem;
                        font-weight: bold;
                        color: #008489;
                      "
                    >
                      房源介绍
                    </div>
                    <div class="text_desc_container">
                      <div class="text_desc_title">概要</div>
                      <div class="text_desc">
                        位置得天独厚，坐拥上海最繁华闹市区，离地铁1、2、8号线人民广场站仅300米，10号线南京东路站仅500米。南京路步行街、人民广场近在咫尺，外滩、豫园，大世界、上海博物馆仅举步之遥。<br />
                        周围百米内有杏花楼、沈大成、洪长兴等诸多上海特色小吃，咖啡馆、酒吧林立，娱乐购物配套设施齐全。房源所处的正门对面是百年历史老店永安百货，走几十米就是繁华的南京路步行街。房源所处的后门是非常接地气的小吃一条街，网红饮品店、便利店、上海老字号蛋糕店红宝石的奶油小方、掼奶油。
                      </div>
                    </div>
                    <div class="text_detail_container">
                      <div class="text_detail_title">详情</div>
                      <div class="text_detail">
                        房屋配置智能密码锁，一客一锁，出入无需钥匙门卡。房源内有电视、免费wifi
                        、热水壶、空调、洗漱用品均按星级酒店标准为您准备，请放心使用，无需自带。
                      </div>
                    </div>
                  </div>
                </el-dialog>
              </div>
            </div>
            <div style="margin-top: 40px; margin-bottom: 0px">
              <div class="separation"></div>
            </div>
            <div class="guarantee">
              <span class="guarantee_bold">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-guarantee"></use></svg
                >旅行保障</span
              ><span style="margin-right: 10px">|</span>全方位保障 · 出行无忧
            </div>
            <div style="margin-top: 30px; margin-bottom: 0px">
              <div class="separation"></div>
            </div>
            <div class="house_message">
              <div class="message_container">
                <span class="message_bold">入住/退房</span>
                <span>入住时间:下午2:00后,退房时间:中午12:00</span>
              </div>
              <div class="message_container">
                <span class="message_bold">自助入住</span>
                <span>通过智能门锁自助入住</span>
              </div>
            </div>
            <div style="margin-top: 30px; margin-bottom: 0px">
              <div class="separation"></div>
            </div>
          </div>
          <div class="house_detail_bottom"></div>
        </div>
        <div id="comment" class="section house_comment">
          <div class="house_comment_title">房客评价</div>
          <div class="house_scores">
            <span v-for="item in stars" :key="item.index">
              <svg
                class="icon"
                aria-hidden="true"
                style="font-size: 1.2rem; margin-right: 5px"
              >
                <use xlink:href="#icon-star"></use>
              </svg>
            </span>
            <div class="comment_num">69条评价</div>
          </div>
          <div style="margin-top: 30px; margin-bottom: 0px">
            <div class="separation"></div>
          </div>
          <div class="comment_container">
            <div class="comment_label_container" @click="changeCommentList">
              <div class="comment_totoal">
                <button class="total_btn comment_btn_focus" id="total_btn">
                  全部69
                </button>
              </div>
              <div class="comment_good">
                <button class="good_btn">好评</button>
              </div>
              <div class="comment_bad">
                <button class="bad_btn">差评</button>
              </div>
            </div>
          </div>
          <div style="margin-top: 20px; margin-bottom: 0px">
            <div class="separation"></div>
          </div>
        </div>
        <div id="date" class="section house_date">可订日期</div>
        <div id="location" class="section house_location">位置</div>
        <div id="tips" class="section house_tips">须知</div>
      </div>
    </div>
    <div class="house_order"></div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "HouseMain",
  data() {
    return {
      scroll: "",
      descriptionVisible: false,
      score: "4",
    };
  },
  created() {
    let _this = this;
    _this.stars = new Array(Number(_this.score)).join(",").split(",");
  },
  mounted() {
    //   初始化
    window.addEventListener("scroll", this.pageScroll);
  },
  methods: {
    //   锚点滑动定位
    pageScroll() {
      // 拿到当前的scrollTop,即当前元素离浏览器顶部的高度
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
    },
    jump(index) {
      // 用于锚点点击跳转
      // 获取section列表
      let sections = document.getElementsByClassName("section");
      // 获取需要滚动的距离
      // -50是因为label bar的height=50px
      let total = sections[index].offsetTop - 50;
      //   jq平滑滑动
      $("html, body").animate(
        {
          scrollTop: total + "px",
        },
        {
          duration: 500,
          easing: "swing",
        }
      );
      //   js原生设置scrollTop,但是效果生硬,可以考虑settimeinterval做?
      //   // Chrome
      //   document.body.scrollTop = total;
      //   // Firefox
      //   document.documentElement.scrollTop = total;
      //   // Safari
      //   window.pageYOffset = total;
    },
    loadScroll() {
      let _this = this;
      //   拿到button列表
      let $btns = $(".label_btn");
      //   拿到section列表
      let sections = document.getElementsByClassName("section");
      //   offsetParent返回一个指向最近的包含该元素的定位元素
      //   offsetTop返回当前元素相对于其 offsetParent 元素的顶部的距离
      //   这里应该是body
      for (let i = sections.length - 1; i >= 0; i--) {
        if (_this.scroll >= sections[i].offsetTop - 100) {
          // 符合条件的button加上focus class,它的父亲的兄弟的孩子移除focus class
          // 符合条件的button的父亲加上focus class
          // 符合条件的button的父亲的兄弟移除focus class
          $btns
            .eq(i)
            .addClass("label_btn_focus")
            .parent()
            .siblings()
            .children()
            .removeClass("label_btn_focus");
          $btns.eq(i).parent().addClass("label_container_focus");
          $btns.eq(i).parent().siblings().removeClass("label_container_focus");
          break;
        }
      }
    },
    // button foucs样式
    changeCommentList(e) {
      if (e.target && e.target.nodeName.toLowerCase() == "button") {
        let $btn = $(e.target);
        $btn
          .addClass("comment_btn_focus")
          .parent()
          .siblings()
          .children()
          .removeClass("comment_btn_focus");
      }
    },
  },
  watch: {
    //   监听scroll高度,用于锚点样式随页面滑动而改变
    scroll: function () {
      this.loadScroll();
    },
  },
};
</script>

<style scoped>
/* 注意!sticky是否失效和父元素的height有关! */
.house_main_container {
  display: flex;
  justify-content: space-between;
  height: 6000px;
}
.house_info_container {
  width: 60%;
}
.house_info_label {
  position: sticky;
  top: 0%;
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  z-index: 1;
}
.label_container {
  height: 100%;
  display: inline-block;
  padding: 16px 0px 13px !important;
}
.label_container_focus {
  border-bottom: 3px solid rgb(72, 72, 72);
}
/* .label_container:hover {
  border-bottom: 3px solid rgb(72, 72, 72);
} */
.label_btn {
  background-color: white;
  border: transparent;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  color: #008489;
}
.label_btn:hover {
  text-decoration: underline;
}
.label_btn_focus {
  color: black;
}
.label_sep {
  width: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.separation {
  border-bottom: 1px solid #ebebeb;
}
/* house detai; */
.house_detail {
  width: 100%;
}
/* house detail top */
.house_detail_sketch {
  color: rgb(76, 86, 41);
  font-size: 0.7rem;
  font-weight: bold;
  margin-bottom: 20px;
}
.house_detail_title {
  font-size: 2rem;
  color: rgb(72, 72, 72);
  font-weight: bold;
  margin-top: 10px;
}
.house_detail_label {
  display: flex;
  margin-top: 20px;
}
.house_detail_label_container {
  font-size: 0.7rem;
  color: rgb(72, 72, 72);
  font-weight: bold;
  border-radius: 15px;
  padding: 6.4px 9.8px;
  background-color: rgb(243, 243, 243);
  margin-right: 10px;
}
.house_score {
  background-color: rgb(234, 247, 234);
  color: rgb(42, 110, 0);
}
/* house detail center */
.house_detail_center {
  margin-top: 20px;
}
.center_top_img_container {
  width: 64px;
  height: 64px;
}
.center_top_img_container img {
  width: 100%;
  height: 100%;
  border-radius: 30px;
}
.center_top_container {
  display: flex;
  align-items: center;
}

.center_bottom_container {
  width: 100%;
  margin-top: 16px;
  background-color: rgb(248, 248, 248);
  padding: 40px 15px 20px 15px;
  font-size: 1rem;
  line-height: 1.375em;
  color: rgb(72, 72, 72);
  position: relative;
}
.deco_tri {
  display: block;
  height: 0px;
  width: 0px;
  border: 10px solid transparent;
  border-bottom-color: rgb(248, 248, 248);
  background: transparent;
  position: absolute;
  top: -20px;
  left: 35px;
}
.house_detail_more {
  margin-top: 15px;
  color: rgb(0, 132, 137);
  font-weight: bold;
}
.house_detail_more_text:hover {
  cursor: pointer;
  text-decoration: underline;
}
.house_detail_more_container {
  padding: 20px;
  font-weight: lighter;
  color: rgb(72, 72, 72);
  font-size: 1.05rem;
}
.text_desc_title,
.text_detail_title {
  font-size: 1rem;
  font-weight: bold;
}
.text_desc_title,
.text_detail_title,
.text_desc,
.text_detail {
  margin-top: 20px;
}
/* house detail guarantee */
.guarantee {
  margin-top: 30px;
  font-size: 1rem;
  color: rgb(72, 72, 72);
}
.guarantee_bold {
  color: black;
  font-weight: bold;
  margin-right: 10px;
}
/* house detail message */
.house_message {
  display: flex;
  flex-direction: column;
}
.message_container {
  margin-top: 30px;
  color: rgb(72, 72, 72);
}
.message_bold {
  width: 25%;
  float: left;
  font-size: 1rem;
  font-weight: bold;
}
/* house comment */
.comment_container {
  margin-top: 20px;
}
.house_comment {
  color: rgb(72, 72, 72);
}
.house_comment_title {
  font-size: 1.5rem;
  font-weight: bold;
}
.house_scores {
  display: flex;
  margin-top: 30px;
}
.comment_num {
  margin-left: 10px;
}
.comment_label_container {
  width: 30%;
  display: flex;
  justify-content: space-between;
}
.total_btn,
.good_btn,
.bad_btn {
  padding: 10px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 6px;
  border: none;
  outline: none;
}
.good_btn,
.total_btn {
  background: rgb(235, 245, 246);
  color: rgb(0, 132, 137);
}
.bad_btn {
  background: rgb(246, 246, 246);
  color: rgb(72, 72, 72);
}
.comment_btn_focus {
  background: rgb(0, 132, 137);
  color: rgb(255, 255, 255);
}
.house_detail,
.house_comment,
.house_date,
.house_location,
.house_tips {
  margin-top: 10px;
  height: 1000px;
  padding: 3px;
}
.house_order {
  width: 100px;
  height: 100px;
  background-color: black;
  position: sticky;
  top: 50%;
}
</style>
