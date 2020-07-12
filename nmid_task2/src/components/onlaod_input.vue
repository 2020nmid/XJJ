<template>
  <div class="onInput">
    <div>
      <a>密码登录</a>
      <a>短信登录</a>
    </div>
    <div>
      <input type="text" placeholder="你的手机号或邮箱" />
      <input type="text" placeholder="密码" />
    </div>
    <div>
      <div class="v0">
        <input type="checkbox" />
        <li class="reme">记住我</li>
        <li class="warming">不是自己的电脑上不要勾选此项</li>
      </div>
      <div class="v1">
        <li>无法验证?</li>
        <li>忘记密码?</li>
      </div>
    </div>
    <div>
      <button>登录</button>
      <button>注册</button>
    </div>
    <div>
      <div class="onlaodweibo"></div>
      <a>微博账号登录</a>
      <div class="onlaodQQ"></div>
      <a>QQ账号登陆</a>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
$width: 414px;
.onInput {
  font-size: 14px;
  width: 414px;
  margin-left: 50px;
  > div:nth-child(1) {
    width: $width;
    height: 34px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
    a:nth-child(1) {
      color: #02a7de;
    }
    a {
      margin-right: 20px;
    }
  }
  > div:nth-child(2) {
    width: $width;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
      width: $width;
      height: 50px;
      margin-bottom: 40px;
      box-sizing: border-box;
      width: 100%;
      border: 1px solid #ddd;
      border-radius: 2px;
      color: #aaa;
      font-size: 14px;
      padding: 10px;
      height: 40px;
      vertical-align: middle;
      border-radius: 4px;
      outline-style: none;
    }
  }
  > div:nth-child(3) {
    width: $width;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    input {
      width: 15px;
    }
    li {
      width: 60px;
      list-style: none;
    }
    .reme {
      width: 50px;
      height: 17px;
    }
    .warming {
      color: #bbb;
      font-family: 'PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif';
      width: 180px;
    }
    .v0 {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .v1 {
      height: 17px;
      display: flex;
      flex-direction: row;
      li {
        color: #02a7de;
      }
    }
  }
  > div:nth-child(4) {
    width: $width;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      width: 100px;
      height: 40px;
      outline-style: none;
    }
    button:nth-child(1) {
      border: 1px solid #0381aa;
      color: #fff;
      background-color: #00a7de;
      display: inline-block;
      height: 36px;
      border-radius: 2px;
      width: 184px;
      line-height: 38px;
      font-size: 14px;
      text-align: center;
      cursor: pointer;
    }
    button:nth-child(2) {
      color: #555;
      display: inline-block;
      height: 36px;
      border: 1px solid #ccc;
      background-color: #ffffff;
      border-radius: 2px;
      width: 184px;
      line-height: 38px;
      font-size: 14px;
      text-align: center;
      cursor: pointer;
    }
  }
  > div:nth-child(5) {
    width: $width;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    $a: 15px;
    .onlaodweibo {
      width: $a;
      height: $a;
      background-image: url(../assets/weibo.png);
      background-size: cover;
    }
    .onlaodQQ {
      width: 20px;
      height: $a;
      background-image: url(../assets/QQ.png);
      background-size: cover;
    }
  }
}
</style>