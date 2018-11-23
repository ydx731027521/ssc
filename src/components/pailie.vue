<template>
  <div>
    <div class="a_center">
      <div class="c_body">
        <a-tabs defaultActiveKey="1">
          <a-tab-pane tab="定位玩法" key="1">
            <YiDing @abc="fun($event)"></YiDing>
          </a-tab-pane>
          <a-tab-pane tab=" → 过滤快打 ←" key="2" class="guolv">二定</a-tab-pane>
          <a-tab-pane tab="二字现" key="3">三定</a-tab-pane>
          <a-tab-pane tab="三字现" key="4">任选一</a-tab-pane>
          <a-tab-pane tab="四字现" key="5">任选二</a-tab-pane>
          <a-tab-pane tab="组三" key="6">任选三</a-tab-pane>
          <a-tab-pane tab="组六" key="7">组三</a-tab-pane>
          <a-tab-pane tab="大小单双" key="8">组六</a-tab-pane>
          <a-tab-pane tab="总和/龙虎" key="9">和值</a-tab-pane>
          <a-tab-pane tab="梭哈" key="10">龙虎</a-tab-pane>
        </a-tabs>
        <div class="cb_bottom">
          <div class="cbb_center">
            <ul>
              <li v-if="xiaZhu.length<1" class="cbbc_li">未选择投注号码</li>
              <li v-for="({name,xznum,num,danjia,leixing},i) in xiaZhu" :key="i">
                <span class="cbbc_name">[{{name}}]</span>
                <span class="cbbc_xznum">{{xznum}}</span>
                <span class="cbbc_shu">
                    <span class="span"></span>
                    {{num}}注,每注{{danjia}}{{leixing}}
                  </span>
                <a @click="delXz(i)" class="cbbc_del" href="javascript:void(0)">删除</a>
              </li>
            </ul>
            <div class="cbbc_div">
              注数：<span>{{zNum}}</span>注&nbsp;&nbsp;金额：<span>{{price}}</span>元.
            </div>
          </div>
          <div class="cbb_btn">
            <div class="cbbb_div">
              <button @click="qingkong" class="cbbbd_btn1">清空</button>
              <button class="cbbbd_btn2"><span>立即下注</span></button>
            </div>
          </div>
        </div>

        <div class="cb_footer">
          <h4>我的投注记录</h4>
          <div style="height: 100px; line-height: 80px; color: rgb(153, 153, 153); text-align: center;">
            很抱歉，由于您尚未登录，无法获取您的投注记录！</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import YiDing from "./YiDing"
  export default {
    data(){
      return {
        xiaZhu:[],
        zNum:0,
        price:0
      }
    },
    components: {
      YiDing
    },
    methods:{
      fun(data){
        var obj = {...data};
        this.xiaZhu.push(obj);
        let num = data.num;
        if(obj.leixing=="角"){
          num = num/10;
        }
        this.zNum += num;
        this.price += data.danjia*num;
      },
      delXz(i){
        let num = this.xiaZhu[i].num;
        if(this.xiaZhu[i].leixing=="角"){
          num = num/10;
        }
        this.zNum -= num;
        this.price -= this.xiaZhu[i].danjia*num;
        this.xiaZhu.splice(i,i+1);
      },
      qingkong(){
        this.xiaZhu = [];
        this.zNum =0;
        this.price = 0;
      }
    }
  }
</script>

<style>
  .a_center{
    padding:10px;
  }
  .c_top{
    width:100%;
    height: 140px;
    background-color: #FEC844;
  }
  .c_body{
    padding: 15px;
    width: 810px;
  }
  .c_body .ant-tabs .ant-tabs-tab {
    padding: 5px 8px;
    margin-right: 10px;
    font-size: 14px;
  }
  body ol, body ul, body li, body dl {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .cbb_center {
    margin-top: 10px;
    padding: 0 0 3px 0;
  }
  .cbb_center {
    margin-top: 10px;
    padding: 0 0 3px 0;
  }

  .cbb_center ul{
    min-height: 60px;
    padding: 10px;
    background: #fff;
    border: 1px inset;
  }
  .cbb_center ul li{
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    padding: 5px 0;
  }
  .cbb_center ul li:last-child{
    border: none;
  }
  .cbbc_li{
    margin-top: 5px;
    text-align: center;
    font-size: 14px;
    color: #999;
  }

  .cbbc_div{
    padding: 20px 0 10px 0;
  }
  .cbbc_div span{
    color: #e60;
    font-size: 1.5em;
    margin: 0 2px;
  }
  .cbb_btn{
    position: relative;
  }
  .cbbb_div{
    position: absolute;
    right: 0px;
    top: -40px;
    text-align: center;
    width: 100%;
  }
  .cbbb_div button{
    border: none;
    background: #00B27A;
    color: #fff;
    padding: 3px 5px;
    margin-left: 6px;
    cursor: pointer;
    border-radius: 4px;
    outline: none;
    letter-spacing: 1px;
  }

  .cbbb_div .cbbbd_btn1,.cbbb_div .cbbbd_btn2{
    padding: 6px 12px;
    letter-spacing: 4px;
  }

  .cbbb_div .cbbbd_btn1{
    background: #f0f0f0;
    border: 1px solid #d8d8d8;
    border-radius: 4px;
    color: #666;
    margin-left: 10px;
  }

  .cbbb_div .cbbbd_btn2{
    background: #00B27A;
    border: 1px solid #00B27A;
    border-radius: 4px;
    color: #fff;
  }

  .cb_footer{
    border-top: 1px solid #eee;
    margin: 5px 0 0 0;
    padding: 15px;
  }

  .cb_footer h4{
    font-size: 14px;
    font-weight: normal;
  }
  .cbbc_name{
    margin-right: 5px;
    color: #e60;
    vertical-align: top;
  }
  .cbbc_xznum{
    display: inline-block;
    max-width: 340px;
    max-height: 200px;
    overflow-y: auto;
    word-break: break-all;
    vertical-align: top;
  }
  .cbbc_shu{
    position: absolute;
    right: 60px;

  }
  .cbbc_shu span{
    margin-right: 5px;
  }
  .cbbc_del{
    position: absolute;
    right: 0;
  }

  .ant-tabs-tab:nth-child(2){
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
</style>
