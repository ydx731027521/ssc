<template>
  <div class="daxiao-box">
    <div class="msg-title">
      <dl>
        <dt>玩法提示：</dt>
        <dd>
          <span>以开出的三个号码相加的和比大小，3~10 为小，11~18 为大，猜中 即中奖 <span class="jiangjin">{{price*1.95}}</span> 元</span>
        </dd>
      </dl>
    </div>
    <div class="daxiao">
      <div>
        <div class="daxiao-ball">
          <div class="select-size">选择号码</div>
          <ul class="ball">
            <li ref="bg1" class="bg1" v-for="(item,index) in daxiao" @click="big_(index,$event)">{{item}}</li>
          </ul>
        </div>
        <div class="input-box">
          注数：<strong>{{num}}</strong>注
          ，每注
          <a-input :value="price" v-model="price"/>
          <a-select defaultValue="元">
            <a-select-option value="yuan">{{yuan}}</a-select-option>
            <a-select-option value="jiao">{{jiao}}</a-select-option>
          </a-select>
          ,合计 <strong>{{num*price}}</strong>元。
          <button style="width: 77px;height: 23px;background: #00B27A;border: 1px solid #00B27A"
                  type="button" @click="addNum($event)">↓添加号码↓
          </button>
          <button
            style="width: 64px;height: 23px;background: #e60;border: 1px solid #e60" type="button">直接下注
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "bigsmall",
    data() {
      return {
        daxiao: [
          "大", "小"
        ],
        num: 0,
        price: 1,
        ball: "",
        yuan: "元",
        jiao: "角"
      }
    },
    methods: {
      big_(index, $event) {

        this.num = 1
        if (index == 0) {
          if ($event.currentTarget.className == 'bg1') {
            $event.currentTarget.className = 'active'
            this.ball = "大"
            $event.currentTarget.nextSibling.className = 'bg1'
          } else {
            $event.currentTarget.className = 'bg1'
            this.num = 0
          }
        } else if (index == 1) {
          if ($event.currentTarget.className == 'bg1') {
            $event.currentTarget.className = 'active'
            $event.currentTarget.previousSibling.className = 'bg1'
            this.ball = "小"
          } else {
            $event.currentTarget.className = 'bg1'
            this.num = 0
          }
        }
      },
      addNum($event) {
        if (this.ball != "") {
          this.$emit("abc", {ball: this.ball, num: this.num, price: this.price})
          let li = $event.currentTarget.parentNode.parentNode.getElementsByTagName("li")
          for (let i = 0; i < li.length; i++) {
            li[i].className = "bg1"
          }
          this.ball = ""
        } else {
          this.$message.error('至少选择一个号码');
        }
      }
    }
  }
</script>

<style scoped>
  .daixao-box {
    width: 100%;
  }

  .daxiao-box dt, dd {
    display: inline-block;
  }

  .daxiao dl dt {
    position: absolute;
    left: 0;
    top: 0px;
    margin: 0;
    line-height: 22px;
    height: 22px;
    font-weight: bold;
    width: 70px !important;
  }

  .msg-title {
    background: #fffef0;
    border: 1px dashed #ffdd99;
    margin-bottom: 10px;
    padding: 0 5px;
    line-height: 43px;
    height: 43px;
  }

  .ball {
    display: inline-block;
  }

  .ball li {
    display: inline-block;
    width: 30px;
    height: 30px;

    text-align: center;
    line-height: 30px;
    border-radius: 50%;
    background-size: 100%;
    cursor: pointer;
    margin-left: 5px;
  }

  .select-size {
    display: inline-block;
  }

  .ant-input {
    width: 50px;
    height: 28px;
    text-align: center;
  }

  .ant-select .ant-select-enabled {
    width: 50px;
    height: 24px;
  }

  button {
    border: none;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
  }

  button {
    cursor: pointer;
  }

  .bg1 {
    background: url("../img/ballno.png") no-repeat;
  }

  .active {
    background: url("../img/ballok.png") no-repeat;
  }

  .jiangjin {
    color: #e60;
    font-size: 18px;
    font-weight: normal;
    margin: 0 2px;
  }
</style>
