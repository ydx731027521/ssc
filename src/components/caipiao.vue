<template>
  <div>
    <Header>

    </Header>
    <Nav>

    </Nav>
    <Title>

    </Title>
    <div class="content">
      <div>
        <ul class="navList">
          <router-link to="cqssc" active-class="active">
            <li @click="k31">
              <i class="icon"></i>
              重庆时时彩
            </li>
          </router-link>
          <router-link to="k3" active-class="active">
            <li @click="k3">
              <i class="icon k3"></i>
              快3
            </li>
          </router-link>

        </ul>
      </div>
      <div ref="bgbox" class="box-right">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
  import Title from './scrollNews'
  import Header from './HelloWorld'
  import Nav from './Nav'
  import Play from './play'
  import PlayTitle from './playtitle'
  import Select from './selectNum'
  import Input from './input'
  import Touzhu from './show'
  import Kuaida from './kuaida'

  export default {
    methods: {
      k3() {
        if (this.$router.options.routes[1]) {
          this.$refs.bgbox.style.background = "#E1E3E5"
          this.$refs.bgbox.style.padding = "0px"
        }
      },
      k31() {
        if (this.$router.options.routes[0]) {
          this.$refs.bgbox.style.background = "#fff"
        }
      }
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
  .bgImg {

  }

  .icon {
    width: 30px;
    height: 30px;
    display: inline-block;
    background: url("../img/icons.png");
    background-size: 100%;
    vertical-align: middle;
  }

  .navList {
    background: #252525;
    width: 170px;
    height: 968px;
    float: left;
  }
  a{
    text-decoration: none;
  }
  .navList li {
    cursor: pointer;
    font-size: 14px;
    padding: 3px 14px;
    width: 170px;
    height: 36px;
    border-bottom: 1px solid #000;
    color:#fff;
  }

  .content {
    overflow: hidden;
    width: 1000px;
    margin: auto;
  }

  .navList li:hover {
    background: #fff;
    color:#000;
  }

  .box-right {
    padding: 10px;
    width: 830px;
    height: 958px;
    float: left;
    background: #fff;
    position: relative;
  }

  .k3 {
    background: url("../img/icons.png");
    background-size: 100%;
    background-position: top 98.5% center;
  }

  .router-link-exact-active{
    background: #fff;
    display: inline-block;
  }
  .router-link-exact-active li{
    color:#555;
  }
</style>
