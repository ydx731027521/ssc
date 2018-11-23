<template>
  <div class="header">

    <div class="logo">

    </div>
    <div class="text">
      <a class="iphone" href="javascript:">☆ 手机版 ☆</a>
      <span class="qq">客服QQ：1954969999 / 122661162/122727271</span>
    </div>
    <div class="lg">
      <input class="ipt ipt1" type="text" placeholder="用户名">
      <input class="ipt" type="text" placeholder="密码">
      <p class="btn-dl"></p>
      <p class="btn-zc"></p>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>
<style>
  .header {
    width: 1000px;
    height: 132px;
    margin: auto;
    overflow: hidden;
    position: relative;
  }

  .logo {
    float: left;
    width: 362px;
    height: 110px;
    background: url("../img/backgroundLogo.png") no-repeat 0 10px;
  }

  .qq {
    margin-left: 20px;
  }

  .iphone {
    text-decoration: none;
  }

  .iphone {
    animation: mymove .5s infinite;
  }

  @keyframes mymove {
    0% {
      color: red;
    }
    100% {
      color: yellow;
    }
  }

  .iphone:hover {
    text-decoration: underline;
  }

  .text {
    color: #fff;
    width: 503px;
    height: 20px;
    font-size: 14px;
    position: absolute;
    line-height: 18px;
    top: 8px;
    right: 0;
    background: url("../img/guo.png") no-repeat 420px 2px;
  }

  .lg {
    position: relative;
    position: absolute;
    top: 38px;
    right: 0;
    width: 548px;
    height: 89px;
    background: url("../img/lgbg.png") no-repeat;
  }

  .ipt {
    width: 174px;
    height: 32px;
    display: block;
    margin-left: 100px;
    background: #434343;
    border: none;
    padding: 0 10px;
  }

  .ipt1 {
    margin: 10px 0 5px 100px;
  }

  .btn-dl {
    cursor: pointer;
    top: 9px;
    left: 310px;
    position: absolute;
    width: 105px;
    height: 64px;
    background: url("../img/denglu.png") no-repeat;
  }

  .btn-zc {
    cursor: pointer;
    position: absolute;
    top: 9px;
    left: 415px;
    width: 105px;
    height: 64px;
    background: url("../img/zhuce.png") no-repeat;
  }
</style>
