<template>
  <div class="sellIndex">
    <img class="title" src="../../assets/img/title.png" alt="" />
    <p class="intro white-color text-center">
      UMAP helps you Sell USDT for Fiat directly with other Buyers.
      <br />
      It’s 24×7,safe and absolutely legal!
    </p>
    <img class="title_sub" src="../../assets/img/title_sub.png" alt="" />
    <ul class="steps">
      <li>
        <h3 class="fontsize16 fontweight-m">Buy USDT on Bitbns</h3>
        <p class="fontweight-r">UMAP helps you convert your USDT to money instantly where UMAP acts as an escrow for safekeeping of transaction.</p>
        <img @click="navigateTo('https://bitbns.com/trade/#/usdt')" src="../../assets/img/btn_buy.png" alt="" />
      </li>
      <li>
        <h3 class="fontsize16 fontweight-m">Buy USDT on Bitbns</h3>
        <p class="fontweight-r">UMAP helps you convert your USDT to money instantly where UMAP acts as an escrow for safekeeping of transaction.</p>
        <img @click="toSell" src="../../assets/img/btn_sell.png" alt="" />
      </li>
      <li>
        <h3 class="fontsize16 fontweight-m">Buy USDT on Bitbns</h3>
        <p class="fontweight-r">UMAP helps you convert your USDT to money instantly where UMAP acts as an escrow for safekeeping of transaction.</p>
        <img @click="toTutorial" src="../../assets/img/btn_tutorial.png" alt="" />
        <img @click="navigateTo('http://cdn.umap.vip/voide/1616566580874646.mp4')" src="../../assets/img/btn_video.png" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SellIndex',
  components: {},
  data() {
    return {};
  },
  created() {
    this.$store.state.loading = false;
  },
  mounted() {},
  methods: {
    navigateTo(url) {
      location.href = url;
    },
    toSell() {
      this.$router.push({
        path: '/sell'
      });
    },
    toTutorial() {
      this.$router.push({
        path: '/tutorial'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.sellIndex {
  background: url(../../assets/img/bg.png) no-repeat center top #ffffff;
  background-size: 100%;
  padding-top: 40px;
  .title {
    width: 323px;
    margin: 0 auto;
  }
  .intro {
    font-size: 14px;
    padding: 40px 40px 65.6px;
    line-height: 24px;
    position: relative;
    &::before {
      position: absolute;
      content: '';
      background: url(../../assets/img/icon1.png) no-repeat center;
      background-size: cover;
      width: 10px;
      height: 10px;
      top: 30px;
      left: 30px;
    }
    &::after {
      position: absolute;
      content: '';
      background: url(../../assets/img/icon1.png) no-repeat center;
      background-size: cover;
      width: 10px;
      height: 10px;
      bottom: 60px;
      right: 30px;
      transform: rotate(180deg);
    }
  }
  .title_sub {
    width: 277px;
    margin: 0 auto;
  }
  .steps {
    padding: 0 24px 50px;
    li {
      margin-top: 23px;
      padding-bottom: 10px;
      &:nth-child(1) {
        h3 {
          background: url(../../assets/img/step1.png) no-repeat left 1px;
          background-size: 55px;
        }
        p {
          background: url(../../assets/img/icon_step1.png) no-repeat left center;
          background-size: 60px;
        }
      }
      &:nth-child(2) {
        h3 {
          background: url(../../assets/img/step2.png) no-repeat left 1px;
          background-size: 55px;
        }
        p {
          background: url(../../assets/img/icon_step2.png) no-repeat left center;
          background-size: 60px;
        }
      }
      &:nth-child(3) {
        h3 {
          background: url(../../assets/img/step3.png) no-repeat left 1px;
          background-size: 55px;
        }
        p {
          background: url(../../assets/img/icon_step3.png) no-repeat left center;
          background-size: 60px;
        }
      }
    }
    img {
      width: 167px;
      margin: 0 auto;
    }
    h3 {
      color: #060d56;
      padding: 10px 0 10px 72px;
    }
    p {
      font-size: 15px;
      margin: 18px 0 22px;
      padding-left: 72px;
      line-height: 20px;
    }
  }
}
</style>
