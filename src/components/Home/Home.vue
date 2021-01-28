<template>
  <div class="home">
    <van-nav-bar @click-right="onClickRight">
      <template #title>
        <img src="../../assets/img/logo@2x.png" alt="" />
      </template>
      <template #right>
        <img src="../../assets/img/help@2x.png" alt="" />
      </template>
    </van-nav-bar>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item><img src="../../assets/img/static/banner_home@2x.png" alt="" /></van-swipe-item>
      <van-swipe-item><img src="../../assets/img/static/banner_home@2x.png" alt="" /></van-swipe-item>
    </van-swipe>
    <section class="main">
      <van-button type="primary" block>Sell USDT</van-button>
      <div class="part part1 bg-dbeaff">
        <div class="line line1">
          <p class="bg-edf5ff">
            UMAP
            <br />
            PRICE
          </p>
          <p class="bg-ffffff">
            <b>1</b>
            USDT
            <b>&nbsp;=&nbsp;</b>
            ₹
            <b>85.10</b>
          </p>
        </div>
        <div class="line line2">
          <p class="bg-edf5ff">
            MARKET
            <br />
            PRICE
          </p>
          <p class="bg-ffffff">
            <b>1</b>
            USDT
            <b>&nbsp;=&nbsp;</b>
            ₹
            <b>82.10</b>
          </p>
        </div>
        <div class="line line3">
          <p class="bg-8ceaff">YOU Earn</p>
          <p class="bg-00d0ff">
            <b>≈</b>
            &nbsp;₹
            <b>3.00</b>
            <em>&nbsp;/Sell 1 USDT</em>
          </p>
        </div>
      </div>
      <div class="part part2 text-center color-6d4ffd bg-f6f7fb fontweight-m"><count-to :start-val="0" :end-val="1150000000" :duration="2000" /></div>
    </section>
  </div>
</template>

<script>
import CountTo from 'vue-count-to';
export default {
  name: 'Home',
  components: {
    CountTo
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    onClickRight() {
      this.$toast('按钮');
    }
  }
};
</script>

<style lang="scss" scoped>
>>> .van-nav-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
}

>>> .van-hairline--bottom::after {
  border: none;
}

.van-nav-bar__title img {
  height: 20px;
  width: 66px;
}

.van-nav-bar__right img {
  width: 24px;
  height: 24px;
}

.my-swipe .van-swipe-item {
  height: 310px;
  img {
    height: 100%;
  }
}

>>> .van-swipe__indicators {
  bottom: 35px;
}

>>> .van-swipe__indicator {
  height: 4px;
  width: 4px;
  border-radius: 0;
}

>>> .van-swipe__indicator--active {
  width: 8px;
}

>>> .van-button--primary span {
  font-weight: 500;
}

.main {
  top: -20px;
  .part {
    position: relative;
    margin-top: 20px;
    &.part1 {
      padding-top: 39px;
    }
    &.part2 {
      padding-top: 24px;
      font-size: 30px;
      line-height: 60px;
    }
    &.part1::before,
    &.part2::before {
      height: 24px;
      width: 144px;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background: url(../../assets/img/sq_bg.png) no-repeat center;
      background-size: cover;
      line-height: 24px;
      text-align: center;
      font-size: 12px;
      color: #1d2243;
      font-weight: 600;
    }
    &.part1::before {
      content: 'Broadcast Today';
    }
    &.part2::before {
      content: 'Limited USDT Volume';
    }
    .line {
      height: 36px;
      width: 90%;
      margin: 0 auto 5px;
      p:nth-child(1) {
        font-size: 12px;
      }
      b {
        font-size: 20px;
        font-weight: bold;
      }
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
        &.line3 p:nth-child(1) {
          font-weight: 600;
        }
        b {
          font-size: 24px;
          color: #ffffff;
        }
        em {
          font-size: 12px;
          font-style: normal;
        }
      }
    }
  }
}
</style>
