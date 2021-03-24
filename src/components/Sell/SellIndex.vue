<template>
  <div class="sellIndex">
    <img class="title" src="../../assets/img/title.png" alt="" />
    <p class="intro white-color text-center">
      UMAP helps you Sell USDT for Fiat directly with other Buyers.
      <br />
      It’s 24×7,safe and absolutely legal!
    </p>
    <img class="title_sub" src="../../assets/img/title_sub.png" alt="">
    <ul class="steps">
    	<li>
        <h3>Buy USDT on Bitbns</h3>
        <p>UMAP helps you convert your USDT to money instantly where UMAP acts as an escrow for safekeeping of transaction.</p>
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
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.sellIndex {
  background: url(../../assets/img/bg.png) no-repeat center top;
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
  }
  .title_sub {
    width: 277px;
    margin: 0 auto;
  }
}
</style>
