<template>
  <div class="Payment paddingtop-50 padding-20">
    <NavTit :title="title" :noTit="false"></NavTit>
    <div v-if="noAdded" class="added white-color">
      <ul class="methodList">
        <li v-for="(item, index) in methodList" :key="index" @click="selectMethod(item)">
          <p class="p1 flex">
            <img class="icon" :src="getIcon(item.paymentType)" alt="" />
            <span v-if="item.paymentType == 'IMPS'" class="fontweight-m fontsize12">{{ item.bankAccount }}</span>
            <span v-else-if="item.paymentType == 'UPI'" class="fontweight-m fontsize12">{{ item.upiAccount }}</span>
          </p>
          <p v-if="item.paymentType == 'IMPS'" class="p2 fontsize12 flex">{{ item.impsName }}</p>
          <p v-else-if="item.paymentType == 'UPI'" class="p2 fontsize12 flex">{{ item.upiName }}</p>
          <p class="p3 fontweight-m flex">
            <span v-if="item.paymentType == 'IMPS'" class="fontweight-m fontsize20">{{ item.ifscCode }}</span>
            <span v-if="item.paymentType == 'UPI'" class="fontweight-m fontsize20">Receipt QR code</span>
            <img v-if="item.paymentType == 'UPI'" class="qrCode" :src="item.upiQrc" alt="" />
          </p>
        </li>
      </ul>
      <div v-if="this.from !== 'UploadVoucher'"><van-button class="addedBtn" icon="plus" type="primary" color="#6d4ffd" plain @click="toAddMethod">Add</van-button></div>
    </div>
    <div v-else class="noadded text-center color-8c9fad">
      <img src="../../assets/img/noPay@2x.png" alt="" />
      <p>{{ addedTxt }}</p>
      <van-button v-if="this.from !== 'UploadVoucher'" type="primary" block @click="toAddMethod">Add</van-button>
    </div>
  </div>
</template>

<script>
import NavTit from '../NavAndTit.vue';
import { getPaymentList, getUserInfo } from '@/api/api';
export default {
  name: 'Payment',
  components: {
    NavTit
  },
  data() {
    return {
      title: 'Payment',
      noAdded: true,
      addedTxt: 'Please make sure that you’re using your own accont.',
      methodList: [],
      id: '',
      from: ''
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.from = this.$route.query.from;
    this.loading = true;
    getPaymentList()
      .then(res => {
        if (res.code == 200) {
          this.methodList = res.result;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {},
  methods: {
    toAddMethod() {
      this.$router.push({
        path: '/addmethod',
        query: {}
      });
    },
    selectMethod(item) {
      if (this.from == 'UploadVoucher') {
        let payment = {};
        if (item.paymentType == 'IMPS') {
          payment.payType = item.paymentType;
          payment.account = item.bankAccount;
          payment.name = item.impsName;
          payment.isfcCode = item.ifscCode;
          payment.id = item.id;
        } else if (item.paymentType == 'UPI') {
          payment.payType = item.paymentType;
          payment.account = item.upiAccount;
          payment.name = item.upiName;
          payment.qrCode = item.upiQrc;
          payment.id = item.id;
        }
        this.setStore('payment_' + this.id, payment);
        // this.$store.commit('coverPayment', {});
        // this.$store.commit('coverPayment', payment);
        // console.log(this.$store.state.payment);
        this.$router.go(-1);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.Payment {
  padding-bottom: 40px;
}
/deep/ .van-button--primary.addedBtn {
  background-color: #ffffff;
  border: 1px solid #e7ebee !important;
  margin-top: 20px;
  width: 100%;
}
/deep/ .van-icon-plus::before {
  font-weight: 600;
  position: relative;
  top: -2px;
  font-size: 18px;
}
.methodList li {
  background: url(../../assets/img/card_method@2x.png) repeat-y center;
  width: 100%;
  height: 150px;
  background-size: 100%;
  margin: 20px auto 0;
  padding: 20px 25px;
  box-sizing: border-box;
  border-radius: 10px;
  .p1 {
    line-height: 18px;
    margin-bottom: 46px;
  }
  .p2 {
    margin-bottom: 6px;
  }
  .p3 {
    line-height: 30px;
  }
  .icon {
    height: 18px;
    width: 18px;
    margin-right: 10px;
  }
  .qrCode {
    width: 30px;
    height: 30px;
    margin-left: 10px;
  }
}
.noadded {
  padding: 20px 70px 0;
  line-height: 20px;
  p {
    margin-bottom: 20px;
  }
  img {
    width: 255px;
    margin: 0 auto 20px;
  }
  /deep/ .van-button--primary {
    height: 40px;
    width: 140px;
    margin: 0 auto;
  }
}
</style>
