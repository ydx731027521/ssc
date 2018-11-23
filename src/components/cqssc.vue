<template>
  <div>
    <div class="box-right-header">
      <div class="yaojiang">
        <ul class="yaojiangList">
          <li>7</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
      <div class="table">
        <table>
          <thead>
          <tr>
            <th style="width: 98px;height: 20px;">期号</th>
            <th style="width: 66px;height: 20px;">开奖号码</th>
            <th style="width: 151px;height: 20px;">开奖时间</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>20181112080</td>
            <td>2,0,1,0,1</td>
            <td>2018-11-12 19:20:00</td>
          </tr>
          <tr>
            <td>20181112080</td>
            <td>2,0,1,0,1</td>
            <td>2018-11-12 19:20:00</td>
          </tr>
          <tr>
            <td>20181112080</td>
            <td>2,0,1,0,1</td>
            <td>2018-11-12 19:20:00</td>
          </tr>
          <tr>
            <td>20181112080</td>
            <td>2,0,1,0,1</td>
            <td>2018-11-12 19:20:00</td>
          </tr>
          <tr>
            <td>20181112080</td>
            <td>2,0,1,0,1</td>
            <td>2018-11-12 19:20:00</td>
          </tr>
          <tr>
            <td>20181112080</td>
            <td>2,0,1,0,1</td>
            <td>2018-11-12 19:20:00</td>
          </tr>
          <tr>
            <td>20181112080</td>
            <td>2,0,1,0,1</td>
            <td>2018-11-12 19:20:00</td>
          </tr>
          <tr>
            <td>20181112080</td>
            <td>2,0,1,0,1</td>
            <td>2018-11-12 19:20:00</td>
          </tr>
          </tbody>
        </table>
        <div class="webview">
          <a href="javascript:">官方网站</a>
          <a href="javascript:">玩法规则</a>
          <a href="javascript:">说明更多开奖结果</a>
        </div>
      </div>
    </div>
    <Play></Play>
    <PlayTitle></PlayTitle>

    <Select class="selected"></Select>
    <Kuaida class="kuaida" style="display: none"></Kuaida>

  </div>
</template>

<script>
  import Title from './scrollNews'
  import Header from './HelloWorld'
  import Nav from './Nav'

  import Play from './play'
  import PlayTitle from './playtitle'
  import Select from './pailie'
  import Input from './input'
  import Touzhu from './show'
  import Kuaida from './kuaida'
    export default {
        name: "cqssc",
      data(){
        return {
          activeIndex: '1',
          activeIndex2: '1'
        };
      },
      methods:{
        handleSelect(key, keyPath) {
        },
      },
      components: {
        Header,
        Nav,
        Title,
        Play,
        PlayTitle,
        Select,
        Input,
        Touzhu,
        Kuaida
      }
    }
</script>

<style scoped>
  .box-right-header{
    width: 809px;
    height: 186px;
    background: url("../img/gc_top_bg.gif")repeat-x;

  }
  .yaojiang{
    float: left;
    position: relative;
    width: 450px;
    height: 170px;
    background: url("../img/image19.png")no-repeat;
    left: 20px;
    top:5px
  }
  .yaojiangList{
    overflow: hidden;
    position: absolute;
    top: 72px;
    left: 39px;
  }
  .yaojiangList li{
    float: left;
    width: 71px;
    height: 56px;
    line-height: 56px;
    color:#fff;
    font-size: 32px ;
    text-align: center;
  }
  .table{
    color:red;
    width: 316px;
    height: 184px;
    float: left;
    font-size: 12px;
    margin-left: 42px;
  }
  .table th{
    text-align: center;
    border: 1px dotted #B4A89A;
  }
  table td{
    text-align: center;
    border: 1px dotted #B4A89A;
  }
  .webview{
    text-align: right;
    margin-right: 10px;
    margin-top: -4px;
  }
  .position{
    margin-left: 20px;
  }
  .el-menu-item{
    padding: 0 10px;
  }

  .el-menu--horizontal>.el-menu-item{
    line-height: 35px;
    height: 35px;
  }
</style>
