<template>
  <div class="orderDetail">
    <div :class="this.orderDetail.status == 'Disapproved' || this.orderDetail.status == 'Canceled' ? 'top topGray' : 'top'">
      <van-nav-bar @click-left="onClickLeft" @click-right="onClickRight">
        <template #left>
          <img src="../../assets/img/Left-white@2x.png" alt="" />
        </template>
        <template #right>
          <img src="../../assets/img/kefu_white@2x.png" alt="" />
        </template>
      </van-nav-bar>
      <h3 class="title fontweight-m fontsize28 white-color padding-20">{{ title }}</h3>
      <div class="confirmContent">
        <p class="flex">
          <b>
            AMOUNT
            <em class="inlineblock">(USDT)</em>
          </b>
          <span class="fontweight-m">{{ orderDetail.amountTransfer }}</span>
        </p>
        <p class="flex">
          <b>
            AT PRICE
            <em class="inlineblock">(Per USDT)</em>
          </b>
          <span class="fontweight-m">₹{{ orderDetail.price }}</span>
        </p>
        <p class="flex">
          <b>
            MARKET PRICE
            <em class="inlineblock">(Per USDT)</em>
          </b>
          <span class="fontweight-m">₹{{ orderDetail.marketPrice }}</span>
        </p>
        <div class="fontweight-m flex">
          <b>TOTAL</b>
          <span>
            ₹
            <i class="fontsize20 fontweight-m">
              {{ orderDetail.totalINR }}
              <!-- {{
              noFee
                ? (perUSDT * parseFloat(volumeUSDT.replace('₹', '')) - perUSDT * parseFloat(volumeUSDT.replace('₹', '')) * fee).toFixed(2)
                : (perUSDT * parseFloat(volumeUSDT.replace('₹', ''))).toFixed(2)
            }} -->
            </i>
          </span>
        </div>
      </div>
    </div>
    <div class="content padding-20">
      <div class="card card1">
        <ul>
          <li>
            <b class="color-4c528f block left">FROM</b>
            <span class="fontweight-m block left text-right">{{ orderDetail.fromAddress }}</span>
          </li>
          <li>
            <b class="color-4c528f block left">TO</b>
            <span class="fontweight-m  block left text-right">{{ orderDetail.toAddress }}</span>
          </li>
          <li>
            <b class="color-4c528f block left">TXID</b>
            <span class="fontweight-m  block left text-right">{{ orderDetail.transactionNumber }}</span>
          </li>
        </ul>
      </div>
      <div class="card card2">
        <p>
          ORDER:
          <span>{{ orderDetail.goodsCode }}</span>
        </p>
        <p>
          CREATE DATE:
          <span>{{ orderDetail.createDate }}</span>
        </p>
        <b title="" v-clipboard:copy="orderDetail.goodsCode" v-clipboard:success="onCopy" v-clipboard:error="onError" style="cursor: copy;">copy</b>
      </div>
      <div class="card card3">
        <p class="color-4c528f van-hairline--bottom">PAYMENT METHOD</p>
        <div class="bankCard">
          <p class="p1 flex">
            <img class="icon" :src="getIcon(paymentVo.payType)" alt="" />
            <span class="fontweight-m fontsize12 color-4c528f">{{ paymentVo.account }}</span>
          </p>
          <p class="p2 fontsize12 flex color-8c9fad">{{ paymentVo.name }}</p>
          <p class="p3 fontweight-m flex">
            <span v-if="paymentVo.payType == 'IMPS'" class="fontweight-m fontsize16">{{ paymentVo.isfcCode }}</span>
            <span v-if="paymentVo.payType == 'UPI'" class="fontweight-m fontsize16">Receipt QR code</span>
            <img v-if="paymentVo.payType == 'UPI'" class="qrCode" :src="paymentVo.qrCode" alt="" />
          </p>
        </div>
      </div>
      <div class="card card4">
        <p class="color-4c528f van-hairline--bottom">TRANSFER VOUCHER</p>
        <img :src="orderDetail.transferVoucher" alt="" />
      </div>
    </div>
    <div v-if="this.orderDetail.status == 'Disapproved' || this.orderDetail.status == 'TransferUSDT'" class="bottomSubmit text-center" @click="toUploadVoucher">
      <!-- <p class="fontsize12">
        COUNTDOWN:
        <van-count-down class="inlineblock fontweight-m color-6d4ffd" :time="time" millisecond format="HH:mm:ss:SS" />
      </p> -->
      <van-button type="primary" block>Transfer USDT</van-button>
    </div>
    <div v-if="this.orderDetail.status == 'PaymentConfirm'" class="bottomSubmit2 text-center flex">
      <van-button type="primary" block @click="cusSer">Didn't Receive</van-button>
      <van-button type="primary" block @click="receivedMoney">Received Money</van-button>
    </div>
  </div>
