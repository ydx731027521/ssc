<template>
    <div class="wf">
        <div class="top">
            <dl>
                <dt>玩法提示：</dt>
                <dd>
                    <span>每个数字为1注，选号与开奖号码相同且位置相同即中奖<span>
                        <strong>{{(danjia*9.7).toFixed(1)}}</strong>
                        {{leixing}}</span>。</span>
                </dd>
            </dl>
        </div>
        <div class="center">
            <div class="c_left">
                <dl v-for="(item,i) in weiShu" :key="i">
                    <dt>{{item}}</dt>
                    <dd @click="clickNum($event)">
                        <div style="display: inline-block;">
                            <ul class="l_ul">
                                <li v-for="(item,i) in 10" :key="i">{{i}}</li>
                            </ul>
                            <div class="l_div">
                                <a href="javascript:void(0)">全</a>
                                <a href="javascript:void(0)">大</a>
                                <a href="javascript:void(0)">小</a>
                                <a href="javascript:void(0)">奇</a>
                                <a href="javascript:void(0)">偶</a>
                                <a href="javascript:void(0)">清</a>
                            </div>
                        </div>
                    </dd>
                </dl>
                <div class="l_bottom">
                    注数：<strong>{{num}}</strong>，每注
                    <a-input size="small" v-model="danjia" :defaultValue="danjia" />
                    <a-select ref="money" @select="fangShi($event)" defaultValue="yuan" style="width: 48px;">
                        <a-select-option value="yuan">元</a-select-option>
                        <a-select-option value="jiao">角</a-select-option>
                    </a-select>
                    ，合计<strong>{{num*danjia}}</strong>{{leixing}}。
                    <div class="lb_right">
                        <button class="lbr_btn1">单式输入</button>
                        <button class="lbr_btn2" @click="submit($event)">↓添加号码↓</button>
                        <button class="lbr_btn3">直接下注</button>
                    </div>
                </div>
            </div>
            <div class="c_right">
                <dl class="r_dl">
                    <dt>最新赔率：</dt>
                    <dd><label style="width: 45px;">一定:</label><span><strong>1</strong>赔<strong>9.7</strong></span></dd>
                    <dd><label style="width: 45px;">二定:</label><span><strong>1</strong>赔<strong>97</strong></span></dd>
                    <dd><label style="width: 45px;">三定:</label><span><strong>1</strong>赔<strong>970</strong></span></dd>
                    <dd><label style="width: 45px;">四定:</label><span><strong>1</strong>赔<strong></strong></span></dd>
                    <dd><label style="width: 45px;">任选一:</label><span><strong>1</strong>赔<strong>2</strong></span></dd>
                    <dd><label style="width: 45px;">任选二:</label><span><strong>1</strong>赔<strong>15</strong></span></dd>
                    <dd><label style="width: 45px;">任选三:</label><span><strong>1</strong>赔<strong>97</strong></span></dd>
                    <dd><label style="width: 45px;">组三:</label><span><strong>1</strong>赔<strong>300</strong></span></dd>
                    <dd><label style="width: 45px;">组六:</label><span><strong>1</strong>赔<strong>140</strong></span></dd>
                    <dd><label style="width: 45px;">和值:</label><span><strong>1</strong>赔<strong>720</strong></span></dd>
                    <dd><label style="width: 45px;">和值大小:</label><span><strong>1</strong>赔<strong></strong></span></dd>
                    <dd><label style="width: 45px;">和值单双:</label><span><strong>1</strong>赔<strong></strong></span></dd>
                    <dd><label style="width: 45px;">龙虎:</label><span><strong>1</strong>赔<strong>9</strong></span></dd>
                    <dd><label style="width: 45px;">跨度:</label><span><strong>1</strong>赔<strong>85</strong></span></dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "YiDing",
  data(){
      return {
          weiShu:["万位","千位","百位","十位","个位"],
          danjia:1,
          num:0,
          baiNum:[],
          shiNum:[],
          geNum:[],
          leixing:"元"
      }
  },
  methods:{
      clickNum(e){
          var target = e.target;
          var wei = e.currentTarget.parentNode.firstChild.innerHTML;
          if(target.nodeName.toLocaleLowerCase()=="li"){
              let snum = target.innerHTML;
              if(target.className!="li"){
                    target.className="li";
                    this.num++;
                    this.addNum(wei,snum)
                }else{
                    target.className="";
                    this.num--;
                    this.delNum(wei,snum);
                }
          }else if(target.nodeName.toLocaleLowerCase()=="a"){
              var dom = target.parentNode.previousElementSibling;
              var li = dom.children;
              if(target.innerHTML=="全"){
                  for(let i=0;i<li.length;i++){
                      if(li[i].className!="li"){
                            this.num++;
                            li[i].className="li";
                            this.addNum(wei,i);
                      }
                  }
              }else if(target.innerHTML=="大"){
                  for(let i=0;i<li.length;i++){
                    if(i>4){
                        if(li[i].className!="li"){
                           this.num++;
                           li[i].className="li";
                           this.addNum(wei,i);
                        }
                    }else{
                        if(li[i].className=="li"){
                            li[i].className="";
                            this.num--;
                            this.delNum(wei,i);
                        }
                    }
                  }
              }else if(target.innerHTML=="小"){
                   for(let i=0;i<li.length;i++){
                    if(i<5){
                        if(li[i].className!="li"){
                           this.num++;
                           li[i].className="li";
                           this.addNum(wei,i);
                        }
                    }else{
                        if(li[i].className=="li"){
                            li[i].className="";
                            this.num--;
                            this.delNum(wei,i);
                        }
                    }
                  }
              }else if(target.innerHTML=="奇"){
                  for(let i=0;i<li.length;i++){
                      if(i%2==1){
                            if(li[i].className!="li"){
                                this.num++;
                                li[i].className="li";
                                this.addNum(wei,i);
                            }
                        }else{
                            if(li[i].className=="li"){
                                li[i].className="";
                                this.num--;
                                this.delNum(wei,i);
                            }
                        }
                  }
              }else if(target.innerHTML=="偶"){
                  for(let i=0;i<li.length;i++){
                      if(i%2==0){
                            if(li[i].className!="li"){
                                this.num++;
                                li[i].className="li";
                                this.addNum(wei,i);
                            }
                        }else{
                            if(li[i].className=="li"){
                                li[i].className="";
                                this.num--;
                                this.delNum(wei,i);
                            }
                        }
                  }
              }else if(target.innerHTML=="清"){
                  for(let i=0;i<li.length;i++){
                      if(li[i].className=="li"){
                            li[i].className="";
                            this.num--;
                            this.delNum(wei,i);
                        }
                  }
              }
          }
      },
      submit(e){
          if(this.num==0){
              this.$message.error('至少选择一个号码');
          }else{
              let xzNum = this.baiNum.sort().join("")+","+this.shiNum.sort().join("")+","+this.geNum.sort().join("")
              this.$emit("abc",{name:"一定",xznum:xzNum,num:this.num,danjia:this.danjia,leixing:this.leixing})
              let liList = e.currentTarget.parentNode.parentNode.parentNode.getElementsByTagName("li");
              liList=Array.from(liList);
              liList.map(item=>{
                  item.className="";
              })
              this.danjia=1;
              this.num = 0;
              this.baiNum = [];
              this.shiNum = [];
              this.geNum = [];
          }
      },
      addNum(wei,num){
          if(wei=="百位"){
              this.baiNum[this.baiNum.length]=num;
          }else if(wei=="十位"){
              this.shiNum[this.shiNum.length]=num;
          }else if(wei=="个位"){
              this.geNum[this.geNum.length]=num;
          }
      },
      delNum(wei,num){
           if(wei=="百位"){
              this.baiNum = this.baiNum.filter(item=>{
                  return item!=num;
              })
          }else if(wei=="十位"){
              this.shiNum = this.shiNum.filter(item=>{
                  return item!=num;
              })
          }else if(wei=="个位"){
              this.geNum = this.geNum.filter(item=>{
                  return item!=num;
              })
          }
      },
      fangShi(e){
          if(e=="jiao"){
              this.leixing = "角";
          }else{
              this.leixing = "元";
          }
      }
  }
};


