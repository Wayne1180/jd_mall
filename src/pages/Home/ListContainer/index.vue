<template>
  <div class="list-container">
    <div class="sortList clearfix">
      <div class="center">
        <!-- banner轮播 -->
        <Carousel :list="bannerList" />
      </div>
      <div class="blocks">
        <div class="swiper-container" ref="three">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="carousel in tallList"
              :key="carousel.id"
            >
              <img :src="carousel.imgUrl" />
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="right">
        <div class="news">
          <h4>
            <em class="f1">京东快报</em>
            <span class="fr tip">更多 ></span>
          </h4>
          <div class="clearix"></div>
          <ul class="news-list unstyled">
            <li v-for="news in newsList" :key="news.id">
              <span class="bold">{{ news.redname }}</span
              >{{ news.newsdetail }}
            </li>
          </ul>
        </div>
        <ul class="lifeservices">
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">话费</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">机票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">电影票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">游戏</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">彩票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">加油站</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">酒店</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">火车票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">众筹</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">理财</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">礼品卡</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">白条</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 开始
import Swiper from "swiper";
// 结束
import { mapState } from "vuex";
export default {
  name: "",
  mounted() {
    //派发action：通过Vuex发起Ajax请求：将数据存储在仓库中
    this.$store.dispatch("getBannerList");
    this.$store.dispatch("getTallList");
    this.$store.dispatch("getThreeList");
    this.$store.dispatch("getNewsList");
  },
  computed: {
    ...mapState({
      bannerList: (state) => state.home.bannerList,
      tallList: (state) => state.home.tallList,
      threeList: (state) => state.home.threeList,
      newsList: (state) => state.home.newsList,
    }),
  },
  //开始
  watch: {
    threeList: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.three, {
            autoplay: {
              delay: 3000,
            },
            loop: true,
            //如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              //点击小球的时候也切换图片
              clickable: true,
            },
          });
          //鼠标停留停止切换
          mySwiper.el.onmouseover = function () {
            mySwiper.autoplay.stop();
          };
          //鼠标离开开始自动切换
          mySwiper.el.onmouseout = function () {
            mySwiper.autoplay.start();
          };
        });
      },
    },
  },
};
</script>

<style scoped lang="less">
.list-container {
  width: 1250px;
  margin: 0 auto;

  .sortList {
    height: 464px;
    padding-left: 210px;

    .center {
      box-sizing: border-box;
      width: 590px;
      height: 100%;
      padding: 5px;
      float: left;
      padding-top: 0;
    }

    .blocks {
      box-sizing: border-box;
      height: 480px;
      width: 190px;
      padding: 5px;
      padding-top: 0px;
      float: left;
    }

    .right {
      float: right;
      width: 250px;

      .news {
        border: 1px solid #e4e4e4;
        margin-top: 5px;

        h4 {
          border-bottom: 1px solid #e4e4e4;
          padding: 5px 10px;
          margin: 5px 5px 0;
          line-height: 22px;
          overflow: hidden;
          font-size: 14px;

          .f1 {
            float: left;
          }

          .fr {
            float: right;
            font-size: 12px;
            font-weight: 400;
          }
        }

        .news-list {
          padding: 5px 15px;
          line-height: 26px;

          .bold {
            font-weight: 700;
            color: rgb(225, 37, 27);
            background-color: rgb(253, 238, 237);
          }
        }
      }

      .lifeservices {
        border-right: 1px solid #e4e4e4;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;

        .life-item {
          border-left: 1px solid #e4e4e4;
          border-bottom: 1px solid #e4e4e4;
          margin-right: -1px;
          height: 64px;
          text-align: center;
          position: relative;
          cursor: pointer;
          width: 25%;

          .list-item {
            background-image: url(~@/assets/images/icons.png);
            width: 61px;
            height: 40px;
            display: block;
          }

          .service-intro {
            line-height: 22px;
            width: 60px;
            display: block;
          }

          &:nth-child(1) {
            .list-item {
              background-position: 0px -5px;
            }
          }

          &:nth-child(2) {
            .list-item {
              background-position: -62px -5px;
            }
          }

          &:nth-child(3) {
            .list-item {
              background-position: -126px -5px;
            }
          }

          &:nth-child(4) {
            .list-item {
              background-position: -190px -5px;
            }
          }

          &:nth-child(5) {
            .list-item {
              background-position: 0px -76px;
            }
          }

          &:nth-child(6) {
            .list-item {
              background-position: -62px -76px;
            }
          }

          &:nth-child(7) {
            .list-item {
              background-position: -126px -76px;
            }
          }

          &:nth-child(8) {
            .list-item {
              background-position: -190px -76px;
            }
          }

          &:nth-child(9) {
            .list-item {
              background-position: 0px -146px;
            }
          }

          &:nth-child(10) {
            .list-item {
              background-position: -62px -146px;
            }
          }

          &:nth-child(11) {
            .list-item {
              background-position: -126px -146px;
            }
          }

          &:nth-child(12) {
            .list-item {
              background-position: -190px -146px;
            }
          }
        }
      }
    }
  }
}
</style>