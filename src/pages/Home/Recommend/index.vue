<template>
  <div class="today-recommend">
    <div class="left">
      <img src="./images/Center/秒杀.png" alt="" />
    </div>
    <!-- 轮播图 -->
    <div class="center">
      <div class="swiper-container" id="center">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./images/Center/1.png" alt="" />
            <img src="./images/Center/2.png" alt="" />
            <img src="./images/Center/3.png" alt="" />
            <img src="./images/Center/4.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./images/Center/5.png" alt="" />
            <img src="./images/Center/6.png" alt="" />
            <img src="./images/Center/7.png" alt="" />
            <img src="./images/Center/8.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./images/Center/9.png" alt="" />
            <img src="./images/Center/10.png" alt="" />
            <img src="./images/Center/11.png" alt="" />
            <img src="./images/Center/12.png" alt="" />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
    <div class="right">
      <img src="./images/Center/right.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.today-recommend {
  width: 1140px;
  height: 260px;
  margin: 0 auto;
  margin-top: 15px;
  position: relative;

  .left img {
    position: absolute;
    left: 0;
    top: 0;
    width: 190px;
    height: 260px;
  }

  .center {
    position: absolute;
    top: 0;
    left: 190px;
    box-sizing: border-box;
    height: 260px;
    width: 800px;
    padding: 0px;
    margin: 0;
  }

  .right img {
    position: absolute;
    right: 0;
    top: 0;
    width: 190px;
    height: 260px;
  }
}
</style>