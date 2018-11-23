<template>
  <div class="kuai3-box">
    <ul class="title-box">
      <li><a href="javascript:">江苏快3</a></li>
      <li><a href="javascript:">广西快3</a></li>
    </ul>
    <div>
      <div>
        <div>
          <div class="su3-box2">
            <div class="k3-box">
              <div class="kuai3-su">
                江苏快3
              </div>
              <div class="kuai3-suimg">

              </div>
            </div>
            <div class="shijian-box">
              <div class="qishu">
                距 <span style="color:red">20181118025</span>期投注截至时间还有：
              </div>
              <div class="shijian">

              </div>
            </div>
            <div class="wanfa-box">
              <div class="kaijiang-box">
                <div class="shangqi">
                  距 <span style="color:red">20181118023</span>期开奖号码：<span style="color:red">3,3,6</span>
                </div>
              </div>
              <ul class="k3-icon">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div class="content-box">
            <div class="bet-wrapper">
              <div>
                <a-tabs defaultActiveKey="1" @change="callback">
                  <a-tab-pane tab="大小" key="1"><BigAndSmall @abc="abc($event)" /></a-tab-pane>
                  <a-tab-pane tab="单双" key="2">单双</a-tab-pane>
                  <a-tab-pane tab="三军" key="3">三军</a-tab-pane>
                  <a-tab-pane tab="和值" key="5">和值</a-tab-pane>
                  <a-tab-pane tab="梭哈" key="6">梭哈</a-tab-pane>
                </a-tabs>
              </div>
              <div class="bet_selected">
                <ul>
                  <li v-if="kuaidata.length<1" class="bet_selected_empty">未选择投注号码</li>
                  <li v-for="({ball,price,num},i) in kuaidata" class="zhu">
                    <span class="play_">[{{daxiao}}]</span>
                    <span class="play_1">{{ball}}</span>
                    <span class="play_2">{{num}}注,每注{{price}}元</span>
                    <a @click="delect(i)" class="delect1" href="javascript:">删除</a>
                  </li>
                </ul>
                <div class="controls-box">
                  注数： <span class="zongzhu">{{countnum}}</span>注 金额:<span class="zongqian">{{countprice}}</span>元.
                  <button style="width: 58px;height: 31px;text-align: center;line-height: 31px;border: 1px solid #d8d8d8;background: #f0f0f0;margin-left: 150px" @click="qingkong">清空</button>
                  <button style="width: 90px;height: 31px;text-align: center;line-height: 31px;border: 1px solid #00B27A;background: #00B27A;">立即下注</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BigAndSmall from './bigandsmall'
  export default {
    name: "kuai3",
    data () {
      return {
        kuaidata:[],
        daxiao:"",
        countnum:0,
        countprice:0,

      }
    },
    methods: {
      callback (key) {
        console.log(key)
      },
      abc(data){
        let datas = {...data}
        this.kuaidata.push(datas)
        this.countnum+=data.num
        this.countprice += data.price * data.num
        if(this.kuaidata!=[]){
          this.daxiao="大小"

        }
      },
      delect(i){
        this.countnum-=this.kuaidata[i].num
        this.countprice -= this.kuaidata[i].price * this.kuaidata[i].num
        this.kuaidata.splice(i,i+1)

      },
      qingkong(){
        this.countnum =0
        this.kuaidata =[]
        this.countprice=0
      }
    },
    components:{
      BigAndSmall
    }
  }
</script>

<style scoped>
  .kuai3-box {
    box-sizing: border-box
  }

  .kuai3-box li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .kuai3-box li a {
    display: inline-block;
    padding: 10px 20px;
    background: #fff;
    color: #444;
    font-size: 14px;
    border-top: 1px solid #fff;
  }

  .kuai3-suimg {
    background: url("../img/k3logo.png") no-repeat;
    width: 76px;
    height: 76px;
    margin: 0 auto;
    background-position: center;
    background-size: contain;
  }

  .k3-box {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 150px;
    background: #fff;
    height: 130px;
  }

  .title-box {
    overflow: hidden;
    width: 830px;
    height: 41px;
    line-height: 21px;
  }

  .title-box li {
    float: left;
  }

  .kuai3-su {
    display: block;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    line-height: 26px;
    color: #111;
    font-family: Microsoft JhengHei, Sans-Serif;
    padding: 12px 0px 4px 0;
  }

  .shijian-box {
    width: 250px;
    height: 130px;
    background: #fff;
  }

  .shijian-box .qishu {
    font-size: 14px;
    padding-top: 20px;
    height: 50px;
    font-weight: bold;
    text-align: center;
  }

  .shijian {
    width: 180px;
    margin: 0px auto 0 auto;
    background: #2B2F38;
    color: #fff;
    font-size: 34px;
    line-height: 60px;
    font-family: Arial;
    height: 60px;
  }

  .su3-box2 {
    position: relative;
    padding: 10px 410px 10px 170px;
    background: #E1E3E5;
  }

  .shangqi {
    display: block;
    padding: 10px 0 2px 0;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
  }

  .wanfa-box {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 390px;
    height: 130px;
    background: #fff;
  }

  .k3-icon {
    display: inline-block;
  }

  .k3-icon li {
    width: 82px;
    height: 70px;
    display: inline-block;
    vertical-align: middle;
  }

  .su3-box2 {
    width: 830px;
  }

  .content-box {
    padding: 10px;
    background: #fff;
    width: 830px;
  }

  .bet-wrapper {
    margin: 5px 0 0 0;
    padding: 15px;
  }
  .ant-menu-item{
    width: 44px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .bet_selected{
    width: 780px;
    margin: auto;
    margin-top: 10px;
    padding: 0 0 3px 0;
  }
  .bet_selected ul{
    min-height: 60px;
    padding: 10px;
    background: #fff;
    border: 1px inset;
  }
  .bet_selected_empty{
    margin-top: 5px;
    text-align: center;
    font-size: 14px;
    color: #999;
  }
  button{
    border-radius: 5px;
    margin-left: 10px;
  }
  .zhu .delect1{
    padding: 0;
    color:#1890ff;
    text-decoration: none;
    font-size: 10px;
    position: absolute;
    right: 12px;
    top:0px;
  }
  .play_{
    margin-right: 5px;
    color: #e60;
    vertical-align: top;
  }
  .zhu{
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    padding: 5px 0;
    font-size: 12px;
    line-height: 28px;
    height: 28px;

  }
  .play_1{
    position: absolute;
  }
  .play_2{
    position: absolute;
    right: 50px;
  }
  .zongzhu{
    font-size: 18px;
    color:#e60;
  }
  .zongqian{
    font-size: 18px;
    color:#e60;
  }
</style>