</template>

<script>
import NavTit from '../NavAndTit.vue';
import { orderDetail, confirmPay } from '@/api/api';
export default {
  name: 'Answer',
  components: {
    NavTit
  },
  data() {
    return {
      title: '',
      id: '',
      time: 7200000,
      orderDetail: {},
      paymentVo: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
    orderDetail({
      goodsId: this.id
    })
      .then(res => {
        if (res.code == 200) {
          this.orderDetail = res.result;
          this.paymentVo = this.orderDetail.paymentVo;
          this.title = this.getStatus(this.orderDetail.status);
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {},
  methods: {
    onCopy() {
      this.$toast('Copied to clipboard');
    },
    onError() {
      this.$toast('Copy failed, please try again');
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      location.href = 'https://t.me/joinchat/I76Batq1XdFxqxdo';
    },
    toUploadVoucher() {
      this.$router.push({
        path: '/uploadvoucher',
        query: {
          id: this.id
        }
      });
    },
    receivedMoney() {
      confirmPay({
        orderId: this.id
      })
        .then(res => {
          if (res.code == 200) {
            this.$toast('Confirm receipt');
            setTimeout(() => {
              this.$router.push({
                path: '/orders'
              });
            }, 2000);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    cusSer() {
      location.href = 'https://t.me/joinchat/I76Batq1XdFxqxdo';
      // this.$toast('客服');
    }
  }
};
</script>

<style lang="scss" scoped>
.orderDetail {
  background-color: #f7f8fc;
  min-height: 100%;
  padding-bottom: 70px;
}
.top {
  background: linear-gradient(180deg, #8970fd 0%, #8970fd 50%, #f7f8fc 100%);
  /deep/ .van-nav-bar {
    position: static;
  }
  &.topGray {
    background: linear-gradient(180deg, #8f92a1 0%, #8f92a1 50%, #f7f8fc 100%);
  }
}
.confirmContent {
  background-color: #ffffff;
  padding: 22px 20px 18px;
  line-height: 1;
  p {
    &:nth-child(2) {
      margin: 24px 0;
    }
    &:nth-child(3) {
      margin-bottom: 22px;
    }
  }
  div {
    padding-top: 15px;
  }
}

.content {
  .card {
    background-color: #ffffff;
    padding: 10px 20px;
    margin-bottom: 10px;
  }
  .card1 li {
    padding: 10px 0;
    overflow: hidden;
    b {
      width: 20%;
    }
    span {
      width: 80%;
      word-wrap: break-word;
      letter-spacing: 0.3px;
    }
  }
  .card2 {
    position: relative;
    p {
      margin: 5px 0;
      color: #4c528f;
    }
    b {
      background-color: #f7f8fc;
      display: block;
      width: 44px;
      height: 18px;
      line-height: 18px;
      position: absolute;
      right: 20px;
      top: 20px;
      font-size: 10px;
      text-align: center;
      border-radius: 4px;
      color: #6d4ffd;
    }
  }
  .card3,
  .card4 {
    padding-top: 0;
    line-height: 50px;
    /deep/ .van-hairline--bottom::after {
      border-bottom: 1px solid #e7ebee;
    }
  }
  .bankCard {
    padding: 10px 0 10px;
    line-height: 1;
    .p1 {
      line-height: 18px;
      margin-bottom: 15px;
    }
    .p2 {
      margin-bottom: 2px;
    }
    .p3 {
      line-height: 30px;
      img {
        width: 30px;
        height: 30px;
        object-fit: cover;
        margin-left: 10px;
      }
    }
    .icon {
      height: 18px;
      width: 18px;
      margin-right: 10px;
    }
  }
  .card4 img {
    width: 60%;
    margin: 20px auto;
  }
}
.bottomSubmit2 {
  padding: 10px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  justify-content: space-between;
  /deep/ .van-button--primary {
    width: 48%;
    &:nth-child(1) {
      background-color: #ffffff;
      color: #6d4ffd;
      border: 1px solid #6d4ffd;
    }
  }
}
</style>
