<template>
  <div style="overflow: hidden;">
    <ul class="ul">
      <li>定位胆</li>
      <li>前二</li>
      <li>前三</li>
      <li>前四</li>
      <li>后二</li>
      <li>后三</li>
      <li>后四</li>
    </ul>
    <div class="div">
      玩法提示：每个数字为1注，选号与开奖号码相同且位置相同即中奖0元。
    </div>
    <div style="overflow: hidden;float:left;">
      <ul class="box-left">
        <li>
          <div class="num-box">
            <div class="num">
              万位
            </div>
            <div class="cl">
              <ul v-for="(item,index) in 5" class="bb">
                <li class="bg1" id="ball" v-for="(item,index) in 10" @click="go_($event)">
                  {{index}}
                </li>
              </ul>
            </div>
          </div>
          <div class="small">
            <ul v-for="(item,index) in 5" class="qbg">
              <li class="jj">全</li>
              <li class="da">大</li>
              <li class="xiao">小</li>
              <li class="ji">奇</li>
              <li class="ou">偶</li>
              <li class="qing">清</li>
            </ul>
          </div>
        </li>
        <div class="msgBox">
          <div>最新赔率</div>
          <ul class="msg-news">
            <li>定位胆:1赔9.75</li>
            <li>前二:1赔97.5</li>
            <li>前三:1赔975</li>
            <li>前四:1赔9750</li>
            <li>后二:1赔97.5</li>
            <li>后三:1赔975</li>
            <li>后四:1赔9750</li>
            <li>组三:1赔300</li>
            <li>组六:1赔140</li>
            <li>大小:1赔1.95</li>
            <li>单双:1赔1.95</li>
            <li>和大小:1赔1.95</li>
            <li>和单双:1赔1.95</li>
            <li>龙虎:1赔1.95</li>
            <li>豹子:1赔60</li>
            <li>对子:1赔2.8</li>
            <li>全顺:1赔13</li>
            <li>半顺:1赔2</li>
          </ul>
        </div>
      </ul>
    </div>
    <div class="input-List">
      <div class="input-box">
        <div style="float:left;">注数：<span style="color:#e60" ref="num" class="shuzi">0</span></div>
        <div style="margin-left: 10px">
          每注
          <a-input style="width: 50px;height: 28px;" type="text" :value='1'/>
        </div>
        <a-select class="selectIpt" style="width:50px;height:24px;line-height: 24px;margin-left:3px;"
                  defaultValue="jack" @change="handleChange">
          <a-select-option value="jack">元</a-select-option>
          <a-select-option value="lucy">角</a-select-option>
        </a-select>
        <div>
          合计<span ref="num1"> 0</span>元。
        </div>
        <div class="input-right">
          <a-button style="width:64px;height:24px;line-height: 24px;" type="primary">单式输入</a-button>
          <a-button style="width:77px;height:24px;line-height: 24px;" type="primary">↓添加号码↓</a-button>
          <a-button style="width:64px;height:24px;line-height: 24px;" type="primary">直接下注</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Input from './input'

  var i = 0
  export default {
    name: "selectNum",
    data() {
      return {
        input: '',
        options: [{
          value: '选项1',
          label: '元'
        }, {
          value: '选项2',
          label: '角'
        }],
        value: ''
      }
    },
    computed: {},
    methods: {
      handleChange(value) {
        console.log(`selected ${value}`);
      },
      go_($event) {

        if ($event.currentTarget.className == 'active') {
          $event.currentTarget.className = 'bg1'
          i--
          this.$refs.num.innerHTML = i
          this.$refs.num1.innerHTML = i
        } else {
          $event.currentTarget.className = 'active'
          i++
          this.$refs.num.innerHTML = i
          this.$refs.num1.innerHTML = i
        }
      },
    },
    components: {
      Input
    }

  }

</script>

<style scoped>
  .box-left {
    float: left;
    width: 780px;
    height: 278px;
    position: relative;
  }

  .box-left ul, li {
    float: left;
  }

  .box-left ul li {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    margin-left: 3px;
    background-size: 100%;
    margin-top: 10px;
    cursor: pointer;
  }

  .box-left .qbg {
    margin-top: 9px;
  }

  .box-left .qbg li {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    background: url("../img/qbg.jpg") repeat-x;
    border-radius: 0;
    font-size: 12px;
    cursor: pointer;
    border: 1px solid #ccc;
  }

  .num {
    width: 58px;
    height: 20px;
    line-height: 20px;
    float: left;
    margin-top: 13px;
    margin-left: 15px;
  }

  .cl {
    overflow: hidden;
  }

  .active {
    background: url("../img/ballok.png") no-repeat;
  }

  .num-box {
    width: 403px;
    float: left;
  }

  .small {
    width: 143px;
    float: left;
  }

  .small ul {
    float: left;

  }

  .bg1 {
    background: url("../img/ballno.png");
  }

  .input-List {
    width: 552px;
    height: 48px;
    position: absolute;
    top: 550px;
    left: 20px;
  }

  .input-List .input-box {
    width: 552px;
    height: 48px;
    line-height: 48px;
    float: left;
  }

  .input-List div {
    float: left;
  }

  .el-button + .el-button span {
    text-align: center;
    vertical-align: middle;
    margin-left: 5px;
  }

  .selectIpt {
    margin-top: 7px;
  }

  .input-List .input-right {
    float: right;
    margin-right: 66px;
    margin-top: 1px;
    text-align: center;
  }

  .ant-btn {
    padding: 0;
    font-size: 12px;
  }
  .div{
    width: 780px;
    height: 34px;
    line-height: 34px;
    border:1px dashed #ffdd99;
    margin-left: 20px;
    margin-top: 20px;
  }
  .ul{
    overflow: hidden;
    margin-left: 20px;
    margin-top: 20px;
  }
  .ul li{
    width: 48px;
    height: 26px;
    line-height: 26px;
    background: #f0f0f0;
    color:#000;
    float: left;
    margin-left: 1px;
    text-align: center;
    cursor: pointer;
  }
  .ul li:hover{
    background: #e60;
  }
  .ul li:nth-child(1){
    width: 62px;
  }
  .msgBox{
    width: 206px;
    height: 255px;
    float: left;
    overflow: hidden;
  }
  .box-left .msgBox .msg-news li{
    width: 100px;
    height: 15px;
    line-height: 15px;
    float: left;
    font-size: 12px;
  }
</style>
