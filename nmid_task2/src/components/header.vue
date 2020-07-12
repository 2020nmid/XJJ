<template>
  <div class="header">
    <li class="logo_main">
      <div class="logo" />

      <span class="mainpage">
        <a>主站</a>
        <div class="down_sign"></div>
      </span>
    </li>
    <li v-for="site in sites" :key="site.name">{{ site.name }}</li>
    <li>BML</li>
    <li class="download">
      <div class="call_img"></div>下载APP
    </li>
    <li>
      <searchinput></searchinput>
    </li>
    <li>
      <div class="akari"></div>
    </li>

    <li>登录</li>
    <li>注册</li>

    <button class="Submit">投稿</button>
  </div>
</template>
<script>
import searchinput from "../components/search_input"
export default {
  data () {
    return {
      sites: [
        { name: "番剧" },
        { name: "游戏中心" },
        { name: "直播" },
        { name: "会员购" },
        { name: "漫画" },
        { name: "赛事" },
        { name: "歌会" }
      ],
    };
  },
  components: {
    searchinput
  }
};
</script>
<style lang="scss">
.header {
  height: 56px;
  width: 100%;
  background-color: #ffffff;
  border: 0;
  box-shadow: 0px 0px 2px 1.2px #000000;
  display: flex;
  flex-direction: row;
  font-family: 'PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif';
  align-items: center;
  justify-content: center;
  .logo {
    height: 30px;
    width: 80px;
    background: url(../assets/BILIBILI_LOGO.png) no-repeat;
    background-size: contain;
  }
  li {
    list-style: none;
    margin-right: 12px;
    font-size: 14px;
    font-family: 'PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif';
    color: #212121;
  }
  .akari {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 1px solid #d3d2d4;
    background: url(../assets/akari.jpg) no-repeat;
    background-size: contain;
  }
  .Submit {
    width: 100px;
    height: 40px;
    border-radius: 2px;
    font-size: 14px;
    color: #ffffff;
    background-color: #fc7299;
    border: 0;
  }
  .mainpage {
    width: 62px;
    height: 16px;
    display: flex;
    flex-direction: row;
  }
  .down_sign {
    width: 25px;
    height: 20px;
    background-image: url(../assets/icons.png);
    background-position: -469px -150px;
  }
  .download,
  .logo_main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .download {
    .call_img {
      width: 20px;
      height: 20px;
      background-image: url(../assets/icons.png);
      background-position: -1367px -1173.2px;
    }
  }
  .logo_main {
    a {
      height: 50px;
    }
  }
}
</style>
