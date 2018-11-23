<template>
  <div>
    <div class="moshi-box">
      <div class="moshi">模式：</div>
      <div class="putong red">普通模式</div>
      <div class="gaoji">高级模式</div>
    </div>
    <div style="overflow: hidden;">
      <div class="title">先选择过滤位置：</div>
      <div>
        <ul class="ball-box">
          <li class="wan" id="wanbg">万</li>
          <li class="qian" id="qianbg">千</li>
          <li class="bai" id="baibg">百</li>
          <li class="shi" id="shibg">十</li>
          <li class="ge" id="gebg">个</li>
        </ul>
        <div class="peilv">您选择了 <span class="span3">1</span> 个数，为 <span class="span1">【定位胆】</span>玩法，赔率：<span
          class="span2">9.75</span></div>
      </div>
    </div>
    <div class="big-Box" style="overflow: hidden;">
      <div class="teding-box">
        <h5 class="teding">特定位置(定位)：</h5>
        <div class="zhanshi1">暂时没有添加该类型的规则</div>
        <div class="box1" style="overflow: hidden;float:left;">
          <div class="oh1 ohh1" id="oh1">
            <div class="fl">
              <select name="" id="paichu">
                <option value="包含">包含</option>
                <option value="排除">排除</option>
              </select>
            </div>
            <div class="fl">
              <ul class="input-box">
                <li><input type="text" placeholder="万"></li>
                <li><input type="text" placeholder="千"></li>
                <li><input type="text" placeholder="百"></li>
                <li><input type="text" placeholder="十"></li>
                <li><input type="text" placeholder="个"></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="fl lulu">
          <button class="delete-btn anticon anticon-delete" id="clbtn1" title="删除此条规则"></button>
          <button class="plus-btn anticon anticon-plus" id="addbtn1" title="添加规则"></button>
        </div>
      </div>
      <div class="oh">
        <h5 class="fl renyi">任意位置(不定位)：</h5>
        <div class="zhanshi2">暂时没有添加该类型的规则</div>
        <div class="box2" style="overflow: hidden;float:left;">
          <div class="oh1" id="oh2">
            <div class="fl">
              <select name="" id="paichu1">
                <option value="包含">包含</option>
                <option value="排除">排除</option>
              </select>
            </div>
            <div class="fl " style="width: 120px;height: 26px;">
              <input class="ipt11" type="text">
            </div>
            <div class="fl" style="margin-left: 9px">
              中的至少
              <input class="ipt2" type="text">
              个
            </div>
          </div>
        </div>
        <div class="fl lulu">
          <button class="delete-btn anticon anticon-delete" id="clbtn2" title="删除此条规则"></button>
          <button class="plus-btn anticon anticon-plus" id="addbtn2" title="添加规则"></button>
        </div>
      </div>
      <div class="oh" style="margin-top: 15px">
        <h5 class="fl hezhi">和值：</h5>
        <div class="zhanshi3">暂时没有添加该类型的规则</div>
        <div class="box3" style="overflow: hidden;float:left;">
          <div class="oh1" id="oh3">
            <div class="fl">
              <select name="" id="paichu2">
                <option value="包含">包含</option>
                <option value="排除">排除</option>
                <option value="大于">大于</option>
                <option value="小于">小于</option>
                <option value="在...之间">在...之间</option>
              </select>
            </div>
            <div class="fl" style="margin-left: 5px">
              <input class="ipt12" type="text" placeholder="最小">
            </div>
            <div class="fl">
              -<input class="ipt22" type="text" placeholder="最大">
            </div>
          </div>
        </div>
        <div class="fl lulu">
          <button class="delete-btn anticon anticon-delete" id="clbtn3" title="删除此条规则"></button>
          <button class="plus-btn anticon anticon-plus" id="addbtn3" title="添加规则"></button>
        </div>
      </div>
      <div class="oh" style="margin-top: 15px">
        <h5 class="fl hezhi">合数(和与10取余)：</h5>
        <div class="zhanshi4">暂时没有添加该类型的规则</div>
        <div class="box4" style="overflow: hidden;float:left;">
          <div class="oh1" id="oh4">
            <div class="fl">
              <select name="" id="paichu3">
                <option value="包含">包含</option>
                <option value="排除">排除</option>
                <option value="大于">大于</option>
                <option value="小于">小于</option>
                <option value="在...之间">在...之间</option>
              </select>
            </div>
            <div class="fl" style="margin-left: 5px">
              <input class="ipt12" type="text" placeholder="最小">
            </div>
            <div class="fl">
              -<input class="ipt22" type="text" placeholder="最大">
            </div>
          </div>
        </div>
        <div class="fl lulu">
          <button class="delete-btn anticon anticon-delete" id="clbtn4" title="删除此条规则"></button>
          <button class="plus-btn anticon anticon-plus" id="addbtn4" title="添加规则"></button>
        </div>
      </div>
      <div class="oh" style="margin-top: 15px">
        <h5 class="fl hezhi">特征：</h5>
        <div class="zhanshi5">暂时没有添加该类型的规则</div>
        <div class="box5" style="overflow: hidden;float:left;">
          <div class="oh1" id="oh5">
            <div class="fl">
              <select name="" id="paichu4">
                <option value="排除">排除</option>
              </select>
            </div>
            <div class="centent-box">
              <label name="aa" title="存在一个单数">
                <input type="checkbox" value="on">
                单数
              </label>
              <label title="存在一个双数">
                <input name="bb" type="checkbox" value="on">
                双数</label>
            </div>
          </div>
        </div>
        <div class="fl lulu">
          <button class="delete-btn anticon anticon-delete" id="clbtn5" title="删除此条规则"></button>
          <button class="plus-btn anticon anticon-plus" id="addbtn5" title="添加规则"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "kuaida"
  }

