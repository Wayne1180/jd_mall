<template>
  <div class="brand">
    <div class="py-container">
      <ul class="brand-list">
        <li class="brand-item">
          <img src="./images/brand/brand_21.png" alt="" />
        </li>
        <li class="brand-item">
          <img src="./images/brand/brand_03.png" alt="" />
        </li>
        <li class="brand-item">
          <img src="./images/brand/brand_05.png" alt="" />
        </li>
        <li class="brand-item">
          <img src="./images/brand/brand_07.png" alt="" />
        </li>
        <li class="brand-item">
          <img src="./images/brand/brand_09.png" alt="" />
        </li>
        <li class="brand-item">
          <img src="./images/brand/brand_11.png" alt="" />
        </li>
        <li class="brand-item">
          <img src="./images/brand/brand_13.png" alt="" />
        </li>
        <li class="brand-item">
          <img src="./images/brand/brand_15.png" alt="" />
        </li>
        <li class="brand-item">
          <img src="./images/brand/brand_17.png" alt="" />
        </li>
        <li class="brand-item">
          <img src="./images/brand/brand_19.png" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.brand {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .brand-list {
      overflow: hidden;
      padding: 15px 0;
      background: #f7f7f7;
      line-height: 18px;

      .brand-item {
        width: 120px;
        float: left;
        height: 37px;

        img {
          border-left: 1px dotted #ccc;
          padding: 0 10px;
        }

        &:first-child {
          img {
            border-left: 0;
          }
        }
      }
    }
  }
}
</style>