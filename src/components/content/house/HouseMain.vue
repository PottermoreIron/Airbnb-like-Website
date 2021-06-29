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
            <span class="house_detail_sketch">{{ hotel.hotel.hotelName }}</span>
            <div class="house_detail_title">
              {{ hotel.hotel.hotelWord }}
            </div>
            <div class="house_detail_label">
              <div class="house_detail_label_container house_score">
                {{ hotel.hotel.hotelStar }}分 · {{ hotel.purchaseNum }}条评论
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
                <img src="test_img/assistant.jpg" />
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
                {{ hotel.hotel.hotelWord }}
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
                        {{ hotel.hotel.hotelWord }}
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
            <div class="comment_num">{{ hotel.purchaseNum }}条评价</div>
          </div>
          <div style="margin-top: 30px; margin-bottom: 0px">
            <div class="separation"></div>
          </div>
          <div class="comment_container" ref="comments">
            <div class="comment_label_container" @click="changeCommentList">
              <div class="comment_totoal">
                <button class="total_btn comment_btn_focus" id="total_btn">
                  全部{{ hotel.purchaseNum }}
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
          <div v-for="item in comments" :key="item.id">
            <comment
              :userName="item.name"
              :commentDate="item.time"
              :comment="item.comment"
            />
            <div style="margin-top: 20px; margin-bottom: 0px">
              <div class="separation"></div>
            </div>
          </div>
          <pagination
            :current-page.sync="currentPage"
            :page-size="PAGE_SIZE"
            :total="total"
            @current-change="onPageChange"
            class="pagination"
          />
        </div>
        <div id="date" class="section house_date">
          <div class="house_date_title">可订日期</div>
          <div class="house_date_tips">至少住一晚</div>
          <div class="datepicker-trigger">
            <button
              type="text"
              placeholder="Select dates"
              id="datepicker-trigger"
              class="date_btn"
            >
              <span>{{ formatDates }}</span>
            </button>
            <AirbnbStyleDatepicker
              class="airbnb_date"
              :trigger-element-id="'datepicker-trigger'"
              :mode="'range'"
              :inline="true"
              :minDate="today"
              :date-one="dateOne"
              :date-two="dateTwo"
              @date-one-selected="changeDateOne"
              @date-two-selected="changeDateTwo"
            />
          </div>
        </div>
        <div id="location" class="section house_location">
          <div class="house_location_title">房源位置</div>
          <div class="location">
            <div class="location_title">
              {{ hotel.hotel.hotelAddress }}
            </div>
            <div class="location_desc">
              生活配套： <br />-
              小区内有超市、咖啡厅、健身房，卓秀北街和良乡东路两侧有各式餐馆。<br />
              - 首创奥特莱斯：4.5公里，驾车或乘坐公交约10分钟可达。
            </div>
          </div>
          <div class="transport">
            <div class="transport_title">出行信息</div>
            <div class="transport_desc">
              公共交通：
              小区东门紧邻地铁房山线（良乡大学城北站），距房源仅100米，地铁站旁有公交车站（房12路、房1路、房46路）。距离北京中心地带约1-1.5小时。
            </div>
          </div>
          <div class="map_container">
            <Map />
          </div>
        </div>
        <div id="tips" class="section house_tips">
          <div class="house_tips_title">预订须知</div>
          <div class="tips_container">
            <div style="margin-top: 24px">
              <div class="housing_code_container">
                <div class="housing_code_title">房屋守则</div>
                <div class="housing_code_desc_container">
                  <div style="margin-bottom: 14px">
                    <div class="housing_code_desc">适合儿童(2-12岁)</div>
                  </div>
                  <div style="margin-bottom: 14px">
                    <div class="housing_code_desc">不允许举办派对和活动</div>
                  </div>
                  <div style="margin-bottom: 14px">
                    <div class="housing_code_desc">适合婴幼儿(2岁以下)</div>
                  </div>
                  <div style="margin-bottom: 14px">
                    <div class="housing_code_desc">不允许携带宠物</div>
                  </div>
                  <div style="margin-bottom: 14px">
                    <div class="housing_code_desc">禁止吸烟</div>
                  </div>
                  <div style="margin-bottom: 14px">
                    <button class="housing_code_btn" @click="showHousingCode">
                      房屋守则
                    </button>
                  </div>
                  <el-dialog :visible.sync="housingCodeVisible"
                    ><div class="housing_pop_title">房屋守则</div>
                    <div class="user_rights_container">
                      <div class="user_rights_title">房客使用权限</div>
                      <div class="user_rights">
                        客人可以使用房源内的所有设施。
                      </div>
                    </div>
                    <div class="attention_matters_container">
                      <div class="attention_matters_title">其他注意事项</div>
                      <div class="attention_matters">
                        为节约能源，不在客房时请关闭电视、空调等设施。<br />退房时，我们会检查房间物品，如有损坏，请您照价赔偿。
                      </div>
                    </div></el-dialog
                  >
                </div>
              </div>
            </div>
            <div style="margin-top: 24px">
              <div class="cancel_policy_container">
                <div class="cancel_policy_title">取消政策</div>
                <div class="cancel_policy_desc_container">
                  <div style="margin-bottom: 14px">
                    <div class="cancel_policy_desc">
                      入住日期下午2点前取消，扣除首晚房费后，退还剩余房费和全部清洁费
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style="margin-top: 24px">
              <div class="safe_intro_container">
                <div class="safe_intro_title">安全须知</div>
                <div class="safe_intro_desc_container">
                  <div style="margin-bottom: 14px">
                    <div class="safe_intro_desc">
                      在新冠肺炎疫情期间，我们要求所有酒店和住客查看并遵守我们的社交距离准则和其他新冠肺炎疫情相关准则。
                    </div>
                  </div>
                  <div style="margin-bottom: 14px">
                    <div class="safe_intro_desc">已配备一氧化碳报警器</div>
                  </div>
                  <div style="margin-bottom: 14px">
                    <div class="safe_intro_desc">已配备烟雾报警器</div>
                  </div>
                  <div style="margin-bottom: 14px">
                    <button class="safe_intro_btn" @click="showSafeIntro">
                      查看更多
                    </button>
                  </div>
                  <el-dialog :visible.sync="safeIntroVisible"
                    ><div class="safe_pop_title">安全须知</div>
                    <div class="safe_pop_intro_container">
                      <div class="safe_intro">
                        <div style="width: 10%; float: left">
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-disinfect"></use>
                          </svg>
                        </div>
                        <div style="width: 90%; float: left">
                          在新冠肺炎疫情期间，我们要求所有房东和房客查看并遵守爱彼迎的社交距离准则和其他新冠肺炎疫情相关准则。
                        </div>
                      </div>
                      <div class="safe_intro">
                        <div style="width: 10%; float: left">
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-confirm"></use>
                          </svg>
                        </div>
                        <div style="width: 90%; float: left">
                          已配备一氧化碳报警器
                        </div>
                      </div>
                      <div class="safe_intro"></div>
                      <div style="width: 10%; float: left">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-confirm"></use>
                        </svg>
                      </div>
                      <div style="width: 90%; float: left">
                        已配备烟雾报警器
                      </div>
                    </div>
                    <div class="other_safe_intro_container">
                      <div class="other_safe_intro_title">
                        您还必须确认以下情况
                      </div>
                      <div class="other_safe_intro">
                        <div style="width: 10%; float: left">
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-bankCard"></use>
                          </svg>
                        </div>
                        <div style="width: 90%; float: left">
                          押金 - 如果损坏房源，您可能会被收取高达￥300的罚金
                        </div>
                      </div>
                    </div></el-dialog
                  >
                </div>
              </div>
            </div>
            <div style="margin-top: 24px">
              <div class="secure_booking_container">
                <div class="secure_booking_title">安全预订</div>
                <div class="secure_booking_desc_container">
                  <div style="margin-bottom: 14px">
                    <div class="secure_booking_desc">
                      为了保护您的账号隐私及付款安全，请勿妄信第三方预订代理提供的折扣或礼金券，也不要在其他网站或App汇款或沟通。
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style="margin-top: 24px">
              <div class="invoice_notes_container">
                <div class="invoice_notes_title">发票须知</div>
                <div class="invoice_notes_desc_container">
                  <div style="margin-bottom: 14px">
                    <div class="invoice_notes_desc">
                      我们可为此房源的订单提供发票。开具发票，请在下单前选择「需要发票」并填写发票信息，退房后平台将自动为您开具电子普通发票，或纸质专用发票。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="space_occupy"></div>
    </div>
    <div class="house_order_container">
      <Order :date="orderDate" @changeDate="fatherChangeDate" />
    </div>
  </div>