</script>
<style>
.wf{
    position: relative;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 10px;
}
.wf .top {
  background: #fffef0;
  border: 1px dashed #ffdd99;
  margin-bottom: 10px;
  padding: 0 5px;
  position: relative;
}
.wf dl {
  margin: 5px 0 5px 0;
}

.wf .top dl {
  position: relative;
  padding: 0 0 0 70px;
}

.wf dl dt {
  display: inline-block;
      width: 30px;
}

.wf .top dl dt {
  position: absolute;
  left: 0;
  top: 0px;
  margin: 0;
  line-height: 22px;
  height: 22px;
  font-weight: bold;
  width: 70px !important;
}

.wf dl dd {
  display: inline-block;
}

.wf .top dl dd {
  margin: 0;
  height: 22px;
  line-height: 22px;
  color: #999;
}
.wf strong {
  color: #e60;
  font-size: 1.1em;
  font-weight: normal;
  margin: 0 2px;
}

.wf .center {
  display: table;
  border-collapse: collapse;
  width: 100%;
}
.wf .center .c_left{
    display: table-cell;
    width: 560px;
    border-right: 1px solid #f0f0f0;
    user-select: none;
}
.wf .center .c_left .l_ul{
    vertical-align: middle;
    max-width: 460px;
    display: inline-block;
    user-select: none;
}
.wf .center .c_left .l_ul li{
    cursor: pointer;
    margin-bottom: 3px;
    border-width: 0;
    background-position: center;
    background-size: contain;
    font-weight: normal;
    color: #222;
    font-size: 14px;
    display: inline-block;
    text-align: center;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    margin-left: 4px;
    background-image: url(../img/ballno.png);
    background-size: 100%;
    background-position: center;
    background-size: contain;
}

