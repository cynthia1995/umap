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
    <div class="main">
      <van-button type="primary" block>Sell USDT</van-button>
      <div class="part part1">
        <div class="line line1">
          <p>
            UMAP
            <br />
            PRICE
          </p>
          <p>
            <b>1</b>
            USDT
            <b>&nbsp;=&nbsp;</b>
            ₹
            <b>85.10</b>
          </p>
        </div>
        <div class="line line2">
          <p>
            MARKET
            <br />
            PRICE
          </p>
          <p>
            <b>1</b>
            USDT
            <b>&nbsp;=&nbsp;</b>
            ₹
            <b>82.10</b>
          </p>
        </div>
        <div class="line line3">
          <p>YOU Earn</p>
          <p>
            <b>≈</b>
            &nbsp;₹
            <b>3.00</b>
            <em>&nbsp;/Sell 1 USDT</em>
          </p>
        </div>
      </div>
      <div class="part part2"><count-to :start-val="0" :end-val="1150000000" :duration="2000" /></div>
    </div>
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

<style scoped>
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
}

.my-swipe .van-swipe-item img {
  height: 100%;
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

.main {
  background-color: #ffffff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
  position: relative;
  top: -20px;
  padding: 20px 20px 60px;
}

.part {
  position: relative;
  margin-top: 20px;
}

.part1 {
  padding-top: 39px;
  background-color: #dbeaff;
}

.part2 {
  padding-top: 24px;
  background-color: #f6f7fb;
  color: #6d4ffd;
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  line-height: 60px;
}

.part1::before,
.part2::before {
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
}

.part1::before {
  content: 'Broadcast Today';
}

.part2::before {
  content: 'Limited USDT Volume';
}

.line {
  height: 36px;
  width: 90%;
  margin: 0 auto 5px;
  display: flex;
  letter-spacing: 0.5px;
}

.line p {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.line3 {
  height: 44px;
  width: 100%;
  margin: 20px auto 0;
}

.line p:nth-child(1) {
  flex: 1;
  background-color: #edf5ff;
  font-size: 12px;
}

.line p:nth-child(2) {
  flex: 3;
  background-color: #ffffff;
}

.line p:nth-child(1) {
  color: #4c528f;
}

.line1 p:nth-child(2) {
  color: #1d2243;
}

.line2 p:nth-child(2) {
  color: #8c9fad;
}

.line3 p:nth-child(1) {
  background-color: #4ddeff !important;
  color: #2f3462;
  font-weight: 600;
}

.line3 p:nth-child(2) {
  background: #00d0ff;
  color: #ffffff;
}

.line b {
  font-size: 20px;
}

.line3 b {
  font-size: 24px;
  color: #ffffff;
}

.line3 em {
  font-size: 12px;
  font-style: normal;
}
</style>