</template>

<script>
import Pagination from "../../common/Pagination.vue";
import Comment from "./Comment.vue";
import Map from "../map/Map.vue";
import Order from "../house/main/Order.vue";
import { scrollInto } from "@/utils/dom.js";
import { mapState } from "vuex";
// import { getPageOffset } from "@/utils/common.js";
const PAGE_SIZE = 5;
export default {
  components: { Comment, Pagination, Map, Order },
  name: "HouseMain",
  data() {
    return {
      scroll: "",
      descriptionVisible: false,
      //   score: "4",
      currentPage: 1,
      total: 50,
      comments: [
        {
          id: 1,
          name: "POT",
          time: "2021年6月",
          comment: "房间不错,愉快的旅程,下次还去这家",
        },
        {
          id: 2,
          name: "SOB",
          time: "2020年7月",
          comment: "卫生不行,刚去的时候还有烟味",
        },
        {
          id: 3,
          name: "QQQ",
          time: "2029年1月",
          comment: "还行吧,对于这个价格来说",
        },
        {
          id: 4,
          name: "PPP",
          time: "2022年2月",
          comment: "太一般了,房东态度也很不好",
        },
        {
          id: 5,
          name: "AAA",
          time: "2023年5月",
          comment: "房东态度很好啊,你是不是认错房东了",
        },
        {
          id: 6,
          name: "SLP",
          time: "2021年3月",
          comment: "我觉得可以,我女朋友觉得一般",
        },
        {
          id: 7,
          name: "OLI",
          time: "2020年9月",
          comment: "一般般,能住,我朋友也这么觉得",
        },
      ],
      value: "",
      today: "",
      housingCodeVisible: false,
      cancelPolicyVisible: false,
      safeIntroVisible: false,
    };
  },
  async created() {
    let _this = this;
    let score = _this.hotel.hotel.hotelStar.toFixed(0);
    _this.stars = new Array(Number(score)).join(",").split(",");
    _this.PAGE_SIZE = PAGE_SIZE;
    _this.initData();
    let day = new Date();
    day.setTime(day.getTime());
    _this.today =
      day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate();
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
    // 数据初始化
    async initData() {},
    async getComments() {
      //   const { comments, total } = await getComments({
      //     limit: PAGE_SIZE,
      //     // getPageOffset可以得到第i页的第一个item
      //     offset: getPageOffset(this.currentPage, PAGE_SIZE),
      //   });
      //   this.comments = comments;
      //   // 此酒店的评论数
      //   this.total = total;
    },
    async onPageChange(page) {
      let _this = this;
      _this.currentPage = page;
      _this.getComments();
      scrollInto(_this.$refs.comments);
    },
    // popover button
    showHousingCode() {
      let _this = this;
      _this.housingCodeVisible = true;
    },
    showCancelPolicy() {
      let _this = this;
      _this.cancelPolicyVisible = true;
    },
    showSafeIntro() {
      let _this = this;
      _this.safeIntroVisible = true;
    },
    fatherChangeDate(dateArr) {
      let _this = this;
      _this.dateOne = dateArr[0];
      _this.dateTwo = dateArr[1];
    },
    // change Date
    changeDateOne(val) {
      this.dateOne = val;
    },
    changeDateTwo(val) {
      this.dateTwo = val;
    },
  },
  watch: {
    //   监听scroll高度,用于锚点样式随页面滑动而改变
    scroll: function () {
      this.loadScroll();
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
        return "选择日期";
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
    // comments: function () {
    //   let tmp = this.$store.state.hotel.hotel.purchaseAndUsers;
    //   let length = tmp.length;
    //   let res = [];
    //   for (let i = 0; i < length; i++) {
    //     let tmpComment = {};
    //     tmpComment["id"] = tmp[i].purchase.id;
    //     tmpComment["name"] = tmp[i].user.userName;
    //     tmpComment["time"] = tmp[i].purchase.purchaseOver;
    //     tmpComment["comment"] = tmp[i].purchase.purchaseComment;
    //     tmpComment["img"] = tmp[i].user.userPic;
    //     res.push(tmpComment);
    //   }
    //   console.log(tmp);
    //   console.log(tmp[0].purchase.id);
    //   console.log(tmp[0].purchase.purchaseComment);
    //   console.log(tmp[0].purchase.purchaseOver);
    //   console.log(tmp[0].user.userName);
    //   console.log(tmp[0].user.userPic);
    //   return tmp;
    // },
    ...mapState("hotel", { hotel: "hotel" }),
  },
};
</script>

<style scoped>
/* 注意!sticky是否失效和父元素的height有关! */
.house_main_container {
  display: flex;
  justify-content: space-between;
  /* height: 7000px; */
  color: rgb(72, 72, 72);
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
  font-weight: bold;
  margin-top: 10px;
}
.house_detail_label {
  display: flex;
  margin-top: 20px;
}
.house_detail_label_container {
  font-size: 0.7rem;
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
}
.comment_btn_focus {
  background: rgb(0, 132, 137);
  color: rgb(255, 255, 255);
}
.pagination {
  margin-top: 30px;
}
/* house date */
.house_date_title {
  font-size: 1.5rem;
  font-weight: bold;
}
.house_date_tips {
  margin-top: 40px;
}
.date_btn {
  width: 200px;
  height: 31px;
  background-color: #008489;
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  font-size: 0.9rem;
}
.datepicker-trigger {
  margin-top: 20px;
}
.airbnb_date {
  margin-top: 20px;
}
/* house location */
.house_location_title {
  font-size: 1.5rem;
  font-weight: bold;
}
.location_title,
.transport_title {
  font-size: 1rem;
  font-weight: bold;
  margin-top: 30px;
}
.location_desc,
.transport_desc {
  margin-top: 20px;
}
/* house map */
.map_container {
  margin-top: 40px;
}
/* house tips */
.house_tips_title {
  font-size: 1.5rem;
  font-weight: bold;
}
/* .housing_code_,.cancel_policy_,.safe_intro_,.secure_booking_,.invoice_notes_ */
.housing_code_container,
.cancel_policy_container,
.safe_intro_container,
.secure_booking_container,
.invoice_notes_container {
  overflow: hidden;
  margin-top: 30px;
}
.housing_code_title,
.cancel_policy_title,
.safe_intro_title,
.secure_booking_title,
.invoice_notes_title {
  width: 25%;
  float: left;
  font-weight: bold;
}
.housing_code_desc_container,
.cancel_policy_desc_container,
.safe_intro_desc_container,
.secure_booking_desc_container,
.invoice_notes_desc_container {
  width: 75%;
  float: left;
}
.cancel_policy_desc {
  font-weight: bold;
}
.housing_code_btn,
.cancel_policy_btn,
.safe_intro_btn {
  color: rgb(0, 132, 137);
  font-weight: bold;
  background-color: transparent;
  border: none;
}
.housing_code_btn:hover,
.cancel_policy_btn:hover,
.safe_intro_btn:hover {
  text-decoration: underline;
  cursor: pointer;
}
/* button popover dialog */
/* house  */
.housing_pop_title,
.safe_pop_title {
  color: rgb(72, 72, 72);
  font-size: 1.4rem;
  font-weight: bold;
}
.user_rights_container {
  margin-top: 50px;
  color: rgb(72, 72, 72);
  font-size: 1rem;
}
.user_rights_title,
.attention_matters_title {
  font-weight: bold;
}
.attention_matters_container {
  margin-top: 30px;
  font-size: 1rem;
  color: rgb(72, 72, 72);
}
.user_rights,
.attention_matters {
  margin-top: 15px;
}
/* safe */
.icon {
  width: 1.2rem;
  height: 1.2rem;
}
.safe_pop_intro_container {
  margin-top: 40px;
  color: rgb(72, 72, 72);
  overflow: hidden;
}
.safe_intro {
  margin-top: 10px;
  overflow: hidden;
}
.other_safe_intro_container {
  margin-top: 30px;
  color: rgb(72, 72, 72);
}
.other_safe_intro_title {
  font-size: 1rem;
  font-weight: bold;
}
.other_safe_intro {
  margin-top: 20px;
  overflow: hidden;
}
.house_detail,
.house_comment,
.house_date,
.house_location,
.house_tips {
  margin-top: 30px;
  /* height: 1500px; */
  padding: 3px;
}
.space_occupy {
  height: 200px;
}
.house_order_container {
  width: 376px;
  height: 480px;
  position: sticky;
  top: 100px;
}
</style>