.wf .center .c_left .l_ul .li{
    color: #fff;
    background-image: url(../img/ballok.png);
}

.wf .center .c_left .l_bottom input{
    width: 50px;
    text-align: center;
    margin: 0 4px;
    padding: 0;
    vertical-align: middle;
    font-size: 12px;
    height: 28px;
}

.wf .center .c_left .l_div{
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
}
.wf .center .c_left .l_div a{
    display: inline-block;
    margin-right: 4px;
    border: 1px solid #ccc;
    color: #333;
    height: 20px;
    width: 20px;
    line-height: 19px;
    font-size: 12px;
    text-align: center;
}
.wf .center .c_right{
    display: table-cell;
    padding: 0 10px;
    max-width: 40%;
    vertical-align: top;
}
.wf .center .c_right .r_dl{
    width: 206px;
    padding-left: 0 !important;
}
.wf .center .c_right dl dt{
    padding: 4px 0;
    width: auto;
    font-size: 1.2em;
    display: block;
    font-size: 12px !important;
    padding: 2px 0 !important;
    font-weight: bold;
}
.wf .center .c_right dl dd{
    width: auto;
    color: #999;
    margin-top: 5px;
    font-size: 10px !important;
    margin-top: 0 !important;
    width: 100px !important;
    line-height: 12px !important;
}
dt {
    font-weight: 500;
}
dd{
    margin-bottom: .5em;
    margin-left: 0;
}
.l_bottom .ant-select-selection--single {
    height: 24px;
}
.l_bottom .ant-select-selection .ant-select-selection__rendered {
    line-height: 22px;
    margin: 0 8px;
}

.l_bottom .lb_right{
    display: inline-block;
}

.l_bottom .lb_right button{
    background: #00B27A;
    border: 1px solid #00B27A;
    border-radius: 4px;
    color: #fff;
    padding: 2px 5px;
    font-size: 12px;
    margin-left: 6px;
    cursor: pointer;
    outline: none;
}

.l_bottom .lb_right button:hover{
    background: #00c688;
}


.l_bottom .lb_right .lbr_btn3{
    background: #e60;
    border: 1px solid #e60;
}

.l_bottom .lb_right .lbr_btn3:hover{
    background: #ff6f03;
}
</style>
