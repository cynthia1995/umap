<template>
  <div class="sellAdress paddingtop-50">
    <van-nav-bar @click-left="onClickLeft">
      <template #left>
        <img src="../../assets/img/Left-white@2x.png" alt="" />
      </template>
    </van-nav-bar>
    <h3 class="title padding-20 fontweight-m white-color">{{ title }}</h3>
    <p class="desc padding-20">{{ desc }}</p>
    <b class="text1 text-center fontweight-m">{{ transferAmount }}</b>
    <span class="ammount text-center">
      <em class="fontweight-m">7948</em>
      USDT
    </span>
    <section class="main">
      <h4 class="text-center fontweight-m">Address Type</h4>
      <van-tabs v-model="active">
        <van-tab title="ERC20"><img src="../../assets/img/erc20.png" alt="" /></van-tab>
        <van-tab title="TRC20"><img src="../../assets/img/trc20.png" alt="" /></van-tab>
      </van-tabs>
      <div class="copyAddress">
        <h5 class="fontweight-m">ADDRESS</h5>
        <div class="fontweight-m">
          {{ address }}
          <span title="" v-clipboard:copy="address" v-clipboard:success="onCopy" v-clipboard:error="onError" style="cursor: copy;">
            <img src="../../assets/img/Copy@2x.png" alt="" />
          </span>
        </div>
      </div>
      <div class="infos">
        Instructions: Open the app, log in the personal account, enter the home page and click "borrow now" to enter the borrowing page; After filling in the relevant identity
        information and real name authentication, you can see the initial credit line of the system; After confirming the loan information, you can submit it. The system enters the
        approval process. After approval, the loan will be released. Open the app, log in the personal account, enter the home page and click "borrow now" to enter the borrowing
        page;
      </div>
      <van-button type="primary" block>Sell USDT</van-button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SellAdress',
  data() {
    return {
      title: 'Transfer USDT',
      desc: 'You’ll have to transfer your USDT from XXX th the address below',
      transferAmount: 'Amount to transfer',
      address: '0sfioajweoffalsfejfwoiefjalknfnoeieffoijfqpwoijpejw',
      active: 0
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onCopy() {
      this.$toast('已成功复制到剪切板');
    },
    onError() {
      this.$toast('复制失败，请重试！');
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .van-tabs__nav {
  width: 170px;
  margin: 0 auto;
}
/deep/ .van-tab {
  color: #8c9fad;
  background: url(../../assets/img/check_n@2x.png) no-repeat left center;
  background-size: 14px 14px;
}
/deep/ .van-tab--active {
  color: #6d4ffd;
  background: url(../../assets/img/check_s@2x.png) no-repeat left center;
  background-size: 14px 14px;
}
/deep/ .van-tabs__line {
  display: none;
}
/deep/ .van-tab__pane {
  background: url(../../assets/img/Focous@2x.png) no-repeat center;
  background-size: 160px 160px;
  padding: 20px;
}
/deep/ .van-tab__pane img {
  width: 136px;
  height: 136px;
  margin: 0 auto;
}
.sellAdress {
  background-color: #2f3462;
  .title {
    font-size: 28px;
  }
  .desc {
    font-size: 10px;
    color: #bac7cf;
    margin-top: 4px;
  }
  .text1 {
    display: block;
    font-size: 12px;
    color: #bac7cf;
    margin-top: 30px;
  }
  .ammount {
    display: block;
    color: #00d0ff;
    em {
      font-size: 50px;
      display: block;
      position: relative;
      top: 6px;
    }
  }
  .main {
    margin-top: 30px;
    padding-bottom: 20px;
    .copyAddress {
      padding: 14px 14px 16px;
      background-color: #f7f8fc;
      margin-top: 20px;
      position: relative;
      h5 {
        color: #8c9fad;
      }
      div {
        padding-right: 80px;
        word-wrap: break-word;
        line-height: 20px;
        margin-top: 8px;
        img {
          width: 38px;
          height: 38px;
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
    .infos {
      color: #8c9fad;
      font-size: 12px;
      margin: 20px auto;
    }
  }
}
</style>
