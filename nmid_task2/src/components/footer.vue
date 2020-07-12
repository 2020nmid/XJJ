<template>
  <div class="footer">
    <div class="footer_top">
      <div class="gate1">
        <p class="gate">bilibili</p>
        <li v-for="link in links" :key="link.value">{{ link.value }}</li>
      </div>
      <span></span>
      <div class="gate1 gate2">
        <p class="gate">传送门</p>
        <li v-for="link2 in links2" :key="link2.value">{{ link2.value }}</li>
      </div>
      <span></span>
      <div class="logo_">
        <div class="download">
          <p>下载客户端</p>
        </div>
        <div class="weibo">
          <p>新浪微博</p>
        </div>
        <div class="weixin">
          <p>官方微信</p>
        </div>
      </div>
    </div>
    <div class="footer_buttom">
      <div class="left_img">
        <div :src="img.src" v-for="img in imgs" :key="img.src" />
      </div>
      <div class="footer_text">
        <li>{{ warm.w1 }}</li>
        <li>
          <a v-for="w2 in w2s" :key="w2.key">{{ w2.w2 }}</a>
        </li>
        <li class="call">
          <div>图片</div>
          <a>上海互联网举报中心</a>
          <a>|12318 全国文化市场举报网站</a>
          <div>图片</div>
          <a>儿童色情信息举报专区</a>
          <a>沪公网安备 31011002002436号 |</a>
        </li>
        <li class="webWarm">
          <a>网上有害信息举报专区：</a>
          <div>图片</div>
          <a>中国互联网违法和不良信息举报中心</a>
        </li>
        <li>亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。</li>
        <li>公司名称：上海宽娱数码科技有限公司 | 公司地址：上海市杨浦区政立路485号 | 电话：021-25099888</li>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      links: [
        { value: "关于我们" },
        { value: "联系我们" },
        { value: "加入我们" },
        { value: "友情连接" },
        { value: "bilibili认证" },
        { value: "Investor Reations" }
      ],
      links2: [
        { value: "帮助中心" },
        { value: "高级弹幕" },
        { value: "活动专题页" },
        { value: "侵权申诉" },
        { value: "活动中心" },
        { value: "用户反馈论坛" },
        { value: "壁纸站" },
        { value: "名人堂" },
        { value: "专车号服务中心" }
      ],
      imgs: [
        { src: "unknow" },
        { src: "unknow" },
        { src: "unknow" },
        { src: "unknow" }
      ],
      warm: {
        w1:
          "广播电视节目制作经营许可证：（沪）字第1248号 | 网络文化经营许可证：沪网文[2016]2296-134号 | 信息网络传播视听节目许可证：0910417 | 互联网ICP备案："
      },
      w2s: [
        { w2: "沪ICP备13002172号-3" },
        {
          w2:
            " 沪ICP证：沪B2-20100043 | 违法不良信息举报邮箱：help@bilibili.com | 违法不良信息举报电话：4000233233转3 | "
        },
        { w2: "营业执照" }
      ]
    };
  }
};
</script>
<style lang="scss">
.footer {
  width: 100%;
  height: 350px;

  border: 0;

  background-color: #f7f9fb;
  display: flex;
  flex-direction: column;
  align-content: center;
  li {
    list-style: none;
  }
  .footer_top {
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .gate {
      margin-bottom: 22px;
      font-family: 'PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif';
      color: #99a2aa;
      font-size: 14px;
    }
    .gate1 {
      li {
        font-size: 14px;
        margin-bottom: 10px;
      }
    }
    .gate2 {
      font-size: 14px;
      margin-top: 20px;
    }
    .logo_ {
      width: 280px;
    }
    span {
      width: 1px;
      height: 100px;
      margin-right: 20px;
      background-color: #dddddd;
    }
    > div {
      width: 400px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      > p {
        width: 450px;
        text-align: left;
      }
      li {
        width: 133px;
        text-align: left;
      }
    }
    .name {
      p {
        width: 60px;
        text-align: center;
      }
    }
    .download {
      width: 60px;
      height: 70px;
      margin-left: 60px;
      background-image: url(../assets/icons.png);
      background-position: -1026px -196px;
      p {
        width: 80px;
        position: relative;
        left: -10px;
        top: 70px;
        text-align: center;
      }
    }
    .weibo {
      width: 60px;
      height: 70px;
      margin-left: 20px;
      background-image: url(../assets/icons.png);
      background-position: -1026px -68px;
      p {
        width: 70px;
        position: relative;
        top: 70px;
        text-align: center;
      }
    }
    .weixin {
      width: 60px;
      height: 70px;
      margin-left: 20px;
      background-image: url(../assets/icons.png);
      background-position: -1026px -324px;
      p {
        width: 70px;
        position: relative;
        text-align: center;
        top: 70px;
      }
    }
  }
  $height_img: 35px;
  $width_img: 90px;
  .footer_buttom {
    width: 100%;
    height: 200px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .left_img {
      width: 120px;
      div:nth-child(1) {
        height: $height_img;
        width: $width_img;
        background: url(../assets/BILIBILI_LOGO.png) no-repeat;
        background-size: contain;
      }
      div:nth-child(2) {
        height: $height_img;
        width: $width_img;
        background: url(../assets/BILIBILI_LOGO.png) no-repeat;
        background-size: contain;
      }
      div:nth-child(3) {
        height: $height_img;
        width: $width_img;
        background: url(../assets/BILIBILI_LOGO.png) no-repeat;
        background-size: contain;
      }
      div:nth-child(4) {
        height: $height_img;
        width: $width_img;
        background: url(../assets/BILIBILI_LOGO.png) no-repeat;
        background-size: contain;
      }
    }
    .footer_text {
      width: 1085px;
      height: 200px;
      text-align: left;
      font-family: 'PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif';
      color: #99a2aa;
      li,
      a {
        font-size: 14px;
      }
      li {
        line-height: 24px;
      }
      .call {
        display: flex;
        flex-direction: row;
      }
      .webWarm {
        display: flex;
        flex-direction: row;
      }
    }
  }
}
</style>
