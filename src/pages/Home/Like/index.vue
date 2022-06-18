<template>
  <div class="like">
    <div class="py-container">
      <div class="title">
        <h3 class="fl">猜你喜欢</h3>
        <a href="javascript:;" class="fr tip changeBnt">换一换</a>
      </div>
      <div class="bd">
        <ul class="favourate">
          <li>
            <img src="./images/Guess/1.webp" alt="" />
            <div class="like-text">
              <p>iPhone 11 Pro 手机壳</p>
              <h3>￥19.9</h3>
            </div>
          </li>
          <li>
            <img src="./images/Guess/2.webp" alt="" />
            <div class="like-text">
              <p>牛丁 深度防水 智能手表</p>
              <h3>￥19.9</h3>
            </div>
          </li>
          <li>
            <img src="./images/Guess/3.webp" alt="" />
            <div class="like-text">
              <p>惠普 碳纤维 笔记本</p>
              <h3>￥19.9</h3>
            </div>
          </li>
          <li>
            <img src="./images/Guess/4.webp" alt="" />
            <div class="like-text">
              <p>Mrhippies 羊羔毛 外套</p>
              <h3>￥19.9</h3>
            </div>
          </li>
          <li>
            <img src="./images/Guess/5.webp" alt="" />
            <div class="like-text">
              <p>简慕菲 室内外两用拖鞋</p>
              <h3>￥19.9</h3>
            </div>
          </li>
          <li>
            <img src="./images/Guess/6.webp" alt="" />
            <div class="like-text">
              <p>APC NAS自动识别 UPS</p>
              <h3>￥19.9</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.like {
  margin-top: 15px;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .title {
      overflow: hidden;

      .fl {
        float: left;
        font-size: 20px;
        line-height: 30px;
      }

      .fr {
        float: right;
        background-image: url(./images/icons.png);
        width: 66px;
        height: 25px;
        background-position: 182px -104px;
        line-height: 30px;
        font-size: 12px;
        font-weight: 400;
        color: #666;
        text-decoration: none;
      }
    }

    .bd {
      .favourate {
        border: 1px solid #e4e4e4;
        overflow: hidden;
        padding: 0 10px;
        box-sizing: border-box;
        display: flex;

        li {
          height: 250px;
          margin: 0 -1px;
          overflow: hidden;
          background: #fff;
          position: relative;
          width: 16.667%;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;

          img {
            width: 142px;
            height: 142px;
            transition: all 400ms;

            &:hover {
              opacity: 0.8;
              transform: scale(1.1);
            }
          }

          .like-text {
            padding: 0;
            width: 142px;
            border-right: 1px solid #e4e4e4;

            p {
              margin: 5px 0;
            }

            h3 {
              color: #df3033;
              font-size: 20px;
              line-height: 30px;
              margin: 9px 0;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>