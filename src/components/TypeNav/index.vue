<template>
  <div class="type-nav">
    <div class="container">
      <h2 class="all">全部商品分类</h2>
      <div class="xl_hotword">
        <a href="###">秒杀</a>
        <a href="###">优惠券</a>
        <a href="###">PLUS会员</a>
        <a href="###">品牌闪购</a>
        <a href="###">拍卖</a>
        <a href="###">京东家电</a>
        <a href="###">京东超市</a>
        <a href="###">京东生鲜</a>
        <a href="###">京东国际</a>
        <a href="###">京东云</a>
      </div>
      <div class="sort">
        <div class="all-sort-list2">
          <div
            class="item"
            v-for="(c1, index) in categoryList"
            :key="c1.categoryId"
          >
            <h3>
              <a href="">{{ c1.categoryName }}</a>
            </h3>
            <div class="item-list clearfix">
              <div
                class="subitem"
                v-for="(c2, index) in c1.categoryChild"
                :key="c2.categoryId"
              >
                <dl class="fore">
                  <dt>
                    <a href="">{{ c2.categoryName }}</a>
                  </dt>
                  <dd>
                    <em
                      v-for="(c3, index) in c2.categoryChild"
                      :key="c3.categoryId"
                    >
                      <a href="">{{ c3.categoryName }}</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  //组件挂载完毕：可以向服务器发请求
  mounted() {
    //通知Vuex发请求，获取数据，存储于仓库当中
    this.$store.dispatch("categoryList");
  },
  computed: {
    ...mapState({
      //对象写法，右侧需要的是个函数，当使用这个计算属性的时候，右侧函数会立即执行一次
      //注入一个参数state，即为大仓库中的数据
      categoryList: (state) => state.home.categoryList,
    }),
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1250px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .xl_hotword {
      width: 760px;
      height: 35px;
      position: absolute;
      bottom: 0px;
      left: 240px;
      font-size: 15px;

      a {
        padding-right: 20px;
      }

      a:nth-child(-n + 2) {
        color: rgb(225, 37, 27);
        font-weight: 800;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: rgb(250, 250, 250);
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                  width: 1000px;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: 22px;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 650px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    //border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>