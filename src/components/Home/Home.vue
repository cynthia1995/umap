<template>
  <div class="home">
    <van-nav-bar @click-right="onClickRight">
      <template #title>
        <img src="../../assets/img/logo4@2x.png" alt="" />
      </template>
      <template #right>
        <img src="../../assets/img/help@2x.png" alt="" />
      </template>
    </van-nav-bar>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in advList" :key="index"><img :src="item.advImg" @click="linkTo(item.advAddress)" alt="" /></van-swipe-item>
      <!-- <van-swipe-item>< img src="../../assets/img/static/banner_home@2x.png" alt="" /></van-swipe-item> -->
    </van-swipe>
    <section class="main">
      <van-button type="primary" block @click="toSell">Sell USDT</van-button>
      <van-swipe class="marquee" vertical :show-indicators="false" :autoplay="5000">
        <van-swipe-item v-for="(item, index) in marquees" :key="index">{{item}}</van-swipe-item>
      </van-swipe>
      <div class="part part1 bg-dbeaff">
        <div class="line line1">
          <p class="bg-edf5ff fontsize10 text-center fontweight-m">
            UMAP
            <br />
            PRICE
          </p >
          <p class="bg-ffffff">
            <b class="fontsize20 fontweight-m">1</b>
            <span class="relativetop2">USDT</span>
            <b class="fontsize20">&nbsp;=&nbsp;</b>
            <em class="relativetop2">₹</em>
            <b class="fontsize20 fontweight-m">{{ mapuPrice }}</b>
          </p >
        </div>
        <div class="line line2">
          <p class="bg-edf5ff fontsize10 text-center fontweight-m">
            MARKET
            <br />
            PRICE
          </p >
          <p class="bg-ffffff">
            <b class="fontsize20 fontweight-m">1</b>
            <span class="relativetop2">USDT</span>
            <b class="fontsize20">&nbsp;=&nbsp;</b>
            <em class="relativetop2">₹</em>
            <b class="fontsize20 fontweight-m">{{ marketPrice }}</b>
          </p >
        </div>
        <div class="line line3">
          <p class="bg-8ceaff fontweight-m fontsize12 color-2f3462">YOU EARN</p >
          <p class="bg-00d0ff">
            <b class="fontsize24 white-color">≈</b>
            &nbsp;
            <span class="relativetop2">₹</span>
            <b class="fontsize24 fontweight-m">{{ eran }}</b>
            <em class="fontsize10">&nbsp;/Sell 1 USDT</em>
          </p >
        </div>
      </div>
      <div class="part part2 text-center color-6d4ffd bg-f6f7fb fontweight-m">
        <count-to class="fontweight-m" :start-val="0" :end-val="todayLimteVolume" :duration="2000" />
      </div>
    </section>
  </div>
</template>

<script>
import CountTo from 'vue-count-to';
import { getHome } from '@/api/api';
export default {
  name: 'Home',
  components: {
    CountTo
  },
  data() {
    return {
      advList: [],
      mapuPrice: null,
      marketPrice: null,
      eran: null,
      todayLimteVolume: null,
      marquees: [
        '93***293 just earned 356Rs',
        '83***207 successfully sold 1800 USDT',
        '95***395 just earned 420Rs',
        '65***197 successfully sold 2000 USDT',
        '87***796 just earned 1000Rs',
        '91***253 just earned 198Rs'
      ]
    };
  },
  created() {
    getHome()
      .then(res => {
        if (res.success) {
          const homeInfo =  res.result;
          this.advList = homeInfo.advList;
          this.mapuPrice = homeInfo.todayPrice.mapuPrice;
          this.marketPrice = homeInfo.todayPrice.marketPrice;
          this.eran = homeInfo.todayPrice.eran;
          this.todayLimteVolume = homeInfo.todayLimteVolume;
        } else {
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {},
  methods: {
    onClickRight() {
      this.$router.push({
        path: '/helpandsupport'
      });
    },
    toSell() {
      this.$router.push({
        path: '/sell'
      });
    },
    linkTo(url) {
      location.href = url;
    }
  }
};
</script>

<style lang="scss" scoped>
.van-nav-bar__title img {
  height: 20px;
  width: 88px;
  object-fit: cover;
}
.my-swipe {
  width: 100%;
  height: 310px;
}
.my-swipe .van-swipe-item {
  height: 310px;
  img {
    height: 100%;
  }
}
/deep/ .van-swipe__indicators {
  bottom: 35px;
}
/deep/ .van-swipe__indicator {
  height: 4px;
  width: 4px;
  border-radius: 0;
}
/deep/ .van-swipe__indicator--active {
  width: 8px;
}
.van-cell {
  border: 0;
}
.home {
  background: url(../../assets/img/logo3@2x.png) no-repeat center bottom 200px;
}
.main {
  top: -20px;
  background: url(../../assets/img/logo3@2x.png) no-repeat center bottom 50px #ffffff;
  background-size: 77px 20px;
  .marquee{
    height: 40px;
    line-height: 40px;
    margin-top: 20px;
    background-color: #f6f7fb;
    text-align: center;
    border-radius: 4px;
  }
  .part {
    position: relative;
    margin-top: 20px;
    &.part1 {
      padding-top: 40px;
    }
    &.part2 {
      padding-top: 24px;
      font-size: 30px;
      line-height: 60px;
      span {
        letter-spacing: 2px;
      }
    }
    &.part1::before,
    &.part2::before {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      line-height: 24px;
      text-align: center;
      font-size: 12px;
      color: #1d2243;
      font-weight: 600;
    }
    &.part1::before {
      height: 24px;
      width: 144px;
      background: url(../../assets/img/sq_bg.png) no-repeat center;
      background-size: cover;
      content: 'BROADCAST TODAY';
    }
    &.part2::before {
      height: 24px;
      width: 168px;
      background: url(../../assets/img/sq_bg2.png) no-repeat center;
      background-size: cover;
      content: 'LIMITED USDT VOLUME';
    }
    .line {
      height: 36px;
      width: 90%;
      margin: 0 auto 5px;
      &.line1 p:nth-child(2) {
        color: #1d2243;
      }
      &.line2 p:nth-child(2) {
        color: #8c9fad;
      }
      &.line3 {
        height: 44px;
        width: 100%;
        margin: 20px auto 0;
        em {
          font-style: normal;
          position: relative;
          top: 2px;
        }
      }
    }
  }
}
</style>
