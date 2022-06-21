<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="local">
          <svg
            t="1653571753499"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2886"
            width="16"
            height="16"
          >
            <path
              d="M512 938.666667c-53.333333 0-384-257.258667-384-469.333334S299.925333 85.333333 512 85.333333s384 171.925333 384 384-330.666667 469.333333-384 469.333334z m0-352c64.8 0 117.333333-52.533333 117.333333-117.333334s-52.533333-117.333333-117.333333-117.333333-117.333333 52.533333-117.333333 117.333333 52.533333 117.333333 117.333333 117.333334z"
              p-id="2887"
              fill="#d81e06"
            ></path></svg
          ><span>河南</span>
        </div>
        <div class="asright">
          <div class="loginList">
            <p>
              <!-- 声明式导航务必要有to属性 -->
              <router-link to="/login">您好，请登录</router-link>
              <router-link class="register" to="/register"
                >免费注册</router-link
              >
            </p>
          </div>
          <div class="typeList">
            <a href="###">我的订单</a>
            <a href="###">我的京东</a>
            <a href="###">京东会员</a>
            <a href="###">企业采购</a>
            <a href="###">客户服务</a>
            <a href="###">网站导航</a>
            <a href="###">手机京东</a>
            <a href="###">网页无障碍</a>
          </div>
        </div>
      </div>
    </div>
    <!-- 头部的第二行 搜索区域 -->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link to="/home" class="logo" title="京东商城">
          <img src="./images/BigLogo.jpg" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
            placeholder="GeForce RTX 3090Ti"
          />
          <!--  -->
          <!-- <button @click="goSearch">
            <svg
              t="1653574803837"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3816"
              width="16"
              height="16"
            >
              <path
                d="M474.453333 884.053333c-225.28 0-409.6-184.32-409.6-409.6s184.32-409.6 409.6-409.6 409.6 184.32 409.6 409.6-184.32 409.6-409.6 409.6z m0-68.266666c187.733333 0 341.333333-153.6 341.333334-341.333334s-153.6-341.333333-341.333334-341.333333-341.333333 153.6-341.333333 341.333333 153.6 341.333333 341.333333 341.333334z m252.586667 54.613333c-13.653333-13.653333-10.24-37.546667 3.413333-47.786667s37.546667-10.24 47.786667 3.413334l64.853333 78.506666c13.653333 13.653333 10.24 37.546667-3.413333 47.786667s-37.546667 10.24-47.786667-3.413333l-64.853333-78.506667z"
                p-id="3817"
                fill="#ffffff"
              ></path>
            </svg>
          </button> -->
          <!-- 
          type="button"
             -->
          <button @click="goSearch" type="button">
            <svg
              t="1653574803837"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3816"
              width="16"
              height="16"
            >
              <path
                d="M474.453333 884.053333c-225.28 0-409.6-184.32-409.6-409.6s184.32-409.6 409.6-409.6 409.6 184.32 409.6 409.6-184.32 409.6-409.6 409.6z m0-68.266666c187.733333 0 341.333333-153.6 341.333334-341.333334s-153.6-341.333333-341.333334-341.333333-341.333333 153.6-341.333333 341.333333 153.6 341.333333 341.333333 341.333334z m252.586667 54.613333c-13.653333-13.653333-10.24-37.546667 3.413333-47.786667s37.546667-10.24 47.786667 3.413334l64.853333 78.506666c13.653333 13.653333 10.24 37.546667-3.413333 47.786667s-37.546667 10.24-47.786667-3.413333l-64.853333-78.506667z"
                p-id="3817"
                fill="#ffffff"
              ></path>
            </svg>
          </button>
        </form>
      </div>
      <!-- 我的购物车 -->
      <div class="car">
        <svg
          t="1653575873096"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4873"
          width="16"
          height="16"
        >
          <path
            d="M352.456912 832.032253c-35.434907 0-63.989249 28.554342-63.989249 63.989249 0 35.434907 28.554342 63.989249 63.989249 63.989249s63.989249-28.554342 63.989249-63.989249C416.446162 860.586595 387.891819 832.032253 352.456912 832.032253L352.456912 832.032253z"
            p-id="4874"
            fill="#d81e06"
          ></path>
          <path
            d="M800.55367 832.032253c-35.434907 0-63.989249 28.554342-63.989249 63.989249 0 35.434907 28.554342 63.989249 63.989249 63.989249s63.989249-28.554342 63.989249-63.989249C864.54292 860.586595 835.816563 832.032253 800.55367 832.032253L800.55367 832.032253z"
            p-id="4875"
            fill="#d81e06"
          ></path>
          <path
            d="M864.026877 800.037628 344.200235 800.037628c-46.099782 0-86.695112-36.466991-92.199563-83.082815l-54.356459-382.043339L166.853687 156.360826c-1.892155-15.653284-16.169326-28.382328-29.930455-28.382328L95.983874 127.978498c-17.717453 0-31.994625-14.277171-31.994625-31.994625s14.277171-31.994625 31.994625-31.994625l40.767344 0c46.615824 0 87.727196 36.466991 93.403662 83.082815l30.790526 177.86259L315.473879 708.698135c1.720141 14.793214 15.309256 27.350244 28.726356 27.350244l519.826642 0c17.717453 0 31.994625 14.277171 31.994625 31.994625S881.744331 800.037628 864.026877 800.037628z"
            p-id="4876"
            fill="#d81e06"
          ></path>
          <path
            d="M384.279523 672.05913c-16.685369 0-30.618512-12.729044-31.82261-29.586427-1.376113-17.545439 11.868974-33.026709 29.586427-34.230808l434.163615-31.994625c15.997312-0.172014 29.414413-12.55703 31.134554-26.834201l50.400134-288.295649c1.204099-10.664875-1.720141-22.533848-8.084663-29.758441-4.128339-4.644381-9.288762-7.052579-15.309256-7.052579L319.946246 224.3064c-17.717453 0-31.994625-14.277171-31.994625-31.994625S302.400806 159.973123 319.946246 159.973123l554.05745 0c24.426004 0 46.959852 10.148833 63.301193 28.554342 18.749538 21.157736 27.178229 50.744163 23.565933 81.706703l-50.400134 288.467663c-5.504452 44.895683-45.927768 81.362674-92.027549 81.362674l-431.755417 31.82261C385.82765 671.887116 384.967579 672.05913 384.279523 672.05913z"
            p-id="4877"
            fill="#d81e06"
          ></path>
        </svg>
        <a href="###">我的购物车</a>
      </div>

      <!-- 热词 -->
      <div class="s_hotword">
        <a href="###">爆品真五折</a>
        <a href="###">电脑数码</a>
        <a href="###">建材618</a>
        <a href="###">新潮配件</a>
        <a href="###">购机补贴</a>
        <a href="###">健康预售</a>
        <a href="###">爆款尖货</a>
        <a href="###">美妆护肤</a>
        <a href="###">京东京造</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    //搜索按钮的回调函数：需要向search路由进行跳转
    goSearch() {
      //params参数  第一种：字符串形式
      // this.$router.push(
      //   "/search/" + this.keyword + "?k=" + this.keyword.toUpperCase()
      // );
      //第二种：模板字符串
      // this.$router.push(
      //   `/search/${this.keyword}?k=${this.keyword.toUpperCase()}`
      // );
      //第三种：对象写法
      if (this.$route.query) {
        let location = {
          name: "search",
          params: { keyword: this.keyword || undefined },
        };
        location.query = this.$route.query;
        this.$router.push(location);
      }
    },
  },
};
</script>

<style scoped lang="less">
.header {
  // 头部的第一行
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .local {
        float: left;
      }

      .local span {
        color: rgb(153, 153, 153);
      }

      .asright {
        float: right;
      }

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          span {
            color: rgb(153, 153, 153);
          }

          .register {
            border-right: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
            color: red;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;
          color: rgb(153, 153, 153);

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  //头部第二行
  & > .bottom {
    // height: 155px;
    // position: relative;
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 120px;
          margin: 10px 45px;
        }
      }
    }

    .searchArea {
      float: left;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 58px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }

    .car {
      float: left;
      width: 130px;
      height: 34px;
      background-color: #fff;
      text-align: center;
      line-height: 34px;

      border: 1px solid #eee;
      margin-top: 35px;
      margin-left: 10px;

      a {
        color: rgb(225, 37, 27);
        margin-top: 1px;
      }
    }

    .s_hotword {
      width: 800px;
      height: 20px;

      a {
        float: left;
        padding-right: 7px;
      }

      a:first-child {
        color: rgb(225, 37, 27);
      }
    }
  }
}
</style>