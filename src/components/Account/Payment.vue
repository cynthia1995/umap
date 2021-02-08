<template>
  <div class="Payment paddingtop-50 padding-20">
    <NavTit :title="title" :noTit="false"></NavTit>
    <div v-if="noAdded" class="added white-color">
      <ul class="methodList">
        <li v-for="(item, index) in methodList" :key="index" @click="selectMethod(item)">
          <p class="p1 flex">
            <img class="icon" :src="getIcon(item.paymentType)" alt="" />
            <span class="fontweight-m fontsize12">{{ item.account }}</span>
          </p>
          <p class="p2 fontsize12 flex">{{ item.name }}</p>
          <p class="p3 fontweight-m flex">
            <span v-if="item.paymentType == 'IMPS'" class="fontweight-m fontsize20">{{ item.isfcCode }}</span>
            <img v-if="item.paymentType == 'UPI'" class="qrCode" :src="item.qrCode" alt="" />
          </p>
        </li>
      </ul>
      <div><van-button class="addedBtn" icon="plus" type="primary" color="#6d4ffd" plain @click="toAddMethod">Add</van-button></div>
    </div>
    <div v-else class="noadded text-center color-8c9fad">
      <img src="../../assets/img/noPay@2x.png" alt="" />
      <p>{{ addedTxt }}</p>
      <van-button type="primary" block @click="toAddMethod">Add</van-button>
    </div>
    <Loading :loading="loading"></Loading>
  </div>
</template>

<script>
import NavTit from '../NavAndTit.vue';
import { getPaymentList, getUserInfo } from '@/api/api';
import Loading from '../Loading.vue';
export default {
  name: 'Payment',
  components: {
    NavTit,
    Loading
  },
  data() {
    return {
      title: 'Payment',
      noAdded: true,
      addedTxt: 'Please make sure that you’re using your own accont.',
      methodList: []
    };
  },
  created() {
    this.loading = true;
    getPaymentList()
      .then(res => {
        if (res.code == 200) {
          this.loading = false;
          this.methodList = res.result;
        } else {
          this.loading = false;
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
      if (this.$route.query.from == 'UploadVoucher') {
        console.log(item);
        console.log({
          payType: item.paymentType,
          account: item.bankAccount
        });
      }
      // payType account name isfcCode qrCode
      // this.$store.commit('coverAddress', this.addressList[this.active].address);
      // this.$router.go(-1);
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
  background: url(../../assets/img/card_method@2x.png);
  width: 335px;
  height: 150px;
  background-size: cover;
  margin: 20px auto 0;
  padding: 20px 25px;
  box-sizing: border-box;
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
