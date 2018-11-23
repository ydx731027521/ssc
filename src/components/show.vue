<template>
<div class="box">
    <div class="touzhu"> 
        <ul>
            <li>为选择投注号码</li>
        </ul>
    </div>
    <div class="zhushu">
        <p>注数：<span>0</span>注</p>
        <p>金额：<span>0</span>元</p>
        <a-button style="margin-left:150px;">清空</a-button>
        <a-button style="background:#00B27A;color:#fff;border-color:#00B27A;">立即下注</a-button>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .touzhu{
        width: 760px;
        height: 99px;
        line-height: 99px;
        text-align: center;
        border: 1px inset;
        padding: 10px;
    }
    .touzhu li{
        width: 760px;
        height: 99px;
    }
    .box{
        
        position: absolute;
        top: 650px;
        left: 15px;
    }
    .zhushu{
        margin-top: 20px;
    }
    .zhushu p{
        float: left;
        margin-left: 10px;
    }
</style>
