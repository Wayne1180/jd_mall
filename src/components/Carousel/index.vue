<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(carousel, index) in list"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
//引入Swiper
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: ["list"],
  watch: {
    list: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.cur, {
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
            //如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
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

<style>
</style>