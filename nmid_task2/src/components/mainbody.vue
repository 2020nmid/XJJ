<template>
  <div class="mainbody">
    <div class="main_background">
      <div></div>
    </div>
    <div class="onload">
      <hr />
      <h1>登录</h1>
      <hr />
    </div>
    <div class="showmain">
      <div class="com1">
        <QRcode></QRcode>
      </div>
      <span></span>
      <div class="com2">
        <Oninput></Oninput>
      </div>
    </div>
    <p class="agree">
      登录即代表你同意
      <a>用户协议</a> 和
      <a>隐私政策</a>
    </p>
  </div>
</template>
<script>
import QRcode from "./QR_code";
import Oninput from "./onlaod_input"
export default {
  components: {
    QRcode,
    Oninput
  }
};
</script>
<style lang="scss">
.mainbody {
  height: 605px;
  width: 100%;
  border: 0;
  display: flex;
  flex-direction: column;

  .main_background {
    height: 86px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #00a0d7;

    div {
      width: 980px;
      height: 106px;
      background-image: url(../assets/mainbody_background.png);
      background-size: cover;
    }
  }
  .onload {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    h1 {
      font-weight: 500;
      font-size: 38px;
      margin: 0px 20px 0px 20px;
      font-family: 'PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif';
    }
    hr {
      width: 400px;
      height: 1px;
      border: 0px;
      background-color: #dddddd;
    }
  }
  .showmain {
    height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    span {
      width: 1px;
      height: 300px;
      margin-left: 10px;
      margin-right: 10px;
      background-color: #dddddd;
    }
    .com1 {
      width: 500px;
      height: 350px;
    }
    .com2 {
      width: 500px;
      height: 350px;
    }
  }
  .agree {
    font-size: 12px;
    a {
      cursor: pointer;
      color: #02a7de;
      font-size: 12px;
    }
  }
}
</style>
