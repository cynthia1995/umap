<template>
  <div class="Payment paddingtop-50">
    <NavTit :title="title" :noTit="false"></NavTit>
    <div v-if="noAdded" class="added white-color">
      <ul class="methodList">
        <li v-for="(item, index) in methodList" :key="index">
          <p class="p1 fontsize12 flex">
            <img class="icon" :src="item.icon" alt="" />
            <span class="fontweight-m">{{ item.accountName }}</span>
          </p>
          <p class="p3 fontsize12 flex">{{ item.userName }}</p>
          <p class="p2 fontweight-m flex fontsize20">
            <span class="fontweight-m">{{ item.addressCode }}</span>
            <img class="qrCode" src="../../assets/img/trc20.png" alt="" />
          </p>
        </li>
      </ul>
      <div class="padding-20"><van-button icon="plus" type="primary" color="#6d4ffd" plain>Add</van-button></div>
    </div>
    <div v-else class="noadded text-center color-8c9fad">
      <p>{{ addedTxt }}</p>
      <van-button @click="toAddMethod($event)" type="primary" block>Add</van-button>
    </div>
  </div>
</template>

<script>
import NavTit from '../NavAndTit.vue';
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
      methodList: [
        {
          icon: require('@/assets/img/UPI_icon@2x.png'),
          accountName: '3409409049094',
          userName: 'Kun Max Yuan',
          addressCode: 'KSIB34034893883948'
        },
        {
          icon: require('@/assets/img/UPI@2x.png'),
          accountName: '3409409049094',
          userName: 'Kun Max Yuan',
          addressCode: 'Receipt QR code'
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    toAddMethod(event) {
      this.$router.push({
        path: '/addmethod',
        query: {}
      });
    }
  }
};
</script>

<style lang="scss" scoped>
>>> .van-button--primary {
  background-color: #ffffff;
  border: 1px solid #e7ebee !important;
  margin-top: 20px;
  width: 100%;
}
>>> .van-icon-plus::before {
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
  padding: 20px 30px;
  box-sizing: border-box;
  .p2 {
    margin-bottom: 6px;
  }
  .icon {
    height: 18px;
    width: 18px;
    margin: 0 10px 46px 0;
  }
  .qrCode {
    width: 30px;
    height: 30px;
    margin-left: 10px;
  }
}
.noadded {
  padding: 200px 70px 0;
  line-height: 20px;
  p {
    margin-bottom: 20px;
  }
}
</style>
