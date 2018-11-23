<template>
  <div>
    <Header></Header>
    <Nav></Nav>
    <div class="banner">
      <div class="bgImg"></div>
    </div>
    <div class="news">
      <div class="youhui">

      </div>
      <div class="newList">
        <ul class="newList-box">
          <li><a href="javascript:">更改网站内部页面推广链接</a></li>
          <li><a href="javascript:">做代理~年赚百万~不是梦</a></li>
          <li><a href="javascript:">尊敬各位新老客户您们好！</a></li>
          <li><a href="javascript:">七星彩~~高赔率：最低1毛玩法。</a></li>
          <li><a href="javascript:">新时代赌城投注网储存已达到3.6亿元多</a></li>
          <li><a href="javascript:">亲爱的顾客你好！</a></li>
          <li><a href="javascript:">本站的所有会员注意事项，最近有个别小网站，</a></li>
        </ul>
      </div>
      <div class="NewsRight">
        <div class="rollNews">
          <marquee onmouseover=this.stop() onmouseout=this.start()>
            敬请认准”新时代赌城“实力品牌。保证做到信誉。很多小网站信誉实力有问题，请大家要警惕；如要咨询信誉实力，可以通过我们的代理商（上线）咨询。本站的所有会员注意事项，最近有个别小网站，冒充群里是新时代赌城的客户，在海南多个QQ群说新时代赌城没有信誉，这种垃圾人，去群里和其他地方指使在新时代赌城玩的会员去别的地方投注，骗客户去其他地方网站注册，这样一来他能够赚取很多反水，请大家提高警惕，不要让小人得逞。一旦去其他地方投注，中奖很容易被骗走大额资金！还有一些是其他小平台网投的代理人，在网上诬告新时代赌城信誉，敬请新时代赌城所有会员提高警惕，不要被其他代理小平台的骗术骗走到其他小网投打奖，以防中大奖真正黑你大额资金。敬请认准”新时代赌城“实力品牌。
            保证做到信誉。介绍客户赚反水，希望大家可以做好赚钱的机会。多去介绍，多去发展下线客户。做得好的话，年赚百万不是梦！
            海南七星彩高赔率：最低1毛玩法。本公司玩法多种：有一毛的投注七星彩，可以倒打四定，过滤快打，中奖提现最快到账，信誉安全。
          </marquee>
        </div>
        <div>
          <ul class="big-box">
            <li class="bgImg1"></li>
            <li class="bgImg2"></li>
            <li class="bgImg3"></li>
            <li class="bgImg4"></li>
          </ul>
        </div>
      </div>
    </div>
    <Foot>

    </Foot>
  </div>

</template>

<script>
  import Header from './HelloWorld'
  import Nav from './Nav'
  import Foot from './foot'

  export default {

    components: {
      Header,
      Nav,
      Foot
    }
  }
</script>

<style scoped>
  .banner {
    position: relative;
    width: 1000px;
    height: 392px;
    margin: auto;
    margin-top: 7px;
    background: url("../img/backgroundImg.jpg");
    margin-bottom: 10px;
  }

  .bgImg {
    background: url("../img/backgroundCengtent.png");
    width: 500px;
    height: 200px;
    position: absolute;
    top: 40px;
    right: 10px;
  }

  .news {
    position: relative;
    overflow: hidden;
    margin-top: 10px;
    width: 1000px;
    margin: auto;
  }

  .newList {
    position: relative;
    float: left;
    width: 260px;
    height: 250px;
    background: url("../img/listbg.png") no-repeat;
  }

  .newList-box {
    padding: 68px 26px 20px 40px;
  }

  .newList-box li {
    font-size: 12px;
    color: #fff;
    width: 194px;
  }

  .newList-box li a:hover {
    text-decoration: underline;
  }

  .NewsRight {
    margin-left: 20px;
    float: left;
  }

  .rollNews {
    overflow: hidden;
    color: #fff;
    padding: 0 40px 0 138px;
    background: url("../img/wenbg.png");
    width: 518px;
    height: 60px;
    line-height: 60px;
  }

  .youhui {
    position: absolute;
    top:250px;
    width: 260px;
    height: 86px;
    background: url("../img/youhui.png");
  }
  .big-box li{
    cursor:pointer;
  }

  .bgImg1{
    background: url("../img/g1.png");
    background-size:100% ;
  }
  .bgImg2{
    background: url("../img/g2.png");
    background-size:100% ;
  }
  .bgImg3{
    background: url("../img/g3.png");
    background-size:100% ;
  }
  .bgImg4{
    background: url("../img/g4.png");
    background-size:100% ;
  }
  .big-box{
    width: 716px;
    height: 265px;
    overflow: hidden;
  }
  .big-box li{
    width: 176px;
    height: 250px;
    float: left;
  }

</style>
