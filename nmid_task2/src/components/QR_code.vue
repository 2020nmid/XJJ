<template>
  <div class="QR_code">
    <transition name="fade">
      <div v-bind:class="isActive ? QR : QR2" @mouseover="show_2" @mouseout="show_1"></div>
    </transition>
    <div class="onload">
      <div class="center">
        <h4>扫描二维码登录</h4>
        <li>
          请使用
          <a>哔哩哔哩客户端</a>
        </li>
        <li>扫码登录</li>
        <li>或扫码下载APP</li>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show1: true,
      show2: false,
      flag: false,
      isActive: true,
      QR: "QR",
      QR2: "QR2"
    }
  },
  methods: {
    show_1: function () {
      if (this.flag != true) return
      console.log("out");
      this.isActive = !this.isActive;
      this.flag = !this.flag;

    },
    show_2: function () {
      if (this.flag != false) return
      console.log("enter");
      this.isActive = !this.isActive;
      this.flag = !this.flag;
    },

  }
}
</script>
<style lang="scss">
.QR_code {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .QR {
    width: 140px;
    height: 180px;
    background-image: url(../assets/qrcode.png);
    background-size: cover;
  }

  .QR2 {
    width: 440px;
    height: 180px;

    background-image: url(../assets/scanf_qr.png);
    background-size: cover;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
    opacity: 0;
  }
  .onload {
    height: 150px;
    width: 450px;
    position: relative;
    top: -20px;
    background-image: url(../assets/2233.png);
    background-size: contain;
    li {
      list-style: none;
      font-size: 14px;
      a {
        color: #00a1d6;
      }
    }
    .center {
      h4 {
        margin-bottom: 10px;
      }
    }
  }
}
</style>