<template>
  <div class="foot">
    <div class="foot-box">
      <div class="foot-title">
        Copyright © 新时代赌场 Reserved
      </div>
      <ul>
        <li class="bg1"></li>
        <li class="bg2"></li>
      </ul>
      <div class="bg3">

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "foot"
  }
</script>

<style scoped>
  .foot{
    margin-top: 20px;
    width: 100%;
    height: 148px;
    background: url("../img/f_bg_x.gif")repeat-x;
  }
  .foot-box{
    width: 1000px;
    margin: auto;
    position: relative;
  }
  .foot-title{
    width: 100%;
    line-height: 50px;
    font-size: 14px;
    color:#fff;
  }
  ul li {
    display: inline-block;
  }
  .bg1{
    width: 322px;
    height: 57px;
    background: url("../img/support-icon.png");
  }
  .bg2{
    width: 203px;
    height: 45px;
    background: url("../img/pay_img.png");
  }
  .bg3{
    width: 310px;
    height: 96px;
    background: url("../img/flb_btn.png");
    position: absolute;
    right: 0;
    top: 10px;
  }
</style>
