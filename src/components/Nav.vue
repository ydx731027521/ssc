<template>
  <ul class="box">
    <router-link to="/"><li class="home">首页</li></router-link>
    <router-link to="/caipiao"><li>彩票游戏</li></router-link>
    <li style="color:yellow">排列5<img src="../img/hot.gif" alt=""></li>
    <li style="color:yellow">马来彩<img src="../img/hot.gif" alt=""></li>
    <li style="color:yellow">七星彩<img src="../img/hot.gif" alt=""></li>
    <li>六合彩</li>
    <li style="color:yellow">快3<img src="../img/hot.gif" alt=""></li>
    <li style="color:yellow">真人视讯<img src="../img/hot.gif" alt=""></li>
    <li>在线充值</li>
    <li>我要提款</li>
    <li>联系客服</li>
  </ul>
</template>

<script>
  export default {
    methods:{

    }
  }
</script>

<style scoped>
  .box{
    width: 1000px;
    height: 35px;
    line-height: 35px;
    margin: auto;
  }
  .box li{
    width: 85px;
    float: left;
    text-align: center;
    box-sizing: border-box;
    border-radius: 10px;
    margin-left: 3px;
    cursor: pointer;
    color:#fff;
    border:1px solid transparent;
  }
  .box li:hover{
    background: rgba(0,0,0,0.65);
    border:1px solid #333;
  }
  .home{
    background: url("../img/nav_cur.png")no-repeat;
    color:#8f1414;
    background-size: 100%;
  }
  .box .home:hover{
    background:url("../img/nav_cur.png")no-repeat;
    background-size: 100%;
    color:#8f1414;
  }
</style>
