<template>
  <div class="sellAdress">
    <van-nav-bar @click-left="onClickLeft">
      <template #left>
        <img src="../../assets/img/Left-black@2x.png" alt="" />
      </template>
    </van-nav-bar>
    <h3 class="padding-20 fontweight-m white-color">{{ title }}</h3>
    <p class="info padding-20">{{ info }}</p>
    <b class="text-center fontweight-m">{{ transferAmount }}</b>
    <span class="text-center">
      <em class="fontweight-m">7948</em>
      USDT
    </span>
    <section class="main">
      <h4 class="text-center fontweight-m">Address Type</h4>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SellAdress',
  data() {
    return {
      title: 'Transfer USDT',
      info: 'You’ll have to transfer your USDT from XXX th the address below',
      transferAmount: 'Amount to transfer'
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
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
.van-nav-bar__left img {
  height: 24px;
  width: 24px;
}
.sellAdress {
  min-height: 1000px;
  background-color: #2f3462;
  padding-top: 50px;
  h3 {
    font-size: 28px;
    letter-spacing: 1px;
  }
  p {
    font-size: 10px;
    color: #bac7cf;
    margin-top: 2px;
  }
  b {
    display: block;
    font-size: 12px;
    color: #bac7cf;
    margin-top: 30px;
  }
  span {
    display: block;
    color: #00d0ff;
    em {
      font-size: 50px;
      display: block;
      position: relative;
      top: 8px;
    }
  }
  .main {
    margin-top: 30px;
  }
}
</style>