</script>

<style scoped>
  .moshi-box {
    overflow: hidden;
    width: 778px;
    height: 36px;
    padding: 5px 0 5px 130px;
  }

  .putong, .moshi, .gaoji {
    float: left;
  }

  .moshi {
    width: 68px;
    height: 26px;
    text-align: center;
    line-height: 26px;
  }

  .putong, .gaoji:hover {
    border: 1px solid red;
    color: red;
  }

  .putong, .gaoji {
    width: 68px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    border: 1px solid #ccc;
    margin-left: 5px;
    cursor: pointer;
  }

  .ball-box li {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    float: left;
    margin-left: 3px;
    cursor: pointer;
  }

  .title {
    float: left;
    margin-top: 17px;
    margin-left: 74px;
    color: red;
    font-weight: bold;
  }

  .red {
    border: 1px solid red;
    color: red;
  }

  .input-box {
    overflow: hidden;
  }

  .input-box li {
    float: left;
  }

  .input-box input {
    width: 60px;
    height: 26px;
    border: none;
    border: 1px solid #ccc;
    text-align: center;
    margin-left: 3px;
  }

  .fl {
    float: left;
  }

  .oh {
    overflow: hidden;
    float: left;
  }

  #paichu {
    width: 51px;
    height: 26px;
  }

  .teding {
    float: left;
    margin-left: 78px;
  }

  .teding-box {
    overflow: hidden;
    line-height: 40px;
    margin-top: 10px;
  }

  .delete-btn {
    width: 25px;
    height: 26px;
    border: none;
    background: #fff;
    cursor: pointer;
    color: red;
    text-align: center;
    font-size: 16px;
  }

  .plus-btn {
    width: 25px;
    height: 26px;
    border: none;
    background: #00B27A;
    cursor: pointer;
    padding-left: 5px;
    font-size: 16px;
    text-align: center;
    line-height: 26px;
    color: #fff;
    border-radius: 5px;
  }

  .lulu {
    margin-left: 15px;
  }

  #paichu1 {
    float: left;
    width: 51px;
    height: 26px;
  }

  .ipt11 {
    width: 120px;
    height: 26px;
    border: none;
    border: 1px solid #ccc;
    margin-left: 3px;
  }

  .ipt2 {
    width: 50px;
    height: 26px;
    border: none;
    border: 1px solid #ccc;
    margin-left: 3px;
  }

  .oh1 {
    overflow: hidden;
  }

  .renyi {
    margin-left: 65px;
  }

  #paichu2 {
    float: left;
    width: 74px;
    height: 26px;
  }

  .hezhi {
    width: 125px;
    height: 26px;
    text-align: right;
    margin-left: 61px;
  }

  .ipt12 {
    width: 60px;
    height: 26px;
    text-align: center;
  }

  .ipt22 {
    width: 60px;
    height: 26px;
    text-align: center;
  }

  #paichu3 {
    float: left;
    width: 51px;
    height: 26px;
  }

  .centent-box {
    width: 300px;
    height: 26px;
    float: left;
    margin-left: 5px;
  }

  leble {
    width: 60px;
    height: 26px;
  }

  .peilv {
    float: left;
    width: 357px;
    margin-left: 52px;
    margin-top: 5px;
    display: none;
  }

  .wan {
    background: url("../img/ballno.png");
  }

  .qian {
    background: url("../img/ballno.png");
  }

  .bai {
    background: url("../img/ballno.png");
  }

  .shi {
    background: url("../img/ballno.png");
  }

  .ge {
    background: url("../img/ballno.png");
  }

  .active {
    background: url("../img/ballok.png") no-repeat;
  }

  .zhanshi1, .zhanshi2, .zhanshi3, .zhanshi4, .zhanshi5 {
    display: none;
    float: left;
  }

  .box1, box2, box3, box4, box5 {
    width: 426px;
  }

  .ohh {
    display: none;
  }

  .zhanshi2 {
    display: none;
    float: left;
  }

  input {
    border: none;
    border: 1px solid #ccc;
  }
  .big-Box{
    display: none;
  }

</style>
